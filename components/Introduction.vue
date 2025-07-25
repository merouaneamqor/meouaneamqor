<template>
  <section class="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700/50 relative overflow-hidden">
    <!-- Enhanced professional background elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03)_0%,rgba(0,0,0,0)_70%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.03)_0%,rgba(0,0,0,0)_70%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.02)_0%,rgba(0,0,0,0)_70%)]"></div>
      
      <!-- Enhanced grid background -->
      <div class="absolute inset-0 opacity-15">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="executiveGrid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="100" height="100" fill="none" />
              <circle cx="2" cy="2" r="1" fill="#334155" opacity="0.5" />
              <circle cx="50" cy="50" r="0.8" fill="#475569" opacity="0.3" />
              <circle cx="98" cy="98" r="0.6" fill="#64748b" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#executiveGrid)" />
        </svg>
      </div>
      
      <!-- Strategic floating elements -->
      <div class="absolute top-1/5 left-1/6 w-3 h-3 bg-emerald-400/25 rounded-full animate-pulse"></div>
      <div class="absolute top-2/3 right-1/5 w-4 h-4 bg-cyan-400/20 rounded-full animate-pulse" style="animation-delay: 4s;"></div>
      <div class="absolute top-1/2 right-1/6 w-2 h-2 bg-blue-400/25 rounded-full animate-pulse" style="animation-delay: 8s;"></div>
      <div class="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse" style="animation-delay: 12s;"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16 lg:gap-20 relative z-10">
      <!-- Strategic Leadership Content -->
      <div class="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left">
        <!-- Main Content -->
        <div class="mb-8 sm:mb-10 md:mb-12">
          <div class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-slate-800/60 backdrop-blur-sm border border-emerald-500/20 rounded-full text-xs sm:text-sm font-semibold text-emerald-400 mb-6 sm:mb-8 shadow-xl">
            <span class="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
            Engineering Manager
          </div>
          
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white tracking-tight leading-tight">
            <span class="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Leading Teams,
            </span>
            <span class="block">Delivering Results</span>
          </h1>
          
          <div class="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full mb-6 sm:mb-8"></div>
        </div>
        
        <!-- Vision Statement -->
        <div class="mb-6 sm:mb-8 md:mb-10 max-w-3xl px-2 sm:px-0">
          <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 leading-relaxed mb-6 sm:mb-8 font-light">
            Building high-performing engineering teams that deliver exceptional products and drive business growth.
          </p>
        </div>
        
        <!-- Key Metrics -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12 w-full max-w-2xl px-2 sm:px-0">
          <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center hover:border-emerald-400/30 transition-all duration-300 group">
            <div class="text-xl sm:text-2xl font-bold text-emerald-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
            <div class="text-slate-300 font-semibold text-xs sm:text-sm">Engineers Led</div>
          </div>
          <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center hover:border-cyan-400/30 transition-all duration-300 group">
            <div class="text-xl sm:text-2xl font-bold text-cyan-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">$3M+</div>
            <div class="text-slate-300 font-semibold text-xs sm:text-sm">Projects</div>
          </div>
          <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center hover:border-blue-400/30 transition-all duration-300 group col-span-2 md:col-span-1">
            <div class="text-xl sm:text-2xl font-bold text-blue-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">6+</div>
            <div class="text-slate-300 font-semibold text-xs sm:text-sm">Years Experience</div>
          </div>
        </div>
        
        <!-- Core Skills -->
        <div class="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-2 sm:px-0">
          <span v-for="(skill, index) in coreSkills" 
                :key="skill.text"
                class="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800/50 backdrop-blur-sm text-slate-200 text-xs sm:text-sm font-medium rounded-full border border-slate-700/50 hover:border-emerald-400/40 transition-all duration-300">
            <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-1.5 sm:mr-2" :class="skill.color"></span>
            {{ skill.text }}
          </span>
        </div>
        
        <!-- CTAs -->
        <div class="flex flex-col gap-4 sm:gap-6 w-full max-w-lg px-2 sm:px-0">
          <NuxtLink 
            to="/portfolio" 
            class="w-full inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-center rounded-xl shadow-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <span class="flex items-center justify-center">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h3v3H7V7z"/>
              </svg>
              <span class="text-sm sm:text-base">View Portfolio</span>
            </span>
          </NuxtLink>
          
          <NuxtLink 
            to="/contact" 
            class="w-full inline-block px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/60 backdrop-blur-sm text-slate-200 font-bold text-center rounded-xl border border-slate-600/50 shadow-xl hover:bg-slate-700/60 hover:text-white transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <span class="flex items-center justify-center">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              <span class="text-sm sm:text-base">Get in Touch</span>
            </span>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Portrait Section -->
      <div class="w-full lg:w-2/5 flex items-center justify-center">
        <div class="relative group">
          <!-- Background glow -->
          <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl sm:rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
          
          <!-- Image container -->
          <div class="relative w-64 h-80 sm:w-72 sm:h-[22rem] md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-2xl sm:rounded-3xl bg-slate-800/60 border border-slate-600/50 overflow-hidden shadow-xl group-hover:shadow-emerald-500/20 transition-all duration-500">
            <img 
              src="https://avatars.githubusercontent.com/u/37594453?v=4" 
              alt="Merouane Amqor - Engineering Manager" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="eager"
            />
            
            <!-- Status indicator -->
            <div class="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-emerald-500/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white text-xs sm:text-sm font-semibold shadow-lg">
              <div class="flex items-center gap-1.5 sm:gap-2">
                <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-300 rounded-full animate-pulse"></div>
                <span>Available</span>
              </div>
            </div>
            
            <!-- Certifications -->
            <div class="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-6">
              <div class="bg-slate-800/90 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl text-slate-200 border border-slate-600/50 shadow-lg">
                <div class="flex items-center gap-1.5 sm:gap-2 mb-1">
                  <span class="text-sm sm:text-lg">🏆</span>
                  <span class="font-semibold text-xs sm:text-sm">Certified ScrumMaster®</span>
                </div>
                <div class="flex items-center gap-1.5 sm:gap-2">
                  <span class="text-sm sm:text-lg">☁️</span>
                  <span class="font-semibold text-xs sm:text-sm">AWS Solutions Architect</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const coreSkills = [
  { text: 'Team Leadership', color: 'bg-emerald-400' },
  { text: 'Agile/Scrum', color: 'bg-cyan-400' },
  { text: 'Full-Stack Development', color: 'bg-blue-400' },
  { text: 'AWS Cloud', color: 'bg-purple-400' },
  { text: 'Product Strategy', color: 'bg-indigo-400' }
]
</script>

<style scoped>
/* Professional animations */
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

/* Responsive design */
@media (max-width: 1024px) {
  .flex.flex-col.lg\\:flex-row {
    flex-direction: column-reverse;
  }
  
  .w-80.h-80.lg\\:w-96.lg\\:h-96 {
    width: 20rem;
    height: 20rem;
  }
}

@media (max-width: 768px) {
  .grid.grid-cols-1.md\\:grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .flex.flex-col.sm\\:flex-row {
    flex-direction: column;
  }
  
  .w-80.h-80.lg\\:w-96.lg\\:h-96 {
    width: 16rem;
    height: 16rem;
  }
}
</style>