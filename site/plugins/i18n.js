/**
 * Vue的i18n插件安装
 * */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default (context) => {
  let {app, store} = context
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'zh-CN',
    messages: {
      'en-US': require('~/locales/en-US.json'),
      'zh-CN': require('~/locales/zh-CN.json')
    }
  })

  /**
   * @function i18n.path / $i18n.path
   * 函数会根据当前的store中的locate和path中的locate信息返回正确的路径path
   *
   * @param {String} path - 路径字符串
   * @return {String}
   * */
  app.i18n.path = (path) => {
    let formatPath = path.charAt(0) === '/' ? path : `/${path}`
    let urlLang = getLang(formatPath, store.state.locales)
    if (urlLang) return formatPath
    if (app.i18n.locale === app.i18n.fallbackLocale) return formatPath
    return `/${app.i18n.locale}${formatPath}`
  }
}

/**
 * @function getLang
 *
 * @param {String} path - 路径字符串
 * @param {Array} locales - 当前支持的多语言数组
 * @return {String} 返回path中存在的lang信息, 如果没匹配则返回空
 * */
function getLang (path, locales) {
  for (let i = 0, len = locales.length; len > i; i++) {
    let _reg = new RegExp(`(^\/?)${locales[i]}`)
    if (_reg.test(path)) return locales[i]
  }
  return ''
}
