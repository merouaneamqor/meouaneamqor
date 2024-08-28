<template>
  <section class=" bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="container mx-auto">
      <div class=" mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300">
        <div class="p-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 animate-fade-in">
            About Merouane AMQOR
          </h2>
          <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/4 animate-slide-in-left">
              <div class="space-y-4">
                <a href="mailto:marouane.amqor@gmail.com" class="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Mail class="w-5 h-5 mr-2" />
                  marouane.amqor@gmail.com
                </a>
                <a href="https://github.com/merouaneamqor" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Github class="w-5 h-5 mr-2" />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/merouane-amqor" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Linkedin class="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div class="md:w-3/4 animate-slide-in-right">
              <p class="text-base text-gray-700 leading-relaxed mb-6">
                <span class="font-semibold text-blue-600">AMQOR</span> is a notable figure in the field of technology, particularly known for his contributions in software engineering and web development. His expertise spans across various domains, making him a versatile and dynamic force in the tech world.
              </p>
              <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Key Strengths:</h3>
                <ul class="space-y-2">
                  <li v-for="(strength, index) in strengths" :key="index" class="flex items-start animate-fade-in" :style="{ animationDelay: `${index * 100}ms` }">
                    <CheckCircle class="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span class="text-gray-700">{{ strength }}</span>
                  </li>
                </ul>
              </div>
              <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Technical Expertise:</h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(tech, index) in technologies" :key="index" 
                        class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium animate-pop-in"
                        :style="{ animationDelay: `${index * 50}ms` }">
                    {{ tech }}
                  </span>
                </div>
              </div>
              <p class="text-base text-gray-700 leading-relaxed animate-fade-in">
                Drawing from his rich experience in leading varied teams, Merouane excels in 
                <span class="font-semibold text-blue-600">rapid prototyping</span> and 
                <span class="font-semibold text-blue-600">solution design</span>, ensuring that each project 
                not only meets but exceeds market expectations. His proficiency in a wide array of technologies, 
                coupled with a firm grasp of <span class="font-semibold text-blue-600">market research and benchmarking</span>, 
                positions him as an invaluable asset in any tech-driven environment.
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
  "Leadership in software engineering",
  "Web development expertise",
  "Rapid prototyping skills",
  "Solution design proficiency",
  "Market research and benchmarking"
]

const technologies = [
  "MongoDB", "AngularJS", "Vue.js", "React", "Ruby on Rails", 
  "Node.js", "AWS", "Docker", "Git", "RESTful APIs"
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