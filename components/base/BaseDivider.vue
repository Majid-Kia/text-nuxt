<template>
  <hr
    :class="[
      'w-full border-0 border-t border-solid border-border-main',
      classes,
    ]"
  />
</template>

<script setup lang="ts">
  type proptype = {
    classes: string | object
  }
  const { classes } = defineProps<proptype>()
</script>
