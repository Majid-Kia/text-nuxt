<template>
  <BaseFullWidthContainer
    classes="bg-primary-light py-24 mb-20 lg:mb-36 sm:mb-24 "
  >
    <BaseContainer>
      <div class="flex flex-wrap items-center justify-between">
        <h3 class="text-h4 sm:text-h3 lg:text-h2">{{ props.title }}</h3>
        <BaseButton
          size="large"
          classes="bg-primary-main text-white-default hover:bg-primary-dark order-1 lg:order-none sm:absolute sm:bottom-4 sm:right-8 lg:static"
        >
          <span> {{ props.action }} </span>
          <IconArrowRight />
        </BaseButton>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 sm:mt-8 s md:mt-10 lg:mt-9 overflow-hidden"
          :style="{
            height: cardsHeight,
          }"
        >
          <div
            v-for="item in props.items"
            :key="item.icon"
            ref="cards"
            class="p-4 sm:p-6 rounded-md bg-white-default shadow-1 sm:last:mb-0 last:mb-4"
          >
            <div class="flex items-center">
              <NuxtImg
                class="w-9 sm:w-16"
                :src="item.icon"
                loading="lazy"
                width="57"
                height="57"
              ></NuxtImg>

              <span class="ml-2 text-subtitle1 sm:text-h6 lg:text-h5 lg:ml-4">{{
                item.title
              }}</span>
            </div>
            <p class="text-text-secondary text-body2 sm:text-body1 mt-3">
              {{ item.description }}
            </p>
          </div>
        </div>
        <BaseButton
          v-if="isMobile"
          size="small"
          classes="bg-inherit text-primary-main  items-center text-btnSmall sm:hidden"
          @click="showAllCards"
        >
          {{ loadBtnText }}
          <IconChevronDown v-if="closeMode" :size="18" />
          <IconChevronUp v-else :size="18" />
        </BaseButton>
      </div>
    </BaseContainer>
  </BaseFullWidthContainer>
</template>

<script setup lang="ts">
  import {
    IconArrowRight,
    IconChevronDown,
    IconChevronUp,
  } from '@tabler/icons-vue'
  import type { OurKeyDiffrence } from '@/types/api/home.ts'

  const {
    data: { title, action, items },
  } = defineProps<{ data: OurKeyDiffrence }>()

  const props = ref()
  props.value = { title, action, items }

  const { isMobile } = useDevice()
  const cards = ref<HTMLElement[]>([])
  const minimizeHeight = ref<number>(0)
  const cardsHeight = ref<string>('')
  const loadBtnText = ref<string>('More')
  const closeMode = ref<boolean>(true)
  const showAllCards = () => {
    closeMode.value = !closeMode.value
    if (closeMode.value) {
      cardsHeight.value = minimizeHeight.value + 'px'
      loadBtnText.value = 'More'
    } else {
      loadBtnText.value = 'Less'
      cardsHeight.value = 'auto'
    }
  }
  onMounted(() => {
    if (isMobile) {
      cards.value.slice(0, 3).forEach((box: HTMLElement) => {
        minimizeHeight.value += box.clientHeight
        minimizeHeight.value += 8 * 2 - 1
      })
      cardsHeight.value = minimizeHeight.value + 'px'
    }
  })
</script>
