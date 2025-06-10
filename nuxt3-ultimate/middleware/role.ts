export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()
  const required = to.meta.role as string | undefined
  if (required && !auth.hasRole(required)) {
    return abortNavigation({ statusCode: 403, statusMessage: 'Forbidden' })
  }
})
