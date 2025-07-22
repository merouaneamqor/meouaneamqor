<template>
  <section id="portfolio" class="py-16 bg-white font-sans">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-blue-900 mb-2 text-center">My Portfolio</h2>
      <p class="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
        Showcasing a curated selection of projects that highlight my expertise in web development, healthcare tech, and innovative solutions.
      </p>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" class="bg-blue-50 rounded-xl overflow-hidden shadow-sm flex flex-col">
          <div class="p-6 flex-grow">
            <h3 class="text-2xl font-semibold text-blue-800 mb-2">{{ project.name }}</h3>
            <p class="text-sm text-blue-600 mb-4 flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              {{ project.duration }}
            </p>
            <p class="text-gray-700 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="(tech, index) in project.technologies" :key="index"
                    class="px-2 py-1 bg-white text-blue-900 text-xs font-semibold rounded-full border border-blue-100">
                {{ tech }}
              </span>
            </div>
          </div>
          <div class="px-6 py-4 bg-blue-100 flex justify-between items-center">
            <a :href="project.link" target="_blank" rel="noopener noreferrer" 
               class="text-blue-700 hover:text-blue-900 font-semibold flex items-center transition-colors duration-200">
              Learn more
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
            <span class="text-xs text-gray-500">Project ID: {{ project.id }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  id: number;
  name: string;
  duration: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'DabaDoc Healthcare Platform',
    duration: 'Sep 2018 - Present',
    description: 'Led the development of a comprehensive healthcare platform, improving patient care delivery by 30% and boosting operational efficiency by 25%. Implemented Agile methodologies, resulting in a 20% reduction in project delivery times.',
    technologies: ['Ruby on Rails', 'React', 'MongoDB', 'AWS', 'RESTful API', 'Agile'],
    link: 'https://dabadoc.com'
  },
  {
    id: 2,
    name: 'Meram / Texam E-commerce Solution',
    duration: '2018 - 2019',
    description: 'Engineered an innovative e-commerce platform with a robust JSON API for seamless mobile integration. This solution significantly enhanced the digital shopping experience for users.',
    technologies: ['Ruby on Rails', 'Next.js', 'PostgreSQL', 'RESTful API'],
    link: 'https://texam-app-git-master-douq-ma.vercel.app/'
  },
  {
    id: 3,
    name: 'Riad Raha Real Estate Management System',
    duration: '1 month, 2021',
    description: 'Developed a sophisticated real estate sales management system that streamlined operations and improved client service efficiency, resulting in increased sales and customer satisfaction.',
    technologies: ['Laravel', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 4,
    name: 'DabaDoc Corporate Healthcare Platform',
    duration: 'Apr 2022 - Jan 2024',
    description: 'Spearheaded the development of a corporate healthcare management platform, enhancing employee access to health services and improving overall healthcare delivery for businesses.',
    technologies: ['Ruby on Rails', 'Docker', 'MongoDB', 'RESTful API', 'Angular'],
    link: 'https://info.dabadoc.com/corporate'
  },
  {
    id: 5,
    name: 'DabaDoc Mind - Mental Health',
    duration: 'Apr 2022 - Jan 2024',
    description: 'Created a secure and user-friendly platform for online mental health consultations, significantly improving accessibility and confidentiality for patients seeking mental health support.',
    technologies: ['React', 'Ruby On Rails', 'MongoDB',  'RESTful API', 'Angular'],
    link: 'https://info.dabadoc.com/mind'
  },
  {
    id: 6,
    name: 'DabaDoc Live - Interactive Health',
    duration: 'Apr 2022 - Jan 2024',
    description: 'Engineered an interactive live-streaming platform for health education and real-time consultations, featuring cutting-edge real-time communication tools and user engagement features.',
    technologies: ['React', 'Ruby On Rails', 'Elasticsearch', 'MongoDB',  'RESTful API', 'Angular'],
    link: 'https://info.dabadoc.com/live'
  }
];
</script>

<!-- No custom styles needed, all handled by Tailwind -->