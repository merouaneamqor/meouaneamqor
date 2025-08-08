<template>
  <section class="bg-transparent font-myriad relative">
    
    <!-- Hero Section with massive white space like Apple -->
    <div class="pt-32 pb-24 px-6 max-w-6xl mx-auto text-center relative z-20">
      
      <!-- Clean minimal title -->
      <h1 class="text-5xl sm:text-7xl lg:text-8xl font-semibold text-slate-900 mb-6 tracking-tight leading-none">
        {{ t('intro.title') }}
      </h1>
      
      <!-- Main value proposition -->
      <p class="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-800 mb-8 tracking-tight leading-relaxed max-w-4xl mx-auto">
        {{ t('intro.value') }}
      </p>
      
      <!-- Supporting statement -->
      <p class="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
        {{ t('intro.supporting') }}
      </p>
      
      <!-- Philosophy statement -->
      <p class="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
        {{ t('intro.philosophy') }}
      </p>
      
      <!-- Clean Stats Section -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
        <div class="text-center">
          <div class="text-4xl lg:text-5xl font-semibold text-slate-900 mb-2">8</div>
          <div class="text-lg text-slate-700">{{ t('intro.stats.developers_led') }}</div>
        </div>
        <div class="text-center">
          <div class="text-4xl lg:text-5xl font-semibold text-slate-900 mb-2">10K+</div>
          <div class="text-lg text-slate-700">{{ t('intro.stats.monthly_users') }}</div>
        </div>
        <div class="text-center">
          <div class="text-4xl lg:text-5xl font-semibold text-slate-900 mb-2">30%</div>
          <div class="text-lg text-slate-700">{{ t('intro.stats.cycle_reduction') }}</div>
        </div>
        <div class="text-center">
          <div class="text-4xl lg:text-5xl font-semibold text-slate-900 mb-2">93%</div>
          <div class="text-lg text-slate-700">{{ t('intro.stats.sprint_success') }}</div>
        </div>
      </div>

      <!-- Clean Technologies List -->
      <div class="mb-20">
        <h3 class="text-2xl font-semibold text-slate-900 mb-8">{{ t('common.core_technologies') }}</h3>
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
      <div class="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <NuxtLink 
          :to="localePath('/portfolio')"
          class="px-6 py-3 bg-slate-900 text-white text-base font-semibold rounded-full hover:bg-slate-800 transition-colors min-w-[160px] text-center">
          {{ t('intro.view_portfolio') }}
        </NuxtLink>
        <NuxtLink 
          :to="localePath('/contact')"
          class="px-6 py-3 text-slate-800 text-base font-medium hover:text-slate-600 transition-colors">
          {{ t('common.get_in_touch') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
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