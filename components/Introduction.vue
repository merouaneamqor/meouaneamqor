<template>
  <section class="bg-transparent font-myriad relative">
    
    <!-- Hero Section with massive white space like Apple -->
    <div class="pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto text-center relative z-20">
      
      <!-- Clean minimal title -->
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-900 mb-6 tracking-tight leading-none">
        Parcours & Impact
      </h1>
      
      <!-- Main value proposition -->
      <p class="text-xl sm:text-2xl lg:text-3xl font-light text-slate-800 mb-8 tracking-tight leading-relaxed max-w-4xl mx-auto">
        Développe des produits qui fonctionnent simplement et passent à l’échelle.
      </p>
      
      <!-- Supporting statement -->
      <p class="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
        Santé, e‑commerce et plateformes SaaS : je code et j’encadre des équipes pour livrer un impact mesurable.
      </p>
      
      <!-- Philosophy statement -->
      <p class="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
        Architecture propre, interfaces humaines et agilité pragmatique pour des expériences réellement simples.
      </p>
      
      <!-- Clean Stats Section -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
        <div class="text-center">
          <div class="text-4xl lg:text-5xl font-semibold text-slate-900 mb-2">8</div>
          <div class="text-lg text-slate-700">Developers Led</div>
        </div>
        <div class="text-center">
          <div class="text-4xl lg:text-5xl font-semibold text-slate-900 mb-2">10K+</div>
          <div class="text-lg text-slate-700">Monthly Users</div>
        </div>
        <div class="text-center">
          <div class="text-4xl lg:text-5xl font-semibold text-slate-900 mb-2">30%</div>
          <div class="text-lg text-slate-700">Cycle Reduction</div>
        </div>
        <div class="text-center">
          <div class="text-4xl lg:text-5xl font-semibold text-slate-900 mb-2">93%</div>
          <div class="text-lg text-slate-700">Sprint Success</div>
        </div>
      </div>

      <!-- Clean Technologies List -->
      <div class="mb-12 sm:mb-20">
        <h3 class="text-2xl font-semibold text-slate-900 mb-8">Compétences techniques</h3>
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
      <div class="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <NuxtLink 
          to="/portfolio" 
          class="px-5 sm:px-6 py-3 bg-slate-900 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-slate-800 transition-colors min-w-[160px] text-center">
          View Portfolio
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          class="px-5 sm:px-6 py-3 text-slate-800 text-sm sm:text-base font-medium hover:text-slate-600 transition-colors">
          Get in Touch
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Updated technologies based on resume
const technologies = [
  'Ruby on Rails',
  'Angular',
  'React',
  'Vue.js',
  'JavaScript',
  'PHP',
  'MongoDB',
  'SQL',
  'AWS',
  'Heroku',
  'Laravel',
  'Nuxt.js',
  'Next.js',
  'Tailwind CSS',
  'Figma',
  'Scrum & Agile'
]
</script>

<style scoped>
/* Clean iOS-style minimal styles */
</style>