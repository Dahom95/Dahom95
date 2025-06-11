export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()
  if (!auth.isLogged && to.path !== '/login') {
    return navigateTo('/login')
  }
})
