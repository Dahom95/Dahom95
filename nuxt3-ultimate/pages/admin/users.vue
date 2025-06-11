<script setup lang="ts">
definePageMeta({ middleware: ['auth', 'role'], role: 'Admin' })
const users = useUsersStore()
await users.fetchAll()
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">Manage Users</h1>
    <!-- DataTable stub -->
  </div>
</template>
