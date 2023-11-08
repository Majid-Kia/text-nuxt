<template>
  <div>
    <ul class="flex overflow-x-auto py-1 px-0.5">
      <li
        v-for="(tab, index) in items"
        :key="index"
        :class="{
          'text-primary-main border-b-4 border-primary-main transition ':
            activeTab === index,
          [tabStyle]: true,
        }"
        class="bg-white-default cursor-pointer min-w-[188px] sm:w-1/4 shadow-1 text-center py-4 ml-2 first:ml-0 text-h6 sm:text-body1 sm:min-w-0 items-center flex flex-col"
        @click="activateTab(index)"
      >
        <NuxtImg
          v-if="tab.icon"
          :src="tab.icon"
          class="text-primary-main fill-primary-dark mb-2 hidden sm:flex"
        />
        {{ tab.title }}
      </li>
    </ul>
    <div
      v-for="(tab, index) in items"
      v-show="activeTab === index"
      :key="index"
      class="rounded-lg p-6 shadow-1 mt-4"
      :class="contentStyle"
      translate="yes"
    >
      <slot :tab="tab"></slot>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T extends Tab">
  import type { Tab } from '@/types/generics/generics'

  type propTypes<T> = {
    items: T[]
    tabStyle: string
    tabActiveStyle?: string
    contentStyle?: string
    contentActiveStyle?: string
  }
  const { items, contentStyle, tabStyle } = defineProps<propTypes<T>>()
  const activeTab = ref(0)

  const activateTab = (index: number) => {
    activeTab.value = index
  }
</script>

<style></style>
