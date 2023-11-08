<template>
  <div class="flex items-center justify-center mt-[12px]" :class="classes">
    <div class="relative w-full">
      <label
        class="absolute left-[12px] text-body1 -top-[12px] bg-white-default px-[5px]"
        :class="isOptionsExpanded ? 'text-primary-main' : 'text-text-secondary'"
      >
        {{ label }}
      </label>
      <button
        class="flex items-center justify-between px-[14px] py-[8.5px] bg-white-default w-full rounded"
        :class="
          isOptionsExpanded
            ? 'border-2 border-primary-main'
            : 'border border-grey-400'
        "
        @click="isOptionsExpanded = !isOptionsExpanded"
        @blur="isOptionsExpanded = false"
      >
        <span class="text-text-primary">{{ selectedOption }}</span>
        <IconChevronDown
          v-if="isOptionsExpanded"
          class="h-4 w-4 text-grey-400"
        />
        <IconChevronUp
          v-if="isOptionsExpanded === false"
          class="h-4 w-4 text-grey-400"
        />
      </button>

      <ul
        v-show="isOptionsExpanded"
        class="absolute left-0 right-0 mb-4 shadow-1 bg-white-default rounded cursor-pointer overflow-hidden max-h-[250px] overflow-y-auto"
      >
        <li
          v-for="option in options"
          :key="option.id"
          class="px-3 py-2 transition-colors duration-300 hover:bg-grey-50"
          :class="option.value === selectedOption ? 'bg-primary-light' : ''"
          @mousedown.prevent="setOption(option)"
        >
          {{ option.value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IconChevronDown, IconChevronUp } from '@tabler/icons-vue'

  type objectProp = {
    id: number | string
    value: string
  }

  type proptype = {
    options: objectProp[]
    label: string
    defaultSelect?: string
    classes?: string
  }
  const { options, classes, label, defaultSelect } = defineProps<proptype>()
  const emit = defineEmits(['onChange'])

  const isOptionsExpanded = ref(false)
  const selectedOption = ref(defaultSelect)

  const setOption = (option: objectProp) => {
    selectedOption.value = option.value
    isOptionsExpanded.value = false
    emit('onChange', option.id)
  }
</script>
