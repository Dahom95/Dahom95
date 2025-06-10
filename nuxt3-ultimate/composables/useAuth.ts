export const useAuth = () => {
  const store = useAuthStore()
  return {
    user: computed(() => store.user),
    isLogged: computed(() => store.isLogged),
    login: store.login,
    logout: store.logout,
    refresh: store.refresh,
  }
}
