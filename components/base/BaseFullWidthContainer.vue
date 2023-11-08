<template>
  <div
    class="relative left-2/4 md:-ml-[calc(50vw-1%)] md:w-[calc(100vw-2%)] w-screen -ml-[50vw]"
    :class="props.classes"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
  type propTypes = {
    classes?: string
  }
  const props = defineProps<propTypes>()
</script>
