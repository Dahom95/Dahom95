import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
      en: { welcome: 'Welcome' },
      ar: { welcome: '\u0645\u0631\u062d\u0628\u0627' }
    }
  })
  nuxtApp.vueApp.use(i18n)
})
