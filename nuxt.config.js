module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt-demo',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js'],

  generate: {
    routes: ['/', '/about', '/fr', '/fr/about']
  },

  /*
   ** Customize the progress bar color
   */
  loading: {color: '#3B8070'},

  srcDir: 'site/',
  /*
   ** Build configuration
   * 对webpack/babel等配置修改拓展
   */
  build: {
    // Nuxt.js 使用 webpack-bundle-analyzer 分析并可视化构建后的打包文件，你可以基于分析结果来决定如何优化它。
    analyze: true,
    /*
     ** Run ESLint on save
     */
    extend (config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
