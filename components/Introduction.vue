<template>
  <section class="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700/50 relative overflow-hidden">
    <!-- Enhanced background elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03)_0%,rgba(0,0,0,0)_70%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.03)_0%,rgba(0,0,0,0)_70%)]"></div>
      <!-- Enhanced dot grid background -->
      <svg width="100%" height="100%" class="w-full h-full" style="position:absolute;inset:0;z-index:0;" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="introGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="40" height="40" fill="none" />
            <circle cx="2" cy="2" r="1.5" fill="#334155" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#introGrid)" />
      </svg>
      <div class="absolute inset-0 bg-gradient-to-tr from-emerald-900/30 via-slate-900/30 to-cyan-900/30"></div>
      <div class="absolute inset-0 opacity-10 mix-blend-soft-light" style="background-image:url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'200\' height=\'200\' filter=\'url(%23n)\' opacity=\'0.6\'/></svg>'); background-size:200px 200px;"></div>
    </div>
    
    <div class="container mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 relative z-10">
      <!-- Left: Manager Info -->
      <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <div class="mb-6">
          <h1 class="text-4xl lg:text-5xl font-bold mb-4 text-white relative inline-block">
            <span class="relative z-10">Merouane Amqor</span>
            <span class="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent opacity-20">Merouane Amqor</span>
          </h1>
          <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto lg:mx-0"></div>
        </div>
        
        <h2 class="text-xl lg:text-2xl font-semibold mb-6 text-emerald-400">Professional Scrum Master & Engineering Manager</h2>
        
        <p class="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
          With over 6 years of experience leading teams in fast-paced environments, I specialize in transforming organizations through Agile principles and servant leadership. My approach is rooted in empowering people, fostering collaboration, and driving continuous improvement. I believe that great products are built by great teams—and my mission is to create the conditions where teams can thrive, innovate, and deliver exceptional results.
        </p>
        
        <!-- Enhanced highlights with improved badges -->
        <div class="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
          <span class="inline-flex items-center px-5 py-3 bg-slate-800/50 text-slate-200 text-sm font-medium rounded-full border border-slate-700/50 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300">
            <span class="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            10+ Engineers Led
          </span>
          <span class="inline-flex items-center px-5 py-3 bg-slate-800/50 text-slate-200 text-sm font-medium rounded-full border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
            <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
            Enterprise Delivery
          </span>
          <span class="inline-flex items-center px-5 py-3 bg-slate-800/50 text-slate-200 text-sm font-medium rounded-full border border-slate-700/50 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
            <span class="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            CSM® & Agile Coach
          </span>
          <span class="inline-flex items-center px-5 py-3 bg-slate-800/50 text-slate-200 text-sm font-medium rounded-full border border-slate-700/50 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
            <span class="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
            Continuous Improvement
          </span>
        </div>
        
        <NuxtLink to="/portfolio" class="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:from-emerald-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
          <span class="flex items-center">
            View My Work
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </NuxtLink>
      </div>
      
      <!-- Right: Professional Avatar -->
      <div class="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
        <div class="relative flex items-center justify-center">
          <!-- Enhanced floating animation -->
          <div class="absolute w-64 h-64 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl animate-pulse"></div>
          <div class="relative w-56 h-56 rounded-full bg-slate-800 flex items-center justify-center border-4 border-slate-600/50 shadow-2xl overflow-hidden">
            <img src="/assets/images/1__xsAVKi5G0AzK7INXcma7w.png" alt="Merouane Amqor" class="w-full h-full object-cover">
            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-emerald-500/20 blur-xl"></div>
            <div class="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-cyan-500/20 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No custom CSS or style block needed
</script>
