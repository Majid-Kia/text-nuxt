<template>
  <div
    class="flex flex-col md:flex-row md:items-center sm:pb-20 mb-20 sm:mb-24 lg:mb-36"
  >
    <div
      class="flex flex-col items-center md:items-start lg:w-[45%] md:w-1/2 lg:pr-8"
    >
      <h1
        class="text-text-primary text-h3 text-center mb-7 sm:mb-10 md:text-start"
      >
        {{ hero.title }}
      </h1>
      <p
        class="mb-5 sm:mb-10 text-text-secondary text-center text-body2 md:text-start"
      >
        {{ hero.description }}
      </p>
      <BaseButton
        classes="bg-primary-main text-white-default text-btnLarge"
        size="large"
      >
        <NuxtLink @click="scrollToTarget">
          {{ hero.action.content }}
        </NuxtLink>
        <IconArrowDown class="ml-2" />
      </BaseButton>
    </div>
    <div
      class="flex justify-center mt-8 flex-col lg:w-[55%] sm:w-5/6 sm:mx-auto md:w-1/2 md:items-center"
    >
      <NuxtImg :src="hero.image" width="570" height="570" />
      <div class="flex bg-white-default rounded-lg shadow-2 mt-8 sm:-mt-36">
        <div class="flex overflow-x-auto p-4 touch-auto w-full">
          <div class="flex flex-col ml-7 first:ml-0 flex-grow">
            <span class="text-text-primary text-subtitle1"> 12,000+ </span>
            <span class="text-primary-main whitespace-nowrap">
              Happy Customers
            </span>
          </div>
          <div class="flex flex-col ml-7 first:ml-0 flex-grow">
            <span class="text-text-primary text-subtitle1"> 12,000+ </span>
            <span class="text-primary-main whitespace-nowrap">
              Happy Customers
            </span>
          </div>
          <div class="flex flex-col ml-7 first:ml-0 flex-grow">
            <span class="text-text-primary text-subtitle1"> 12,000+ </span>
            <span class="text-primary-main whitespace-nowrap">
              Happy Customers
            </span>
          </div>
          <div class="flex flex-col ml-7 first:ml-0 flex-grow">
            <span class="text-text-primary text-subtitle1"> 12,000+ </span>
            <span class="text-primary-main whitespace-nowrap">
              Happy Customers
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IconArrowDown } from '@tabler/icons-vue'
  import type { HeroSection } from '~/types/api/home'

  const scrollToTarget = (event: MouseEvent) => {
    event.preventDefault()
    if (process.client) {
      const targetElement = document.getElementById('pricing')
      if (targetElement) {
        const offset = 90 // Adjust this value as needed
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth',
        })
      }
    }
  }

  const {
    data: { heroSection },
  } = defineProps<{
    data: {
      heroSection: HeroSection
    }
  }>()

  const hero = ref()
  hero.value = heroSection
</script>

<style scoped></style>
