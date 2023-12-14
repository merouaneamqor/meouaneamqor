<template>
  <section class="container mx-auto p-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">My Portfolio</h2>
      <p class="text-center text-gray-600 italic mb-4">Note: This portfolio represents a selection of projects and does not encompass all my work.</p>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects" :key="project.id" class="shadow-lg rounded-lg overflow-hidden">
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800">{{ project.name }}</h3>
            <p class="text-gray-600">{{ project.description }}</p>
            <a :href="project.link" target="_blank" class="text-blue-600 hover:underline">Learn more</a>
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
      projects: [
        {
          id: 1,
          name: 'DabaDoc - Full-stack Developer',
          duration: 'Sep 2018 - Apr 2022',
          description: 'Guided a team in leveraging cutting-edge technologies to develop impactful features, collaborated closely with marketing teams to boost brand visibility, and implemented strong, reliable back-end systems to enhance overall functionality.',
          link: 'https://dabadoc.com'
        },
        {
          id: 2,
          name: 'Meram / Texam',
          duration: '2018 - 2019',
          description: 'Spearheaded the creation and design of an innovative e-commerce web application as a Software Engineer. Developed a robust JSON API tailored for seamless integration with mobile applications.',
          link: '#'
        },
        {
          id: 3,
          name: 'Riad Raha - Information System Developer',
          duration: '1 month, 2021',
          description: 'Crafted a sophisticated real estate sales management information system, significantly optimizing and streamlining business operations.',
          link: '#'
        },
        // Add more projects...
      ]
    };
  }
};
</script>
