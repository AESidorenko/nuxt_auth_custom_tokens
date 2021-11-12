import colors from 'vuetify/es5/util/colors'

export default {

  publicRuntimeConfig: {
    gpnmUserKey: process.env.GPNM_USER_KEY,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - front',
    title: 'front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        watchLoggedIn: true,
        endpoints: {
          login: {url: '/token', method: 'post'},
          refresh: {url: '/refresh', method: 'get'},
          user: false,
        },
        token: {
          property: 'token',
          type: 'Bearer',
          maxAge: 60 * 10,
        },
        refreshToken: {
          required: false,
          maxAge: 60 * 60 * 24,
        },
        user: {
          autoFetch: false,
          property: false,
        },
        rewriteRedirects: false,
        redirect: {
          logout: '/logout',
          login: "/login",
          home: "/",
        },
      }
    }
  },
  axios: {
    proxy: 'true',
  },
  proxy: {
    '/token': 'http://localhost:80',
    '/refresh': 'http://localhost:80',
    '/api/': 'http://localhost:80',
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
