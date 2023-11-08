// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
    '@nuxt/image',
    '@nuxtjs/device',
    'vue3-carousel-nuxt',
  ],
  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 300, 400, 500, 700],
      },
    },
    display: 'swap',
  },

  app: {
    head: {
      meta: [
        {
          name: 'robots',
          content: 'noindex, nofollow',
        },
      ],
    },
  },
})
