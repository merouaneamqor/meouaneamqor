<template>
  <footer class="bg-gray-900 text-gray-300 border-t border-cyan-900">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- About Section -->
        <div>
          <h2 class="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Merouane Amqor</h2>
          <p class="text-gray-400 mb-4">Committed Software Engineer and Certified ScrumMaster® based in Casablanca, Morocco.</p>
        </div>

        <!-- Navigation Section -->
        <div>
          <h2 class="text-xl font-bold mb-4 text-cyan-300">Quick Links</h2>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.url">
              <NuxtLink 
                :to="link.url" 
                class="text-gray-400 hover:text-cyan-300 transition duration-300"
              >
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div>
          <h2 class="text-xl font-bold mb-4 text-cyan-300">Contact Info</h2>
          <ul class="space-y-2">
            <li>
              <a 
                href="mailto:marouane.amqor@gmail.com" 
                class="text-gray-400 hover:text-cyan-300 transition duration-300 flex items-center"
              >
                <Mail class="w-5 h-5 mr-2" />
                marouane.amqor@gmail.com
              </a>
            </li>
            <li>
              <a 
                href="tel:+212701086726" 
                class="text-gray-400 hover:text-cyan-300 transition duration-300 flex items-center"
              >
                <Phone class="w-5 h-5 mr-2" />
                +212701086726
              </a>
            </li>
            <li class="flex items-center text-gray-400">
              <MapPin class="w-5 h-5 mr-2" />
              Casablanca, Morocco
            </li>
          </ul>
        </div>

        <!-- Social Media Section -->
        <div>
          <h2 class="text-xl font-bold mb-4 text-cyan-300">Connect With Me</h2>
          <div class="flex space-x-4">
            <a 
              href="https://linkedin.com/in/merouane-amqor" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-gray-400 hover:text-cyan-300 transition duration-300"
            >
              <Linkedin class="w-6 h-6" />
              <span class="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/merouaneamqor" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-gray-400 hover:text-cyan-300 transition duration-300"
            >
              <Github class="w-6 h-6" />
              <span class="sr-only">GitHub</span>
            </a>
            <a 
              href="https://douq.ma/about" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-gray-400 hover:text-cyan-300 transition duration-300"
            >
              <Globe class="w-6 h-6" />
              <span class="sr-only">Douq.ma</span>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-gray-800 text-center">
        <p class="text-gray-400">
          © {{ new Date().getFullYear() }} Merouane Amqor. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-vue-next'

const quickLinks = [
  { text: 'Home', url: '/' },
  { text: 'Portfolio', url: '/portfolio' },
  { text: 'About', url: '/about' },
  { text: 'Contact', url: '/contact' },
  { text: 'Blog', url: '/blog' }
]
</script>