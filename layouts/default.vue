<template>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PNCBHTD5"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <div class="flex flex-col min-h-screen relative">
    <BlurBackground class="pointer-events-none" />
    <Navbar class="w-full" />
    <main class="flex-1 w-full">
      <slot />
    </main>
    <Footer class="w-full" />
  </div>
</template>

<script setup>
import { useHead } from '#app'
import BlurBackground from '~/components/BlurBackground.vue'
const { locale } = useI18n()

const keywordSuggestions = [
  "Full-Stack Developer",
  "Certified ScrumMaster",
  "Web Development Expert",
  "Software Engineering Leadership",
  "Rapid Prototyping Specialist",
  "Solution Design Expertise",
  "Tech Market Research",
  "Technology Benchmarking",
  "MongoDB Developer",
  "AngularJS Specialist",
  "Vue.js Developer",
  "React Developer",
  "Ruby on Rails Developer",
  "Node.js Developer",
  "AWS Expert",
  "Docker Specialist",
  "Git Version Control",
  "RESTful API Development",
  "Front-End Development",
  "Back-End Development",
  "Database Management Expert",
  "Server Administration Skills",
  "Team Leadership in Tech",
  "Web Application Development",
  "Nuxt.js Developer",
  "Laravel Developer",
  "Blockchain in Web Solutions",
  "Technology Innovation",
  "Web Solutions Architect",
  "Tech Project Leadership"
]

useHead({
  htmlAttrs: {
    lang: () => (locale.value === 'fr' ? 'fr' : 'en')
  },
  meta: [
    { name: 'keywords', content: keywordSuggestions.join(', ') }
  ]
})
</script>

<script>
export default {
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "Merouane AMQOR",
        "jobTitle": "Software Engineer | Certified ScrumMaster®",
        "url": "https://merouaneamqor.com",
        "email": "marouane.amqor@gmail.com",
        "telephone": "+212701086726",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Casablanca, Morocco"
        },
        "image": "https://merouaneamqor.com/merouane_amqor.jpg",
        "sameAs": [
          "https://linkedin.com/in/merouane-amqor",
          "https://instagram.com/merouaneamqor",
          "https://rubygems.org/profiles/merouaneamqor",
          "https://github.com/merouaneamqor",
          "https://www.crunchbase.com/person/amqor-merouane",
          "https://en.wikipedia.org/wiki/AMQOR_Merouane",
        ],
        "interactionStatistic": [
          {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/FollowAction",
            "userInteractionCount": 0 
          },
          {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/LikeAction",
            "userInteractionCount": 0
          }
        ],
        "description": "Merouane AMQOR, an experienced Software Engineer and Certified ScrumMaster® based in Casablanca, Morocco, specializes in innovative web development solutions. Skilled in a variety of platforms and languages, with a particular proficiency in back-end development, Merouane is known for his strong leadership skills and experience in leading teams to achieve their goals."
      }
    }
  }
}
</script>

<style>
/* You may still need some scoped styles if they are very specific */
</style>