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
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/seo',
    'nuxt-security',
  ],

  // Nuxt font config
  fonts: {
    defaults: {
      weights: [300, 500, 700, 900],
      styles: ['normal', 'italic'],
    },
  },

  // Nuxt security config
  security: {
    nonce: true,
    headers: {
      contentSecurityPolicy: {
        'style-src':
          process.env.NODE_ENV === 'development'
            ? ["'self'", "'unsafe-inline'"]
            : ["'self'", "'unsafe-inline'", 'nonce-{{nonce}}'],
        'script-src':
          process.env.NODE_ENV === 'development'
            ? ["'self'", "'unsafe-inline'"]
            : ["'self'", "'unsafe-inline'", 'nonce-{{nonce}}'],
      },
    },
  },

  // Nuxt SEO config
  site: {
    url: '#',
    name: 'HelloTMDB - Movies App',
    description: 'A webapp on top of ',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  ogImage: {
    enabled: false,
  },
});
