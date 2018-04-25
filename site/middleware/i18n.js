/**
 * 跳转之前执行的钩子函数
 *
 * 项目i18n思路:
 *
 * - 所有locale状态从URL同步到应用中(store.state.locale 和 i18n.locale)
 * - 如果lang是默认路由, 则进行url精简
 * - 组件及说明的数据(多语言)从搜集的data.js中通过函数获取
 * - 界面的多语言由自己的i18n获取
 *
 * 切换:
 *
 * - 页面切换: 需要手动切换, 则使用i18n.path(xx)进行
 * - 多语言切换: layout中的switchLang进行
 * */
export default function (context) {
  const {isHMR, app, store, route, params, error, redirect} = context
  const defaultLocale = app.i18n.fallbackLocale

  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
  // Get locale from params
  const locale = params['lang'] || defaultLocale
  if (store.state.locales.indexOf(locale) === -1) {
    return error({message: 'This page could not be found.', statusCode: 404})
  }
  // Set locale
  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale

  if (locale === defaultLocale) {
    // 如果是默认语言则去除语言信息
    if (route.fullPath.indexOf('/' + defaultLocale) === 0) {
      const toReplace = '^/' + defaultLocale
      const re = new RegExp(toReplace)
      return redirect(
        route.fullPath.replace(re, '/')
      )
    }
  }
}
