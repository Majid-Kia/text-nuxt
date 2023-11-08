<template>
  <h2
    class="text-text-primary text-h4 sm:text-h3 md:text-h2 text-center mb-[32px]"
  >
    {{ data.title }}
  </h2>

  <div class="mb-20 lg:mb-36 sm:mb-2">
    <BaseCarousel
      class="latest-blog-carousel"
      :has-pagination="false"
      :breakpoints="breakpoints"
    >
      <Slide v-for="slide in data.slides" :key="slide.id">
        <BaseCard classes="p-[16px] mx-[12px] my-[10px] flex flex-col">
          <NuxtImg
            class="rounded-lg mb-[16px]"
            :src="`latest-blog/${slide.image}`"
            width="728"
            height="404"
          />

          <p class="text-subtitle1 text-text-primary flex-1">
            {{ slide.context }}
          </p>

          <BaseDivider classes="mb-[24px] mt-[14px]" />

          <div class="flex text-caption items-center gap-[8px]">
            <NuxtImg
              width="32"
              height="32"
              class="rounded-full w-[32px] h-[32px]"
              :src="`latest-blog/avatar/${slide.info.avatar}`"
              loading="lazy"
            />
            <span class="text-text-primary"> {{ slide.info.name }}</span>
            <span class="text-grey-400 flex-1 text-right">
              {{ slide.info.date }}
            </span>
          </div>
        </BaseCard>
      </Slide>
    </BaseCarousel>

    <div class="flex justify-end text-primary-main text-btnLarge mt-[16px]">
      <NuxtLink to="/"> VIEW ALL </NuxtLink>
      <IconArrowRight />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IconArrowRight } from '@tabler/icons-vue'
  import type { LatestBlog } from '@/types/api/home.ts'

  type proptype = {
    data: LatestBlog
  }

  const { data } = defineProps<proptype>()

  const breakpoints = {
    // 320px and up (xs)
    320: {
      itemsToShow: 1,
      itemsToScroll: 1,
      snapAlign: 'start',
    },
    // 600 and up (sm)
    600: {
      itemsToShow: 2,
      itemsToScroll: 1,
      snapAlign: 'start',
    },
    // 900 and up (md)
    900: {
      itemsToShow: 3,
      itemsToScroll: 3,
      snapAlign: 'center',
    },
  }
</script>

<style>
  .carousel__next {
    right: -45px;
  }
  .carousel__prev {
    left: -45px;
  }
  @media screen and (max-width: 1200px) {
    .latest-blog-carousel {
      padding: 0 64px;
    }
    .carousel__next {
      right: 0;
    }
    .carousel__prev {
      left: 0;
    }
  }
  @media screen and (max-width: 900px) {
    .latest-blog-carousel .carousel__viewport {
      margin: 0;
    }

    .latest-blog-carousel .carousel__prev,
    .carousel__next {
      top: calc(100% + 30px);
      width: 32px;
      height: 32px;
    }

    .latest-blog-carousel .carousel__next {
      left: 56px;
    }
    .latest-blog-carousel {
      padding: 0;
    }
  }
</style>
