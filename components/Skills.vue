<template>
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mx-auto bg-white border rounded-md shadow-sm">
          <div class="p-8">
            <h2 class="text-3xl font-semibold text-gray-900 mb-6 pb-2 border-b">Skills Overview</h2>
            <p class="text-base text-gray-700 mb-8">
              As a seasoned <span class="font-semibold text-blue-600">Software Engineer</span>, I specialize in crafting scalable and efficient web applications. My expertise extends to <span class="font-semibold text-blue-600">Agile methodologies</span>, ensuring streamlined and adaptive project management.
            </p>
            
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Core Competencies</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="skill in coreSkills" 
                  :key="skill" 
                  class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full hover:bg-blue-200 transition-all duration-300 cursor-default"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
            
            <p class="text-base text-gray-700 mb-8">
              With a strong background in <span class="font-semibold text-blue-600">team leadership</span>, I excel in guiding teams to meet project goals efficiently. My approach includes <span class="font-semibold text-blue-600">rapid prototyping</span> and <span class="font-semibold text-blue-600">solution design</span>, ensuring innovative and user-centric development.
            </p>
            
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Technical Proficiencies</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div 
                  v-for="category in skillCategories" 
                  :key="category.name" 
                  class="bg-gray-50 rounded-md p-4 border"
                >
                  <h4 class="font-semibold text-gray-700 mb-2">{{ category.name }}</h4>
                  <ul class="space-y-1">
                    <li 
                      v-for="skill in category.skills" 
                      :key="skill" 
                      class="text-sm text-gray-600 flex items-center"
                    >
                      <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {{ skill }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const coreSkills = ref([
    'Software Engineering',
    'Agile Methodologies',
    'Team Leadership',
    'Rapid Prototyping',
    'Solution Design',
    'Market Research',
    'Benchmarking'
  ])
  
  const skillCategories = ref([
    {
      name: 'Frontend',
      skills: ['React', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Ruby on Rails', 'Python', 'Java', 'PHP']
    },
    {
      name: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
    },
    {
      name: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git']
    },
    {
      name: 'Methodologies',
      skills: ['Scrum']
    },
    {
      name: 'Tools',
      skills: ['JIRA', 'Confluence', 'Slack', 'Trello', 'Figma']
    }
  ])
  </script>