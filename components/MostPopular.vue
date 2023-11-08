<template>
  <div class="mb-20 sm:mb-24 lg:mb-36">
    <h3 class="text-h4 text-text-primary mb-6">
      Most Popular VPS Hosting solutions
    </h3>
    <div class="lg:flex items-center">
      <div class="lg:w-[calc(100%-384px)]">
        <BaseTabs
          :items="data"
          tab-style="bg-white-default rounded"
          content-style="bg-white-default flex flex-col justify-between items-start lg:min-h-[224px]"
        >
          <template #default="{ tab }">
            <h4 class="text-text-primary text-h6">
              {{ tab.serviceDescriptionContent.title }}
            </h4>
            <p class="mt-2 text-body2 text-text-secondary">
              {{ tab.serviceDescriptionContent.description }}
            </p>
            <BaseButton
              size="large"
              classes="text-primary-main bg-primary-light mt-4 lg:mt-10 w-auto"
            >
              <NuxtLink :to="tab.serviceDescriptionContent.action.link">
                {{ tab.serviceDescriptionContent.action.content }}
              </NuxtLink>
            </BaseButton>
          </template>
        </BaseTabs>
      </div>

      <div class="flex justify-center">
        <NuxtImg
          class="hidden sm:flex mt-4 w-[384px] max-w-full lg:ml-6"
          src="most-popular-services/mostPopularServices.png"
          width="384"
          height="401"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { MostPopularServices } from '@/types/api/home'
  type propTypes = {
    data: MostPopularServices
  }
  const { data } = defineProps<propTypes>()
</script>

<style scoped></style>
