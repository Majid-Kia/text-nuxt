<template>
  <div ref="dropdownRef" class="relative w-full">
    <div
      :class="[anchorStyle, active ? 'bg-primary-contrastText' : '']"
      @click="toggleDropdown"
    >
      <slot name="anchor"></slot>
    </div>
    <div :class="dropdownClasses">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  const dropdownRef = ref<HTMLElement | null>(null)
  const active = ref(false)
  type proptype = {
    anchorStyle?: string
    itemsStyle?: string
  }
  const { anchorStyle } = defineProps<proptype>()

  const toggleDropdown = () => {
    active.value = !active.value
  }

  const handleClickOutside = (event: Event) => {
    if (
      dropdownRef.value &&
      !dropdownRef.value.contains(event.target as Node)
    ) {
      active.value = false
    }
  }
  onMounted(() => {
    if (process.client) {
      window.addEventListener('click', handleClickOutside)
    }
  })

  onBeforeUnmount(() => {
    if (process.client) {
      window.removeEventListener('click', handleClickOutside)
    }
  })

  const dropdownClasses = computed(() => {
    return {
      visible: active.value,
      'opacity-100': active.value,
      invisible: !active.value,
      'opacity-0': !active.value,
      'transition duration-300': true,
    }
  })
</script>
