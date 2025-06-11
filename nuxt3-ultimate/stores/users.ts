import { defineStore } from 'pinia'
import type { User } from '@/types/user'

export const useUsersStore = defineStore('users', {
  state: () => ({ list: [] as User[], loading: false }),
  actions: {
    async fetchAll() {
      this.loading = true
      try {
        this.list = (await $axios.get<User[]>('/users')).data
      } finally {
        this.loading = false
      }
    },
    async invite(payload: { email: string; role: User['roles'][number] }) {
      await $axios.post('/users/invite', payload)
      await this.fetchAll()
    },
    async update(id: string, data: Partial<User>) {
      await $axios.patch(`/users/${id}`, data)
      await this.fetchAll()
    },
    async remove(id: string) {
      await $axios.delete(`/users/${id}`)
      this.list = this.list.filter((u) => u.id !== id)
    },
  },
})
