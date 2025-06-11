export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()
  const required = to.meta.permission as string | undefined
  if (required && !auth.hasPermission(required)) {
    return abortNavigation({ statusCode: 403, statusMessage: 'Forbidden' })
  }
})
