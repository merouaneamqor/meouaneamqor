<template>
    <section class="py-16 bg-gray-900 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-25"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 class="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Notable Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="project in projects" 
            :key="project.name" 
            class="bg-gray-800 rounded-lg shadow-2xl overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-50 border border-cyan-900 hover:border-cyan-400 transition-all duration-300"
          >
            <div class="p-6">
              <h3 class="text-xl font-semibold text-cyan-300 mb-2">{{ project.name }}</h3>
              <p class="text-gray-300 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-2 py-1 text-xs font-medium rounded-full bg-blue-900 text-cyan-300"
                >
                  {{ tech }}
                </span>
              </div>
              <a 
                :href="project.link" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center"
              >
                View Project <ArrowRight class="inline-block w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ArrowRight } from 'lucide-vue-next'
  
  const projects = [
    {
      name: 'DabaDoc Healthcare Platform',
      description: 'Led the development of a comprehensive healthcare platform connecting patients with doctors across Africa and the Middle East.',
      technologies: ['Ruby on Rails', 'AngularJS', 'MongoDB', 'AWS'],
      link: 'https://www.dabadoc.com'
    },
    {
      name: 'Douq.ma',
      description: 'Founded and developed a platform for discovering cozy spaces in Morocco, integrating cutting-edge technologies and exploring blockchain for review authenticity.',
      technologies: ['Nuxt.js', 'Laravel', 'Blockchain'],
      link: 'https://www.douq.ma'
    },
    {
      name: 'Meram / Texam E-commerce Platform',
      description: 'Co-founded and engineered a comprehensive e-commerce platform with mobile application integration.',
      technologies: ['Ruby on Rails', 'React Native', 'PostgreSQL'],
      link: 'https://www.texam.ma'
    },
    {
      name: 'Real Estate Sales Management System',
      description: 'Developed and optimized a system for Riad Raha, significantly boosting business operations and client service efficiency.',
      technologies: ['Ruby on Rails', 'Vue.js', 'MySQL'],
      link: '#'
    }
  ]
  </script>