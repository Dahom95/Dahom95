<script setup lang="ts">
import { VCard, VCardTitle, VCardText, VCardActions } from 'vuetify/components'
</script>
<template>
  <VCard v-bind="$attrs">
    <VCardTitle>
      <slot name="title" />
    </VCardTitle>
    <VCardText>
      <slot />
    </VCardText>
    <VCardActions>
      <slot name="actions" />
    </VCardActions>
  </VCard>
</template>
