<template>
  <section class="py-5 w-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/70 relative overflow-hidden flex items-center justify-center p-0">
    <!-- Enhanced, more dynamic background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="projects-grid-pattern"></div>
    </div>
    <!-- Premium floating elements with glow -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="premium-element element-1"></div>
      <div class="premium-element element-2"></div>
      <div class="premium-element element-3"></div>
      <div class="premium-element element-4"></div>
    </div>
    <div class="container mx-auto px-0 lg:px-0 relative z-10 w-full h-full flex flex-col justify-center">
      <!-- Enhanced section header with premium styling -->
      <div class="text-center flex flex-col items-center justify-center mb-20">
        <div class="inline-flex flex-row items-center justify-center gap-2 mb-4 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span class="text-sm font-medium text-slate-300">SHOWCASE</span>
        </div>
        <h2 class="text-4xl lg:text-6xl font-bold text-white mb-6 premium-glow relative inline-block">
          <span class="relative z-10 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Notable Projects</span>
          <span class="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent opacity-20">Notable Projects</span>
        </h2>
        <div class="w-32 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full mx-auto mb-6 animate-pulse-slow"></div>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Selected projects that showcase my technical expertise and product impact.
        </p>
      </div>
      
      <!-- Super Linking Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full h-full max-w-none mx-0">
        <div 
          v-for="(project, index) in projects"
          :key="project.name"
          class="project-card group relative cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-20"
          :class="{ 'lg:row-span-2': index === 1 }"
        >
          <!-- Animated floating link icon -->
          <div class="absolute top-6 right-6 z-20 animate-bounce">
            <Icon name="mdi:link-variant" class="w-7 h-7 text-emerald-400 drop-shadow-lg" />
          </div>
          <!-- Glow effect on hover -->
          <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-blue-500/30 rounded-3xl blur opacity-0 group-hover:opacity-80 transition-opacity duration-500 z-0"></div>
          <div class="bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-500 h-full flex flex-col shadow-2xl relative z-10 border-2 border-transparent group-hover:border-emerald-400/60 group-hover:shadow-emerald-400/20">
            <div class="p-10 flex flex-col flex-1 justify-between">
              <div>
                <h3 class="text-3xl font-extrabold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300 flex items-center gap-3">
                  {{ project.name }}
                  <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </h3>
                <p class="text-slate-300 text-lg mb-6">{{ project.shortDescription || project.description.substring(0, 100) + '...' }}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1.5 bg-slate-800/70 border border-slate-700/70 text-xs text-emerald-300 rounded-full font-mono tracking-wide">{{ tech }}</span>
                </div>
              </div>
              <a :href="project.link" target="_blank" rel="noopener noreferrer" class="mt-auto pt-4 block text-emerald-400 font-bold text-lg underline underline-offset-4 decoration-emerald-400 hover:decoration-wavy transition-all duration-300 group-hover:underline group-hover:decoration-emerald-400">
                {{ project.link === '#' ? 'Private Project' : 'Visit Project' }}
                <Icon v-if="project.link !== '#'" name="mdi:arrow-top-right" class="w-5 h-5 inline ml-2 align-middle" />
                <Icon v-else name="mdi:lock" class="w-5 h-5 inline ml-2 align-middle" />
              </a>
            </div>
          </div>
          <!-- Animated underline on hover -->
          <div class="absolute left-8 right-8 bottom-6 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
      
      <!-- Project stats remain unchanged -->
      <div class="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-none mx-0">
        <div 
          v-for="(stat, index) in projectStats" 
          :key="stat.label"
          class="stat-card group/stat relative"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <!-- Glow effect -->
          <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover/stat:opacity-70 transition-opacity duration-500 z-0"></div>
          
          <div class="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center transition-all duration-500 hover:border-slate-600/70 hover:bg-slate-800/70 shadow-xl hover:shadow-2xl relative z-10">
            <div class="stat-number mb-3 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-400">
              {{ stat.value }}
            </div>
            <div class="stat-label text-xs font-semibold text-slate-400 uppercase tracking-widest">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
