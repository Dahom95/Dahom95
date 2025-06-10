export const useDirection = () => {
  const { locale } = useI18n()
  watchEffect(() => {
    document.dir = locale.value === 'ar' ? 'rtl' : 'ltr'
  })
}
