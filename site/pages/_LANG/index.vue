<template>
    <div class="index-content">
        <div class="container">
            <div class="container__img">
                <img src="../../assets/vimo.png">
            </div>
            <h1 class="content__title">Vimo</h1>
            <p>v 2.0.0</p>
            <p>A Vue2.x UI Project For Mobile & HyBrid</p>
            <!--<strong>LANG: {{this.$route.params.LANG}}</strong>-->
            <div class="content__lang">
                <span @click="switchLang('zh-CN')" :class="{active: this.$store.state.locale === 'zh-CN'}">中文</span>
                <span @click="switchLang('en-US')" :class="{active: this.$store.state.locale === 'en-US'}">English</span>
            </div>
            <div class="content__btns">
                <nuxt-link class="btn" to="" exact>
                    Github
                </nuxt-link>
                <nuxt-link class="btn" to="about" exact>
                    Guide
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    * {
        /*outline: 1px solid #ddd;*/
    }

    $theme-color: #4fc08d;

    .index-content {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        text-align: center;
        padding-bottom: 150px;
    }

    .container__img {
        height: 150px;
        width: 150px;
        overflow: hidden;
        display: inline-block;
        img {
            height: 100%;
        }
    }

    .content__title {

    }

    .content__lang {
        padding: 30px 0 0 0;
        span {
            font-size: 14px;
            padding: 0 10px;
            line-height: 30px;
            display: inline-block;
            cursor: pointer;
            width: 70px;
            box-sizing: border-box;
            transition: all ease 300ms;
        }
        span.active {
            color: $theme-color;
        }
        span:hover {
            color: $theme-color;
        }
    }

    .content__btns {
        padding: 60px 0 0 0;
        .btn {
            padding: 0 10px;
            line-height: 30px;
            display: inline-block;
            margin: 0 10px;
            border-radius: 30px;
            border: 1px solid $theme-color;
            cursor: pointer;
            width: 80px;
            box-sizing: border-box;
            transition: all ease 300ms;
        }
        .btn:hover {
            background: $theme-color;
            color: #fff;
        }
    }
</style>
<script type="application/javascript">
  export default {
    name: 'Index',
    head () {
      return {title: this.$t('home.title')}
    },
    methods: {
      switchLang (lang) {
        this.$i18n.locale = lang
        this.$store.commit('SET_LANG', lang)
      }
    },
    mounted () {
      console.log(this.$i18n)
    }
  }
</script>
