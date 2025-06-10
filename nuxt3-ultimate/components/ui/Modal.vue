<script setup lang="ts">
import { VDialog, VCard, VCardTitle, VCardText, VCardActions } from 'vuetify/components'
interface Props {
  modelValue: boolean
  title?: string
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
</script>
<template>
  <VDialog :model-value="props.modelValue" @update:model-value="emit('update:modelValue', $event)">
    <VCard>
      <VCardTitle>{{ props.title }}</VCardTitle>
      <VCardText>
        <slot />
      </VCardText>
      <VCardActions>
        <slot name="actions" />
      </VCardActions>
    </VCard>
  </VDialog>
</template>
