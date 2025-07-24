<template>
  <section class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 relative overflow-hidden">
    <!-- Enhanced background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="projects-grid-pattern"></div>
    </div>
    
    <!-- Enhanced floating project elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="project-element element-1"></div>
      <div class="project-element element-2"></div>
      <div class="project-element element-3"></div>
      <div class="project-element element-4"></div>
      <div class="project-element element-5"></div>
    </div>

    <div class="container mx-auto px-6 lg:px-8 relative z-10">
      <!-- Enhanced section header -->
      <div class="text-center mb-20">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 professional-glow relative inline-block">
          <span class="relative z-10">Notable Projects</span>
          <span class="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent opacity-20">Notable Projects</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full mx-auto mb-6"></div>
        <p class="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Selected projects that showcase my technical expertise and product impact.
        </p>
      </div>

      <!-- Enhanced projects grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="(project, index) in projects"
          :key="project.name"
          class="project-card group"
        >
          <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-slate-500/50 hover:bg-slate-800/60 h-full flex flex-col shadow-xl hover:shadow-2xl">
            
            <!-- Enhanced project header -->
            <div class="p-8 border-b border-slate-600/20">
              <div class="flex items-start gap-5">
                <!-- Enhanced project icon -->
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300">
                    <svg v-if="project.category === 'healthcare'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                    <svg v-else-if="project.category === 'ecommerce'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                    <svg v-else-if="project.category === 'discovery'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                    <svg v-else class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 012-2h2a2 2 0 012 2v12"/>
                    </svg>
                  </div>
                </div>

                <!-- Project title and status -->
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {{ project.name }}
                  </h3>
                  <div class="flex items-center gap-3">
                    <div class="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span class="text-slate-400 font-medium">{{ project.status }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Enhanced project content -->
            <div class="p-8 flex-1 flex flex-col">
              <!-- Enhanced description -->
              <p class="text-slate-300 leading-relaxed mb-8">
                {{ project.description }}
              </p>

              <!-- Enhanced key features -->
              <div v-if="project.features" class="mb-8">
                <h4 class="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2.5">
                  <div class="w-2.5 h-2.5 bg-cyan-400 rounded-full"></div>
                  Key Features
                </h4>
                <ul class="space-y-3">
                  <li 
                    v-for="feature in project.features" 
                    :key="feature"
                    class="flex items-start gap-3.5 text-slate-300"
                  >
                    <div class="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <!-- Enhanced technologies -->
              <div class="mb-8">
                <h4 class="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2.5">
                  <div class="w-2.5 h-2.5 bg-blue-400 rounded-full"></div>
                  Technologies Used
                </h4>
                <div class="flex flex-wrap gap-3">
                  <span 
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="tech-tag group/tech"
                  >
                    {{ tech }}
                    <span class="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></span>
                  </span>
                </div>
              </div>

              <!-- Enhanced project link -->
              <div class="mt-auto pt-6 border-t border-slate-700/30">
                <a 
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link group/link"
                  :class="{ 'pointer-events-none opacity-50': project.link === '#' }"
                >
                  <span class="relative z-10 flex items-center gap-3">
                    {{ project.link === '#' ? 'Private Project' : 'View Project' }}
                    <ArrowRight v-if="project.link !== '#'" class="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                  </span>
                  <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced project stats -->
      <div class="mt-28 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div class="project-stat group/stat">
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-2xl p-8 text-center transition-all duration-500 hover:border-slate-500/50 hover:bg-slate-800/50 shadow-lg hover:shadow-xl">
            <div class="stat-number mb-4">4</div>
            <div class="stat-label">Major Projects</div>
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        <div class="project-stat group/stat">
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-2xl p-8 text-center transition-all duration-500 hover:border-slate-500/50 hover:bg-slate-800/50 shadow-lg hover:shadow-xl">
            <div class="stat-number mb-4">2</div>
            <div class="stat-label">Co-founded Startups</div>
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        <div class="project-stat group/stat">
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-2xl p-8 text-center transition-all duration-500 hover:border-slate-500/50 hover:bg-slate-800/50 shadow-lg hover:shadow-xl">
            <div class="stat-number mb-4">3</div>
            <div class="stat-label">Industry Sectors</div>
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        <div class="project-stat group/stat">
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-2xl p-8 text-center transition-all duration-500 hover:border-slate-500/50 hover:bg-slate-800/50 shadow-lg hover:shadow-xl">
            <div class="stat-number mb-4">10+</div>
            <div class="stat-label">Technologies Used</div>
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
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
</script>

<style scoped>
/* Enhanced background grid pattern */
.projects-grid-pattern {
  background-image: 
    linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
  background-size: 180px 180px;
  width: 100%;
  height: 100%;
  animation: projects-grid-drift 140s linear infinite;
}

@keyframes projects-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(180px, 180px); }
}

/* Enhanced floating project elements */
.project-element {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, rgba(16, 185, 129, 0.6), rgba(6, 182, 212, 0.6));
  border-radius: 50%;
  animation: project-float 25s ease-in-out infinite;
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
}

.element-1 { top: 15%; left: 10%; animation-delay: 0s; }
.element-2 { top: 50%; right: 15%; animation-delay: 7s; }
.element-3 { bottom: 25%; left: 20%; animation-delay: 15s; }
.element-4 { top: 70%; right: 25%; animation-delay: 22s; }
.element-5 { bottom: 40%; right: 10%; animation-delay: 30s; }

@keyframes project-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
  50% { transform: translateY(-50px) rotate(180deg); opacity: 0.9; }
}

/* Professional glow effect */
.professional-glow {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.15);
}

/* Enhanced project cards */
.project-card {
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(16, 185, 129, 0.05), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.project-card:hover::before {
  transform: translateX(100%);
}

.project-card:hover .bg-slate-800\/40 {
  transform: translateY(-10px);
}

/* Enhanced technology tags */
.tech-tag {
  position: relative;
  padding: 0.4rem 1.2rem;
  background-color: rgba(51, 65, 85, 0.5);
  color: rgb(203, 213, 225);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s;
  overflow: hidden;
}

.tech-tag:hover {
  background-color: rgba(71, 85, 105, 0.7);
  border-color: rgb(100, 116, 139);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

/* Enhanced project links */
.project-link {
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 1.8rem;
  background-color: rgba(51, 65, 85, 0.5);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(71, 85, 105, 0.5);
  color: rgb(203, 213, 225);
  font-weight: 600;
  border-radius: 1rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.project-link:hover {
  border-color: rgb(100, 116, 139);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

/* Enhanced project stats */
.project-stat {
  position: relative;
  overflow: hidden;
}

.project-stat::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(16, 185, 129, 0.05), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.project-stat:hover::before {
  transform: translateX(100%);
}

.project-stat:hover {
  transform: translateY(-6px);
}

.stat-number {
  font-size: 2.8rem;
  font-weight: 800;
  color: white;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.stat-label {
  color: rgb(148, 163, 184);
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Responsive design */
@media (max-width: 1024px) {
  .grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .grid-cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>