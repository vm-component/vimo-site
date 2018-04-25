<template>
    <div class="index-content">
        <div class="container">
            <div class="container__img">
                <img src="../../assets/vimo.png">
            </div>
            <h1 class="content__title">Vimo</h1>
            <p>v 2.0.0</p>
            <p>{{$t('index.desc')}}</p>
            <!--<strong>LANG: {{this.$route.params.LANG}}</strong>-->
            <div class="content__lang">
                <nuxt-link :to="$i18n.path('/zh-CN')" :class="{active: this.$store.state.locale === 'zh-CN'}">中文</nuxt-link>
                <nuxt-link :to="$i18n.path('/en-US')" :class="{active: this.$store.state.locale === 'en-US'}">English</nuxt-link>
            </div>
            <div class="content__btns">
                <nuxt-link :to="$i18n.path('about')" exact>
                    {{$t('index.github')}}
                </nuxt-link>
                <nuxt-link :to="$i18n.path('/about')" exact>
                    {{$t('index.guide')}}
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
        padding: 20px 0 0 0;
        a, a:active {
            font-size: 14px;
            padding: 0 10px;
            line-height: 30px;
            display: inline-block;
            cursor: pointer;
            width: 70px;
            box-sizing: border-box;
            transition: all ease 300ms;
            /*color: #000;*/
        }

        a.active {
            color: $theme-color;
        }

        a:hover {
            color: $theme-color;
        }
    }

    .content__btns {
        padding: 30px 0 0 0;
        a, a:active {
            padding: 2px 20px;
            line-height: 30px;
            color: $theme-color;
            display: inline-block;
            margin: 0 10px;
            border-radius: 30px;
            border: 1px solid $theme-color;
            cursor: pointer;
            box-sizing: border-box;
            transition: all ease 300ms;
            text-decoration: none;
        }
        a:hover {
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
