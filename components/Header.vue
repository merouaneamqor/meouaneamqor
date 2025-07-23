<template>
  <header class="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
    <!-- GitHub-like grid pattern background -->
    <div class="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%" class="w-full h-full" style="position:absolute;inset:0;z-index:0;" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="githubGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="32" height="32" fill="none" />
            <circle cx="1.5" cy="1.5" r="1" fill="#334155" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#githubGrid)" />
      </svg>
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-tr from-emerald-800/60 via-cyan-800/40 to-blue-900/60"></div>
      <!-- Noise overlay -->
      <div class="absolute inset-0 opacity-20 mix-blend-soft-light" style="background-image:url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'200\' height=\'200\' filter=\'url(%23n)\' opacity=\'0.6\'/></svg>'); background-size:200px 200px;"></div>
    </div>
    <div class="container mx-auto px-6 py-24 flex flex-col items-center justify-center relative z-10">
      <!-- Avatar -->
      <div class="mb-8">
        <div class="mx-auto w-40 h-40 rounded-full border-4 border-slate-700 shadow-2xl bg-slate-800 flex items-center justify-center overflow-hidden">
          <img :src="avatarUrl" alt="Merouane Amqor" class="w-full h-full object-cover" />
        </div>
      </div>
      <!-- Name & Title -->
      <h1 class="text-4xl md:text-5xl font-extrabold text-white text-center mb-2">Merouane Amqor</h1>
      <h2 class="text-lg md:text-2xl font-medium text-slate-300 text-center mb-6">Professional Scrum Master & Engineering Manager</h2>
      <!-- Subheadline -->
      <p class="text-base md:text-lg text-slate-400 text-center max-w-2xl mb-8">
        Experienced leader in Agile transformation, team empowerment, and operational excellence. Proven track record in building high-performing teams and delivering business value through disciplined Scrum practices.
      </p>
      <!-- Highlights as badges -->
      <div class="flex flex-wrap justify-center gap-3 mb-10">
        <span class="inline-flex items-center px-4 py-2 bg-slate-800 text-slate-200 text-sm font-medium rounded-full border border-slate-700">10+ Engineers Led</span>
        <span class="inline-flex items-center px-4 py-2 bg-slate-800 text-slate-200 text-sm font-medium rounded-full border border-slate-700">Enterprise Delivery</span>
        <span class="inline-flex items-center px-4 py-2 bg-slate-800 text-slate-200 text-sm font-medium rounded-full border border-slate-700">CSM® & Agile Coach</span>
        <span class="inline-flex items-center px-4 py-2 bg-slate-800 text-slate-200 text-sm font-medium rounded-full border border-slate-700">Continuous Improvement</span>
      </div>
      <!-- CTA Buttons -->
      <div class="flex flex-wrap justify-center gap-4">
        <a href="mailto:marouane.amqor@gmail.com" class="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:from-emerald-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition">Contact Me</a>
        <a href="/resume.pdf" class="px-8 py-4 bg-slate-800 text-slate-200 font-semibold rounded-lg border border-slate-600 shadow hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition">View Resume</a>
        <a href="https://linkedin.com/in/merouane-amqor" target="_blank" class="px-8 py-4 bg-gradient-to-r from-blue-700 to-cyan-600 text-white font-semibold rounded-lg shadow hover:from-blue-800 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition">LinkedIn</a>
        <a href="https://github.com/merouaneamqor" target="_blank" class="px-8 py-4 bg-slate-900 text-slate-200 font-semibold rounded-lg border border-slate-700 shadow hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition">GitHub</a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const avatarUrl = ref('https://avatars.githubusercontent.com/u/37594453?v=4')
</script>
