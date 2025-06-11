<script setup lang="ts">
import { VTextField } from 'vuetify/components'
interface Props {
  modelValue: string | number | null
  label?: string
  type?: string
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
</script>
<template>
  <VTextField
    v-bind="props"
    :model-value="props.modelValue"
    :type="props.type || 'text'"
    :label="props.label"
    @update:model-value="emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>
