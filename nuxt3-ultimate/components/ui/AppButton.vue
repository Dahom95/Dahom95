<script setup lang="ts">
import { VBtn } from 'vuetify/components'

interface Props {
  color?: string
  variant?: 'flat' | 'tonal' | 'outlined'
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  variant: 'flat',
})
</script>

<template>
  <VBtn :color="props.color" :variant="props.variant" :icon="props.icon" v-bind="$attrs">
    <slot />
  </VBtn>
</template>
