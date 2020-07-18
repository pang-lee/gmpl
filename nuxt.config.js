const colors = require('vuetify/es5/util/colors').default
require('dotenv').config()

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    "typeface-roboto",
    "~/assets/style/main.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/validation.js',
    '~/plugins/scrollbar.js',
    { src: '~/plugins/babylon.js', mode: 'client' },
    { src: '~/plugins/disqus.js', mode: 'client'},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxtjs/apollo'
  ],
  apollo:{
    clientConfigs:{
      default:{
        httpEndpoint: 'https://rickandmortyapi.com/graphql/'
      }
    }
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.AXIOS_URL
  },
  auth: {
    strategies: {
      // local: {
      //   endpoints: {
      //     login: { url: '/login', method: 'post', propertyName: 'token' },
      //     logout: { url: '/api/auth/logout', method: 'post' },
      //     user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
      //   },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true  
      // }
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    defaultAssets:false,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
