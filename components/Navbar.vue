<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex-shrink-0">
            <h1 class="text-2xl font-bold text-gray-800">AMQOR Merouane</h1>
          </NuxtLink>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-4">
            <NuxtLink 
              v-for="link in links" 
              :key="link.href" 
              :to="link.href"
              :target="link.target"
              :class="[
                'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300',
                link.target === '_blank' 
                  ? 'text-blue-600 hover:text-blue-800 hover:bg-blue-100 flex items-center' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              ]"
            >
              {{ link.text }}
              <ExternalLink v-if="link.target === '_blank'" class="w-4 h-4 ml-1 external-link-icon" />
            </NuxtLink>
          </div>
        </div>
        <div class="md:hidden">
          <button 
            @click="isMenuOpen = !isMenuOpen" 
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <Menu v-if="!isMenuOpen" class="block h-6 w-6" aria-hidden="true" />
            <X v-else class="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="isMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NuxtLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            :target="link.target"
            :class="[
              'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300',
              link.target === '_blank' 
                ? 'text-blue-600 hover:text-blue-800 hover:bg-blue-100 flex items-center' 
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            ]"
            @click="isMenuOpen = false"
          >
            {{ link.text }}
            <ExternalLink v-if="link.target === '_blank'" class="w-4 h-4 ml-1 external-link-icon" />
          </NuxtLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, ExternalLink } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const links = [
  { href: '/portfolio', text: 'Portfolio' },
  { href: '/blog', text: 'Blog' },
  { href: '/about', text: 'About' },
  { href: '/contact', text: 'Contact' },
  { href: 'https://douq.ma', text: 'Douq.ma', target: '_blank' },
  { href: 'https://github.com/merouaneamqor', text: 'GitHub', target: '_blank' },
  { href: 'https://linkedin.com/in/merouane-amqor', text: 'LinkedIn', target: '_blank' }
]
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.external-link-icon {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>