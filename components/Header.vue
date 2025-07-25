<template>
  <header class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
    <!-- Professional background with subtle tech elements -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Subtle gradient overlays -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.04)_0%,rgba(0,0,0,0)_70%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.04)_0%,rgba(0,0,0,0)_70%)]"></div>
      
      <!-- Refined grid pattern -->
      <div class="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="professionalGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="60" height="60" fill="none" />
              <circle cx="1" cy="1" r="0.8" fill="#334155" opacity="0.4" />
              <circle cx="30" cy="30" r="0.6" fill="#475569" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#professionalGrid)" />
        </svg>
      </div>
      
      <!-- Enhanced floating elements -->
      <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse"></div>
      <div class="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse" style="animation-delay: 4s;"></div>
      <div class="absolute top-1/6 right-1/5 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse" style="animation-delay: 6s;"></div>
    </div>
    
    <!-- Navigation -->
    <Navbar />
    
    <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center relative z-10 mt-12 sm:mt-14 md:mt-16">
      <!-- Executive Status Badge -->
      <div class="mb-4 sm:mb-6 md:mb-8">
                  <div class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-slate-800/60 backdrop-blur-sm border border-emerald-500/30 rounded-full text-xs sm:text-sm font-semibold text-emerald-400 shadow-lg">
            <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
            <span class="hidden sm:inline">Open to Engineering Management • Tech Leadership • Consulting</span>
            <span class="sm:hidden">Open to Leadership Roles</span>
          </div>
      </div>
      
      <!-- Professional avatar section -->
      <div class="mb-4 sm:mb-6 md:mb-8 lg:mb-12 relative group">
        <div class="absolute -inset-4 sm:-inset-8 rounded-full bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 blur-2xl group-hover:from-emerald-500/20 group-hover:to-cyan-500/20 transition-all duration-700"></div>
        <div class="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full border-3 border-slate-600/50 shadow-2xl bg-slate-800 overflow-hidden group-hover:border-emerald-500/50 transition-all duration-500">
          <NuxtImg 
            :src="avatarUrl" 
            alt="Merouane Amqor - Senior Engineering Manager & Tech Executive" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            loading="eager"
          />
          <!-- Professional overlay effect -->
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Executive badge overlay -->
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div class="bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium border border-emerald-400/50">
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Certified Leader
              </span>
            </div>
          </div>
        </div>
        <!-- Enhanced status indicator -->
        <div class="absolute -bottom-3 -right-3 bg-emerald-500 w-8 h-8 rounded-full border-3 border-slate-800 flex items-center justify-center shadow-lg">
          <div class="w-3 h-3 bg-emerald-300 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <!-- Professional name and title -->
      <div class="text-center mb-4 sm:mb-6 md:mb-8">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight">
          <span class="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
            Merouane Amqor
          </span>
        </h1>
        <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text mb-2 sm:mb-3">
          Senior Engineering Manager
        </div>
        <div class="text-xs sm:text-sm md:text-base lg:text-lg text-slate-400 font-medium space-y-1 px-2 sm:px-0">
          <div>Certified ScrumMaster® • AWS Solutions Architect</div>
          <div class="text-slate-500">Building High-Performance Teams • Scaling Organizations</div>
        </div>
      </div>
      
      <!-- Executive value proposition -->
      <div class="text-center max-w-4xl mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
        <p class="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-4 sm:mb-6 font-light">
          Transforming engineering organizations through 
          <span class="text-emerald-400 font-semibold">strategic leadership</span>, 
          <span class="text-cyan-400 font-semibold">technical excellence</span>, and 
          <span class="text-blue-400 font-semibold">sustainable team growth</span> • 
          Delivered <span class="text-purple-400 font-semibold">$3M+ in project value</span> across healthcare, real estate, and e-commerce sectors
        </p>
        
        <!-- Enhanced key achievements -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
          <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-emerald-400/50 transition-all duration-300 group">
            <div class="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400 mb-1 group-hover:scale-110 transition-transform duration-300">15+</div>
            <div class="text-slate-300 font-semibold mb-0.5 text-xs sm:text-sm">Engineers Led</div>
            <div class="text-xs text-slate-500">Multiple teams</div>
          </div>
          <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-cyan-400/50 transition-all duration-300 group">
            <div class="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform duration-300">$3M+</div>
            <div class="text-slate-300 font-semibold mb-0.5 text-xs sm:text-sm">Projects</div>
            <div class="text-xs text-slate-500">Healthcare & E-commerce</div>
          </div>
          <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-blue-400/50 transition-all duration-300 group">
            <div class="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-1 group-hover:scale-110 transition-transform duration-300">40%</div>
            <div class="text-slate-300 font-semibold mb-0.5 text-xs sm:text-sm">Improvement</div>
            <div class="text-xs text-slate-500">Process optimization</div>
          </div>
          <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-purple-400/50 transition-all duration-300 group">
            <div class="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400 mb-1 group-hover:scale-110 transition-transform duration-300">6+</div>
            <div class="text-slate-300 font-semibold mb-0.5 text-xs sm:text-sm">Years</div>
            <div class="text-xs text-slate-500">Leadership</div>
          </div>
        </div>
      </div>
      
      <!-- Executive highlights badges -->
      <div class="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 mb-4 sm:mb-6 md:mb-8 max-w-4xl px-2 sm:px-0">
        <span v-for="(badge, index) in executiveBadges" 
              :key="badge.text"
              class="inline-flex items-center px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-slate-800/50 backdrop-blur-sm text-slate-200 text-xs font-semibold rounded-full border border-slate-700/50 hover:border-emerald-400/50 hover:bg-slate-800/70 transition-all duration-300"
              :style="{ animationDelay: `${index * 0.1}s` }">
          <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-1.5 sm:mr-2" :class="badge.color"></span>
          {{ badge.text }}
        </span>
      </div>
      
      <!-- Executive CTA buttons -->
      <div class="flex flex-col gap-3 sm:gap-4 items-center w-full max-w-2xl px-2 sm:px-0">
        <a href="mailto:marouaneamqor@gmail.com?subject=Leadership%20Opportunity%20Discussion" 
           class="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-sm sm:text-base rounded-lg sm:rounded-xl shadow-xl hover:from-emerald-600 hover:to-cyan-600 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl group text-center">
          <span class="flex items-center justify-center">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2m-6 0h6m-6 0v10a2 2 0 002 2v-2a2 2 0 002-2V7m0 0V5a2 2 0 012-2h4a2 2 0 012 2v2M7 7h10"/>
            </svg>
            <span class="hidden sm:inline">Schedule Executive Consultation</span>
            <span class="sm:hidden">Schedule Consultation</span>
            <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </a>
        
        <a href="/assets/pdfs/Merouane-AMQOR-en.pdf" 
           download="Merouane-AMQOR-Senior-Engineering-Manager.pdf"
           class="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-slate-800/60 backdrop-blur-sm text-slate-200 font-bold text-sm sm:text-base rounded-lg sm:rounded-xl border border-slate-600/50 shadow-xl hover:bg-slate-700/60 hover:text-white hover:border-slate-500 focus:outline-none focus:ring-4 focus:ring-slate-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl group text-center">
          <span class="flex items-center justify-center">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span class="hidden sm:inline">Download Executive Resume</span>
            <span class="sm:hidden">Download Resume</span>
            <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </a>
        
        <div class="flex gap-2 sm:gap-3 justify-center">
          <a :href="socialLinks.linkedin" target="_blank" 
             class="p-2.5 sm:p-3 bg-slate-800/50 backdrop-blur-sm text-slate-400 hover:text-blue-400 hover:bg-slate-700/60 rounded-lg sm:rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-1 group"
             title="Connect on LinkedIn">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          <a :href="socialLinks.github" target="_blank" 
             class="p-2.5 sm:p-3 bg-slate-800/50 backdrop-blur-sm text-slate-400 hover:text-white hover:bg-slate-700/60 rounded-lg sm:rounded-xl border border-slate-700/50 hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-1 group"
             title="View GitHub Profile">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Executive availability note -->
      <div class="mt-4 sm:mt-6 md:mt-8 mb-8 sm:mb-10 md:mb-12 text-center px-2 sm:px-0">
        <p class="text-slate-400 text-xs font-medium max-w-3xl mx-auto">
          Currently exploring: Senior Engineering Management roles, Technical Leadership positions, Consulting opportunities, and early-stage Co-founder partnerships
        </p>
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

// Executive badges focused on senior leadership
const executiveBadges = [
  { text: 'Certified ScrumMaster®', color: 'bg-emerald-400' },
  { text: 'AWS Solutions Architect', color: 'bg-orange-400' },
  { text: 'Engineering Leadership', color: 'bg-cyan-400' },
  { text: 'Agile Transformation', color: 'bg-blue-400' },
  { text: 'Strategic Planning', color: 'bg-purple-400' },
  { text: 'Team Scaling', color: 'bg-indigo-400' },
  { text: 'Product Strategy', color: 'bg-pink-400' },
  { text: 'Organizational Design', color: 'bg-violet-400' }
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