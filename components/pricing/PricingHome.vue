<template>
  <div class="mb-20 sm:mb-24 lg:mb-36">
    <BaseToggle
      right-button-value="Windows"
      left-button-value="Linux"
      title="No Hidden Fees - No Contract"
      @on-change="onToggleChange"
    />
    <div
      class="mt-6 grid grid-cols-1 items-end gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      <div
        v-for="item in data?.[currentPlane]"
        :key="item.id"
        class="flex flex-col rounded-lg bg-primary-light"
      >
        <div v-if="item.isPopular" class="w-full pt-2 pb-1">
          <p class="text-center text-subtitle1 text-primary-main">
            Most Popular
          </p>
        </div>
        <BaseCard
          :classes="{
            'bg-primary-main': item.isPopular,
            'bg-white-default': !item.isPopular,
          }"
        >
          <p
            class="text-subtitle2"
            :class="{
              'text-white-default': item.isPopular,
              'text-primary-main': !item.isPopular,
            }"
          >
            {{ item.title }}
          </p>

          <div class="mt-4">
            <div
              v-for="plan in item.planSpec"
              :key="plan.id"
              class="flex items-center pt-2"
            >
              <IconCheck
                class="w-4 h-4"
                :class="{
                  'text-white-default': item.isPopular,
                  'text-text-primary': !item.isPopular,
                }"
              />
              <p
                class="ml-2 text-body"
                :class="{
                  'text-white-default': item.isPopular,
                  'text-text-primary': !item.isPopular,
                }"
              >
                {{ plan.amount }} {{ plan.unit }}
              </p>
              <p
                class="ml-2 truncate text-body2"
                :class="{
                  'text-white-80': item.isPopular,
                  'text-text-secondary': !item.isPopular,
                }"
              >
                {{ plan.name }}
              </p>
            </div>
          </div>

          <BaseDivider :classes="getDividerStyles(item.isPopular)" />

          <div class="mt-4 flex flex-nowrap items-center justify-between">
            <div
              class="flex flex-nowrap items-center"
              :class="{
                'text-white-default': item.isPopular,
                'text-text-primary': !item.isPopular,
              }"
            >
              <p class="text-h5">{{ item.pricing.perMonth.unit }}</p>
              <span class="ml-1 text-h3">{{
                item.pricing.perMonth.price
              }}</span>
              <p
                class="ml-1 text-h5"
                :class="{
                  'text-white-80': item.isPopular,
                  'text-grey-400': !item.isPopular,
                }"
              >
                / {{ item.pricing.perMonth.period }}
              </p>
            </div>

            <NuxtImg
              class="w-[42px] h-[42px]"
              :src="`pricing/${getImageName(item.isPopular)}`"
              width="42"
              height="42"
            />
          </div>

          <div
            class="flex items-end justify-center"
            :class="{
              'text-white-80': item.isPopular,
              'text-grey-400': !item.isPopular,
            }"
          >
            <p class="ml-1 text-body2 leading-5">or</p>
            <p
              class="ml-1 text-subtitle2 leading-5"
              :class="{
                'text-white-defualt': item.isPopular,
                'text-text-secondary': !item.isPopular,
              }"
            >
              {{ item.pricing.perHour.unit }}{{ item.pricing.perHour.price }}
            </p>
            <p class="ml-1 text-body2 leading-5">hourly</p>
          </div>

          <div class="md:5 mt-6 w-full lg:mt-6">
            <BaseButton
              size="large"
              :classes="getButtonClasses(item.isPopular)"
            >
              GET START
            </BaseButton>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IconCheck } from '@tabler/icons-vue'
  import type { PricingSection } from '~/types/api/home'

  type proptype = {
    data: PricingSection
  }

  type currentPlaneType = 'linux' | 'windows'

  const { data } = defineProps<proptype>()

  const currentPlane = ref<currentPlaneType>('linux')

  const onToggleChange = (state: string) => {
    currentPlane.value = state?.toLocaleLowerCase() as currentPlaneType
  }

  const getButtonClasses = (isPopular: boolean) => {
    const staticStyles =
      'cursor-pointer uppercase border border-solid flex w-full items-center justify-center px-5 py-2 transition-none rounded px-4 py-1.5 font-sans text-buttonSmall transition duration-300'

    let styles = ''
    if (isPopular) {
      styles =
        'bg-secondary-main text-white-default border-secondary-main hover:bg-secondary-dark'
    } else {
      styles =
        'text-primary-main border-primary-main bg-common-transparent bg-white-default hover:bg-primary-soft'
    }

    return `${staticStyles} ${styles}`
  }

  const getDividerStyles = (isPopular: boolean) => {
    if (isPopular) {
      return 'mt-4 border-white-30'
    } else {
      return 'mt-4'
    }
  }

  const getImageName = (isPopular: boolean) => {
    let prefix = ''
    const extention = '.png'

    if (isPopular) {
      prefix = 'MostPopular'
    } else {
      prefix = ''
    }

    return `${currentPlane.value}${prefix}${extention}`
  }
</script>
