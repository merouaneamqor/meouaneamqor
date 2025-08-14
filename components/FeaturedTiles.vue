<template>
  <section class="py-10 sm:py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <article
        v-for="(item, index) in tiles"
        :key="index"
        :class="[
          'relative overflow-hidden rounded-3xl sm:rounded-[2rem] border transition-transform',
          item.theme === 'dark' ? 'bg-black text-white border-black/80' : 'bg-white text-slate-900 border-slate-200'
        ]"
      >
        <div class="p-8 sm:p-10 flex flex-col items-center text-center min-h-[300px]">
          <h3 class="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">{{ t(item.titleKey) }}</h3>
          <p class="text-sm sm:text-base opacity-80 max-w-md mb-5">{{ t(item.subtitleKey) }}</p>
          <NuxtLink
            :to="item.href || '/'"
            class="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-colors"
            :class="item.theme === 'dark'
              ? 'bg-white text-slate-900 hover:bg-white/90'
              : 'bg-slate-900 text-white hover:bg-slate-800'"
            >{{ t(item.ctaKey || 'showcase.learn_more') }}</NuxtLink>

          <!-- Visual placeholder / hero -->
          <div class="mt-8 w-full max-w-lg aspect-[16/10] rounded-2xl"
               :class="item.theme === 'dark' ? 'bg-gradient-to-br from-slate-800 to-black' : 'bg-gradient-to-br from-slate-100 to-white border border-slate-200'">
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

type Theme = 'light' | 'dark'
interface TileItem {
  titleKey: string
  subtitleKey: string
  ctaKey?: string
  href?: string
  theme?: Theme
}

const props = defineProps<{ tiles?: TileItem[] }>()

const defaultTiles: TileItem[] = [
  { titleKey: 'showcase.leadership.title', subtitleKey: 'showcase.leadership.subtitle', href: '/portfolio', theme: 'light' },
  { titleKey: 'showcase.rails.title', subtitleKey: 'showcase.rails.subtitle', href: '/portfolio', theme: 'dark' },
  { titleKey: 'showcase.product.title', subtitleKey: 'showcase.product.subtitle', href: '/about', theme: 'dark' },
  { titleKey: 'showcase.mentoring.title', subtitleKey: 'showcase.mentoring.subtitle', href: '/about', theme: 'light' }
]

const tiles = computed(() => props.tiles && props.tiles.length ? props.tiles : defaultTiles)
</script>

<style scoped>
</style>





