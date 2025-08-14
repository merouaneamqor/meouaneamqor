<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
    <!-- Subtle Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="blog-grid-pattern"></div>
    </div>
    
    <!-- Floating Blog Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="blog-element element-1"></div>
      <div class="blog-element element-2"></div>
      <div class="blog-element element-3"></div>
      <div class="blog-element element-4"></div>
    </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
      <!-- Blog Header -->
    <div class="text-center mb-10 sm:mb-16">
        <div class="inline-flex items-center gap-3 mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
            </svg>
          </div>
        <h1 class="text-3xl lg:text-5xl font-bold text-white professional-glow">
            {{ t('blog.title') }}
          </h1>
        </div>
        
        <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full mx-auto mb-6"></div>
        
        <p class="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
          {{ t('blog.subtitle') }}
        </p>

        <!-- Blog Stats -->
        <div class="flex flex-wrap justify-center gap-6 mb-12">
          <div class="blog-stat">
            <div class="stat-number">{{ posts?.length || 0 }}</div>
            <div class="stat-label">{{ t('blog.articles') }}</div>
          </div>
          <div class="blog-stat">
            <div class="stat-number">{{ categories?.length || 0 }}</div>
            <div class="stat-label">{{ t('blog.categories') }}</div>
          </div>
          <div class="blog-stat">
            <div class="stat-number">{{ totalReadTime }}</div>
            <div class="stat-label">{{ t('blog.min_read') }}</div>
          </div>
        </div>

        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            @click="selectedCategory = 'all'"
            :class="['category-filter', selectedCategory === 'all' ? 'active' : '']"
          >
            {{ t('blog.all_posts') }}
          </button>
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            :class="['category-filter', selectedCategory === category ? 'active' : '']"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article 
          v-for="post in filteredPosts" 
          :key="post._path || post.id" 
          class="blog-post-card group"
        >
          <!-- Post Image -->
          <div class="post-image-container">
            <img 
            :src="post.image || `https://placehold.co/400x200?text=${encodeURIComponent(post.title || 'No Title')}`" 
            :alt="post.title || 'No Title'"
              class="post-image"
            >
            <div class="post-overlay">
              <div class="post-category-badge">
                {{ post.category || t('blog.general') }}
              </div>
            </div>
          </div>

          <!-- Post Content -->
          <div class="post-content">
            <!-- Post Meta -->
            <div class="post-meta">
              <div class="flex items-center gap-2 text-xs text-slate-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span>{{ formatDate(post.date || post.createdAt) }}</span>
              </div>
              <div class="flex items-center gap-2 text-xs text-slate-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>{{ post.readTime || calculateReadTime(post.body?.children) }} {{ t('blog.min_read_short') }}</span>
              </div>
            </div>

            <!-- Post Title -->
            <h2 class="post-title">
              {{ post.title }}
            </h2>

            <!-- Post Excerpt -->
            <p class="post-excerpt">
              {{ post.excerpt || post.description || generateExcerpt(post.body?.children) }}
            </p>

            <!-- Post Tags -->
            <div class="post-tags" v-if="post.tags && post.tags.length">
              <span 
                v-for="tag in post.tags" 
                :key="tag" 
                class="post-tag"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Read More Button -->
            <div class="post-actions">
              <NuxtLink 
                :to="post._path" 
                class="read-more-btn group/btn"
              >
                <span>{{ t('blog.read_article') }}</span>
                <svg class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>

      <!-- Empty State -->
      <div v-if="!filteredPosts?.length" class="text-center py-12 sm:py-16">
        <div class="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-slate-300 mb-2">{{ t('blog.no_articles_found') }}</h3>
        <p class="text-slate-400">
          {{ selectedCategory === 'all' ? t('blog.no_posts_yet') : t('blog.no_articles_in_category', { category: selectedCategory }) }}
        </p>
      </div>

      <!-- Load More Button -->
      <div v-if="hasMorePosts" class="text-center mt-16">
        <button 
          @click="loadMorePosts"
          :disabled="isLoading"
          class="load-more-btn"
        >
          <span v-if="!isLoading">{{ t('blog.load_more') }}</span>
          <span v-else class="flex items-center gap-2">
            <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ t('common.loading') }}
          </span>
        </button>
      </div>

      <!-- Newsletter Subscription -->
      <div class="newsletter-section">
        <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-xl p-8 text-center">
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-white mb-3">{{ t('blog.stay_updated') }}</h3>
            <p class="text-slate-300">{{ t('blog.stay_updated_desc') }}</p>
          </div>
          
          <div class="max-w-md mx-auto">
            <div class="flex gap-3">
              <input 
                type="email" 
                :placeholder="t('common.email_placeholder')"
                v-model="newsletterEmail"
                class="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
              >
              <button 
                @click="subscribeNewsletter"
                :disabled="!newsletterEmail || isSubscribing"
                class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all disabled:opacity-50"
              >
                {{ isSubscribing ? t('blog.subscribing') : t('common.subscribe') }}
              </button>
            </div>
            
            <!-- Success Message -->
            <div v-if="subscriptionSuccess" class="mt-3 text-emerald-400 text-sm">
              ✓ {{ t('blog.subscribe_success') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAsyncData, queryContent, useHead } from '#imports'
const { t, locale } = useI18n()

// SEO
useHead({
  title: () => locale.value === 'fr' ? 'Blog | Merouane Amqor' : 'Blog | Merouane Amqor',
  meta: [
    { name: 'description', content: t('blog.seo_description') }
  ]
})

// Fetch blog posts
const { data: posts } = await useAsyncData('posts', () => 
  queryContent('/blog').sort({ date: -1 }).find()
)

// Reactive state
const selectedCategory = ref('all')
const newsletterEmail = ref('')
const isLoading = ref(false)
const hasMorePosts = ref(false)
const isSubscribing = ref(false)
const subscriptionSuccess = ref(false)

// Computed properties
const categories = computed(() => {
  if (!posts.value) return []
  const cats = [...new Set(posts.value.map(post => post.category).filter(Boolean))]
  return cats.sort()
})

const totalReadTime = computed(() => {
  if (!posts.value) return 0
  return posts.value.reduce((total, post) => {
    return total + (post.readTime || calculateReadTime(post.body?.children) || 5)
  }, 0)
})

const filteredPosts = computed(() => {
  if (!posts.value) return []
  if (selectedCategory.value === 'all') {
    return posts.value
  }
  return posts.value.filter(post => post.category === selectedCategory.value)
})

// Helper functions
const formatDate = (dateString: string) => {
  if (!dateString) return t('blog.recent')
  const date = new Date(dateString)
  return date.toLocaleDateString(locale.value === 'fr' ? 'fr-FR' : 'en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}

const calculateReadTime = (content: any) => {
  if (!content) return 5
  // Simple word count estimation
  const text = JSON.stringify(content)
  const wordCount = text.split(/\s+/).length
  return Math.ceil(wordCount / 200) // Average reading speed
}

const generateExcerpt = (content: any) => {
  if (!content) return t('blog.read_more_prompt')
  const text = JSON.stringify(content)
  return text.substring(0, 150) + '...'
}

const loadMorePosts = () => {
  isLoading.value = true
  // Simulate loading more posts
  setTimeout(() => {
    isLoading.value = false
    hasMorePosts.value = false
  }, 2000)
}

const subscribeNewsletter = async () => {
  if (!newsletterEmail.value) return
  
  isSubscribing.value = true
  
  try {
    // Simulate newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Newsletter subscription:', newsletterEmail.value)
    subscriptionSuccess.value = true
    newsletterEmail.value = ''
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      subscriptionSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Subscription error:', error)
  } finally {
    isSubscribing.value = false
  }
}
</script>

<style scoped>
/* Background Grid Pattern */
.blog-grid-pattern {
  background-image: 
    linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
  background-size: 240px 240px;
  width: 100%;
  height: 100%;
  animation: blog-grid-drift 300s linear infinite;
}

@keyframes blog-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(240px, 240px); }
}

/* Floating Blog Elements */
.blog-element {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2));
  border-radius: 50%;
  animation: blog-element-float 50s ease-in-out infinite;
}

