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
  title: 'Home - Merouane Amqor',
  meta: [
    { name: 'description', content: 'Welcome to the home page of Merouane Amqor, a Ruby on Rails expert in Casablanca.' }
    // Other page-specific meta tags
  ],
  // Other head attributes
});

useSeoMeta({
  title: 'Home - Merouane Amqor',
  ogTitle: 'Home - Merouane Amqor',
  ogDescription: 'Discover the portfolio and expertise of Merouane Amqor in web development.',
  ogImage: 'https://avatars.githubusercontent.com/u/37594453?v=4',
  // Other SEO tags
});
</script>
