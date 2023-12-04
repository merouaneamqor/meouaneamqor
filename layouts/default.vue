<template>
  <div>
<Navbar />
    <slot />
    <footer>
      <!-- Footer Content -->
    </footer>
  </div>
</template>
<script>
export default {
  jsonld() {
    return {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Merouane AMQOR",
  "jobTitle": "Ruby on Rails Developer | Certified ScrumMaster®",
  "email": "marouane.amqor@gmail.com",
  "telephone": "+212701086726",
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
  "url": "http://linkedin.com/in/merouane-amqor",
  "sameAs": [
    "http://linkedin.com/in/merouane-amqor"
  ],
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
  "skill": [
    "Ruby on Rails development",
    "Agile methodologies",
    "Team leadership",
    "Back-end deployment",
    "Rapid prototyping",
    "Solution design",
    "Market research",
    "Benchmarking"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certified ScrumMaster®",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Scrum Alliance"
      },
      "validUntil": "2025-04-19"
    }
  ],
  "knowsLanguage": ["French", "English", "Arabic"]
}

  },
}
</script>