<template>
  <header class="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
    <!-- Enhanced animated background with particles -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
      
      <!-- Enhanced grid pattern with animation -->
      <svg width="100%" height="100%" class="w-full h-full" style="position:absolute;inset:0;z-index:0;" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="githubGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="40" height="40" fill="none" />
            <circle cx="2" cy="2" r="1.5" fill="#334155" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#githubGrid)" />
      </svg>
      
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 via-slate-900/40 to-cyan-900/40"></div>
      
      <!-- Animated floating elements -->
      <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse"></div>
      <div class="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400/30 rounded-full animate-ping" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
    </div>
    
    <div class="container mx-auto px-6 py-24 flex flex-col items-center justify-center relative z-10">
      <!-- Enhanced avatar with typing effect placeholder -->
      <div class="mb-8 relative">
        <div class="absolute -inset-4 rounded-full bg-emerald-500/20 blur-xl animate-pulse"></div>
        <div class="relative mx-auto w-48 h-48 rounded-full border-4 border-slate-700 shadow-2xl bg-slate-800 flex items-center justify-center overflow-hidden group">
          <NuxtImg 
            :src="avatarUrl" 
            alt="Merouane Amqor" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            loading="eager"
          />
          <!-- Playful hover effect -->
          <div class="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      
      <!-- Enhanced name with typing animation effect -->
      <div class="text-5xl md:text-6xl font-extrabold text-white text-center mb-4 relative">
        <h1 class="relative z-10">
          <span class="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Merouane Amqor
          </span>
        </h1>
        <div class="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent opacity-20 blur-sm">
          Merouane Amqor
        </div>
      </div>
      
      <!-- Enhanced title with dynamic typing effect -->
      <div class="text-xl md:text-3xl font-bold text-slate-300 text-center mb-8 relative min-h-[2rem]">
        <div class="typing-container">
          <span class="typing-text bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent">
            {{ currentTitle }}
          </span>
        </div>
        <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
      </div>
      
      <!-- Enhanced subheadline with fade-in animation -->
      <p class="text-base md:text-xl text-slate-400 text-center max-w-3xl mb-12 leading-relaxed animate-fade-in">
        Agile leader building high-performing teams and delivering business value through innovative technology solutions.
      </p>
      
      <!-- Enhanced highlights with staggered animations -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <span v-for="(badge, index) in badges" 
              :key="badge.text"
              class="inline-flex items-center px-5 py-3 bg-slate-800/50 text-slate-200 text-sm font-medium rounded-full border border-slate-700/50 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.1}s` }">
          <span class="w-2 h-2 rounded-full mr-2 animate-pulse" :class="badge.color"></span>
          {{ badge.text }}
        </span>
      </div>
      
      <!-- Enhanced CTA buttons with tooltip effects -->
      <div class="flex flex-wrap justify-center gap-6">
        <a href="mailto:marouane.amqor@gmail.com" 
           class="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:from-emerald-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group relative"
           @mouseenter="showTooltip('email')"
           @mouseleave="hideTooltip()">
          <span class="flex items-center">
            Contact Me
            <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
        </a>
        
        <a href="/resume.pdf" 
           class="px-8 py-4 bg-slate-800 text-slate-200 font-semibold rounded-xl border border-slate-600 shadow-lg hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group relative"
           @mouseenter="showTooltip('resume')"
           @mouseleave="hideTooltip()">
          <span class="flex items-center">
            View Resume
            <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </span>
        </a>
        
        <a :href="socialLinks.linkedin" target="_blank" 
           class="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group relative"
           @mouseenter="showTooltip('linkedin')"
           @mouseleave="hideTooltip()">
          <span class="flex items-center">
            LinkedIn
            <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
            </svg>
          </span>
        </a>
        
        <a :href="socialLinks.github" target="_blank" 
           class="px-8 py-4 bg-slate-900 text-slate-200 font-semibold rounded-xl border border-slate-700 shadow-lg hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group relative"
           @mouseenter="showTooltip('github')"
           @mouseleave="hideTooltip()">
          <span class="flex items-center">
            GitHub
            <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </span>
        </a>
      </div>
    </div>
    
    <!-- Enhanced scroll indicator with progress -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="flex flex-col items-center">
        <span class="text-slate-400 text-sm mb-2 font-medium">Explore my journey</span>
        <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const avatarUrl = ref('https://avatars.githubusercontent.com/u/37594453?v=4')

// Dynamic title rotation
const titles = [
  'Professional Scrum Master & Engineering Manager',
  'Agile Transformation Leader',
  'Team Empowerment Specialist',
  'Continuous Improvement Advocate'
]

const currentTitle = ref(titles[0])
let titleIndex = 0

// Rotate titles every 3 seconds
onMounted(() => {
  setInterval(() => {
    titleIndex = (titleIndex + 1) % titles.length
    currentTitle.value = titles[titleIndex]
  }, 3000)
})

// Social links
const socialLinks = {
  linkedin: 'https://linkedin.com/in/merouane-amqor',
  github: 'https://github.com/merouaneamqor'
}

// Tooltip functionality
const showTooltip = (type: any) => {
  // Could implement actual tooltips here
  console.log(`Hovering over ${type}`)
}

const hideTooltip = () => {
  // Hide tooltip
}

// Badges data
const badges = [
  { text: '10+ Engineers Led', color: 'bg-emerald-400' },
  { text: 'Enterprise Delivery', color: 'bg-cyan-400' },
  { text: 'CSM® & Agile Coach', color: 'bg-blue-400' },
  { text: 'Continuous Improvement', color: 'bg-purple-400' }
]
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.typing-container {
  display: inline-block;
  overflow: hidden;
  border-right: 2px solid #94a3b8;
  white-space: nowrap;
  animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #94a3b8; }
}
</style>