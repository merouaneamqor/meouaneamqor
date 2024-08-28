<template>
  <section class="py-8 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mx-auto bg-white  rounded-md shadow-sm">
        <div class="p-8">
          <h2 class="text-3xl font-semibold text-gray-900 mb-6 pb-2 border-b">
            About Merouane AMQOR
          </h2>
          <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/4">
              <img src="https://avatars.githubusercontent.com/u/37594453?v=4" alt="Merouane Amqor" class="w-32 rounded-md shadow-sm" />
              <div class="mt-4 space-y-2">
                <a href="mailto:marouane.amqor@gmail.com" class="flex items-center text-sm text-gray-600 hover:text-blue-600">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  marouane.amqor@gmail.com
                </a>
                <a href="https://github.com/merouaneamqor" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm text-gray-600 hover:text-blue-600">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/merouane-amqor" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm text-gray-600 hover:text-blue-600">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path></svg>
                  LinkedIn
                </a>
              </div>
            </div>
            <div class="md:w-3/4">
              <p class="text-base text-gray-700 leading-relaxed mb-6">
                <span class="font-semibold text-blue-600">AMQOR</span> is a notable figure in the field of technology, particularly known for his contributions in software engineering and web development. His expertise spans across various domains, making him a versatile and dynamic force in the tech world.
              </p>
              <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Key Strengths:</h3>
                <ul class="space-y-2">
                  <li v-for="(strength, index) in strengths" :key="index" class="flex items-start">
                    <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-700">{{ strength }}</span>
                  </li>
                </ul>
              </div>
              <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Technical Expertise:</h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(tech, index) in technologies" :key="index" 
                        class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {{ tech }}
                  </span>
                </div>
              </div>
              <p class="text-base text-gray-700 leading-relaxed">
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