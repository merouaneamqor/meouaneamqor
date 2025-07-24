<template>
  <nav class="bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-2xl sticky top-0 z-50 font-mono">
    <!-- Enhanced animated background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="nav-grid-pattern"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex items-center justify-between h-20">
        
        <!-- Enhanced logo section -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex-shrink-0 select-none flex items-center gap-4 group">
            <div class="relative">
              <span class="inline-block w-12 h-12 p-2.5 bg-slate-800 rounded-xl border border-slate-600/50 group-hover:border-slate-500 transition-colors shadow-lg">
                <img src="https://www.svgrepo.com/show/376345/rails.svg" alt="Rails logo" class="w-full h-full filter brightness-0 invert" />
              </span>
              <!-- Enhanced glow effect -->
              <div class="absolute inset-0 bg-slate-400/30 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h1 class="text-2xl font-bold tracking-wider text-slate-100 group-hover:text-white transition-colors">
              amqor<span class="text-slate-400">.</span><span class="text-emerald-400">dev</span>
            </h1>
          </NuxtLink>
        </div>

        <!-- Enhanced desktop navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-2">
            <NuxtLink 
              v-for="link in links"
              :key="link.href"
              :to="link.href"
              :target="link.target"
              :class="[
                'px-5 py-2.5 rounded-xl font-medium text-base transition-all duration-300 relative group/nav',
                link.target === '_blank'
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  : [
                      'text-slate-300 hover:text-white hover:bg-slate-800/50',
                      isActive(link.href) ? 'bg-slate-800 text-white border border-slate-600/50' : ''
                    ]
              ]"
            >
              <span class="relative z-10 flex items-center gap-2">
                {{ link.text }}
                <ExternalLink v-if="link.target === '_blank'" class="w-4 h-4 opacity-60" />
              </span>
              
              <!-- Enhanced active indicator -->
              <div 
                v-if="isActive(link.href)" 
                class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full"
              ></div>
              
              <!-- Enhanced hover effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-slate-700/0 via-slate-700/50 to-slate-700/0 opacity-0 group-hover/nav:opacity-100 transition-opacity rounded-xl"></div>
            </NuxtLink>
          </div>
        </div>

        <!-- Enhanced mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-slate-600 transition-colors shadow-lg"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <Menu v-if="!isMenuOpen" class="block h-6 w-6" aria-hidden="true" />
            <X v-else class="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <!-- Enhanced mobile menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 transform -translate-y-2"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-2"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-700/50">
        <div class="px-5 pt-4 pb-6 space-y-2">
          <NuxtLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            :target="link.target"
            :class="[
              'block px-5 py-4 rounded-xl font-medium text-base transition-all duration-300 relative group/mobile',
              link.target === '_blank'
                ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                : [
                    'text-slate-300 hover:text-white hover:bg-slate-800/50',
                    isActive(link.href) ? 'bg-slate-800 text-white border-l-4 border-emerald-400' : ''
                  ]
            ]"
            @click="isMenuOpen = false"
          >
            <span class="flex items-center gap-3">
              {{ link.text }}
              <ExternalLink v-if="link.target === '_blank'" class="w-4 h-4 opacity-60" />
            </span>
            <!-- Enhanced hover effect for mobile -->
            <div class="absolute inset-0 bg-gradient-to-r from-slate-700/0 via-slate-700/30 to-slate-700/0 opacity-0 group-hover/mobile:opacity-100 transition-opacity rounded-xl"></div>
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
/* Enhanced grid pattern for nav background */
.nav-grid-pattern {
  background-image: 
    linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  width: 100%;
  height: 100%;
  animation: nav-grid-drift 50s linear infinite;
}

@keyframes nav-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
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