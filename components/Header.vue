<template>
  <header class="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
    <!-- Enhanced animated background -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
      <!-- Enhanced grid pattern -->
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
      <!-- Noise overlay -->
      <div class="absolute inset-0 opacity-10 mix-blend-soft-light" style="background-image:url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'200\' height=\'200\' filter=\'url(%23n)\' opacity=\'0.6\'/></svg>'); background-size:200px 200px;"></div>
    </div>
    
    <div class="container mx-auto px-6 py-24 flex flex-col items-center justify-center relative z-10">
      <!-- Enhanced avatar with floating animation -->
      <div class="mb-8 relative">
        <div class="absolute -inset-4 rounded-full bg-emerald-500/20 blur-xl animate-pulse"></div>
        <div class="relative mx-auto w-48 h-48 rounded-full border-4 border-slate-700 shadow-2xl bg-slate-800 flex items-center justify-center overflow-hidden">
          <img :src="avatarUrl" alt="Merouane Amqor" class="w-full h-full object-cover" />
        </div>
      </div>
      
      <!-- Enhanced name with gradient text -->
      <h1 class="text-5xl md:text-6xl font-extrabold text-white text-center mb-4 relative">
        <span class="relative z-10">Merouane Amqor</span>
        <span class="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent opacity-20">Merouane Amqor</span>
      </h1>
      
      <!-- Enhanced title with animated underline -->
      <h2 class="text-xl md:text-3xl font-bold text-slate-300 text-center mb-8 relative">
        <span class="relative z-10">Professional Scrum Master & Engineering Manager</span>
        <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
      </h2>
      
      <!-- Enhanced subheadline -->
      <p class="text-base md:text-xl text-slate-400 text-center max-w-3xl mb-12 leading-relaxed">
        Agile leader building high-performing teams and delivering business value through innovative technology solutions.
      </p>
      
      <!-- Enhanced highlights with improved badges -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <span class="inline-flex items-center px-5 py-3 bg-slate-800/50 text-slate-200 text-sm font-medium rounded-full border border-slate-700/50 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
          <span class="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
          10+ Engineers Led
        </span>
        <span class="inline-flex items-center px-5 py-3 bg-slate-800/50 text-slate-200 text-sm font-medium rounded-full border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
          <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
          Enterprise Delivery
        </span>
        <span class="inline-flex items-center px-5 py-3 bg-slate-800/50 text-slate-200 text-sm font-medium rounded-full border border-slate-700/50 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
          <span class="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
          CSM® & Agile Coach
        </span>
        <span class="inline-flex items-center px-5 py-3 bg-slate-800/50 text-slate-200 text-sm font-medium rounded-full border border-slate-700/50 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
          <span class="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
          Continuous Improvement
        </span>
      </div>
      
      <!-- Enhanced CTA buttons with improved hover effects -->
      <div class="flex flex-wrap justify-center gap-6">
        <a href="mailto:marouane.amqor@gmail.com" class="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:from-emerald-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
          <span class="flex items-center">
            Contact Me
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
        </a>
        <a href="/resume.pdf" class="px-8 py-4 bg-slate-800 text-slate-200 font-semibold rounded-xl border border-slate-600 shadow-lg hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
          <span class="flex items-center">
            View Resume
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </span>
        </a>
        <a href="https://linkedin.com/in/merouane-amqor" target="_blank" class="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
          <span class="flex items-center">
            LinkedIn
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 8.5h-1.5m-3 0H7.5m9 0v1.5m0-1.5L15 10.5m-3 4.5h3m-6 0h-3m6 0v-3m0 3l-1.5-1.5M7.5 10.5v6A1.5 1.5 0 009 18h6a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5H9A1.5 1.5 0 007.5 9v1.5z" />
            </svg>
          </span>
        </a>
        <a href="https://github.com/merouaneamqor" target="_blank" class="px-8 py-4 bg-slate-900 text-slate-200 font-semibold rounded-xl border border-slate-700 shadow-lg hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
          <span class="flex items-center">
            GitHub
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </span>
        </a>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="flex flex-col items-center">
        <span class="text-slate-400 text-sm mb-2">Scroll to explore</span>
        <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const avatarUrl = ref('https://avatars.githubusercontent.com/u/37594453?v=4')
</script>
