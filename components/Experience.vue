<template>
  <section class="py-16 bg-gray-900 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-25"></div>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 class="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Professional Experience</h2>
      <div class="space-y-12">
        <div 
          v-for="(experience, index) in sortedExperiences" 
          :key="index" 
          class="bg-gray-800 border border-cyan-900 rounded-lg shadow-2xl overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-50 hover:border-cyan-400 transition-all duration-300"
        >
          <div class="p-6 border-b border-gray-700 bg-gray-800 bg-opacity-50">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
              <h3 class="text-2xl font-semibold text-cyan-300">{{ experience.role }}</h3>
              <div class="text-sm text-gray-400 mt-2 md:mt-0">
                <span class="font-medium text-purple-400">{{ experience.company }}</span> | {{ experience.location }}
              </div>
            </div>
            <div class="mt-2 text-sm text-gray-400">{{ experience.startDate }} - {{ experience.endDate }}</div>
          </div>
          <div class="p-6">
            <ul class="list-disc list-inside space-y-2 text-gray-300 mb-4">
              <li v-for="(achievement, achIndex) in experience.achievements" :key="achIndex">
                {{ achievement }}
              </li>
            </ul>
            <div class="flex flex-wrap gap-2 mt-4">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  skills: string[];
}

const experiences = ref<Experience[]>([
  {
    role: 'TechLead',
    company: 'DabaDoc',
    location: 'Casablanca, Morocco',
    startDate: 'Jan 2024',
    endDate: 'Present',
    achievements: [
      'Lead a team of engineers in developing innovative healthcare web and mobile applications across Africa and the Middle East.',
      'Successfully reduced page load times by 40%, improving site performance and user satisfaction.',
      'Introduced Agile methodologies and Scrum practices, enhancing team collaboration and project delivery speed.',
      'Spearheaded cloud infrastructure migration to AWS, reducing operational costs by 15%.'
    ],
    skills: ['Team Leadership', 'Healthcare Tech', 'Agile & Scrum', 'AWS', 'Performance Optimization']
  },
  {
    role: 'Full-stack Developer',
    company: 'DabaDoc',
    location: 'Casablanca, Morocco',
    startDate: 'Apr 2022',
    endDate: 'Dec 2023',
    achievements: [
      'Collaborated with product and design teams to develop new features, improving user engagement by 25%.',
      'Utilized Ruby on Rails, MongoDB, AngularJS, and Tailwind to build responsive web applications.',
      'Implemented cloud-based deployments on AWS and Heroku, ensuring seamless scalability and uptime.'
    ],
    skills: ['Ruby on Rails', 'MongoDB', 'AngularJS', 'Tailwind CSS', 'AWS', 'Heroku']
  },
  {
    role: 'Software Engineer',
    company: 'Majorel',
    location: 'Casablanca, Morocco',
    startDate: 'May 2020',
    endDate: 'Apr 2022',
    achievements: [
      'Worked on both front-end and back-end development for various clients, delivering comprehensive web solutions.',
      'Collaborated with cross-functional teams to implement scalable and efficient systems, ensuring seamless user experiences.'
    ],
    skills: ['Full-stack Development', 'Cross-functional Collaboration', 'Scalable Systems']
  },
  {
    role: 'Full-stack Developer',
    company: 'Majorel',
    location: 'Casablanca, Morocco',
    startDate: 'Mar 2018',
    endDate: 'Apr 2020',
    achievements: [
      "Developed websites for Solocal's clients from Morocco while Solocal was based in France.",
      'Gained valuable experience in remote collaboration and international project management.'
    ],
    skills: ['Web Development', 'Remote Collaboration', 'International Projects']
  }
])

const sortedExperiences = computed(() => {
  return [...experiences.value].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  })
})

const getSkillColor = (skill: string) => {
  const colors = {
    'Team Leadership': 'bg-blue-900 text-cyan-300',
    'Healthcare Tech': 'bg-green-900 text-green-300',
    'Agile & Scrum': 'bg-purple-900 text-purple-300',
    'AWS': 'bg-orange-900 text-orange-300',
    'Performance Optimization': 'bg-red-900 text-red-300',
    'Ruby on Rails': 'bg-pink-900 text-pink-300',
    'MongoDB': 'bg-green-900 text-green-300',
    'AngularJS': 'bg-blue-900 text-blue-300',
    'Tailwind CSS': 'bg-teal-900 text-teal-300',
    'Heroku': 'bg-purple-900 text-purple-300',
    'Full-stack Development': 'bg-indigo-900 text-indigo-300',
    'Cross-functional Collaboration': 'bg-yellow-900 text-yellow-300',
    'Scalable Systems': 'bg-blue-900 text-blue-300',
    'Web Development': 'bg-green-900 text-green-300',
    'Remote Collaboration': 'bg-red-900 text-red-300',
    'International Projects': 'bg-purple-900 text-purple-300'
  }
  return colors[skill as keyof typeof colors] || 'bg-gray-800 text-gray-300'
}
</script>