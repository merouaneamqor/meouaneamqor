<template>
    <article class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
      <NuxtLink :to="post._path" class="block hover:opacity-90 transition-opacity duration-300">
        <div class="relative overflow-hidden">
          <img :src="post.coverImage" :alt="post.title" class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        </div>
      </NuxtLink>
      <div class="p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="flex items-center gap-2 text-slate-400 text-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ new Date(post.date).toLocaleDateString() }}
          </div>
          <div v-if="post.tags" class="flex flex-wrap gap-2">
            <span 
              v-for="tag in post.tags.slice(0, 2)" 
              :key="tag" 
              class="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        
        <h2 class="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
          <NuxtLink :to="post._path" class="hover:text-emerald-400 transition-colors duration-300">
            {{ post.title }}
          </NuxtLink>
        </h2>
        
        <p class="text-slate-300 mb-5 leading-relaxed">
          {{ post.excerpt }}
        </p>
        
        <NuxtLink 
          :to="post._path" 
          class="inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors duration-300 group/read-more"
        >
          Read more
          <svg class="w-4 h-4 transition-transform group-hover/read-more:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </NuxtLink>
      </div>
    </article>
  </template>
  
  <script setup lang="ts">
  defineProps({
    post: {
      type: Object,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .group:hover .bg-slate-800\/40 {
    transform: translateY(-5px);
  }
  </style>