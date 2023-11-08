<template>
  <div class="flex flex-col items-center">
    <div class="w-full text-center text-body2 text-text-secondary">
      {{ title }}
    </div>
    <div
      class="flex mt-4 max-w-fit select-none rounded-full border border-solid border-border-main p-0.5"
    >
      <div
        class="hi"
        :class="[
          btnStyle,
          {
            [btnHoverStyle]: select !== 'left',
            [selectedStyle]: select === 'left',
          },
        ]"
        @click="changeSelectValue('left', leftButtonValue)"
      >
        <p class="text-center text-subtitle1">
          {{ leftButtonValue }}
        </p>
      </div>

      <div
        :class="{
          [btnStyle]: true,
          [btnHoverStyle]: select !== 'right',
          [selectedStyle]: select === 'right',
        }"
        @click="changeSelectValue('right', rightButtonValue)"
      >
        <p class="text-center text-subtitle1">
          {{ rightButtonValue }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  type proptype = {
    rightButtonValue: string
    leftButtonValue: string
    title: string
  }

  const { rightButtonValue, leftButtonValue, title } = defineProps<proptype>()

  const emit = defineEmits(['onChange'])

  const select = ref<string>('left')

  const changeSelectValue = (val: string, selected: string) => {
    emit('onChange', selected)
    select.value = val
  }

  const selectedStyle =
    'bg-primary-main shadow-1 rounded-full text-white-default'
  const btnStyle =
    'h-[50px] text-primary-main min-w-[120px] flex cursor-pointer items-center justify-center rounded-full p-4 text-center bg-contain'

  const btnHoverStyle =
    'hover:bg-grey-hover hover:transition-[background-color] hover:duration-300'
</script>
