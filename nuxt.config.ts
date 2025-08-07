import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    // Temporarily comment out i18n due to the import.meta issue
    // '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'nuxt-jsonld',
    '@zadigetvoltaire/nuxt-gtm',
    'nuxt-simple-sitemap',
    '@nuxt/content',
    '@nuxt/image',
  ],

  // Comment out i18n config temporarily
  // i18n: {
  //   locales: [
  //     { code: 'en', name: 'English', file: 'en.json' },
  //     { code: 'fr', name: 'Français', file: 'fr.json' }
  //   ],
  //   defaultLocale: 'en',
  //   lazy: true,
  //   langDir: 'locales/',
  // },

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            cyan: {
              300: '#67e8f9',
              400: '#22d3ee',
              500: '#06b6d4',
            },
            purple: {
              300: '#d8b4fe',
              400: '#c084fc',
              500: '#a855f7',
            },
          },
        },
      },
    },
  },

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
    url: process.env.NUXT_PUBLIC_SITE_URL?.trim() || 'https://merouaneamqor.com',
  },

  sitemap: {
    // Removed gzip option - not needed
  },

  vite: {
    optimizeDeps: {
      include: ['vue', '@vue/server-renderer']
    },
    server: {
      fs: {
        allow: ['..']
      }
    },
    build: {
      rollupOptions: {
        // Remove external packages that might cause issues
      }
    },
  },
  
  hooks: {
    'vite:extendConfig': (config: any) => {
      config.define = config.define || {}
      config.define.__VUE_I18N_FULL_INSTALL__ = JSON.stringify(true)
      config.define.__VUE_I18N_LEGACY_API__ = JSON.stringify(false)
    }
  },

  css: [
    '~/assets/css/fonts.css'
  ],

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

  compatibilityDate: '2024-09-30'
})