<template>
  <img
    :src="logoUrl"
    :alt="alt"
    :width="width"
    :height="height"
    class="block"
    decoding="async"
    loading="eager"
  />
</template>

<script setup lang="ts">
import logoUrl from '~/assets/images/logo.svg'

withDefaults(defineProps<{
  width?: number
  height?: number
  alt?: string
}>(), {
  width: 32,
  height: 32,
  alt: 'Merouane Amqor logo'
})
</script>

<style scoped>
</style>