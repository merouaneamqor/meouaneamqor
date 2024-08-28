<template>
  <section class="py-16 bg-gray-50 text-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-semibold mb-8 border-b pb-2">Experience Timeline</h2>
      <div class="space-y-8">
        <div 
          v-for="(experience, index) in sortedExperiences" 
          :key="index" 
          class="bg-white border rounded-md shadow-sm"
        >
          <div class="p-4 border-b bg-gray-100">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-semibold text-gray-900">{{ experience.role }}</h3>
              <span class="text-sm text-gray-600">{{ experience.startDate }} - {{ experience.endDate }}</span>
            </div>
          </div>
          <div class="p-4">
            <p class="text-gray-700 mb-4">{{ experience.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(skill, skillIndex) in experience.skills" 
                :key="skillIndex"
                class="px-2 py-1 text-xs font-medium rounded-full"
                :class="getSkillColor(skill)"
              >
                {{ skill }}
              </span>
            </div>
          </div>
          <div class="p-2 bg-gray-50 border-t text-sm text-gray-600 flex items-center">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
            </svg>
            Started {{ experience.startDate }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Experience {
  role: string;
  description: string;
  startDate: string;
  endDate: string;
  skills: string[];
}

const currentYear = new Date().getFullYear()

const experiences = ref<Experience[]>([
  {
    role: 'Founder & Technical Lead at Douq.ma',
    description: 'Founded and lead Douq.ma, pioneering a platform that transforms how cozy spaces are discovered in Morocco. I drive the team to develop and integrate cutting-edge solutions with Nuxt.js and Laravel, and explore blockchain for review authenticity.',
    startDate: '2024',
    endDate: `${currentYear}`,
    skills: ['Nuxt.js', 'Ruby On Rails', 'Team Leadership', 'Product Development']
  },
  {
    role: 'Development Team Lead at DabaDoc',
    description: 'Leading development initiatives and managing a team focused on deploying scalable health solutions. Enhanced system capabilities with a blend of modern technologies and collaborative efforts, significantly improving platform engagement and performance.',
    startDate: '2024',
    endDate: `${currentYear}`,
    skills: ['Team Management', 'Scalable Solutions', 'Health Tech', 'Performance Optimization']
  },
  {
    role: 'Full-stack Developer at DabaDoc',
    description: 'Guided and mentored a development team, focusing on leveraging emerging technologies to innovate and enhance feature sets. Worked closely with the marketing team to boost brand recognition and user engagement.',
    startDate: '2022',
    endDate: '2024',
    skills: ['Full-stack Development', 'Mentoring', 'Emerging Technologies', 'User Engagement']
  },
  {
    role: 'Software Engineer at Majorel',
    description: 'Specialized in front-end development, focusing on enhancing application interfaces and user experiences. Utilized a wide array of technologies including Ruby on Rails, AngularJS, and cloud services, to deliver high-quality software solutions.',
    startDate: '2019',
    endDate: '2022',
    skills: ['Front-end Development', 'Ruby on Rails', 'AngularJS', 'Cloud Services']
  },
  {
    role: 'Co-founder, Meram / Texam',
    description: 'Co-founded and engineered a comprehensive e-commerce platform using Ruby on Rails. Designed and deployed a JSON API for mobile application integration, enhancing the digital shopping experience.',
    startDate: '2020',
    endDate: `${currentYear}`,
    skills: ['E-commerce', 'Ruby on Rails', 'API Development', 'Mobile Integration']
  },
  {
    role: 'Information System Developer at Riad Raha',
    description: 'Developed and optimized a real estate sales management system, significantly boosting business operations and client service efficiency.',
    startDate: '2021',
    endDate: '2021',
    skills: ['Information Systems', 'Real Estate Tech', 'Business Operations']
  }
])

const sortedExperiences = computed(() => {
  return [...experiences.value].sort((a, b) => {
    return parseInt(b.startDate) - parseInt(a.startDate)
  })
})

const getSkillColor = (skill: string) => {
  const colors = {
    'Nuxt.js': 'bg-green-100 text-green-800',
    'Ruby On Rails': 'bg-red-100 text-red-800',
    'Team Leadership': 'bg-blue-100 text-blue-800',
    'Product Development': 'bg-purple-100 text-purple-800',
    'Team Management': 'bg-indigo-100 text-indigo-800',
    'Scalable Solutions': 'bg-yellow-100 text-yellow-800',
    'Health Tech': 'bg-pink-100 text-pink-800',
    'Performance Optimization': 'bg-orange-100 text-orange-800',
    'Full-stack Development': 'bg-teal-100 text-teal-800',
    'Mentoring': 'bg-cyan-100 text-cyan-800',
    'Emerging Technologies': 'bg-lime-100 text-lime-800',
    'User Engagement': 'bg-sky-100 text-sky-800',
    'Front-end Development': 'bg-amber-100 text-amber-800',
    'AngularJS': 'bg-red-100 text-red-800',
    'Cloud Services': 'bg-blue-100 text-blue-800',
    'E-commerce': 'bg-green-100 text-green-800',
    'API Development': 'bg-violet-100 text-violet-800',
    'Mobile Integration': 'bg-fuchsia-100 text-fuchsia-800',
    'Information Systems': 'bg-emerald-100 text-emerald-800',
    'Real Estate Tech': 'bg-rose-100 text-rose-800',
    'Business Operations': 'bg-slate-100 text-slate-800'
  }
  return colors[skill as keyof typeof colors] || 'bg-gray-100 text-gray-800'
}
</script>