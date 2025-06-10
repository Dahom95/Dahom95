import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@pinia/plugin-persistedstate',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'vue-toastification/nuxt'
  ],
  runtimeConfig: {
    apiBase: process.env.API_BASE_URL,
    jwt: {
      accessExpires: process.env.JWT_ACCESS_EXPIRES,
      refreshExpires: process.env.JWT_REFRESH_EXPIRES,
    },
    public: {
      apiBase: process.env.API_BASE_URL,
      tokenStrategy: process.env.TOKEN_STRATEGY || 'access_refresh',
    },
  },
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
    '@/assets/css/tailwind.css'
  ],
  build: {
    transpile: ['vuetify']
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', dir: 'ltr' },
      { code: 'ar', iso: 'ar-LY', name: 'العربية', dir: 'rtl' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_and_default'
  }
})
