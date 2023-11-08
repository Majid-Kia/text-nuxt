<template>
  <div v-for="(item, index) in items" :key="index" class="w-full">
    <div class="" @click="toggleItem(index)">
      <div class="flex justify-between w-full">
        <div :class="titleStyle">{{ item.title }}</div>
        <IconChevronDown v-if="item.isOpen" />
        <IconChevronRight v-else />
      </div>
      <div v-show="item.isOpen" class="accordion-content">
        <slot name="item-content" :index="index"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IconChevronRight, IconChevronDown } from '@tabler/icons-vue'

  type Item = {
    title: string
    content: unknown[]
    isOpen: boolean
  }
  type PropTypes = {
    items: Item[]
    titleStyle: string
  }

  const { items, titleStyle } = defineProps<PropTypes>()
  const toggleItem = (index: number) => {
    items.forEach((item, i) => {
      item.isOpen = i === index ? !item.isOpen : false
    })
  }
</script>
