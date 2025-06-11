import jwtDecode from 'jwt-decode'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('jwtDecode', jwtDecode)
})

declare module '#app' {
  interface NuxtApp { $jwtDecode: typeof jwtDecode }
}
