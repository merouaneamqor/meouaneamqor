<template>
  <div class="min-h-screen bg-gray-50 py-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <article v-if="post" class="prose prose-lg max-w-none">
        <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">{{ post.title }}</h1>
        <div class="flex items-center text-sm text-gray-500 mb-8">
          <CalendarIcon class="w-4 h-4 mr-2" />
          {{ formatDate(post.date) }}
        </div>
        <NuxtImg v-if="post.coverImage" :src="post.coverImage" :alt="post.title" width="800" height="400" format="webp"
          loading="eager" class="w-full h-64 object-cover rounded-lg mb-8" />
        <ContentRenderer :value="post" />
      </article>
      <div v-else class="text-center py-16">
        <h2 class="text-2xl font-semibold text-gray-900">{{ t('blog.post_not_found') }}</h2>
        <p class="mt-2 text-gray-600">{{ t('blog.post_not_found_desc') }}</p>
        <NuxtLink :to="localePath('/blog')"
          class="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
          {{ t('blog.back_to_blog') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CalendarIcon } from 'lucide-vue-next'
const { t, locale } = useI18n()
const localePath = useLocalePath()

const { path } = useRoute()
const { data: post } = await useAsyncData(`content-${path}`, () =>
  queryContent(path).findOne()
)

useHead(() => ({
  title: post.value ? `${post.value.title} | Merouane Amqor` : t('blog.post_not_found'),
  meta: [
    { name: 'description', content: post.value ? post.value.excerpt : t('blog.post_not_found_desc') }
  ]
}))

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString(locale.value === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style>
.prose {
  @apply text-gray-900;
}

.prose h1 {
  @apply text-3xl font-extrabold sm:text-4xl mb-4;
}

.prose h2 {
  @apply text-2xl font-bold mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-semibold mt-6 mb-3;
}

.prose p {
  @apply mb-4;
}

.prose ul,
.prose ol {
  @apply mb-4 pl-5;
}

.prose li {
  @apply mb-2;
}

.prose a {
  @apply text-blue-600 hover:underline;
}

.prose blockquote {
  @apply border-l-4 border-gray-300 pl-4 italic my-4;
}

.prose code {
  @apply bg-gray-100 rounded px-1 py-0.5 text-sm;
}

.prose pre {
  @apply bg-gray-100 rounded p-4 mb-4 overflow-x-auto;
}

.prose img {
  @apply rounded-lg my-4;
}
</style>