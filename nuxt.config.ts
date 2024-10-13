// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt app config
  compatibilityDate: '2024-04-03',
  runtimeConfig: {
    public: {
      TMDB_KEY: process.env.NUXT_PUBLIC_TMDB_KEY,
    },
  },
  ssr: false,
  hooks: {
    'prerender:routes'({ routes }) {
      routes.clear();
    },
  },
  imports: {
    dirs: ['types/**'],
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  css: ['~/assets/css/globals.css'],
  experimental: {
    typedPages: true,
    viewTransition: true,
  },

  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/seo',
    'nuxt-security',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@vueuse/nuxt',
  ],

  // Nuxt fonts module config
  fonts: {
    defaults: {
      weights: [300, 500, 700, 900],
      styles: ['normal', 'italic'],
    },
  },

  // Nuxt color-mode module config
  colorMode: {
    preference: 'dark',
  },

  // Nuxt Security module config
  security: {
    nonce: true,
    headers: {
      contentSecurityPolicy: {
        'img-src': false,
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

  // Nuxt SEO module config
  site: {
    url: 'hellotmdb.pages.dev',
    name: 'HelloTMDB - Movies App',
    description: 'A webapp on top of ',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  ogImage: {
    enabled: false,
  },
});