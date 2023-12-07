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
    return        {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Merouane AMQOR",
  "image": "https://avatars.githubusercontent.com/u/37594453?v=4",
  "jobTitle": "Ruby on Rails Developer | Certified ScrumMaster®",
  "email": "marouane.amqor@gmail.com",
  "telephone": "+212701086726",
  "url": "http://linkedin.com/in/merouane-amqor",
  "sameAs": "http://linkedin.com/in/merouane-amqor",
  "knowsLanguage": ["French", "English", "Arabic"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Casablanca, Morocco"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "SUPEMIR, Casablanca, Morocco"
  },
  "memberOf": {
    "@type": "Organization",
    "name": "Scrum Alliance"
  },
  "worksFor": [
    {
      "@type": "Organization",
      "name": "DabaDoc",
      "description": "Full-stack Developer",
      "startDate": "2018-09",
      "endDate": "2022-04"
    },
    {
      "@type": "Organization",
      "name": "Meram / Texam",
      "description": "Co-founder",
      "startDate": "2018",
      "endDate": "2019"
    },
    {
      "@type": "Organization",
      "name": "Riad Raha",
      "description": "Information System Developer",
      "startDate": "2021",
      "endDate": "2021"
    },
    {
      "@type": "Organization",
      "name": "Majorel",
      "description": "Back-end Developer"
    },
    {
      "@type": "Organization",
      "name": "Beyond Expertise",
      "description": "Front-end / Back-end Developer"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certified ScrumMaster®",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Scrum Alliance"
      }
    }
  ]
}

  },
}
</script>