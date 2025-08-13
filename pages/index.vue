<template>
  <div class="min-h-screen flex flex-col text-slate-900 font-sans">
    
    <!-- Hero Section with Management Focus -->
    <Header />

    <!-- Promo Banner with your info -->
    <PromoBanner
      class="mt-0"
      :title="t('promo.title')"
      speakerName="Merouane Amqor"
      :speakerRole="t('header.subtitle')"
      avatarUrl="/merouane_amqor.jpg"
      :leftPartnerLabel="t('promo.left')"
      :rightPartnerLabel="t('promo.right')"
    />
    
    <!-- Professional Introduction -->
    <Introduction />
    
    <!-- Featured iOS-style grid -->
    <FeaturedTiles />

    <!-- Core Competencies (Leadership-focused) -->
    <Skills />
    
    <!-- Leadership Journey -->
    <Experience />
    
    <!-- Academic Foundation -->
    <Education />
    
    <!-- Strategic Projects Portfolio -->
    <Projects />
    
  </div>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()
useHead({
  title: () => locale.value === 'fr' 
    ? 'Merouane Amqor - Engineering Manager & Certified ScrumMaster®' 
    : 'Merouane Amqor - Engineering Manager & Certified ScrumMaster®',
  meta: [
    { 
      name: 'description', 
      content: () => locale.value === 'fr'
        ? "Ingénieur Manager et Certified ScrumMaster® expérimenté, spécialisé dans le leadership d'équipe, la transformation agile et des solutions techniques stratégiques."
        : 'Experienced Engineering Manager and Certified ScrumMaster® specializing in team leadership, agile transformation, and strategic technical solutions.' 
    },
    { 
      name: 'keywords', 
      content: () => locale.value === 'fr'
        ? 'engineering manager, scrum master, leadership, transformation agile, direction technique, développement logiciel, gestion de projet, maroc, casablanca'
        : 'engineering manager, scrum master, team leadership, agile transformation, technical leadership, software development, project management, morocco, casablanca' 
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Merouane Amqor Portfolio' }
  ]
});

useSeoMeta({
  ogTitle: () => locale.value === 'fr'
    ? 'Merouane Amqor - Engineering Manager & Certified ScrumMaster®'
    : 'Merouane Amqor - Engineering Manager & Certified ScrumMaster®',
  ogDescription: () => locale.value === 'fr'
    ? "Ingénieur Manager et Certified ScrumMaster® dirigeant des équipes performantes et pilotant la transformation digitale dans la santé et l'e-commerce."
    : 'Experienced Engineering Manager and Certified ScrumMaster® leading high-performing teams and driving digital transformation across healthcare and e-commerce sectors.',
  ogImage: 'https://merouaneamqor.com/merouane_amqor.jpg',
  ogUrl: 'https://merouaneamqor.com',
  twitterCard: 'summary_large_image',
  twitterSite: '@merouaneamqor',
  twitterCreator: '@merouaneamqor'
});

// Resolve strings for JSON-LD to satisfy typings
const jsonldDescription = locale.value === 'fr'
  ? "Ingénieur Manager expérimenté, spécialisé dans le leadership d'équipe, la transformation agile et des solutions techniques stratégiques."
  : 'Experienced Engineering Manager specializing in team leadership, agile transformation, and strategic technical solutions.'
const jsonldAlumniDesc = locale.value === 'fr'
  ? "Master en Informatique - Ingénierie des Réseaux & Multimédia"
  : 'Master in Computer Science - Engineering in Networks & Multimedia'

// Professional JSON-LD structured data for better SEO
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Merouane Amqor',
  jobTitle: 'Engineering Manager & Certified ScrumMaster®',
  description: jsonldDescription,
  url: 'https://merouaneamqor.com',
  image: 'https://merouaneamqor.com/merouane_amqor.jpg',
  sameAs: [
    'https://linkedin.com/in/merouane-amqor',
    'https://github.com/merouaneamqor',
    'https://douq.ma'
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Casablanca',
    addressCountry: 'Morocco'
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'SUPEMIR',
    description: jsonldAlumniDesc
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Certified ScrumMaster®',
      credentialCategory: 'Professional Certification',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Scrum Alliance'
      }
    }
  ]
});
</script>

<style scoped>
/* Professional page-level styles */
.font-sans {
  font-family: 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', sans-serif;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Professional focus ring for accessibility */
*:focus-visible {
  outline: 2px solid rgb(16, 185, 129);
  outline-offset: 2px;
}

/* Enhanced backdrop blur support */
@supports (backdrop-filter: blur(12px)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(12px);
  }
  
  .backdrop-blur-md {
    backdrop-filter: blur(16px);
  }
  
  .backdrop-blur-xl {
    backdrop-filter: blur(24px);
  }
}
</style>  