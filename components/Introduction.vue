<template>
  <section class="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700/50 relative overflow-hidden">
    <!-- Professional background elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.02)_0%,rgba(0,0,0,0)_70%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.02)_0%,rgba(0,0,0,0)_70%)]"></div>
      
      <!-- Refined grid background -->
      <div class="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="executiveGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="80" height="80" fill="none" />
              <circle cx="1" cy="1" r="0.5" fill="#334155" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#executiveGrid)" />
        </svg>
      </div>
      
      <!-- Subtle floating elements -->
      <div class="absolute top-1/4 left-1/5 w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse"></div>
      <div class="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-cyan-400/25 rounded-full animate-pulse" style="animation-delay: 3s;"></div>
      <div class="absolute top-1/2 right-1/5 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse" style="animation-delay: 6s;"></div>
    </div>
    
    <div class="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
      <!-- Professional Profile Content -->
      <div class="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left">
        <!-- Executive Title Block -->
        <div class="mb-8">
          <div class="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-full text-sm font-medium text-slate-300 mb-6">
            <span class="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            Open to Leadership Opportunities
          </div>
          
          <h1 class="text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
            <span class="block mb-2">Engineering</span>
            <span class="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Leader & Strategist
            </span>
          </h1>
          
          <div class="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mb-6"></div>
        </div>
        
        <!-- Value Proposition -->
        <div class="mb-8 max-w-2xl">
          <p class="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-6 font-light">
            Transforming organizations through strategic technical leadership, building high-performing teams, and delivering scalable solutions that drive business growth.
          </p>
          
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-white mb-4">Leadership Philosophy</h3>
            <p class="text-slate-300 leading-relaxed">
              I believe in <span class="text-emerald-400 font-medium">empowering teams</span> through clear vision, 
              <span class="text-cyan-400 font-medium">fostering innovation</span> through psychological safety, and 
              <span class="text-blue-400 font-medium">driving results</span> through continuous improvement and servant leadership.
            </p>
          </div>
        </div>
        
        <!-- Professional Highlights -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-2xl">
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 text-center">
            <div class="text-2xl font-bold text-emerald-400 mb-1">15+</div>
            <div class="text-sm text-slate-400">Engineers Led</div>
          </div>
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 text-center">
            <div class="text-2xl font-bold text-cyan-400 mb-1">$2M+</div>
            <div class="text-sm text-slate-400">Projects Delivered</div>
          </div>
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 text-center">
            <div class="text-2xl font-bold text-blue-400 mb-1">6+</div>
            <div class="text-sm text-slate-400">Years Leadership</div>
          </div>
        </div>
        
        <!-- Professional Badges -->
        <div class="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
          <span v-for="(badge, index) in professionalBadges" 
                :key="badge.text"
                class="inline-flex items-center px-4 py-2 bg-slate-800/40 backdrop-blur-sm text-slate-200 text-sm font-medium rounded-full border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300"
                :style="{ animationDelay: `${index * 0.1}s` }">
            <span class="w-2 h-2 rounded-full mr-2" :class="badge.color"></span>
            {{ badge.text }}
          </span>
        </div>
        
        <!-- Professional CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <NuxtLink 
            to="/portfolio" 
            class="flex-1 inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-center rounded-xl shadow-lg hover:from-emerald-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
          >
            <span class="flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h3v3H7V7z"/>
              </svg>
              View Portfolio
              <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </NuxtLink>
          
          <NuxtLink 
            to="/contact" 
            class="flex-1 inline-block px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-slate-200 font-semibold text-center rounded-xl border border-slate-600/50 shadow-lg hover:bg-slate-700/50 hover:text-white hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
          >
            <span class="flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Let's Connect
              <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Professional Avatar Section -->
      <div class="w-full lg:w-2/5 flex items-center justify-center">
        <div class="relative group">
          <!-- Background glow effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-3xl transform scale-110"></div>
          
          <!-- Main image container -->
          <div class="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 overflow-hidden shadow-2xl group-hover:shadow-emerald-500/20 transition-all duration-500">
            <!-- Profile image -->
            <img 
              src="/assets/images/me.jpeg" 
              alt="Merouane Amqor - Engineering Manager & Tech Lead" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            
            <!-- Professional overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Professional status indicator -->
            <div class="absolute top-6 right-6 bg-emerald-500/90 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium border border-emerald-400/50">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
                Available for Leadership Roles
              </div>
            </div>
            
            <!-- Certifications badge -->
            <div class="absolute bottom-6 left-6 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-slate-200 text-sm font-medium border border-slate-600/50">
              <div class="flex items-center gap-2">
                <span class="text-lg">🏆</span>
                <span>Certified ScrumMaster®</span>
              </div>
            </div>
          </div>
          
          <!-- Floating elements around image -->
          <div class="absolute -top-4 -left-4 w-8 h-8 bg-emerald-500/20 rounded-xl animate-pulse"></div>
          <div class="absolute -bottom-4 -right-4 w-6 h-6 bg-cyan-500/20 rounded-xl animate-pulse" style="animation-delay: 2s;"></div>
          <div class="absolute top-1/2 -right-6 w-4 h-4 bg-blue-500/20 rounded-full animate-pulse" style="animation-delay: 4s;"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const professionalBadges = [
  { text: 'ScrumMaster® Certified', color: 'bg-emerald-400' },
  { text: 'Engineering Leadership', color: 'bg-cyan-400' },
  { text: 'Agile Transformation', color: 'bg-blue-400' },
  { text: 'Strategic Planning', color: 'bg-purple-400' },
  { text: 'Team Development', color: 'bg-indigo-400' }
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