<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <!-- Responsive blurred background images (bundled asset to avoid IPX issues) -->
    <img
      :src="bgHero"
      alt="Background"
      class="absolute inset-0 block md:hidden w-full h-full object-cover scale-110 blur-xl opacity-95 filter saturate-150 contrast-125 brightness-110"
      decoding="async"
      loading="eager"
    />
    <img
      :src="bgHero"
      alt="Background"
      class="absolute inset-0 hidden md:block w-full h-full object-cover scale-110 blur-2xl opacity-95 filter saturate-150 contrast-125 brightness-110"
      decoding="async"
      loading="eager"
    />

    <!-- Backdrop overlay to improve contrast behind content -->
    <div class="absolute inset-0 bg-white/50 md:bg-white/40 backdrop-blur-xl"></div>

    <!-- Dark atmospheric gradient (GitHub-like) -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-slate-950/10"></div>

    <!-- Gradient mesh accents (soft color spots) -->
    <div class="absolute inset-0 github-mesh pointer-events-none"></div>

    <!-- Vibrant glow accents to boost color (screen blend) -->
    <div class="absolute inset-0 vibrant-glow pointer-events-none"></div>

    <Logo  class="mr-2 absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/3 blur-xl opacity-10" :width="300" :height="300" />

    <!-- Optional dot grid removed to avoid gray wash-out -->
  </div>
  
</template>

<script setup lang="ts">
import bgHero from '~/assets/images/bg-hero.png'
</script>

<style scoped>
/* GitHub-style mesh: soft radial color spots */
.github-mesh {
  background:
    radial-gradient(600px circle at 20% 15%, rgba(56, 189, 248, 0.10), transparent 45%),
    radial-gradient(800px circle at 80% 20%, rgba(168, 85, 247, 0.08), transparent 50%),
    radial-gradient(700px circle at 50% 85%, rgba(16, 185, 129, 0.08), transparent 45%);
  filter: blur(5px);
}

/* Vibrant glow overlay using light additive colors */
.vibrant-glow {
  pointer-events: none;
  background:
    radial-gradient(700px circle at 15% 20%, rgba(250, 204, 21, 0.20), transparent 50%),
    radial-gradient(800px circle at 85% 25%, rgba(236, 72, 153, 0.18), transparent 55%),
    radial-gradient(900px circle at 50% 80%, rgba(59, 130, 246, 0.16), transparent 50%);
  mix-blend-mode: screen;
  opacity: 0.9;
  filter: blur(10px) saturate(120%);
}

/* GitHub-style subtle dot grid */
.github-dots {
  background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.18;
}
</style>


