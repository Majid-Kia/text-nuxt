<template>
  <button class="rounded uppercase flex transition" :class="[padding, classes]">
    <slot />
  </button>
</template>

<script setup lang="ts">
  type proptype = {
    classes?: string | object
    size?: 'large' | 'small'
  }
  const { classes, size } = defineProps<proptype>()
  const padding = computed(() => {
    if (size === 'large') {
      return 'px-[22px] py-2'
    }
    if (size === 'small') {
      return 'px-2.5 py-1'
    }
    return 'py-1.5 px-4'
  })
</script>

<style scoped></style>
