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
        {{ t('header.subtitle') }}
      </p>
      <span class="text-sm sm:text-base lg:text-lg font-light text-slate-800 mb-8 tracking-tight">
        {{ t('header.tagline') }}
      </span>
      
      <!-- Clean description -->
      <p class="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed">
        {{ t('header.description_1') }}
        {{ t('header.description_2') }}
      </p>
     

      <!-- Clean Technologies List -->
      <div class="mb-20">
        <h3 class="text-2xl font-semibold text-slate-900 mb-8">{{ t('common.core_technologies') }}</h3>
        <div class="flex flex-wrap justify-center gap-2.5 sm:gap-3">
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
  'Sprint Planning',
  'Daily Scrum',
  'Backlog Refinement',
  'Sprint Review',
  'Sprint Retrospective',
  'Stakeholder Facilitation',
  'Velocity & Burndown',
  'Impediment Removal',
  'Team Health & Morale',
  'Continuous Improvement'
]
</script>

<style scoped>
/* Minimal iOS-style: no extra background ornaments */
</style>