<template>
    <div class="vimo-demo" :class="[selectMode]">
        <div class="screen-box">
            <div class="screen" :style="{opacity:isIframeLoaded?1:0}">
                <div class="screen__url">
                    <div>{{origin !== 'null' ? origin: ''}}</div>
                </div>
                <div class="screen__title">
                    <div>{{iframeDocTitle}}</div>
                </div>
                <div class="screen__reload" @click="demoReload"></div>
                <div class="screen__back" @click="demoBack"></div>
                <div class="screen__iframe">
                    <iframe frameborder="no"
                            ref="iframe"
                            sandbox="allow-scripts allow-same-origin"
                            name="vimo-iframe"
                            :src="selectUrl"></iframe>
                </div>
            </div>
            <div class="qrcode-box">
                <QrcodeVue :value="selectUrl" size="200"></QrcodeVue>
                <a target="_blank" :href="selectUrl">扫码预览</a>

            </div>
        </div>
        <nav class="nav" v-if="showModeSwitcher">
            <span @click="switchMode('ios')" :class="{'selected':selectMode==='ios'}">IOS</span>
            <span @click="switchMode('md')" :class="{'selected':selectMode==='md'}">MD</span>
            <span @click="switchMode('wechat')" :class="{'selected':selectMode==='wechat'}">WeChat</span>
            <span @click="switchMode('qrcode')" :class="{'selected':selectMode==='qrcode'}">QRCode</span>
        </nav>
        <nav class="nav" v-if="showLangSwitcher">
            <span @click="switchLang('zh-CN')" :class="{'selected':selectLang==='zh-CN'}">中文</span>
            <span @click="switchLang('en-US')" :class="{'selected':selectLang==='en-US'}">English</span>
        </nav>
    </div>
</template>
<script type="text/javascript">
  /**
   *
   * ## 事件
   *
   * - onSwitchLang: (lang) => {}
   * - onSwitchMode: (mode) => {}
   * - onBack: () => {}
   * - onReload: () => {}
   *
   * ## Demo需要准备的部分
   *
   * ### 变量
   * - window.vimoI18n: 用于操作多语言
   *
   * ### 事件
   * - vimoI18nChange
   *
   *  document.addEventListener('vimoI18nChange', (val) => {
   *     console.log('Current Lang:', val.detail)
   *  })
   *
   * */
  import urlParse from 'url-parse'
  import QrcodeVue from 'qrcode.vue'

  const InitMode = 'ios'
  const InitLang = 'zh-CN'

  export default {
    name: 'VimoDemo',
    components: {QrcodeVue},
    data () {
      return {
        selectLang: InitLang,
        selectMode: InitMode,
        isIframeLoaded: false,
        iframeDocTitle: '',
        selectUrl: ''
      }
    },
    props: {
      // 是否显示Lang切换按钮
      showLangSwitcher: {
        type: Boolean,
        default () {
          return false
        }
      },
      // 是否显示Mode切换按钮
      showModeSwitcher: {
        type: Boolean,
        default () {
          return true
        }
      },
      // demo访问源
      sourceUrl: {
        type: String,
        require: true
      },
      // demo访问路径
      // #/alert
      path: String,
      // demo语言切换
      lang: {
        type: String,
        default: InitLang,
        validator (val) {
          return ~['en-US', 'zh-CN'].indexOf(val)
        }
      }
    },
    watch: {
      path () {
        this.switchMode(this.selectMode)
      },
      lang (val) {
        this.switchLang(val)
      }
    },
    computed: {
      origin () {
        if (!this.sourceUrl) return ''
        return urlParse(this.sourceUrl).origin
      },
      isSameOrigin () {
        return this.origin === window.location.origin
      },
      iframeElement () {
        return this.$refs.iframe
      },
      iframeContentWindow () {
        if (this.isSameOrigin) return this.iframeElement.contentWindow
        return null
      }
    },
    methods: {
      generateSearchParams (mode) {
        let _res = {
          vmMode: InitMode
        }
        switch (mode) {
          case 'ios' :
            _res.vmMode = 'ios'
            _res['vmPageTransition'] = 'fade-right-transition'
            _res['vmRipple'] = false
            break
          case 'md' :
            _res.vmMode = 'md'
            _res['vmPageTransition'] = 'zoom-transition'
            _res['vmRipple'] = true
            break
          case 'wechat' :
            _res.vmMode = 'ios'
            _res['vmPageTransition'] = 'zoom-transition'
            _res['vmRipple'] = false
            _res['vmHideNavBar'] = true
            break
          default:
            _res = {}
        }

        let _resString = ''
        let _tmp = []
        for (let _keyName in _res) {
          _tmp.push(`${_keyName}=${_res[_keyName]}`)
        }
        if (_tmp.length > 0) {
          _resString = '?' + _tmp.join('&') + this.path
        }
        return _resString
      },
      switchMode (mode) {
        this.isIframeLoaded = false
        this.selectUrl = this.sourceUrl + this.generateSearchParams(mode)
        this.selectMode = mode
        this.demoReload()
        this.$emit('onSwitchMode', mode)
      },

      $_switchLang (lang) {
        this.selectLang = lang
        this.$emit('onSwitchLang', lang)
      },
      switchLang (lang) {
        // 组件状态
        this.$_switchLang(lang)
        // demo状态
        this.iframeContentWindow.vimoI18n.locale = lang
      },

      // btn
      demoBack () {
        this.iframeContentWindow.history.back()
        this.$emit('onBack')
      },
      demoReload () {
        this.iframeContentWindow.location.reload()
        this.$emit('onReload')
      }
    },
    mounted () {
      if (!this.isSameOrigin) {
        throw new Error('Demo和文档不再同域下, Demo无法操作, 请注意!')
      }

      this.iframeElement.addEventListener('load', () => {
        // iframe加载后
        // 1. 同步内外lang, 已外部为准
        // 2. isIframeLoaded标记
        // 3. 绑定lang切换事件
        this.switchLang(this.selectLang)
        this.isIframeLoaded = true
        this.iframeContentWindow.addEventListener('vimoI18nChange', (val) => {
          this.$_switchLang(val.detail)
        })
        this.$emit('onLoad')

        setTimeout(() => {
          if (!this.iframeContentWindow.document) return
          this.iframeDocTitle = this.iframeContentWindow.document.title
        }, 100)
      })

      // init
      this.switchMode(this.selectMode)
    }
  }
