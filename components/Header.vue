<template>
  <header class="bg-white text-gray-800 py-12 px-6">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="mb-6 md:mb-0 text-center md:text-left">
          <h1 class="text-4xl md:text-5xl font-bold mb-2">Merouane Amqor</h1>
          <p class="text-xl md:text-2xl text-gray-600 mb-4">Software Engineer | Certified ScrumMaster®</p>
          <p class="text-sm md:text-base text-gray-500 mb-2">Casablanca, Morocco</p>
          <p class="text-sm italic text-gray-500">"I don't do if, buts, and maybes, I do absolutes."</p>
        </div>
        <div class="relative">
          <img 
            src="/assets/images/me.jpeg" 
            alt="Merouane Amqor" 
            class="rounded-full h-32 w-32 md:h-40 md:w-40 border-4 border-gray-200 shadow-lg transition-transform duration-300 hover:scale-105"
          >
          <div class="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
            <CheckCircle class="h-4 w-4 text-white" />
            <span class="sr-only">Available for hire</span>
          </div>
        </div>
      </div>
      <div class="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
        <a 
          v-for="link in links" 
          :key="link.href" 
          :href="link.href" 
          :target="link.external ? '_blank' : '_self'"
          class="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-sm transition-colors duration-300 flex items-center"
        >
          <component :is="link.icon" class="w-4 h-4 mr-2" />
          {{ link.text }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Phone, Linkedin, Github, Globe, CheckCircle } from 'lucide-vue-next'

const links = ref([
  { href: 'mailto:marouane.amqor@gmail.com', text: 'Email', icon: Mail, external: false },
  { href: 'tel:+212701086726', text: 'Phone', icon: Phone, external: false },
  { href: 'https://linkedin.com/in/merouane-amqor', text: 'LinkedIn', icon: Linkedin, external: true },
  { href: 'https://github.com/merouaneamqor', text: 'GitHub', icon: Github, external: true },
  { href: 'https://merouaneamqor.com', text: 'Website', icon: Globe, external: true },
])
</script>