<script setup lang="ts">
import { VProgressCircular } from 'vuetify/components'
interface Props {
  size?: number
  color?: string
}
const props = withDefaults(defineProps<Props>(), { size: 32, color: 'primary' })
</script>
<template>
  <VProgressCircular :size="props.size" :color="props.color" indeterminate v-bind="$attrs" />
</template>
