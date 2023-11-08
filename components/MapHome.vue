<template>
  <BaseFullWidthContainer
    classes="from-primary-light bg-gradient-to-l to-white-default relative lg:py-20 py-10  mb-20 sm:mb-24 lg:mb-36"
  >
    <NuxtImg
      src="map.png"
      width="545"
      height="456"
      loading="lazy"
      class="absolute right-0 top-0 hidden lg:block"
    />
    <BaseContainer classes="relative z-1">
      <h2 class="text-h2 text-text-primary mb-8 md:text-h3">
        More than 15 locations, all over the world
      </h2>
      <span class="text-body2 text-text-secondary mb-8 flex grow">
        Choose Whatever Location Best Suits Your Business: Get a VPS Closer to
        Your Users, Remove Latency
      </span>
      <div class="flex flex-wrap lg:flex-nowrap">
        <div class="lg:w-[65%] w-full">
          <BaseTabs
            :items="data"
            tab-style="bg-white-default rounded-lg grow justify-center"
            content-style="bg-white-default flex flex-wrap items-start "
          >
            <template #default="{ tab }">
              <NuxtLink
                v-for="item in tab.items"
                :key="item.id"
                :to="item.link"
                class="flex items-center md:w-1/3 mb-4 w-1/2"
              >
                <NuxtImg
                  width="20"
                  height="20"
                  :src="item.icon"
                  class="rounded-full border border-grey-map"
                />
                <span class="text-body2 ml-2">{{ item.name }}</span>
              </NuxtLink>
            </template>
          </BaseTabs>
        </div>
        <div class="lg:w-[35%] lg:ml-6 py-1 w-full mt-3 lg:mt-0">
          <div
            class="bg-white-default rounded-lg shadow-1 w-full h-full p-8 flex flex-col md:flex-row gap-[12px] md:gap-[28px] lg:flex-col lg:gap-[10px]"
          >
            <div>
              <h4 class="text-h6 text-text-primary mb-2">Network Test</h4>
              <span class="text-body2 text-text-secondary">
                Check the network speed of your desired data center
                location.</span
              >
            </div>
            <div
              class="flex flex-col sm:flex-row gap-[12px] sm:items-end w-full lg:flex-col"
            >
              <BaseSelect
                :options="options"
                label="Choose a location"
                :default-select="defaultSelecetdLocation"
                classes="mt-[16px] w-full sm:w-[60%] md:w-[50%] lg:w-full"
                @on-change="onSelectChange"
              />

              <a
                target="_blank"
                class="w-full sm:w-[40%] md:w-[50%] lg:w-full"
                :href="`https://lg-${selectedLocation}.cloudzy.com/`"
              >
                <BaseButton
                  size="large"
                  classes="border border-primary-main text-primary-main flex justify-center w-full"
                >
                  NETWORK TEST
                </BaseButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </BaseFullWidthContainer>
</template>

<script setup lang="ts">
  import type { Map } from '@/types/api/home'

  type PropTypes = {
    data: Map[]
  }
  const { data } = defineProps<PropTypes>()
  const defaultSelecetdLocation = 'USA'
  const selectedLocation = ref<string>(defaultSelecetdLocation)

  const onSelectChange = (value: string) => {
    selectedLocation.value = value.toLowerCase().replace('_', '')
  }

  const customizeData = data.map((val) =>
    val.items.map((loc) => ({ id: loc.id, value: loc.name })),
  )
  const options = customizeData.flat()
</script>
