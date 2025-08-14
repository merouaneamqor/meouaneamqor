<template>
  <header class="font-myriad relative">

    <!-- Clean iOS Navigation -->
    
    <!-- Hero Section with massive white space like Apple -->
    <div class="pt-20 sm:pt-56 lg:pt-64 pb-10 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto text-center relative z-40 min-h-[75vh] sm:min-h-[92vh] flex flex-col justify-center pointer-events-auto">
      
      <!-- Clean minimal title -->
      <h1 class="text-3xl sm:text-7xl lg:text-8xl font-semibold text-slate-900 mb-2 sm:mb-4 tracking-tight leading-none">
      Merouane Amqor
      </h1>
      
      <!-- Subtitle -->
      <p class="text-xl sm:text-3xl lg:text-4xl font-light text-slate-800 mb-6 sm:mb-8 tracking-tight">
        {{ t('header.subtitle') }}
      </p>
      <span class="text-sm sm:text-base lg:text-lg font-light text-slate-800 mb-8 tracking-tight">
        {{ t('header.tagline') }}
      </span>
      
      <!-- Clean description -->
      <p class="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto mb-10 sm:mb-16 leading-relaxed">
        {{ t('header.description_1') }}
        {{ t('header.description_2') }}
      </p>
     

      <!-- Clean Technologies List -->
      <div class="mb-12 sm:mb-20">
        <h3 class="text-xl sm:text-2xl font-semibold text-slate-900 mb-3 sm:mb-8">{{ t('common.core_technologies') }}</h3>
        <div class="relative">
          <div 
            class="chips-scroll flex gap-2 sm:gap-3 -mx-4 px-4 overflow-x-auto sm:overflow-visible flex-nowrap sm:flex-wrap justify-start sm:justify-center snap-x snap-mandatory"
            aria-label="Core practices"
          >
            <span
              v-for="tech in technologies"
              :key="tech"
              class="px-2.5 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-base font-medium text-slate-800 bg-white/70 border border-slate-200 backdrop-blur-xl hover:bg-white transition-colors whitespace-nowrap snap-start"
            >
              {{ tech }}
            </span>
          </div>
          <div class="sm:hidden pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent"></div>
          <div class="sm:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>

      <!-- iOS-style CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-3 justify-center items-center relative z-40 pointer-events-auto">
        <a href="mailto:marouaneamqor@gmail.com" 
           class="px-6 py-3 bg-slate-900 text-white text-base font-semibold rounded-full hover:bg-slate-800 transition-colors min-w-[140px] text-center">
          {{ t('common.get_in_touch') }}
        </a>
        <a href="/Merouane-AMQORResume-20250807.pdf" 
           download
           class="px-6 py-3 text-slate-800 text-base font-medium hover:text-slate-600 transition-colors">
          {{ t('common.download_resume') }}
        </a>
      </div>
    </div>
  
  </header>

</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
// Clean iOS-style "core practices" list (Scrum-focused)
const technologies = [
  'Scrum Mastery',
  'Agile Coaching',
  'Planning',
  'Daily Scrum',
  'Refinement',
  'Review',
  'Retro',
  'Stakeholder Facilitation',
  'Velocity & Burndown',
  'Impediment Removal',
  'Team Health',
  'Continuous Improvement'
]
</script>

<style scoped>
/* Minimal iOS-style: no extra background ornaments */
.chips-scroll { scrollbar-width: none; -ms-overflow-style: none; }
.chips-scroll::-webkit-scrollbar { display: none; }
</style>