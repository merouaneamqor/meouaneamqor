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
          role: 'Full-stack Developer at DabaDoc',
          description: 'Guided a team of developers, concentrating on emerging technologies to create influential features. Collaborated intimately with the marketing team, bolstering brand recognition and user engagement via the deployment of robust back-end systems.',
          startDate: `2022`,
          endDate: `${currentYear}`
        },
        {
          role: 'Co-founder, Meram / Texam',
          description: 'Initiated and developed an e-commerce web application using Ruby on Rails, providing a comprehensive JSON API for mobile applications, streamlining the online shopping experience.',
          startDate: '2018',
          endDate: '2019'

        },
        {
          role: 'Information System Developer at Riad Raha',
          description: 'Developed a real estate sales management information system, significantly enhancing business operations and client management capabilities.',
          startDate: '2021',
          endDate: '2021'

        },

      ]
    };
  }
}
</script>
