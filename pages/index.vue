<template>
  <div class="min-h-screen flex flex-col">

    <!-- Header Section -->
    <Header/>

    <!-- Introduction Section -->
    <Introduction/>

    <!-- Skills Section -->
    <Skills/>

    <!-- Experience Section -->
    <Experience/>

  </div>
</template>
<script setup lang="ts">

useHead({
  title: 'Merouane Amqor - Full-Stack Developer & Certified ScrumMaster®',
  meta: [
    { name: 'description', content: 'Portfolio of Merouane Amqor, a Full-Stack Developer and Certified ScrumMaster® with expertise in web development, team leadership, and innovative solutions.' }
  ]
});

useSeoMeta({
  ogTitle: 'Merouane Amqor - Full-Stack Developer & Certified ScrumMaster®',
  ogDescription: 'Discover the portfolio and expertise of Merouane Amqor in web development, team leadership, and innovative tech solutions.',
  ogImage: 'https://merouaneamqor.com/merouane_amqor.jpg'
});
</script>
