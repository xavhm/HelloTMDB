// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  experimental: {
    typedPages: true,
    viewTransition: true,
  },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/globals.css'],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],
  fonts: {
    defaults: {
      weights: [300, 500, 700, 900],
      styles: ['normal', 'italic'],
    },
  }
})
