<template>
<section class="relative overflow-hidden py-8 sm:py-20">
    <div class="absolute inset-0 pointer-events-none">
      <div class="promo-grid opacity-[0.04]"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/60"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
      <!-- Left: Copy -->
  <div class="z-10 bg-white/70 backdrop-blur-xl border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-sm">
    <h1 class="text-2xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15] sm:leading-[1.05] text-slate-900">
          {{ title }}
        </h1>

        <div class="mt-6 space-y-1 text-slate-700">
          <p class="text-base sm:text-lg font-medium">{{ speakerName }}</p>
          <p class="text-sm sm:text-base text-slate-600">{{ speakerRole }}</p>
        </div>

        <!-- Partners -->
        <div class="mt-8 flex items-center gap-3">
          <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 border border-slate-200 rounded-full text-slate-700 text-sm">
            <span class="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            {{ leftPartnerLabel }}
          </span>
          <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 border border-slate-200 rounded-full text-slate-700 text-sm">
            {{ rightPartnerLabel }}
          </span>
        </div>
      </div>

      <!-- Right: Speaker avatar -->
      <div class="flex justify-center lg:justify-end z-10">
        <div class="relative">
          <div class="absolute -inset-4 rounded-full bg-white/70 blur-2xl"></div>
          <div class="relative h-56 w-56 sm:h-64 sm:w-64 rounded-full overflow-hidden ring-2 ring-slate-200 shadow-md bg-white">
            <img :src="avatarUrl" :alt="speakerName" class="h-full w-full object-cover" />
            <Mic class="absolute bottom-0 right-0" :width="32" :height="32" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mic } from 'lucide-vue-next'
interface Props {
  title?: string
  speakerName?: string
  speakerRole?: string
  avatarUrl?: string
  leftPartnerLabel?: string
  rightPartnerLabel?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Building a 3D brand in Spline',
  speakerName: 'Zeh Fernandes',
  speakerRole: 'Founding Designer',
  avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  leftPartnerLabel: 'Spline',
  rightPartnerLabel: 'Resend'
})
</script>

<style scoped>
.promo-grid {
  background-image:
    linear-gradient(0deg, rgba(2,6,23,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(2,6,23,0.06) 1px, transparent 1px),
    radial-gradient(ellipse at top left, rgba(16,185,129,0.06), transparent 50%),
    radial-gradient(ellipse at bottom right, rgba(6,182,212,0.06), transparent 50%);
  background-size: 80px 80px, 80px 80px, 120% 120%, 120% 120%;
  background-position: 0 0, 0 0, -40% -30%, 140% 140%;
  width: 100%;
  height: 100%;
}
</style>
