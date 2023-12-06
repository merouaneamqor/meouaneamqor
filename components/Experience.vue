<template>
    <section class="container mx-auto p-8 bg-white text-gray-800">
        <div class="container mx-auto">
            <div class="bg-white border border-gray-200 rounded-lg p-6">
                <h2 class="text-lg font-semibold text-gray-900 mb-4">Experience Highlights</h2>
                <div>
                    <div v-for="(experience, index) in experiences" :key="index" class="mb-6 p-3 border rounded last:mb-0">
                        <h3 class="font-semibold text-gray-700">{{ experience.role }}</h3>
                        <p class="text-sm text-gray-600">{{ experience.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      experiences: [
        {
          role: 'Full-stack Developer at DabaDoc',
          description: 'Led a team of developers, focusing on Ruby on Rails to deliver impactful features. Worked closely with the marketing team to enhance brand awareness and user engagement through robust back-end systems.'
        },
        {
          role: 'Co-founder, Meram / Texam',
          description: 'Initiated and developed an e-commerce web application using Ruby on Rails, providing a comprehensive JSON API for mobile applications, streamlining the online shopping experience.'
        },
        {
          role: 'Information System Developer at Riad Raha',
          description: 'Developed a real estate sales management information system, significantly enhancing business operations and client management capabilities.'
        },
        // More experiences...
      ]
    };
  }
}
</script>
