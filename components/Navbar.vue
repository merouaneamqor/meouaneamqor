<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-14 sm:h-16">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center gap-2 sm:gap-3 text-white font-bold text-base sm:text-lg hover:text-emerald-400 transition-colors">
            <div class="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span class="text-white text-xs sm:text-sm font-bold">MA</span>
            </div>
            <span class="hidden sm:block">Merouane Amqor</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-4 lg:gap-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.href"
            :to="item.href"
            class="nav-link relative py-2 px-2 lg:px-3 text-slate-300 hover:text-emerald-400 transition-colors font-medium text-sm lg:text-base"
            :class="{ 'text-emerald-400': isActive(item.href) }"
          >
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center gap-4">
          <a 
            href="mailto:marouane.amqor@gmail.com"
            class="px-4 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 text-sm lg:text-base"
          >
            <span class="hidden lg:inline">Let's Connect</span>
            <span class="lg:hidden">Connect</span>
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="p-2 text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-slate-700/50 py-3">
        <div class="flex flex-col gap-3">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.href"
            :to="item.href"
            @click="closeMobileMenu"
            class="py-2.5 px-3 text-slate-300 hover:text-emerald-400 transition-colors font-medium text-base"
            :class="{ 'text-emerald-400': isActive(item.href) }"
          >
            {{ item.name }}
          </NuxtLink>
          <a 
            href="mailto:marouane.amqor@gmail.com"
            class="mt-3 mx-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg text-center"
          >
            Let's Connect
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
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #10b981, #06b6d4);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}
</style>