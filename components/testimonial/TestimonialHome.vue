<template>
  <BaseFullWidthContainer classes="mb-20 lg:mb-36 sm:mb-24">
    <div class="w-full">
      <!-- container -->
      <div
        class="relative text-center lg:text-left mx-auto max-w-[1200px] px-0 lg:px-0 sm:px-8 h-[450px]"
      >
        <!-- section 1 -->

        <div
          :class="[styles.title.default, styles.title.sm, styles.title.lg]"
          class="bg-[url('assets/images/testimonial/Testimonial-xl-min.jpg')]"
        >
          <h2 class="text-white-default text-h4">{{ data.title }}</h2>
        </div>

        <!-- section 2 -->
        <div :class="[styles.slider.default, styles.slider.lg]">
          <NuxtImg
            src="testimonial/TestimonialQuote.svg"
            :class="[
              styles.quoteIcon.default,
              styles.quoteIcon.sm,
              styles.quoteIcon.lg,
            ]"
            width="58"
            height="58"
          />
          <div
            class="shadow-0.25 rounded-lg bg-white-default"
            :class="styles.paddings"
          >
            <BaseCarousel :has-navigation="false">
              <Slide v-for="slide in data.slides" :key="slide.id">
                <div class="w-full">
                  <p class="text-text-secondary text-body1 text-left">
                    {{ slide.comment }}
                  </p>

                  <BaseDivider classes="mt-[16px]" />
                  <div
                    class="flex gap-[16px] text-left mt-[9px] md:mt-[15px] items-center"
                  >
                    <div>
                      <NuxtImg
                        class="w-[44px]"
                        width="44"
                        height="44"
                        :src="`testimonial/avatar/${slide.writerInfo.image}`"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p class="text-text-primary text-subtitle1">
                        {{ slide.writerInfo.name }}
                      </p>
                      <p class="text-text-secondary text-body2">company name</p>
                    </div>

                    <BaseRating
                      :value="slide.rating"
                      classes="flex-1 !hidden sm:!inline-block"
                    />
                  </div>
                </div>
              </Slide>
            </BaseCarousel>
          </div>
        </div>
      </div>
    </div>
  </BaseFullWidthContainer>
</template>

<script setup lang="ts">
  import type { Testimonial } from '@/types/api/home.ts'

  type proptype = {
    data: Testimonial
  }

  const { data } = defineProps<proptype>()

  const styles = {
    slider: {
      default: 'absolute inset-x-0 px-[20px] sm:px-[40px] top-[112px] w-full',
      lg: 'lg:right-0 lg:top-[calc(50%-248px/2)] lg:w-[758px] lg:inset-[unset]',
    },
    title: {
      default:
        'p-[20px] justify-center bg-primary-dark w-full h-full flex item-start bg-cover bg-no-repeat bg-[top_left_-30px]',
      lg: 'lg:w-[90%] lg:justify-start lg:items-center ',
      sm: 'sm:rounded-lg sm:bg-center',
    },
    quoteIcon: {
      default: 'absolute -top-[23px] left-[80px] w-[41px] h-[37px]',
      sm: 'sm:-top-[30px] sm:w-[50px] sm:h-[50px]',
      lg: 'lg:-top-[33px] lg:w-[57px] lg:h-[53px]',
    },
    paddings:
      'p-[16px] pt-[34px] sm:p-[22px] sm:pt-[36px] md:p-[35px] lg:p-[40px] lg:pt-[40px]',
  }
</script>
