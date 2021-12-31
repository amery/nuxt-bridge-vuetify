// vim: set ts=2 sw=2 et:
import { defineNuxtConfig } from '@nuxt/bridge'

import colors from 'vuetify/es5/util/colors'

export default defineNuxtConfig({
  srcDir: 'src',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-bridge-vuetify',
    title: 'nuxt-bridge-vuetify',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/vuetify.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  bridge: {

    // -- Opt-in features --

    // Use Vite as the bundler instead of Webpack 4
    vite: true,

    // Enable Nuxt 3 compatible useMeta
    meta: true,

    // -- Default features --

    // Use legacy server instead of Nitro
    // nitro: false,

    // Disable nuxt 3 compatible `nuxtApp` interface
    // app: false,

    // Disable composition API support
    // capi: false,

    // Do not transpile modules
    // transpile: false,

    // Disable <script setup> support
    // scriptSetup: false,

    // Disable composables auto importing
    // autoImports: false,

    // Do not warn about module incompatibilities
    // constraints: false
  },

  vite: {
    // Config for Vite
  },

  // https://nuxtjs.org/docs/features/configuration#edit-host-and-port
  server: {
    host: '0', // default: localhost
  },
})
