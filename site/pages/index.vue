<template>
    <div class="Content">
        <div class="container">
            <h1 class="Content__Title">{{ $t('home.title') }}</h1>
            <p>{{ $t('home.introduction') }}</p>
        </div>
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
  export default {
    name: 'Index',
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
