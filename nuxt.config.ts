// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss','nuxt-jsonld','@zadigetvoltaire/nuxt-gtm','nuxt-simple-sitemap'
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
  }
})