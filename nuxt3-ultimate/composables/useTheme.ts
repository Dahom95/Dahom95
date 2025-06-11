export const useTheme = () => {
  const store = useThemeStore()
  const toggle = () => store.toggle()
  watchEffect(() => {
    document.documentElement.classList.toggle('dark', store.isDark)
  })
  return { isDark: computed(() => store.isDark), toggle }
}
