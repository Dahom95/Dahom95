import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({ sidebar: true }),
  actions: {
    toggleSidebar() {
      this.sidebar = !this.sidebar
    },
  },
  persist: true,
})
