import { defineStore } from 'pinia'
import { useCookie } from '#imports'
import jwtDecode from 'jwt-decode'

interface Tokens { access?: string; refresh?: string }
interface User {
  id: string
  email: string
  roles: string[]
  permissions: string[]
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    tokens: null as Tokens | null,
    loading: false
  }),
  getters: {
    isLogged: (s) => !!s.tokens?.access,
    hasRole: (s) => (role: string) => s.user?.roles.includes(role) ?? false,
    hasPermission: (s) => (perm: string) =>
      s.user?.permissions.includes(perm) ?? false
  },
  actions: {
    async login(credentials: { email: string; password: string }) {
      this.loading = true
      try {
        const { data } = await $axios.post<Tokens>('/auth/login', credentials)
        this.setSession(data)
      } finally {
        this.loading = false
      }
    },
    logout() {
      this.user = null
      this.tokens = null
      useCookie('access').value = null
      useCookie('refresh').value = null
      localStorage.clear()
      navigateTo('/login')
    },
    setSession(tokens: Tokens) {
      const cfg = useRuntimeConfig()
      const mode = cfg.public.tokenStrategy as 'bearer' | 'access_refresh' | 'cookie'
      this.tokens = tokens
      if (mode !== 'cookie' && tokens.access) {
        useCookie('access', { maxAge: +cfg.jwt.accessExpires }).value = tokens.access
        localStorage.setItem('access', tokens.access)
        this.user = jwtDecode<User>(tokens.access)
      }
      if (mode === 'access_refresh' && tokens.refresh) {
        useCookie('refresh', { maxAge: +cfg.jwt.refreshExpires }).value = tokens.refresh
        localStorage.setItem('refresh', tokens.refresh)
      }
    },
    async refresh() {
      const cfg = useRuntimeConfig()
      const mode = cfg.public.tokenStrategy as 'bearer' | 'access_refresh' | 'cookie'
      if (mode !== 'access_refresh') return
      try {
        const { data } = await $axios.post<Tokens>('/auth/refresh', {
          refresh: useCookie('refresh').value
        })
        this.setSession(data)
        return data.access
      } catch (_) {
        this.logout()
      }
    }
  },
  persist: {
    storage: persistedState.cookiesWithOptions({ sameSite: 'lax' })
  }
})
