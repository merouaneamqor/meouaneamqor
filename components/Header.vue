<template>
  <header class="font-myriad relative">

    <!-- Clean iOS Navigation -->
    
    <!-- Hero Section with massive white space like Apple -->
    <div class="pt-64 pb-24 px-6 max-w-6xl mx-auto text-center relative z-40 h-screen flex flex-col justify-center pointer-events-auto">
      
      <!-- Clean minimal title -->
      <h1 class="text-5xl sm:text-7xl lg:text-8xl font-semibold text-slate-900 mb-4 tracking-tight leading-none">
      iAmqor
      </h1>
      
      <!-- Subtitle -->
      <p class="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-800 mb-8 tracking-tight">
        Senior Engineering Manager
      </p>
      <span class="text-sm sm:text-base lg:text-lg font-light text-slate-700 mb-8 tracking-tight">
        Engineering Leader. Product Builder. Certified ScrumMaster®
      </span>
      
      <!-- Clean description -->
      <p class="text-lg sm:text-xl text-slate-800 max-w-2xl mx-auto mb-16 leading-relaxed">
        Building exceptional engineering teams and scalable solutions.
        Expert in SaaS development, cloud architecture, and delivering real-world impact — one sprint at a time.
      </p>
     

      <!-- Clean Technologies List -->
      <div class="mb-20">
        <h3 class="text-2xl font-semibold text-slate-900 mb-8">Core Technologies</h3>
        <div class="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          <span
            v-for="tech in technologies"
            :key="tech"
            class="px-4 py-2 rounded-full text-base font-medium text-slate-800 bg-white/70 border border-slate-200 backdrop-blur-xl hover:bg-white transition-colors"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- iOS-style CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-3 justify-center items-center relative z-40 pointer-events-auto">
        <a href="mailto:marouaneamqor@gmail.com" 
           class="px-6 py-3 bg-slate-900 text-white text-base font-semibold rounded-full hover:bg-slate-800 transition-colors min-w-[140px] text-center">
          Get in touch
        </a>
        <a href="/Merouane-AMQOR-en.pdf" 
           download
           class="px-6 py-3 text-slate-800 text-base font-medium hover:text-slate-600 transition-colors">
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