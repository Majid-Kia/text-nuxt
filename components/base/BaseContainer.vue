<template>
  <div class="mx-auto max-w-[1200px] lg:px-0 px-6 sm:px-8" :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
  type PropType = {
    classes?: string
  }
  const { classes } = defineProps<PropType>()
</script>
