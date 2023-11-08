<template>
  <nav
    class="sticky top-0 z-50 h-20 transition-all shadow-1 bg-white-default mb-6 sm:mb-16 md:mb-12 lg:mb-24"
  >
    <BaseContainer classes="h-full">
      <div class="flex h-full items-center justify-between">
        <div class="flex">
          <NuxtLink to="/">
            <NuxtImg
              src="/cloudzy-light.svg"
              class="h-11"
              width="169"
              height="45"
            />
          </NuxtLink>
        </div>

        <div
          class="tansition flex items-center duration-300 max-md:invisible max-md:absolute max-md:left-0 max-md:right-0 max-md:top-[calc(100%-8px)] max-md:w-full max-md:bg-white-default max-md:opacity-0 max-md:shadow-0.25"
          :class="{
            'max-md:!visible max-md:!top-full max-md:max-h-[calc(100vh-80px)] max-md:w-full max-md:flex-col max-md:items-start max-md:overflow-auto max-md:!opacity-100':
              openNav,
          }"
        >
          <ul
            class="flex grow list-none items-center max-md:w-full max-md:flex-col max-md:items-start max-md:px-2 max-md:py-3 max-sm:px-6 max-sm:pb-8 [&>li]:cursor-pointer text-text-primary"
          >
            <li
              v-if="isDesktop"
              class="max-md:flex max-md:h-12 max-md:w-full max-md:items-center max-md:border-0 max-md:border-b max-md:border-solid max-md:border-text-grey max-sm:px-4"
            >
              <BaseDropDown
                anchor-style="rounded px-6 py-[5px] transition duration-300 hover:bg-primary-soft"
              >
                <template #anchor>
                  <div class="flex cursor-pointer items-center">
                    <span class="max-md:w-full text-subtitle1">Products</span>
                    <IconChevronDown />
                  </div>
                </template>
                <ul
                  class="absolute left-2/4 top-14 -translate-x-2/4 list-none rounded bg-white-default px-0 py-2 shadow-1"
                >
                  <li
                    v-for="item in vpsItems"
                    :key="item.link"
                    class="transition duration-300 hover:bg-primary-soft"
                  >
                    <NuxtLink
                      v-if="item.name.toLowerCase() !== 'more'"
                      class="navbarLink flex whitespace-nowrap px-4 py-1.5 text-body2 text-text-primary no-underline"
                      :to="item.link"
                    >
                      {{ item.name }}
                    </NuxtLink>
                    <BaseDropDown v-else anchor-style="px-4 py-1.5">
                      <template #anchor>
                        <div
                          class="flex cursor-pointer items-center justify-between"
                        >
                          <span class="mr-2 text-body2">More</span>
                          <IconChevronRight :size="20" />
                        </div>
                      </template>
                      <ul
                        class="absolute left-full top-0 list-none rounded bg-white-default px-0 py-2 shadow-1"
                      >
                        <li
                          class="transition duration-300 hover:bg-primary-soft"
                        >
                          <NuxtLink
                            class="navbarLink flex whitespace-nowrap px-4 py-1.5 text-body2 text-text-primary no-underline"
                            to="/"
                          >
                            MikroTik VPS
                          </NuxtLink>
                        </li>
                        <li
                          class="transition duration-300 hover:bg-primary-soft"
                        >
                          <NuxtLink
                            class="navbarLink flex whitespace-nowrap px-4 py-1.5 text-body2 text-text-primary no-underline"
                            to="/"
                          >
                            Android VPS
                          </NuxtLink>
                        </li>
                      </ul>
                    </BaseDropDown>
                  </li>
                </ul>
              </BaseDropDown>
            </li>
            <li
              v-else
              class="max-md:flex max-md:min-h-[3rem] max-md:w-full max-md:items-center max-md:border-0 max-md:border-b max-md:border-solid max-md:border-text-grey max-sm:px-4"
            >
              <BaseAccordion
                :items="navbarAccordionItems"
                title-style="text-subtitle1 mb-2"
              >
                <template #item-content="{ index }">
                  <div class="pb-6">
                    <span
                      v-for="item in navbarAccordionItems[index].content"
                      :key="item.link"
                      class="flex w-full py-2 px-4 text-body2"
                    >
                      {{ item.name }}
                    </span>
                  </div>
                </template>
              </BaseAccordion>
            </li>
            <li
              v-for="navLink in navbarLinks"
              :key="navLink.href"
              class="md:rounded transition duration-300 hover:bg-primary-soft max-md:flex max-md:w-full max-md:items-center max-md:border-0 max-md:border-b max-md:border-solid max-md:border-text-grey max-md:py-2.5 max-sm:px-4"
            >
              <NuxtLink
                class="block py-1 text-subtitle1 text-text-primary no-underline max-md:w-full sm:px-6"
                :to="navLink.href"
              >
                {{ navLink.text }}
              </NuxtLink>
            </li>

            <li class="mt-8 w-full max-sm:px-4 sm:hidden text-primary-main">
              <NuxtLink to="/" class="text-inherit no-underline">
                <BaseButton
                  classes="mr-2 h-9 w-full text-primary-main border justify-center "
                >
                  <span class="uppercase"> sign in</span>
                </BaseButton>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex items-center justify-end">
          <NuxtLink>
            <BaseButton
              classes="bg-primary-main text-white-default text-btnSmall hover:bg-primary-dark transition duration-300"
            >
              <span> Sign in </span>
            </BaseButton>
          </NuxtLink>
          <div
            class="relative ml-3 flex w-10 items-center max-sm:justify-end md:hidden"
          >
            <span class="flex h-4 w-px bg-grey-200 max-sm:hidden"></span>
            <div class="h-7 w-7" @click="openNav = !openNav">
              <button
                class="absolute right-0 top-2/4 ml-4 h-[3px] w-6 -translate-y-2/4 rounded border-0 bg-primary-main outline-0 transition duration-300 before:absolute before:right-0 before:-mt-2.5 before:ml-4 before:h-[3px] before:w-6 before:rounded before:bg-primary-main before:transition before:duration-300 before:content-[''] after:absolute after:right-0 after:ml-4 after:mt-1.5 after:h-[3px] after:w-6 after:rounded after:bg-primary-main after:transition after:duration-300 after:content-['']"
                :class="{
                  'bg-opacity-0 before:!-mt-0.5 before:rotate-45 after:!-mt-0.5 after:-rotate-45':
                    openNav,
                }"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </nav>
</template>

<script setup lang="ts">
  import { IconChevronRight, IconChevronDown } from '@tabler/icons-vue'
  const { isDesktop } = useDevice()

  const navbarLinks = [
    { href: '/', text: 'Pricing' },
    { href: '/', text: 'Blog' },
    { href: '/', text: 'About Us' },
  ]
  const vpsItems = [
    { name: 'Linux VPS', link: `/` },
    { name: 'Windows VPS', link: `/` },
    { name: 'RDP VPS', link: `/` },
    { name: 'Forex VPS', link: `/` },
    { name: 'Cloud Server', link: `/` },
    { name: 'More', link: `#` },
  ]
  const openNav = ref(false)
  const accordionItems = [
    ...vpsItems.filter((item) => item.name.toLowerCase() !== 'more'),
    { name: 'MikroTik VPS', link: '/' },
    { name: 'Android VPS', link: '/' },
  ]
  const navbarAccordionItems = ref([
    { title: 'Products', content: accordionItems, isOpen: false },
  ])
</script>
