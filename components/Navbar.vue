<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-ios-separator font-myriad">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Clean Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="text-ios-label font-semibold text-lg hover:text-ios-blue transition-colors">
            Merouane Amqor
          </NuxtLink>
        </div>

        <!-- Clean Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.href"
            :to="item.href"
            class="text-ios-label-secondary hover:text-ios-blue transition-colors font-medium"
            :class="{ 'text-ios-blue': isActive(item.href) }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- iOS-style CTA Button -->
        <div class="hidden md:flex items-center">
          <a 
            href="mailto:marouaneamqor@gmail.com"
            class="px-4 py-2 bg-ios-label text-ios-background text-sm font-semibold rounded-full hover:bg-ios-label-secondary transition-colors"
          >
            Contact
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="p-2 text-ios-label-secondary hover:text-ios-blue transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-ios-separator py-4">
        <div class="flex flex-col gap-4">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.href"
            :to="item.href"
            @click="closeMobileMenu"
            class="text-ios-label-secondary hover:text-ios-blue transition-colors font-medium"
            :class="{ 'text-ios-blue': isActive(item.href) }"
          >
            {{ item.name }}
          </NuxtLink>
          <a 
            href="mailto:marouaneamqor@gmail.com"
            class="mt-4 px-6 py-3 bg-ios-label text-ios-background font-semibold rounded-full text-center hover:bg-ios-label-secondary transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
]

const isActive = (href: string) => {
  if (href === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(href)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Close mobile menu when route changes
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
/* Clean minimal styles */
</style>