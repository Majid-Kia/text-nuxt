<template>
  <Carousel :items-to-show="props.itemsToShow" :breakpoints="props.breakpoints">
    <slot />

    <template #addons>
      <Navigation v-if="props.hasNavigation" />
      <Pagination v-if="props.hasPagination" />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
  const props = defineProps({
    hasPagination: {
      type: Boolean,
      default: true,
    },
    hasNavigation: {
      type: Boolean,
      default: true,
    },
    itemsToShow: {
      type: Number,
      default: 1,
    },
    breakpoints: {
      type: Object,
      default: null,
    },
  })
</script>

<style>
  .carousel__slide {
    align-items: unset;
  }

  /********** pagination **********/
  .carousel__pagination-button::after {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #c1c4d6;
  }

  .carousel__pagination-button--active::after {
    background-color: #2d31a6;
  }
  /********************************/
  /**** next and prev buttons ****/
  .carousel__prev,
  .carousel__next {
    background-color: #f4f7ff;
    color: #2d31a6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  /** next and prev hover **/
  .carousel__prev:not(.carousel__prev--disabled):hover,
  .carousel__next:not(.carousel__next--disabled):hover {
    background-color: #2d31a6;
    color: white;
  }
  /** next and prev disable **/
  .carousel__prev--disabled,
  .carousel__next--disabled {
    cursor: default;
    background-color: #f4f7ff;
    color: #2d31a6;
    opacity: 1;
  }

  .carousel__prev--disabled:hover,
  .carousel__next--disabled:hover {
    color: #2d31a6;
  }
  /********************************/
</style>
