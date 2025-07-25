<template>
  <header class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
    <!-- Professional background with subtle tech elements -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Subtle gradient overlays -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03)_0%,rgba(0,0,0,0)_70%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.03)_0%,rgba(0,0,0,0)_70%)]"></div>
      
      <!-- Refined grid pattern -->
      <div class="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="professionalGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="60" height="60" fill="none" />
              <circle cx="1" cy="1" r="0.8" fill="#334155" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#professionalGrid)" />
        </svg>
      </div>
      
      <!-- Subtle floating elements -->
      <div class="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-400/40 rounded-full animate-pulse"></div>
      <div class="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse" style="animation-delay: 4s;"></div>
    </div>
    
    <!-- Navigation -->
    <Navbar />
    
    <div class="container mx-auto px-6 py-24 flex flex-col items-center justify-center relative z-10 mt-16">
      <!-- Professional avatar section -->
      <div class="mb-12 relative">
        <div class="absolute -inset-6 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-2xl"></div>
        <div class="relative mx-auto w-40 h-40 rounded-full border-2 border-slate-600/50 shadow-2xl bg-slate-800 overflow-hidden group">
          <NuxtImg 
            :src="avatarUrl" 
            alt="Merouane Amqor - Engineering Manager" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            loading="eager"
          />
          <!-- Professional overlay effect -->
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <!-- Professional status indicator -->
        <div class="absolute -bottom-2 -right-2 bg-emerald-500 w-6 h-6 rounded-full border-2 border-slate-800 flex items-center justify-center">
          <div class="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <!-- Professional name and title -->
      <div class="text-center mb-8">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          <span class="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
            Merouane Amqor
          </span>
        </h1>
        <div class="text-2xl md:text-3xl font-semibold text-emerald-400 mb-2">
          Engineering Manager & Tech Lead
        </div>
        <div class="text-lg text-slate-400 font-medium">
          Certified ScrumMaster® • Agile Transformation Leader
        </div>
      </div>
      
      <!-- Professional value proposition -->
      <div class="text-center max-w-4xl mb-12">
        <p class="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 font-light">
          Transforming ideas into scalable solutions through 
          <span class="text-emerald-400 font-medium">strategic leadership</span>, 
          <span class="text-cyan-400 font-medium">technical excellence</span>, and 
          <span class="text-blue-400 font-medium">team empowerment</span>
        </p>
        
        <!-- Key achievements -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div class="text-3xl font-bold text-emerald-400 mb-2">15+</div>
            <div class="text-slate-300 font-medium">Engineers Managed</div>
            <div class="text-sm text-slate-500">Across multiple teams</div>
          </div>
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div class="text-3xl font-bold text-cyan-400 mb-2">$2M+</div>
            <div class="text-slate-300 font-medium">Project Value Delivered</div>
            <div class="text-sm text-slate-500">Healthcare & E-commerce</div>
          </div>
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div class="text-3xl font-bold text-blue-400 mb-2">40%</div>
            <div class="text-slate-300 font-medium">Performance Improvement</div>
            <div class="text-sm text-slate-500">Team delivery speed</div>
          </div>
        </div>
      </div>
      
      <!-- Professional highlights -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <span v-for="(badge, index) in professionalBadges" 
              :key="badge.text"
              class="inline-flex items-center px-6 py-3 bg-slate-800/40 backdrop-blur-sm text-slate-200 text-sm font-medium rounded-full border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 hover:bg-slate-800/60"
              :style="{ animationDelay: `${index * 0.1}s` }">
          <span class="w-2 h-2 rounded-full mr-3" :class="badge.color"></span>
          {{ badge.text }}
        </span>
      </div>
      
      <!-- Professional CTA buttons -->
      <div class="flex flex-col sm:flex-row gap-6 items-center">
        <a href="mailto:marouane.amqor@gmail.com" 
           class="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:from-emerald-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group">
          <span class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Schedule a Consultation
            <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </a>
        
        <a href="/resume.pdf" 
           class="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-slate-200 font-semibold rounded-xl border border-slate-600/50 shadow-lg hover:bg-slate-700/50 hover:text-white hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group">
          <span class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
            <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </a>
        
        <div class="flex gap-3">
          <a :href="socialLinks.linkedin" target="_blank" 
             class="p-3 bg-slate-800/40 backdrop-blur-sm text-slate-400 hover:text-blue-400 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-1 group"
             title="Connect on LinkedIn">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          <a :href="socialLinks.github" target="_blank" 
             class="p-3 bg-slate-800/40 backdrop-blur-sm text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-xl border border-slate-700/50 hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-1 group"
             title="View GitHub Profile">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Professional scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="flex flex-col items-center">
        <span class="text-slate-500 text-sm mb-2 font-medium">Discover my leadership journey</span>
        <svg class="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const avatarUrl = ref('https://avatars.githubusercontent.com/u/37594453?v=4')

// Social links
const socialLinks = {
  linkedin: 'https://linkedin.com/in/merouane-amqor',
  github: 'https://github.com/merouaneamqor'
}

// Professional badges focused on management
const professionalBadges = [
  { text: 'Certified ScrumMaster®', color: 'bg-emerald-400' },
  { text: 'Engineering Management', color: 'bg-cyan-400' },
  { text: 'Agile Transformation', color: 'bg-blue-400' },
  { text: 'Team Leadership', color: 'bg-purple-400' },
  { text: 'Strategic Planning', color: 'bg-indigo-400' },
  { text: 'Product Development', color: 'bg-pink-400' }
]
</script>

<style scoped>
/* Subtle animations for professional feel */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
}

/* Professional hover effects */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* Enhanced backdrop blur for modern browsers */
@supports (backdrop-filter: blur(12px)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(12px);
  }
}
</style>