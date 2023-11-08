<template>
  <div v-if="data">
    <LandingIntroduction :data="data.introductionSection" />
  </div>
</template>

<script setup lang="ts">
import type { LandingData } from '~/types/api/landing'
const { data } = await useFetch<LandingData>('/api/forex')
</script>