</script>
<style scoped lang="scss">

    $theme-color: #4fc08d;
    .vimo-demo {
        overflow: hidden;
        width: 416px;
        margin: auto;
        box-sizing: border-box;
    }

    .nav {
        margin: 10px 0;
        span {
            display: inline-block;
            line-height: 30px;
            text-align: center;
            border-radius: 15px;
            border: 1px solid $theme-color;
            margin: 0 6px;
            padding: 0 16px;
            font-size: 14px;
            color: $theme-color;
            cursor: pointer;
            user-select: none;
        }
        .selected {
            background: $theme-color;
            color: #fff;
        }
    }

    .screen-box,
    .qrcode-box {
        border: 1px solid #b5b5b5;
        position: relative;
        width: 414px;
        height: 736px;
        box-sizing: content-box;
    }

    .screen {
        width: 100%;
        height: 100%;

        .screen__title,
        .screen__url {
            position: absolute;
            left: 0;
            right: 0;
            user-select: none;
            pointer-events: none;
            div {
                white-space: nowrap;
                overflow: hidden;
            }
        }
        .screen__title {
            display: none;
        }
        .screen__back,
        .screen__reload {
            height: 35px;
            width: 35px;
            position: absolute;
            box-sizing: content-box;
        }
        .screen__iframe {
            position: absolute;
            left: 0;
            right: 0;
            iframe {
                height: 100%;
                width: 100%;
            }
        }
    }

    .qrcode-box {
        display: none;
    }

    .ios {
        .screen {
            background: url("../assets/ios.png") no-repeat center center/cover;
        }
        .screen__reload {
            top: 24px;
            right: 10px;
        }
        .screen__back {
            bottom: 0px;
            left: 4px;
            padding: 4px 23px 4px 4px;
        }
        .screen__url {
            line-height: 22px;
            top: 33px;
            font-size: 16px;
            color: #131313;
            text-align: center;
            div {
                position: relative;
                display: inline-block;
                width: 320px;
                overflow: hidden;
            }
            div:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1;
                background: linear-gradient(to right, transparent, transparent, transparent, #dcdde0);
            }
        }
        .screen__iframe {
            top: 71px;
            bottom: 46px;
        }
    }

    .md {
        .screen {
            background: url("../assets/md.png") no-repeat center center/cover;
        }
        .screen__url {
            line-height: 22px;
            top: 37px;
            font-size: 16px;
            color: #2f2f2f;
            text-align: left;
            padding-left: 65px;
            div {
                position: relative;
                display: inline-block;
                width: 252px;
            }
            div:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1;
                background: linear-gradient(to right, transparent, transparent, transparent, #fff);
            }
        }
        .screen__back {
            top: 26px;
            left: 4px;
            padding: 4px;
        }
        .screen__iframe {
            top: 77px;
            bottom: 0;
        }
        .screen__reload {
            display: none;
        }
    }

    .wechat {
        .screen {
            background: url("../assets/wechat.png") no-repeat center center/cover;
        }
        .screen__url {
            display: none;
        }
        .screen__title {
            display: block;
            line-height: 22px;
            top: 31px;
            font-size: 18px;
            color: #fff;
            text-align: center;
            div {
                position: relative;
                display: inline-block;
                width: 254px;
            }
            div:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1;
                background: linear-gradient(to right, transparent, transparent, transparent, #1a191f);
            }
        }
        .screen__back {
            top: 26px;
            left: 0px;
            padding: 0 38px 0 0;
        }
        .screen__iframe {
            top: 64px;
            bottom: 0;
        }
        .screen__reload {
            display: none;
        }
    }

    .qrcode {
        .qrcode-box {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            a, a:active {
                color: $theme-color;
                text-decoration: none;
                border-bottom: 1px solid #ddd;
                font-size: 14px;
            }
        }
        .screen {
            display: none;
        }
    }
</style>
