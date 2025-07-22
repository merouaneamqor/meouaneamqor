<template>
  <nav class="bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-2xl sticky top-0 z-50 font-mono">
    <!-- Subtle animated background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="nav-grid-pattern"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex items-center justify-between h-16">
        
        <!-- Logo Section -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex-shrink-0 select-none flex items-center gap-3 group">
            <div class="relative">
              <span class="inline-block w-10 h-10 p-2 bg-slate-800 rounded-lg border border-slate-600/50 group-hover:border-slate-500 transition-colors">
                <img src="https://www.svgrepo.com/show/376345/rails.svg" alt="Rails logo" class="w-full h-full filter brightness-0 invert" />
              </span>
              <!-- Subtle glow effect -->
              <div class="absolute inset-0 bg-slate-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h1 class="text-xl font-bold tracking-wider text-slate-100 group-hover:text-white transition-colors">
              amqor<span class="text-slate-400">.</span><span class="text-emerald-400">dev</span>
            </h1>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-1">
            <NuxtLink 
              v-for="link in links"
              :key="link.href"
              :to="link.href"
              :target="link.target"
              :class="[
                'px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 relative group',
                link.target === '_blank'
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  : [
                      'text-slate-300 hover:text-white hover:bg-slate-800/50',
                      isActive(link.href) ? 'bg-slate-800 text-white border border-slate-600/50' : ''
                    ]
              ]"
            >
              <span class="relative z-10 flex items-center gap-1">
                {{ link.text }}
                <ExternalLink v-if="link.target === '_blank'" class="w-3 h-3 opacity-60" />
              </span>
              
              <!-- Active indicator -->
              <div 
                v-if="isActive(link.href)" 
                class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full"
              ></div>
              
              <!-- Hover effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-slate-700/0 via-slate-700/50 to-slate-700/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-slate-600 transition-colors"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <Menu v-if="!isMenuOpen" class="block h-5 w-5" aria-hidden="true" />
            <X v-else class="block h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 transform -translate-y-2"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-2"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-700/50">
        <div class="px-4 pt-2 pb-3 space-y-1">
          <NuxtLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            :target="link.target"
            :class="[
              'block px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 relative',
              link.target === '_blank'
                ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                : [
                    'text-slate-300 hover:text-white hover:bg-slate-800/50',
                    isActive(link.href) ? 'bg-slate-800 text-white border-l-4 border-emerald-400' : ''
                  ]
            ]"
            @click="isMenuOpen = false"
          >
            <span class="flex items-center gap-2">
              {{ link.text }}
              <ExternalLink v-if="link.target === '_blank'" class="w-3 h-3 opacity-60" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X, ExternalLink } from 'lucide-vue-next'

const isMenuOpen = ref(false)
const route = useRoute()

const links = [
  { href: '/portfolio', text: 'Portfolio' },
  { href: '/blog', text: 'Blog' },
  { href: '/about', text: 'About' },
  { href: '/contact', text: 'Contact' },
  { href: 'https://douq.ma', text: 'Douq.ma', target: '_blank' },
  { href: 'https://github.com/merouaneamqor', text: 'GitHub', target: '_blank' },
  { href: 'https://linkedin.com/in/merouane-amqor', text: 'LinkedIn', target: '_blank' }
]

function isActive(href: string) {
  if (href.startsWith('http')) return false
  return route.path === href
}
</script>

<style scoped>
/* Subtle grid pattern for nav background */
.nav-grid-pattern {
  background-image: 
    linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  width: 100%;
  height: 100%;
  animation: nav-grid-drift 40s linear infinite;
}

@keyframes nav-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(40px, 40px); }
}

/* Smooth transitions for all interactive elements */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom focus styles */
.focus\:ring-slate-600:focus {
  --tw-ring-color: rgb(71 85 105 / 0.5);
}

/* Mobile menu backdrop blur enhancement */
@supports (backdrop-filter: blur(12px)) {
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
}
</style>