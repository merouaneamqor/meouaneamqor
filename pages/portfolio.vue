<template>
    <section class="container mx-auto p-8">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">My Portfolio</h2>
        
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
          name: 'Dabadoc',
          imageName: 'dabadoc.png', // Reference just the image file name
          description: 'Brief description of Project One.',
          link: 'http://linktoproject.com'
        },
        // ... other projects
      ]
    };
  }
};
</script>
