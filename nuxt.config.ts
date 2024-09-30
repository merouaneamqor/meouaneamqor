export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-jsonld', '@zadigetvoltaire/nuxt-gtm', 'nuxt-simple-sitemap', '@nuxt/content', '@nuxt/image'],

  content: {
    highlight: {
      theme: 'github-light'
    },
    experimental: {
      clientDB: true
    }
  },

  nitro: {
    preset: 'vercel',
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://merouaneamqor.com',
  },

  sitemap: {
    hostname: process.env.NUXT_PUBLIC_SITE_URL || 'https://merouaneamqor.com',
    gzip: true,
  },

  vite: {
    optimizeDeps: {
      include: ['vue', '@vue/server-renderer']
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Merouane Amqor - Full-Stack Developer & Certified ScrumMaster®',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'AMQOR Merouane, an experienced Full-Stack Developer and Certified ScrumMaster® based in Casablanca, Morocco, specializing in innovative web development solutions.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  gtm: {
    id: 'GTM-PNCBHTD5',
  },

  ssr: true,

  routeRules: {
    '/**': { ssr: true }
  },

  compatibilityDate: '2024-09-30'
})