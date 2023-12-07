<template>
  <section class="container mx-auto p-8">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">About Merouane Amqor</h2>
      <img class="rounded-full mx-auto w-32 h-32 object-cover" src="/assets/images/me.jpeg" alt="Merouane Amqor">
      <div class="text-gray-800 mt-6">
        <p class="mb-4">
          Merouane Amqor, an entrepreneurial visionary from Casablanca, exemplifies the blend of technical prowess and innovative thinking. His journey is not just about coding; it's about creating impactful solutions that resonate with market needs.
        </p>
        <p class="mb-4">
          Merouane's ethos revolves around continuous learning and adapting. His experience with leading teams at DabaDoc and co-founding Meram / Texam reflects his commitment to excellence and leadership.
        </p>
        <p class="mb-4">
          Beyond his professional endeavors, Merouane is passionate about mentoring budding entrepreneurs, sharing insights on leveraging technology to solve real-world problems.
        </p>
        <p class="mb-4">
          Looking ahead, Merouane aims to dive deeper into the realms of tech innovation, nurturing ideas that have the potential to revolutionize industries.
        </p>
        <p class="mb-4">
          Connect with Merouane to explore collaborative opportunities or gain insights into the entrepreneurial journey.
        </p>
      </div>
    </div>
  </section>

</template>

<script >
export default {
jsonld() {
    return {
  "@context": "http://schema.org",
  "@type": "Person",
  "name": "Merouane AMQOR",
  "jobTitle": "Ruby on Rails Developer | Certified ScrumMaster®",
  "worksFor": {
    "@type": "Organization",
    "name": "DabaDoc"
  },
  "url": "http://linkedin.com/in/merouane-amqor",
  "email": "marouane.amqor@gmail.com",
  "telephone": "+212701086726",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Casablanca, Morocco"
  },
  "alumniOf": "SUPEMIR, Casablanca, Morocco",
  "sameAs": [
    "https://www.linkedin.com/in/merouane-amqor",
    "https://github.com/merouaneamqor"
  ]
}}}
</script>
