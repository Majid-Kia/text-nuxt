<template>
  <div
    :class="['rounded-lg bg-background-default shadow-0.5 w-full p-6', classes]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
  type proptype = {
    classes: string | object
  }
  const { classes } = defineProps<proptype>()
</script>
