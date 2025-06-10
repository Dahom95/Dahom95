<script setup lang="ts">
import { VSelect } from 'vuetify/components'
interface Option { label: string; value: string | number }
interface Props {
  modelValue: string | number | null
  items: Option[]
  label?: string
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
</script>
<template>
  <VSelect
    :items="props.items"
    :model-value="props.modelValue"
    :label="props.label"
    v-bind="$attrs"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>
