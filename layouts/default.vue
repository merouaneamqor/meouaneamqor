<template>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PNCBHTD5"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <div class="flex flex-col min-h-screen">
    <Navbar class="w-full" />
    <main class="flex-1 w-full">
      <slot />
    </main>
    <Footer class="w-full" />
  </div>
</template>

<style>
/* You may still need some scoped styles if they are very specific */
</style>

<script>
export default {
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "Merouane AMQOR",
        "jobTitle": "Full-Stack Developer | Certified ScrumMaster®",
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
        "description": "An experienced Software Engineer with a keen emphasis on emerging technologies, proficient across diverse platforms and programming languages, particularly excelling in back-end development. Possessing robust leadership abilities, he have a proven track record of effectively guiding teams to success."
      }
    }
  }
}
</script>
