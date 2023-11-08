<template>
  <div
    class="bg-cta bg-cover rounded-lg px-5 py-5 lg:justify-between lg:text-start text-center flex items-center flex-col lg:flex-row sm:px-8 sm:py-7 md:px-16 lg:py-8"
  >
    <div class="flex items-start flex-col lg:w-[calc(100%-340px)]">
      <h4 class="text-white-default text-subtitle1 sm:text-h5 md:text-h4">
        Don't Miss Out on the US VPS!
      </h4>
      <p class="text-caption text-white-80 mt-2 sm:mt-3 sm:text-body1">
        Explore Cloudzy's VPS hosting solutions and choose one that best suits
        your needs. Contact us and we will help you find the perfect fit for
        you!
      </p>
    </div>
    <BaseButton
      size="large"
      classes="mt-5 bg-secondary-main text-white-default w-full sm:w-[300px] sm:mt-2 lg:w-auto"
    >
      <NuxtLink
        class="text-center w-full text-btnMedium lg:whitespace-nowrap"
        to="/"
      >
        CONTACT US
      </NuxtLink>
    </BaseButton>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .bg-cta {
    background-image: url('@/assets/images/blue-cta-bg.jpg');
  }
</style>
