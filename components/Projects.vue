<template>
  <section class="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/70 relative overflow-hidden">
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
    
    <div class="container mx-auto px-6 lg:px-8 relative z-10">
      <!-- Enhanced section header with premium styling -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full">
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
      
      <!-- Enhanced projects grid with masonry-like feel -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        <div 
          v-for="(project, index) in projects"
          :key="project.name"
          class="project-card group relative"
          :class="{ 'lg:row-span-2': index === 1 }" <!-- Make the 2nd item larger -->
        >
          <!-- Glow effect on hover -->
          <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-0"></div>
          
          <div class="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden transition-all duration-500 h-full flex flex-col shadow-2xl relative z-10">
            <!-- Enhanced project header with category badge -->
            <div class="p-8 border-b border-slate-700/30 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                <div class="flex flex-wrap items-center justify-between gap-4 mb-5">
                  <div class="inline-flex items-center px-3 py-1.5 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs font-semibold text-slate-300">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                    {{ project.status }}
                  </div>
                  <div class="inline-flex items-center px-3 py-1.5 bg-slate-700/30 border border-slate-600/30 rounded-full text-xs font-medium text-slate-400">
                    {{ project.category.charAt(0).toUpperCase() + project.category.slice(1) }}
                  </div>
                </div>
                
                <div class="flex items-start gap-5">
                  <!-- Enhanced project icon with 3D effect -->
                  <div class="flex-shrink-0 relative">
                    <div class="absolute -inset-2 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div class="relative w-16 h-16 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg border border-emerald-500/30 group-hover:shadow-emerald-500/30 transition-all duration-300 transform group-hover:-translate-y-1">
                      <svg v-if="project.category === 'healthcare'" class="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                      </svg>
                      <svg v-else-if="project.category === 'ecommerce'" class="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                      </svg>
                      <svg v-else-if="project.category === 'discovery'" class="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                      </svg>
                      <svg v-else class="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 012-2h2a2 2 0 012 2v12"/>
                      </svg>
                    </div>
                  </div>
                  
                  <!-- Project title -->
                  <div class="flex-1">
                    <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                      {{ project.name }}
                    </h3>
                    <p class="text-slate-400 text-sm">
                      {{ project.shortDescription || project.description.substring(0, 100) + '...' }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Enhanced project content -->
            <div class="p-8 flex-1 flex flex-col">
              <!-- Enhanced description -->
              <p class="text-slate-300 leading-relaxed mb-6">
                {{ project.description }}
              </p>
              
              <!-- Enhanced key features with icons -->
              <div v-if="project.features" class="mb-7">
                <h4 class="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2.5">
                  <Icon name="mdi:star" class="text-yellow-400 w-5 h-5" />
                  Key Features
                </h4>
                <ul class="space-y-3">
                  <li 
                    v-for="feature in project.features" 
                    :key="feature"
                    class="flex items-start gap-3.5 text-slate-300 group/feature"
                  >
                    <Icon name="mdi:check-circle" class="text-emerald-400 w-5 h-5 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/feature:scale-110" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
              
              <!-- Enhanced technologies with hover effect -->
              <div class="mb-7">
                <h4 class="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2.5">
                  <Icon name="mdi:code-tags" class="text-cyan-400 w-5 h-5" />
                  Technologies
                </h4>
                <div class="flex flex-wrap gap-2.5">
                  <span 
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="tech-tag px-3 py-1.5 bg-slate-700/50 border border-slate-600/50 text-xs text-slate-300 rounded-full transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-300 group-hover:shadow-sm"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <!-- Enhanced project link -->
              <div class="mt-auto pt-6 border-t border-slate-700/30">
                <a 
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link group/link inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600 text-slate-200 font-semibold rounded-xl transition-all duration-300 hover:from-slate-600 hover:to-slate-700 hover:border-slate-500 hover:text-white hover:shadow-lg hover:-translate-y-0.5"
                  :class="{ 'pointer-events-none opacity-60': project.link === '#' }"
                >
                  <span class="relative z-10 flex items-center gap-2">
                    {{ project.link === '#' ? 'Private Project' : 'View Project' }}
                    <Icon v-if="project.link !== '#'" name="mdi:arrow-top-right" class="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    <Icon v-else name="mdi:lock" class="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Enhanced project stats with premium cards -->
      <div class="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
    technologies: ['Ruby on Rails', 'AngularJS', 'MongoDB', 'AWS'],
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
    shortDescription: 'Founded a platform for discovering cozy spaces in Morocco.',
    description: 'Founded and developed a platform for discovering cozy spaces in Morocco, integrating advanced mapping and blockchain for review authenticity.',
    technologies: ['Nuxt.js', 'Laravel', 'Blockchain'],
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
    technologies: ['Ruby on Rails', 'Vue.js', 'MySQL'],
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