const projects = [
  {
    name: 'DabaDoc Healthcare Platform',
    shortDescription: 'Architected a scalable healthcare platform connecting patients with doctors.',
    description: 'Architected and delivered a scalable healthcare platform connecting patients with doctors across Africa and the Middle East. Focused on secure data, real-time scheduling, and high availability.',
    technologies: ['Ruby on Rails', 'Angular', 'MongoDB', 'AWS'],
    category: 'healthcare',
    status: 'Live Production',
    features: [
      'Multi-region patient-doctor matching',
      'Real-time appointment scheduling',
      'Secure medical data management',
      'Mobile-responsive interface'
    ],
    link: 'https://www.dabadoc.com'
  },
  {
    name: 'Douq.ma',
    shortDescription: 'Founded a platform for discovering cozy spaces in Morocco. where you can find the best places to work, eat, and relax. Discover local dishes & places you didn\'t know. Get smart recommendations powered by AI & real feedback. Enjoy tasty food experiences tailored to your cravings.',
    description: 'Founded and developed a platform for discovering cozy spaces in Morocco, integrating advanced mapping and blockchain for review authenticity.',
    technologies: ['React ', 'Ruby on Rails', 'MongoDB'],
    category: 'discovery',
    status: 'Founded',
    features: [
      'Location-based space discovery',
      'Blockchain-verified reviews',
      'Interactive mapping system',
      'Community-driven content'
    ],
    link: 'https://www.douq.ma'
  },
  {
    name: 'Meram / Texam E-commerce Platform',
    shortDescription: 'Co-founded and engineered an e-commerce platform.',
    description: 'Co-founded and engineered an e-commerce platform with mobile integration, handling complex inventory and payment flows.',
    technologies: ['Ruby on Rails', 'React Native', 'PostgreSQL'],
    category: 'ecommerce',
    status: 'Co-founded',
    features: [
      'Cross-platform mobile app',
      'Advanced inventory management',
      'Multi-payment gateway integration',
      'Real-time order tracking'
    ],
    link: 'https://www.texam.ma'
  },
  {
    name: 'Real Estate Sales Management System',
    shortDescription: 'Built a real estate management system for Riad Raha.',
    description: 'Built and optimized a real estate management system for Riad Raha, automating workflows and improving client service efficiency.',
    technologies: ['Laravel', 'Vue.js', 'MySQL'],
    category: 'realestate',
    status: 'Client Project',
    features: [
      'Property portfolio management',
      'Client relationship tracking',
      'Automated reporting system',
      'Sales pipeline optimization'
    ],
    link: '#'
  }
]

const projectStats = [
  { value: '4+', label: 'Major Projects' },
  { value: '2', label: 'Startups Founded' },
  { value: '3', label: 'Industry Sectors' },
  { value: '10+', label: 'Technologies Used' }
]
</script>

<style scoped>
/* Enhanced, more dynamic background grid pattern */
.projects-grid-pattern {
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 1px),
    radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.05) 0%, transparent 1px),
    linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
  background-size: 200px 200px, 250px 250px, 80px 80px, 80px 80px;
  width: 100%;
  height: 100%;
  animation: projects-grid-drift 100s linear infinite;
}
@keyframes projects-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(200px, 200px); }
}

/* Premium floating elements with glow */
.premium-element {
  position: absolute;
  width: 10px;
  height: 10px;
  background: linear-gradient(45deg, #10b981, #06b6d4);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: premium-float 30s ease-in-out infinite;
  box-shadow: 0 0 20px #10b981, 0 0 30px #06b6d4;
  opacity: 0.4;
}
.element-1 { top: 20%; left: 15%; animation-delay: 0s; }
.element-2 { top: 60%; right: 20%; animation-delay: 10s; }
.element-3 { bottom: 30%; left: 25%; animation-delay: 20s; }
.element-4 { top: 40%; right: 15%; animation-delay: 30s; }
@keyframes premium-float {
  0%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.4; }
  25% { transform: translate(-40px, 30px) rotate(90deg); opacity: 0.7; }
  50% { transform: translate(20px, -50px) rotate(180deg); opacity: 0.5; }
  75% { transform: translate(30px, 40px) rotate(270deg); opacity: 0.6; }
}

/* Premium glow effect */
.premium-glow {
  text-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
}

/* Project cards */
.project-card {
  position: relative;
  transition: transform 0.5s ease;
}
.project-card:hover {
  transform: translateY(-12px);
}

/* Technology tags */
.tech-tag {
  transition: all 0.2s ease;
}
.tech-tag:hover {
  transform: translateY(-2px);
}

/* Stat cards entrance animation */
.stat-card {
  opacity: 0;
  transform: translateY(20px);
  animation: statFadeIn 0.6s forwards;
}
@keyframes statFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom animations */
@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
.animate-pulse-slow {
  animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .project-card {
    /* Reset row span on smaller screens */
  }
}
@media (max-width: 768px) {
  .grid-cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .p-8 {
    padding: 1.5rem;
  }
}
</style>