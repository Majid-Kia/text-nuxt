<template>
  <div v-if="data">
    <HeroHome :data="data" />
    <PricingHome id="pricing" :data="data.pricingSection" />
    <MapHome :data="data.map" />
    <MostPopular :data="data.mostPopular" />
    <OurKeyDiffrence :data="data.ourKeyDiffrence" />
    <TestimonialHome :data="data.testimonial" />
    <LatestBlogHome :data="data.latestBlog" />
    <CtaContact />
  </div>
</template>

<script setup lang="ts">
  import type { HomeData } from '~/types/api/home'
  const { data } = await useFetch<HomeData>('/api/home')
</script>

<style>
  html {
    scroll-behavior: smooth;
  }
</style>
