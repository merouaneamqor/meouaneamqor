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
  "Certified ScrumMaster",
  "Scrum Master",
  "Agile Coaching",
  "Agile Transformation",
  "Sprint Planning",
  "Daily Scrum",
  "Backlog Refinement",
  "Sprint Review",
  "Sprint Retrospective",
  "Team Leadership in Tech",
  "Stakeholder Facilitation",
  "Impediment Removal",
  "Continuous Improvement",
  "Velocity Tracking",
  "Burndown and Burnup",
  "Release Planning",
  "Outcome Metrics",
  "Cross-team Collaboration",
  "Scrum of Scrums",
  "Value Stream Mapping"
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
		return [
			{
				"@context": "https://schema.org",
				"@type": "WebSite",
				"name": "Merouane Amqor",
				"url": "https://merouaneamqor.com",
				"inLanguage": "en",
				"description": "Certified ScrumMaster® & Engineering Leader. Agile delivery, facilitation, and high-performing teams.",
				"publisher": {
					"@type": "Person",
					"name": "Merouane Amqor",
					"url": "https://merouaneamqor.com"
				}
			},
			{
				"@context": "https://schema.org",
				"@type": "ProfilePage",
				"mainEntity": {
					"@type": "Person",
					"name": "Merouane AMQOR",
					"jobTitle": "Certified ScrumMaster® | Engineering Leader",
					"url": "https://merouaneamqor.com",
					"email": "marouaneamqor@gmail.com",
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
						"https://www.crunchbase.com/person/amqor-merouane"
					],
					"description": "Certified ScrumMaster® and engineering leader focused on Agile delivery and continuous improvement."
				}
			}
		]
  }
}
</script>

<style>
/* You may still need some scoped styles if they are very specific */
</style>