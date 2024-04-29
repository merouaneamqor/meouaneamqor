<template>
  <section class="container mx-auto p-8">
      <div class=" mx-auto">
          <div class="bg-white border border-gray-200 shadow-sm rounded-lg p-6">
              <h2 class="text-xl font-bold text-gray-800 mb-6">Experience Highlights</h2>
              <div>
                  <div v-for="(experience, index) in experiences" :key="index" class="mb-6 last:mb-0">
                      <h3 class="text-lg font-semibold text-gray-700 mb-1">{{ experience.role }}</h3>
                      <p class="text-sm text-gray-600">{{ experience.description }}</p>
                      <div class="mt-2 text-gray-500 text-xs">
                          <span>{{ experience.startDate }} - {{ experience.endDate }}</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    const currentYear = new Date().getFullYear();
    return {
      experiences: [
        {
          role: 'Founder & Technical Lead at Douq.ma',
          description: 'Founded and lead Douq.ma, pioneering a platform that transforms how cozy spaces are discovered in Morocco. I drive the team to develop and integrate cutting-edge solutions with Nuxt.js and Laravel, and explore blockchain for review authenticity.',
          startDate: '2024',
          endDate: `${currentYear}`
        },
        {
          role: 'Development Team Lead at DabaDoc',
          description: 'Leading development initiatives and managing a team focused on deploying scalable health solutions. Enhanced system capabilities with a blend of modern technologies and collaborative efforts, significantly improving platform engagement and performance.',
          startDate: '2024',
          endDate: `${currentYear}`
        },
        {
          role: 'Full-stack Developer at DabaDoc',
          description: 'Guided and mentored a development team, focusing on leveraging emerging technologies to innovate and enhance feature sets. Worked closely with the marketing team to boost brand recognition and user engagement.',
          startDate: '2022',
          endDate: '2024'
        },
        {
          role: 'Software Engineer at Majorel',
          description: 'Specialized in front-end development, focusing on enhancing application interfaces and user experiences. Utilized a wide array of technologies including Ruby on Rails, AngularJS, and cloud services, to deliver high-quality software solutions.',
          startDate: '2019',
          endDate: '2022'
        },
        {
          role: 'Co-founder, Meram / Texam',
          description: 'Co-founded and engineered a comprehensive e-commerce platform using Ruby on Rails. Designed and deployed a JSON API for mobile application integration, enhancing the digital shopping experience.',
          startDate: '2018',
          endDate: '2019'
        },
        {
          role: 'Information System Developer at Riad Raha',
          description: 'Developed and optimized a real estate sales management system, significantly boosting business operations and client service efficiency.',
          startDate: '2021',
          endDate: '2021'
        }
      ]
    };
  }
}
</script>
