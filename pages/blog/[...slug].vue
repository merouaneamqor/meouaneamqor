<template>
    <div class="min-h-screen bg-gray-50 py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article v-if="post">
          <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">{{ post.title }}</h1>
          <div class="flex items-center text-sm text-gray-500 mb-8">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
            </svg>
            {{ new Date(post.date).toLocaleDateString() }}
          </div>
          <img :src="post.coverImage" :alt="post.title" class="w-full h-64 object-cover rounded-lg mb-8">
          <ContentRenderer :value="post" />
        </article>
        <div v-else class="text-center py-16">
          <h2 class="text-2xl font-semibold text-gray-900">Post not found</h2>
          <p class="mt-2 text-gray-600">The blog post you're looking for doesn't exist or has been removed.</p>
          <NuxtLink to="/blog" class="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
            Back to Blog
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const { path } = useRoute()
  const { data: post } = await useAsyncData(`content-${path}`, () => queryContent(path).findOne())
  
  useHead(() => ({
    title: post.value ? `${post.value.title} | Merouane Amqor's Blog` : 'Post Not Found',
    meta: [
      { name: 'description', content: post.value ? post.value.excerpt : 'Blog post not found' }
    ]
  }))
  </script>
  
  <style>
  .prose h2 {
    @apply text-2xl font-bold mt-8 mb-4;
  }
  .prose p {
    @apply mb-4;
  }
  .prose ul {
    @apply list-disc list-inside mb-4;
  }
  .prose code {
    @apply bg-gray-100 rounded px-1;
  }
  .prose pre {
    @apply bg-gray-100 rounded p-4 mb-4 overflow-x-auto;
  }
  </style>