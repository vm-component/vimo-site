<template>
    <div class="Content">
        <!--<div class="container">-->
        <!--<h1 class="Content__Title">{{ $t('home.title') }}</h1>-->
        <!--<p>{{ $t('home.introduction') }}</p>-->
        <!--</div>-->

        <div class="switch">
            <p>Path:</p>
            {{path}}
            <br>
            <span @click="path=''">null</span>&emsp;
            <span @click="path='#/alert'">#/alert</span>&emsp;
            <span @click="path='#/app'">#/app</span>&emsp;
            <span @click="path='#/button'">#/button</span>&emsp;
            <span @click="path='#/badge'">#/badge</span>&emsp;
            <span @click="path='#/page'">#/page</span>&emsp;
            <hr>
            <p>Lang:</p>
            {{lang}}
            <br>
            <span @click="lang='en-US'">'en-US'</span>&emsp;
            <span @click="lang='zh-CN'">'zh-CN'</span>&emsp;
            <hr>
        </div>

        <VimoDemo :show-lang-switcher="true" :show-mode-switcher="true" source-url="http://localhost:3000/demo/index.html" :path="path" :lang="lang"></VimoDemo>
    </div>
</template>
<style lang="scss">
    .Content {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .switch {
        padding: 0 50px;
        span {
            margin: 0 10px;
            border: 1px solid #ddd;
            padding: 5px;
            display: inline-block;
        }
    }
</style>
<script type="application/javascript">
  // https://vm-component.github.io/vimo-demo/?vmMode=md#/

  import VimoDemo from '../components/vimo-demo.vue'

  export default {
    name: 'Index',
    components: {VimoDemo},
    data () {
      return {
        path: '',
        lang: 'en-US'
      }
    },
    head () {
      return {title: this.$t('home.title')}
    }
  }
</script>
