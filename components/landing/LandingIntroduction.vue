<template>
  <div class="flex flex-col">
    <h2
      v-if="data.features"
      class="text-h4 sm:text-h3 md:text-h2 text-text-primary text-center"
    >
      {{ data.title }}
    </h2>
    <div class="flex flex-col lg:flex-row mt-6 md:mt-8">
      <NuxtImg
        :src="data.image"
        class="mr-auto ml-auto w-full max-w-[650px] lg:w-1/2"
      />
      <div class="w-full lg:w-1/2 mt-8 lg:ml-5">
        <h2
          v-if="!data.features"
          class="text-h4 sm:text-h3 md:text-h2 text-text-primary mb-8"
        >
          {{ data.title }}
        </h2>
        <p class="text-body1 text-text-secondary" v-html="data.description"></p>
        <ul
          v-if="data.features"
          class="flex flex-col flex-wrap sm:flex-row w-full mt-4 md:mt-6"
        >
          <li
            v-for="feature in data.features"
            :key="feature"
            class="flex items-center text-subtitle2 text-text-primary w-full sm:w-1/2 md:w-1/3 lg:w-full mt-1"
          >
            <NuxtImg :src="data.featureIcon" class="w-4 mr-2" />
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IntroductionSection } from '@/types/api/landing'
const { data } = defineProps<{
  data: IntroductionSection
}>()
</script>