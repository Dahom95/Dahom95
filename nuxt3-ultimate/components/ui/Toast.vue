<script setup lang="ts">
import { VSnackbar } from 'vuetify/components'
interface Props {
  modelValue: boolean
  color?: string
  timeout?: number
}
const props = withDefaults(defineProps<Props>(), { color: 'success', timeout: 3000 })
const emit = defineEmits(['update:modelValue'])
</script>
<template>
  <VSnackbar
    :model-value="props.modelValue"
    :timeout="props.timeout"
    :color="props.color"
    @update:model-value="emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <slot />
  </VSnackbar>
</template>
