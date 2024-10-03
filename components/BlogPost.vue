<template>
    <article class="bg-white shadow-md rounded-lg overflow-hidden">
      <NuxtLink :to="post._path" class="block hover:opacity-75 transition-opacity duration-300">
        <img :src="post.coverImage" :alt="post.title" class="w-full h-48 object-cover">
      </NuxtLink>
      <div class="p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-2">
          <NuxtLink :to="post._path" class="hover:text-blue-600 transition-colors duration-300">
            {{ post.title }}
          </NuxtLink>
        </h2>
        <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
        <div class="flex items-center text-sm text-gray-500">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
          </svg>
          {{ new Date(post.date).toLocaleDateString() }}
        </div>
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