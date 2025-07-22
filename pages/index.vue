<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
    <Header />
    <Introduction />
    <Skills />
    <Experience />
    <Education />
    <Projects />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Merouane Amqor - TechLead & Certified ScrumMaster®',
  meta: [
    { name: 'description', content: 'Portfolio of Merouane Amqor, a TechLead and Certified ScrumMaster® with expertise in full-stack development, team leadership, and innovative healthcare solutions.' }
  ]
});

useSeoMeta({
  ogTitle: 'Merouane Amqor - TechLead & Certified ScrumMaster®',
  ogDescription: 'Discover the expertise of Merouane Amqor in full-stack development, team leadership, and innovative healthcare tech solutions.',
  ogImage: 'https://merouaneamqor.com/merouane_amqor.jpg'
});
</script>

<style scoped>

</style>  