.element-1 { top: 20%; left: 10%; animation-delay: 0s; }
.element-2 { top: 50%; right: 15%; animation-delay: 12s; }
.element-3 { bottom: 30%; left: 20%; animation-delay: 25s; }
.element-4 { top: 70%; right: 30%; animation-delay: 37s; }

@keyframes blog-element-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
  50% { transform: translateY(-80px) rotate(180deg); opacity: 0.6; }
}

/* Professional Glow Effect */
.professional-glow {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

/* Blog Stats */
.blog-stat {
  text-align: center;
  padding: 1rem;
  background-color: rgba(30, 41, 59, 0.3);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(71, 85, 105, 0.3);
  border-radius: 0.75rem;
  min-width: 80px;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(16, 185, 129);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.75rem;
  color: rgb(148, 163, 184);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Category Filters */
.category-filter {
  padding: 0.5rem 1rem;
  background-color: rgba(51, 65, 85, 0.5);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: 9999px;
  color: rgb(203, 213, 225);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s;
  cursor: pointer;
}

.category-filter:hover {
  background-color: rgba(51, 65, 85, 0.7);
  border-color: rgba(100, 116, 139, 0.7);
}

.category-filter.active {
  background: linear-gradient(135deg, #10b981, #06b6d4);
  border-color: transparent;
  color: white;
}

/* Blog Post Cards */
.blog-post-card {
  background-color: rgba(30, 41, 59, 0.3);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(71, 85, 105, 0.3);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s;
}

.blog-post-card:hover {
  background-color: rgba(30, 41, 59, 0.5);
  border-color: rgba(100, 116, 139, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

.post-image-container {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.post-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.blog-post-card:hover .post-image {
  transform: scale(1.05);
}

.post-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3));
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 1rem;
}

.post-category-badge {
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(6, 182, 212, 0.9));
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.post-content {
  padding: 1.5rem;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.post-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.post-excerpt {
  color: rgb(203, 213, 225);
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.post-tag {
  padding: 0.25rem 0.5rem;
  background-color: rgba(51, 65, 85, 0.5);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: 0.25rem;
  color: rgb(148, 163, 184);
  font-size: 0.75rem;
  font-weight: 500;
}

.post-actions {
  display: flex;
  justify-content: flex-end;
}

.read-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1));
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 0.5rem;
  color: rgb(16, 185, 129);
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.read-more-btn:hover {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2));
  border-color: rgba(16, 185, 129, 0.5);
  transform: translateY(-1px);
}

/* Load More Button */
.load-more-btn {
  padding: 0.875rem 2rem;
  background-color: rgba(51, 65, 85, 0.5);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: 0.5rem;
  color: rgb(203, 213, 225);
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
}

.load-more-btn:hover:not(:disabled) {
  background-color: rgba(51, 65, 85, 0.7);
  border-color: rgba(100, 116, 139, 0.7);
  transform: translateY(-2px);
}

.load-more-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Newsletter Section */
.newsletter-section {
  margin-top: 4rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .md\:grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .post-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .flex-wrap {
    justify-content: center;
  }
}
</style>