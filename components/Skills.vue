<template>
    <section class="py-6 bg-gray-100">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div v-for="skill in skills" :key="skill.name" class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <component :is="skill.icon" class="w-12 h-12 mb-4 text-blue-500" />
            <h3 class="text-lg font-semibold mb-2">{{ skill.name }}</h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div class="bg-blue-600 h-2.5 rounded-full" :style="{ width: `${skill.level}%` }"></div>
            </div>
            <p class="text-sm text-gray-600 text-center">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { Code, Database, Server, Users } from 'lucide-vue-next'
  
  const skills = [
    { 
      name: 'Full-Stack Development', 
      icon: Code, 
      level: 90,
      description: 'Proficient in both front-end and back-end technologies, creating seamless web applications.'
    },
    { 
      name: 'Database Management', 
      icon: Database, 
      level: 85,
      description: 'Experienced in designing and optimizing database structures for efficient data management.'
    },
    { 
      name: 'Server Administration', 
      icon: Server, 
      level: 80,
      description: 'Skilled in configuring and maintaining servers to ensure optimal performance and security.'
    },
    { 
      name: 'Team Leadership', 
      icon: Users, 
      level: 95,
      description: 'Certified ScrumMaster® with a proven track record of leading development teams to success.'
    },
  ]
  </script>