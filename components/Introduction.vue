<template>
  <section class="py-16 bg-gray-900 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-25"></div>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="bg-gray-800 rounded-lg shadow-2xl overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-50">
        <div class="p-8">
          <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 pb-2 border-b border-gray-700">
            About Merouane AMQOR
          </h2>
          <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/4 animate-slide-in-left">
              <div class="space-y-4">
                <a href="mailto:marouane.amqor@gmail.com" class="flex items-center text-sm text-cyan-300 hover:text-purple-400 transition-colors duration-300">
                  <Mail class="w-5 h-5 mr-2" />
                  marouane.amqor@gmail.com
                </a>
                <a href="https://github.com/merouaneamqor" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm text-cyan-300 hover:text-purple-400 transition-colors duration-300">
                  <Github class="w-5 h-5 mr-2" />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/merouane-amqor" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm text-cyan-300 hover:text-purple-400 transition-colors duration-300">
                  <Linkedin class="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div class="md:w-3/4 animate-slide-in-right">
              <p class="text-base text-gray-300 leading-relaxed mb-6">
                A highly skilled Full-stack Developer and Certified ScrumMaster® with over 5 years of experience in web and mobile development. Specialized in Ruby on Rails, AngularJS, MongoDB, and cloud platforms like AWS and Heroku. Proven ability to lead agile teams, streamline development processes, and deliver scalable, user-centric solutions in the healthcare sector.
              </p>
              <div class="mb-6">
                <h3 class="text-xl font-semibold text-cyan-300 mb-3">Key Strengths:</h3>
                <ul class="space-y-2">
                  <li v-for="(strength, index) in strengths" :key="index" class="flex items-start animate-fade-in" :style="{ animationDelay: `${index * 100}ms` }">
                    <CheckCircle class="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                    <span class="text-gray-300">{{ strength }}</span>
                  </li>
                </ul>
              </div>
              <div class="mb-6">
                <h3 class="text-xl font-semibold text-cyan-300 mb-3">Technical Expertise:</h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(tech, index) in technologies" :key="index" 
                        class="px-2 py-1 bg-blue-900 text-cyan-300 rounded-full text-xs font-medium animate-pop-in"
                        :style="{ animationDelay: `${index * 50}ms` }">
                    {{ tech }}
                  </span>
                </div>
              </div>
              <p class="text-base text-gray-300 leading-relaxed animate-fade-in">
                Passionate about innovation, solving complex challenges, and driving business growth. Excels in 
                <span class="font-semibold text-purple-400">rapid prototyping</span>, 
                <span class="font-semibold text-purple-400">solution design</span>, and 
                <span class="font-semibold text-purple-400">cross-functional team leadership</span>. 
                Proven track record of delivering scalable, user-centric solutions in the healthcare sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, Github, Linkedin, CheckCircle } from 'lucide-vue-next'

const strengths = [
  "Full-stack Development",
  "Agile & Scrum Methodologies",
  "Team Leadership",
  "Cloud Platform Expertise",
  "Project Management"
]

const technologies = [
  "Ruby on Rails", "AngularJS", "React", "Vue.js", "MongoDB", 
  "AWS", "Heroku", "PostgreSQL", "Tailwind CSS", "RESTful APIs"
]
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInRight {
  from { transform: translateX(50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes popIn {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-slide-in-left {
  animation: slideInLeft 0.5s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.5s ease-out forwards;
}

.animate-pop-in {
  animation: popIn 0.3s ease-out forwards;
}
</style>