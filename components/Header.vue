<template>
  <header 
    class="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-all duration-300 ease-in-out"
    :class="[scrolled ? 'sticky top-0 z-50 py-4' : '']"
    ref="header"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-75 transition-opacity duration-300 ease-in-out" :class="[scrolled ? 'opacity-90' : '']"></div>
    <div class="max-w-6xl mx-auto relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <div 
          class="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left transition-all duration-300 ease-in-out"
          :class="[scrolled ? 'lg:w-3/4' : '']"
        >
          <h1 
            class="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ease-in-out"
            :class="[scrolled ? ' text-1x mb-0' : '']"
          >
            Merouane Amqor
          </h1>
          <p 
            class="text-2xl font-semibold mb-6 text-cyan-300 transition-all duration-300 ease-in-out"
            :class="[scrolled ? 'text-xs mb-0' : '']"
          >
            TechLead & Certified ScrumMaster®
          </p>
          <p 
            class="text-xl mb-4 max-w-lg mx-auto lg:mx-0 text-gray-300 transition-all duration-300 ease-in-out"
            :class="[scrolled ? 'hidden lg:flex opacity-0 pointer-events-none h-0' : '']"
          >
            Driving innovation in healthcare tech with over 5 years of experience in full-stack development and team leadership.
          </p>
          <div 
            class="flex flex-wrap justify-center lg:justify-start gap-4 transition-all duration-300 ease-in-out"
            :class="[scrolled ? 'hidden lg:flex' : '']"
          >
            <NuxtLink
              v-for="(link, index) in links"
              :key="index"
              :to="link.href"
              :class="[
                'inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2',
                link.primary
                  ? 'bg-purple-600 text-white hover:bg-purple-700 border-purple-400'
                  : 'bg-transparent text-cyan-300 hover:bg-cyan-900 border-cyan-400',
                scrolled ? 'text-sm px-4 py-2 h-auto' : ''
              ]"
            >
              {{ link.text }}
              <ArrowRight class="ml-2 h-auto w-4 transition-all duration-300 ease-in-out" :class="[scrolled ? 'h-auto w-3' : '']" />
            </NuxtLink>
          </div>
        </div>
        <div 
          class="w-full lg:w-1/2 flex justify-center lg:justify-end transition-all duration-300 ease-in-out"
          :class="[scrolled ? 'lg:w-1/3' : '']"
        >
          <div class="relative transition-all duration-300 ease-in-out" :class="[scrolled ? 'scale-100' : '']">
            <div 
              class="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-50 animate-pulse transition-all duration-300 ease-in-out"
              :class="[scrolled ? 'scale-100' : '']"
            ></div>
            <img 
              src="https://avatars.githubusercontent.com/u/37594453?v=4" 
              alt="Merouane Amqor" 
              width="256"
              height="256"
              class="rounded-full object-cover shadow-lg transition-all duration-300 ease-in-out border-4 border-cyan-400 relative z-10"
              :class="[scrolled ? 'w-32 h-32' : 'w-64 h-64 hover:scale-100']"
            />
          </div>
        </div>
      </div>
      <div 
        class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-300 ease-in-out"
        :class="[scrolled ? 'opacity-0 pointer-events-none h-0 mt-0' : 'opacity-100']"
      >
        <div v-for="(skill, index) in skills" :key="index" class="flex items-center space-x-4">
          <component :is="skill.icon" class="w-8 h-8 text-cyan-400" />
          <div>
            <h3 class="text-lg font-semibold text-white">{{ skill.title }}</h3>
            <p class="text-sm text-gray-300">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, Code, Database, Cloud } from 'lucide-vue-next'

const links = ref([
  { href: '/contact', text: 'Get in Touch', primary: true },
  { href: '/portfolio', text: 'View Projects', primary: false },
  { href: '/blog', text: 'Blog', primary: false }
])

const skills = [
  { 
    icon: Code, 
    title: 'Full-Stack Development', 
    description: 'Expertise in Ruby on Rails, AngularJS, React, and Vue.js' 
  },
  { 
    icon: Database, 
    title: 'Database Management', 
    description: 'Skilled in MongoDB, SQL, and PostgreSQL' 
  },
  { 
    icon: Cloud, 
    title: 'Cloud Platforms', 
    description: 'Proficient in AWS and Heroku for scalable deployments' 
  },
]

const scrolled = ref(false)
const header = ref(null)

const handleScroll = () => {
  if (header.value) {
    const headerHeight = header.value.offsetHeight
    scrolled.value = window.scrollY > headerHeight / 3
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@keyframes glow {
  0%, 100% {
    text-shadow: 0 0 5px rgba(103, 232, 249, 0.5), 0 0 10px rgba(103, 232, 249, 0.3);
  }
  50% {
    text-shadow: 0 0 10px rgba(103, 232, 249, 0.8), 0 0 20px rgba(103, 232, 249, 0.5);
  }
}

h1 {
  animation: glow 3s ease-in-out infinite;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>