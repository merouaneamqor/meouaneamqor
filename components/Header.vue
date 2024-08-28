<template>
  <section class="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <div class="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Hi, I'm Merouane Amqor
          </h1>
          <p class="text-xl text-gray-600 mb-6">
            Full-Stack Developer & Certified ScrumMaster®
          </p>
          <p class="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Passionate about creating innovative web solutions and leading development teams to success.
          </p>
          <div class="flex flex-wrap justify-center lg:justify-start gap-4">
            <NuxtLink
              v-for="(link, index) in links"
              :key="index"
              :to="link.href"
              :class="[
                'inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-colors duration-300',
                link.primary
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-white text-blue-500 hover:bg-gray-200'
              ]"
            >
              {{ link.text }}
              <ArrowRight class="ml-2 h-4 w-4" />
            </NuxtLink>
          </div>
        </div>
        <div class="lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src="https://avatars.githubusercontent.com/u/37594453?v=4" 
            alt="Merouane Amqor" 
            width="256"
            height="256"
            class="rounded-full w-64 h-64 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const links = [
  { href: '/contact', text: 'Get in Touch', primary: true },
  { href: '/portfolio', text: 'View Portfolio' },
  { href: '/blog', text: 'View Blog' }
]
</script>