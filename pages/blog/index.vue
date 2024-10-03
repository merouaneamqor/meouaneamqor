<template>
  <div class="min-h-screen bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Blog</h1>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BlogPost v-for="post in posts" :key="post._path" :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData, queryContent, useHead } from '#imports'

const { data: posts } = await useAsyncData('posts', () => queryContent('/blog').sort({ date: -1 }).find())

useHead({
  title: 'Blog | Merouane Amqor',
  meta: [
    { name: 'description', content: 'Explore insightful articles on web development, Nuxt.js, and software engineering best practices.' }
  ]
})
</script>