// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss','nuxt-jsonld','@zadigetvoltaire/nuxt-gtm'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en' // Replace 'en' with the appropriate language code
      },
      title: 'Merouane Amqor - Ruby on Rails Developer & Certified ScrumMaster®',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Merouane Amqor, an experienced Ruby on Rails Developer and Certified ScrumMaster® based in Casablanca, Morocco, specializing in innovative web development solutions.' },
        // Additional global meta tags can be added here
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