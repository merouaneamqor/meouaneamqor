<template>
  <div class="bg-transparent font-myriad min-h-screen">
    <!-- iOS Navigation Bar -->
    <nav class="bg-white/70 backdrop-blur-xl border-b border-slate-200 pt-16">
      <div class="max-w-4xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <NuxtLink :to="localePath('/')" class="flex items-center text-slate-900 hover:text-slate-700 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            <span class="font-medium">{{ t('common.back') }}</span>
          </NuxtLink>
          
          <button @click="toggleView" class="flex items-center text-slate-900 hover:text-slate-700 transition-colors">
            <svg v-if="viewMode === 'list'" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect width="7" height="7" x="3" y="3" rx="1"/>
              <rect width="7" height="7" x="14" y="3" rx="1"/>
              <rect width="7" height="7" x="3" y="14" rx="1"/>
              <rect width="7" height="7" x="14" y="14" rx="1"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <line x1="8" x2="21" y1="6" y2="6"/>
              <line x1="8" x2="21" y1="12" y2="12"/>
              <line x1="8" x2="21" y1="18" y2="18"/>
              <line x1="3" x2="3.01" y1="6" y2="6"/>
              <line x1="3" x2="3.01" y1="12" y2="12"/>
              <line x1="3" x2="3.01" y1="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Large Title Header -->
    <header class="px-6 pt-8 pb-4 max-w-4xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-bold text-slate-900 mb-2 tracking-tight">
        {{ t('nav.portfolio') }}
      </h1>
      <p class="text-lg text-slate-700 leading-relaxed max-w-2xl">
        {{ t('portfolio.subtitle') }}
      </p>
    </header>

    <!-- Project List -->
    <main class="px-6 pb-8 max-w-4xl mx-auto">
      <div v-if="viewMode === 'list'" class="space-y-4">
        <div 
          v-for="project in projects" 
          :key="project.id"
          @click="selectProject(project)"
          class="bg-white/70 backdrop-blur-xl rounded-xl border border-slate-200 overflow-hidden hover:bg-white/80 transition-all duration-200 cursor-pointer active:scale-[0.98]"
        >
          <!-- Project Card -->
          <div class="flex items-start p-4 space-x-4">
            <!-- Project Thumbnail -->
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h3v3H7V7z"/>
              </svg>
            </div>
            
            <!-- Project Info -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between mb-2">
                <h3 class="text-lg font-semibold text-slate-900 truncate">
                  {{ project.name }}
                </h3>
                <svg class="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6"/>
                </svg>
              </div>
              
              <!-- Practices Pills -->
              <div class="flex flex-wrap gap-1.5 mb-3">
                <span 
                  v-for="tech in project.technologies.slice(0, 3)" 
                  :key="tech"
                  class="px-2 py-1 bg-white/60 text-slate-700 text-xs font-medium rounded-full border border-slate-200"
                >
                  {{ tech }}
                </span>
                <span 
                  v-if="project.technologies.length > 3"
                  class="px-2 py-1 bg-white/60 text-slate-500 text-xs rounded-full border border-slate-200"
                >
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>
              
              <!-- Description -->
              <p class="text-sm text-slate-700 line-clamp-2 leading-relaxed">
                {{ project.description }}
              </p>
              
              <!-- Duration -->
              <p class="text-xs text-slate-500 mt-2">
                {{ project.duration }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Grid View -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div 
          v-for="project in projects" 
          :key="project.id"
          @click="selectProject(project)"
          class="bg-white/70 backdrop-blur-xl rounded-xl border border-slate-200 overflow-hidden hover:bg-white/80 transition-all duration-200 cursor-pointer active:scale-[0.98]"
        >
          <!-- Project Thumbnail -->
          <div class="h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h3v3H7V7z"/>
            </svg>
          </div>
          
          <!-- Project Info -->
          <div class="p-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-2 line-clamp-1">
              {{ project.name }}
            </h3>
            
            <!-- Practices Pills -->
            <div class="flex flex-wrap gap-1.5 mb-3">
              <span 
                v-for="tech in project.technologies.slice(0, 2)" 
                :key="tech"
                class="px-2 py-1 bg-white/60 text-slate-700 text-xs font-medium rounded-full border border-slate-200"
              >
                {{ tech }}
              </span>
              <span 
                v-if="project.technologies.length > 2"
                class="px-2 py-1 bg-white/60 text-slate-500 text-xs rounded-full border border-slate-200"
              >
                +{{ project.technologies.length - 2 }}
              </span>
            </div>
            
            <!-- Description -->
            <p class="text-sm text-slate-700 line-clamp-3 leading-relaxed mb-2">
              {{ project.description }}
            </p>
            
            <!-- Duration -->
            <p class="text-xs text-slate-500">
              {{ project.duration }}
            </p>
          </div>
        </div>
      </div>
    </main>

    <!-- Project Detail Modal -->
    <div 
      v-if="selectedProject" 
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4"
      @click="closeModal"
    >
      <div 
        @click.stop
        class="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-t-xl sm:rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto transform transition-transform duration-300"
        :class="{ 'translate-y-0': selectedProject, 'translate-y-full': !selectedProject }"
      >
        <!-- Modal Header -->
        <div class="sticky top-0 bg-white/70 backdrop-blur-xl border-b border-slate-200 p-4">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-slate-900">{{ t('portfolio.project_details') }}</h2>
            <button @click="closeModal" class="w-8 h-8 rounded-full bg-white/70 border border-slate-200 flex items-center justify-center">
              <svg class="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Modal Content -->
        <div class="p-6">
          <!-- Project Banner -->
          <div class="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h3v3H7V7z"/>
            </svg>
          </div>

          <!-- Project Title -->
          <h3 class="text-2xl font-bold text-slate-900 mb-2">
            {{ selectedProject.name }}
          </h3>

          <!-- Role & Duration -->
          <div class="flex items-center space-x-4 mb-6">
            <div class="flex items-center text-slate-700">
              <svg class="w-4 h-4 mr-2 text-slate-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              <span class="text-sm">Engineering Manager</span>
            </div>
            <div class="flex items-center text-slate-700">
              <svg class="w-4 h-4 mr-2 text-slate-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span class="text-sm">{{ selectedProject.duration }}</span>
            </div>
          </div>

          <!-- Practices Used -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-slate-900 mb-3">{{ t('portfolio.technologies_used') }}</h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in selectedProject.technologies" 
                :key="tech"
                class="px-3 py-1 bg-white/70 backdrop-blur-xl text-slate-800 text-sm font-medium rounded-full border border-slate-200"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Key Achievements -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-slate-900 mb-3">{{ t('portfolio.key_achievements') }}</h4>
            <div class="space-y-2">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-slate-700">{{ selectedProject.description }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-slate-700">{{ t('portfolio.achievement_team_delivery') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-slate-700">{{ t('portfolio.achievement_best_practices') }}</p>
              </div>
            </div>
          </div>

          <!-- Action Button -->
          <div class="flex space-x-3">
            <a 
              v-if="selectedProject.link !== '#'" 
              :href="selectedProject.link" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex-1 bg-slate-900 text-white text-center py-3 px-4 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              {{ t('portfolio.view_live_project') }}
            </a>
            <button 
              v-else
              disabled
              class="flex-1 bg-white/70 text-slate-500 border border-slate-200 text-center py-3 px-4 rounded-xl font-semibold"
            >
              {{ t('portfolio.private_project') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const localePath = useLocalePath()
// Nuxt auto-imports: add TS declarations for type safety
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const useLocalePath: () => (path: string) => string
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const useSeoMeta: (meta: Record<string, any>) => void

interface Project {
  id: number;
  name: string;
  duration: string;
  description: string;
  technologies: string[];
  link: string;
}

const viewMode = ref<'list' | 'grid'>('list')
const selectedProject = ref<Project | null>(null)

const projects: Project[] = [
  {
    id: 1,
    name: 'DabaDoc Healthcare Platform',
    duration: 'Sep 2018 - Present',
    description: 'Led the development of a comprehensive healthcare platform, improving patient care delivery by 30% and boosting operational efficiency by 25%. Implemented Agile methodologies, resulting in a 20% reduction in project delivery times.',
    technologies: ['Scrum Mastery', 'Agile Coaching', 'Sprint Planning', 'Backlog Refinement'],
    link: 'https://dabadoc.com'
  },
  {
    id: 2,
    name: 'Douq.ma Discovery Platform',
    duration: '2021 - Present',
    description: 'Co-founded Morocco\'s premier location discovery platform. Led product development and facilitated delivery across teams to build a valuable venue discovery and review system.',
    technologies: ['Scrum Events', 'Stakeholder Facilitation', 'Continuous Improvement'],
    link: 'https://www.douq.ma'
  },
  {
    id: 3,
    name: 'Meram / Texam E-commerce Solution',
    duration: '2018 - 2019',
    description: 'Delivered an e-commerce platform through iterative delivery and clear scrum ceremonies, improving time-to-market and quality.',
    technologies: ['Sprint Review', 'Retrospective', 'Definition of Done'],
    link: 'https://texam-app-git-master-douq-ma.vercel.app/'
  },
  {
    id: 4,
    name: 'Riad Raha Real Estate Management System',
    duration: '1 month, 2021',
    description: 'Facilitated rapid delivery with a focused scrum cadence to streamline operations and improve client service efficiency.',
    technologies: ['Sprint Planning', 'Kanban for Ops', 'Risk Management'],
    link: '#'
  },
  {
    id: 5,
    name: 'DabaDoc Corporate Healthcare Platform',
    duration: 'Apr 2022 - Jan 2024',
    description: 'Spearheaded the delivery of a corporate healthcare platform using Scrum to align stakeholders and accelerate outcomes.',
    technologies: ['Scrum Mastery', 'Value Stream Mapping', 'Release Planning'],
    link: 'https://info.dabadoc.com/corporate'
  },
  {
    id: 6,
    name: 'DabaDoc Mind - Mental Health',
    duration: 'Apr 2022 - Jan 2024',
    description: 'Delivered a privacy-focused telehealth experience with strong scrum facilitation and continuous feedback loops.',
    technologies: ['Team Health Checks', 'User Feedback Loops', 'Outcome Metrics'],
    link: 'https://info.dabadoc.com/mind'
  },
  {
    id: 7,
    name: 'DabaDoc Live - Interactive Health',
    duration: 'Apr 2022 - Jan 2024',
    description: 'Enabled real-time health education features via iterative delivery and cross-team collaboration.',
    technologies: ['Cross-team Collaboration', 'Scrum of Scrums', 'Incremental Delivery'],
    link: 'https://info.dabadoc.com/live'
  }
]

const toggleView = () => {
  viewMode.value = viewMode.value === 'list' ? 'grid' : 'list'
}

const selectProject = (project: Project) => {
  selectedProject.value = project
}

const closeModal = () => {
  selectedProject.value = null
}

// SEO Meta
useSeoMeta({
  title: 'Portfolio - Merouane Amqor',
  description: 'Explore my portfolio of innovative projects combining engineering excellence, great design, and real-world impact.',
  ogTitle: 'Portfolio - Merouane Amqor',
  ogDescription: 'Explore my portfolio of innovative projects combining engineering excellence, great design, and real-world impact.',
  ogImage: '/merouane_amqor.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 1;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 2;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 3;
}
</style>

