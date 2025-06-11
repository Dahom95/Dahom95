import type { AxiosInstance } from 'axios'

export const useAxios = (): AxiosInstance => {
  const nuxtApp = useNuxtApp()
  return nuxtApp.$axios
}
