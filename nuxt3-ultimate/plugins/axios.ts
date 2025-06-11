import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

export default defineNuxtPlugin((nuxtApp) => {
  const cfg = useRuntimeConfig()
  const mode = cfg.public.tokenStrategy as 'bearer' | 'access_refresh' | 'cookie'
  const instance = axios.create({ baseURL: cfg.public.apiBase })

  instance.interceptors.request.use((req) => {
    const { tokens } = useAuthStore()
    if (mode !== 'cookie' && tokens?.access) {
      req.headers.Authorization = `Bearer ${tokens.access}`
    }
    return req
  })

  let refreshing: Promise<string | void> | null = null
  instance.interceptors.response.use(
    (res) => res,
    async (error) => {
      if (error.response?.status === 401 && mode === 'access_refresh') {
        const auth = useAuthStore()
        if (!refreshing) refreshing = auth.refresh()
        const newAccess = await refreshing
        refreshing = null
        if (newAccess) {
          error.config.headers.Authorization = `Bearer ${newAccess}`
          return instance(error.config)
        }
      }
      return Promise.reject(error)
    }
  )

  nuxtApp.provide('axios', instance)
  nuxtApp.vueApp.config.globalProperties.$axios = instance
})

declare module '#app' {
  interface NuxtApp { $axios: ReturnType<typeof axios.create> }
}
