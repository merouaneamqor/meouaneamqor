<template>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PNCBHTD5"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <div>
    <Navbar />
    <slot />
    <Footer/>
  </div>
</template>
<script>
export default {
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "Merouane AMQOR",
        "jobTitle": "Ruby on Rails Developer | Certified ScrumMaster®",
        "url": "http://merouaneamqor.com",
        "email": "marouane.amqor@gmail.com",
        "telephone": "+212701086726",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Casablanca, Morocco"
        },
        "image": "https://avatars.githubusercontent.com/u/37594453?v=4",
        "sameAs": [
          "https://linkedin.com/in/merouane-amqor",
          "https://instagram.com/merouaneamqor"
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
        "description": "Experienced Software Engineer with a strong focus on Ruby on Rails. Skilled in a variety of platforms and languages, with a particular proficiency in back-end development. Strong leadership skills and experienced in leading teams."
      }
    }
  }
}
</script>
