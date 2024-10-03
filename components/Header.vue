<template>
  <header class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white">
    <AIParticles />
    <div class="relative z-10 container mx-auto px-4">
      <div
        :class="[
          'flex flex-col items-center justify-center transition-all duration-500',
          scrolled ? 'h-20' : 'h-screen'
        ]"
      >
        <h1
          :class="[
            'font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-500',
            scrolled ? 'text-2xl -translate-y-5' : 'text-4xl sm:text-6xl'
          ]"
        >
          <AnimatedText text="Merouane Amqor" />
        </h1>
        <p
          :class="[
            'text-2xl font-semibold mb-6 text-cyan-300 text-center transition-all duration-500',
            scrolled ? 'opacity-0 h-0' : 'opacity-100'
          ]"
        >
          <AnimatedText text="TechLead & Certified ScrumMaster®" :delay="1000" />
        </p>
        <p
          :class="[
            'text-xl mb-8 max-w-2xl text-center text-gray-300 transition-all duration-500',
            scrolled ? 'opacity-0 h-0' : 'opacity-100'
          ]"
        >
          <AnimatedText 
            text="Pioneering the future of tech with merouane's innovation and over 5 years of experience in cutting-edge development and team leadership."
            :delay="2000"
          />
        </p>
        <div
          :class="[
            'flex flex-wrap justify-center gap-4 mb-12 transition-all duration-500',
            scrolled ? 'opacity-0' : 'opacity-100'
          ]"
        >
          <NuxtLink
            v-for="(button, index) in buttons"
            :key="index"
            :to="button.href"
            :class="[
              'inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300',
              button.primary
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-transparent text-cyan-300 hover:bg-cyan-900 border-2 border-cyan-400'
            ]"
          >
            {{ button.text }}
            <component :is="button.icon" class="ml-2 h-5 w-5" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-500 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ArrowRight
        v-if="scrolled"
        class="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-8 w-8 text-cyan-400 animate-bounce"
      />
    </transition>
    <div 
      :class="[
        'absolute right-10 top-10 transition-all duration-500',
        scrolled ? 'scale-75 -translate-y-5' : 'scale-100'
      ]"
    >
      <div class="relative">
        <div class="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <img 
          src="https://avatars.githubusercontent.com/u/37594453?v=4" 
          alt="Merouane Amqor" 
          class="rounded-full object-cover shadow-lg transition-all duration-300 ease-in-out border-4 border-cyan-400 relative z-10 w-32 h-32 hover:scale-105"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, Brain, Cpu, Network } from 'lucide-vue-next'

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const buttons = [
  { text: 'Explore AI Projects', icon: Brain, primary: true, href: '/projects' },
  { text: 'AI-Powered Blog', icon: Cpu, primary: false, href: '/blog' },
  { text: 'Connect', icon: Network, primary: false, href: '/contact' }
]

const AnimatedText = defineComponent({
  props: {
    text: {
      type: String,
      required: true
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const displayText = ref('')
    const currentIndex = ref(0)

    const animateText = () => {
      const interval = setInterval(() => {
        if (currentIndex.value < props.text.length) {
          displayText.value += props.text[currentIndex.value]
          currentIndex.value++
        } else {
          clearInterval(interval)
        }
      }, 30)
    }

    onMounted(() => {
      setTimeout(animateText, props.delay)
    })

    return () => h('span', { class: 'inline-block' }, displayText.value)
  }
})
</script>

<style scoped>
@keyframes glow {
  0%, 100% {
    text-shadow: 0 0 5px rgba(103, 232, 249, 0.5), 0 0 10px rgba(103, 232, 249, 0.3);
  }
  50% {
    text-shadow: 0 0 10px rgba(103, 232, 249, 0.8), 0 0 20px rgba(103, 232, 249, 0.5);
  }
}

h1 {
  animation: glow 3s ease-in-out infinite;
}
</style>