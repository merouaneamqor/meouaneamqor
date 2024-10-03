<template>
  <section class="py-16 bg-gray-900 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-25"></div>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 class="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Core Competencies</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="skill in skills" :key="skill.name" class="bg-gray-800 p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-lg bg-opacity-50 border border-cyan-900 hover:border-cyan-400 transition-all duration-300">
          <div class="flex items-center mb-4">
            <component :is="skill.icon" class="w-8 h-8 mr-3 text-cyan-400" />
            <h3 class="text-xl font-semibold text-cyan-300">{{ skill.name }}</h3>
          </div>
          <p class="text-gray-300 mb-4">{{ skill.description }}</p>
          <div class="w-full bg-gray-700 rounded-full h-2.5">
            <div class="bg-gradient-to-r from-cyan-400 to-purple-400 h-2.5 rounded-full" :style="{ width: `${skill.level}%` }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Code, Users, Server, Briefcase, Cloud, Database } from 'lucide-vue-next'

const skills = [
  { 
    name: 'Full-Stack Development', 
    icon: Code, 
    level: 95,
    description: 'Expertise in Ruby on Rails, AngularJS, React, and Vue.js for comprehensive web application development.'
  },
  { 
    name: 'Team Leadership', 
    icon: Users, 
    level: 90,
    description: 'Certified ScrumMaster® with proven experience in leading and mentoring development teams.'
  },
  { 
    name: 'Cloud Platforms', 
    icon: Cloud, 
    level: 85,
    description: 'Proficient in AWS and Heroku for scalable and efficient cloud-based deployments.'
  },
  { 
    name: 'Agile & Scrum', 
    icon: Briefcase, 
    level: 95,
    description: 'Expert in implementing Agile methodologies and Scrum practices to enhance team collaboration and project delivery.'
  },
  { 
    name: 'Database Management', 
    icon: Database, 
    level: 90,
    description: 'Skilled in MongoDB, SQL, and PostgreSQL for efficient data management and optimization.'
  },
  { 
    name: 'DevOps & CI/CD', 
    icon: Server, 
    level: 85,
    description: 'Experience in setting up and maintaining continuous integration and deployment pipelines.'
  },
]
</script>