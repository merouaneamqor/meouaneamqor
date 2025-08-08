<template>
  <header class="font-myriad relative">

    <!-- Clean iOS Navigation -->
    
    <!-- Hero Section with massive white space like Apple -->
    <div class="pt-40 sm:pt-56 lg:pt-64 pb-16 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto text-center relative z-40 min-h-[85vh] sm:min-h-[92vh] flex flex-col justify-center pointer-events-auto">
      
      <!-- Clean minimal title -->
      <h1 class="text-5xl sm:text-7xl lg:text-8xl font-semibold text-slate-900 mb-4 tracking-tight leading-none">
      Merouane Amqor
      </h1>
      
      <!-- Subtitle -->
      <p class="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-800 mb-8 tracking-tight">
        Développeur Full‑stack & ScrumMaster Certifié
      </p>
      <span class="text-sm sm:text-base lg:text-lg font-light text-slate-700 mb-8 tracking-tight">
        Engineering Leader. Product Builder. Certified ScrumMaster®
      </span>
      
      <!-- Clean description -->
      <p class="text-lg sm:text-xl text-slate-800 max-w-2xl mx-auto mb-16 leading-relaxed">
        Conçois et livre des solutions web performantes et scalables. Encadre des équipes, accélère les cycles (
        −30%) et améliore la qualité en appliquant Scrum et les meilleures pratiques d’ingénierie.
      </p>
     

      <!-- Clean Technologies List -->
      <div class="mb-12 sm:mb-20">
        <h3 class="text-2xl font-semibold text-slate-900 mb-8">Technologies clés</h3>
        <div class="flex flex-wrap justify-center gap-2 sm:gap-3">
          <span
            v-for="tech in technologies"
            :key="tech"
            class="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium text-slate-800 bg-white/70 border border-slate-200 backdrop-blur-xl hover:bg-white transition-colors"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- iOS-style CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-3 justify-center items-center relative z-40 pointer-events-auto">
        <a href="mailto:marouaneamqor@gmail.com" 
           class="px-5 sm:px-6 py-3 bg-slate-900 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-slate-800 transition-colors min-w-[140px] sm:min-w-[160px] text-center">
          Get in touch
        </a>
        <a href="/Merouane-AMQORResume-20250807.pdf" 
           download
           class="px-5 sm:px-6 py-3 text-slate-800 text-sm sm:text-base font-medium hover:text-slate-600 transition-colors">
          Download resume
        </a>
      </div>
    </div>
  
  </header>

</template>

<script setup lang="ts">
// Clean iOS-style technologies list
const technologies = [
  'Swift',
  'Ruby',
  'iOS Development', 
  'Engineering Leadership',
  'AWS Solutions',
  'Agile & Scrum',
  'Team Management',
  'Ruby on Rails',
  'Vue.js',
  'React',
  'Next.js',
  'Nuxt.js',
  'Node.js',
  'Docker',
  'System Design'
]
</script>

<style scoped>
/* Minimal iOS-style: no extra background ornaments */
</style>