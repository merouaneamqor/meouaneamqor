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

});

useSeoMeta({
  ogTitle: 'Home - Merouane Amqor',
  ogDescription: 'Discover the portfolio and expertise of Merouane Amqor in web development.',
  ogImage: 'https://avatars.githubusercontent.com/u/37594453?v=4',
  // Other SEO tags
});
</script>
