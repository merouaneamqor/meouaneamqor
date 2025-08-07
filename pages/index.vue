<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 font-sans">
    
    <!-- Hero Section with Management Focus -->
    <Header />
    
    <!-- Professional Introduction -->
    <Introduction />
    
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
useHead({
  title: 'Merouane Amqor - Engineering Manager & Certified ScrumMaster®',
  meta: [
    { 
      name: 'description', 
      content: 'Experienced Engineering Manager and Certified ScrumMaster® specializing in team leadership, agile transformation, and strategic technical solutions. Leading high-performing teams across healthcare and e-commerce sectors.' 
    },
    { 
      name: 'keywords', 
      content: 'engineering manager, scrum master, team leadership, agile transformation, technical leadership, software development, project management, morocco, casablanca' 
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Merouane Amqor Portfolio' }
  ]
});

useSeoMeta({
  ogTitle: 'Merouane Amqor - Engineering Manager & Certified ScrumMaster®',
  ogDescription: 'Experienced Engineering Manager and Certified ScrumMaster® leading high-performing teams and driving digital transformation across healthcare and e-commerce sectors.',
  ogImage: 'https://merouaneamqor.com/merouane_amqor.jpg',
  ogUrl: 'https://merouaneamqor.com',
  twitterCard: 'summary_large_image',
  twitterSite: '@merouaneamqor',
  twitterCreator: '@merouaneamqor'
});

// Professional JSON-LD structured data for better SEO
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Merouane Amqor',
  jobTitle: 'Engineering Manager & Certified ScrumMaster®',
  description: 'Experienced Engineering Manager specializing in team leadership, agile transformation, and strategic technical solutions.',
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
    description: 'Master in Computer Science - Engineering in Networks & Multimedia'
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