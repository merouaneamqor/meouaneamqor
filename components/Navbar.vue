<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 supports-backdrop-blur:bg-white/60 backdrop-blur-2xl font-myriad transition-colors duration-300',
      isScrolled ? 'bg-white/80 border-b border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.04)]' : 'bg-white/60 border-b border-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="text-slate-900 font-semibold text-lg tracking-tight hover:text-slate-700 transition-colors">
          Merouane Amqor
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="item in navigation"
            :key="item.href"
            :to="item.href"
            :aria-current="isActive(item.href) ? 'page' : undefined"
            class="px-3 py-2 rounded-full text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-900/5 transition-colors"
            :class="{ 'text-slate-900 bg-slate-900/10': isActive(item.href) }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- CTA -->
        <div class="hidden md:flex items-center">
          <a
            href="mailto:marouaneamqor@gmail.com"
            class="px-4 py-2 rounded-full text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            Contact
          </a>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Sheet -->
    <div v-if="mobileMenuOpen" class="md:hidden">
      <div class="border-t border-slate-200/80 bg-white/80 backdrop-blur-2xl">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div class="flex flex-col">
            <NuxtLink
              v-for="item in navigation"
              :key="item.href"
              :to="item.href"
              @click="closeMobileMenu"
              :aria-current="isActive(item.href) ? 'page' : undefined"
              class="px-3 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-900/5 transition-colors"
              :class="{ 'text-slate-900 bg-slate-900/10': isActive(item.href) }"
            >
              {{ item.name }}
            </NuxtLink>
            <a
              href="mailto:marouaneamqor@gmail.com"
              class="mt-2 px-4 py-3 rounded-xl text-base font-semibold bg-slate-900 text-white text-center hover:bg-slate-800 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
]

const isActive = (href: string) => {
  if (href === '/') return route.path === '/'
  return route.path.startsWith(href)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 4
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .transition-colors {
    transition: none;
  }
}
</style>