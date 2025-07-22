<template>
  <section class="py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 relative overflow-hidden">
    <!-- Subtle Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="projects-grid-pattern"></div>
    </div>
    
    <!-- Floating Project Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="project-element element-1"></div>
      <div class="project-element element-2"></div>
      <div class="project-element element-3"></div>
      <div class="project-element element-4"></div>
    </div>

    <div class="container mx-auto px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4 professional-glow">
          Notable Projects
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full mx-auto mb-4"></div>
        <p class="text-slate-300 text-lg max-w-2xl mx-auto">
          Selected projects that showcase my technical expertise and product impact.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div 
          v-for="(project, index) in projects"
          :key="project.name"
          class="project-card group"
        >
          <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-500/50 hover:bg-slate-800/60 h-full flex flex-col p-6">
            
            <!-- Project Header -->
            <div class="p-6 border-b border-slate-600/20">
              <div class="flex items-start gap-4">
                <!-- Project Icon -->
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <svg v-if="project.category === 'healthcare'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                    <svg v-else-if="project.category === 'ecommerce'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                    <svg v-else-if="project.category === 'discovery'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                    <svg v-else class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 012-2h2a2 2 0 012 2v12"/>
                    </svg>
                  </div>
                </div>

                <!-- Project Title and Status -->
                <div class="flex-1">
                  <h3 class="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {{ project.name }}
                  </h3>
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span class="text-sm text-slate-400 uppercase tracking-wider">{{ project.status }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6 flex-1 flex flex-col">
              <!-- Description -->
              <p class="text-slate-300 leading-relaxed mb-6 flex-1">
                {{ project.description }}
              </p>

              <!-- Key Features (if available) -->
              <div v-if="project.features" class="mb-6">
                <h4 class="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                  Key Features
                </h4>
                <ul class="space-y-2">
                  <li 
                    v-for="feature in project.features" 
                    :key="feature"
                    class="flex items-start gap-2 text-slate-300 text-sm"
                  >
                    <div class="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <!-- Technologies -->
              <div class="mb-6">
                <h4 class="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                  Technologies Used
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="tech-tag"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Project Link -->
              <div class="mt-auto">
                <a 
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link group/link"
                  :class="{ 'pointer-events-none opacity-50': project.link === '#' }"
                >
                  <span class="relative z-10 flex items-center gap-2">
                    {{ project.link === '#' ? 'Private Project' : 'View Project' }}
                    <ArrowRight v-if="project.link !== '#'" class="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                  </span>
                  <div v-if="project.link !== '#'" class="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Stats -->
      <div class="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div class="project-stat">
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-xl p-6 text-center transition-all duration-300 hover:border-slate-500/50 hover:bg-slate-800/50">
            <div class="stat-number">4</div>
            <div class="stat-label">Major Projects</div>
          </div>
        </div>
        <div class="project-stat">
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-xl p-6 text-center transition-all duration-300 hover:border-slate-500/50 hover:bg-slate-800/50">
            <div class="stat-number">2</div>
            <div class="stat-label">Co-founded Startups</div>
          </div>
        </div>
        <div class="project-stat">
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-xl p-6 text-center transition-all duration-300 hover:border-slate-500/50 hover:bg-slate-800/50">
            <div class="stat-number">3</div>
            <div class="stat-label">Industry Sectors</div>
          </div>
        </div>
        <div class="project-stat">
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-xl p-6 text-center transition-all duration-300 hover:border-slate-500/50 hover:bg-slate-800/50">
            <div class="stat-number">10+</div>
            <div class="stat-label">Technologies Used</div>
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
/* Background Grid Pattern */
.projects-grid-pattern {
  background-image: 
    linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
  background-size: 160px 160px;
  width: 100%;
  height: 100%;
  animation: projects-grid-drift 120s linear infinite;
}

@keyframes projects-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(160px, 160px); }
}

/* Floating Project Elements */
.project-element {
  position: absolute;
  width: 6px;
  height: 6px;
  background: linear-gradient(45deg, rgba(16, 185, 129, 0.3), rgba(6, 182, 212, 0.3));
  border-radius: 50%;
  animation: project-float 30s ease-in-out infinite;
}

.element-1 { top: 20%; left: 15%; animation-delay: 0s; }
.element-2 { top: 50%; right: 20%; animation-delay: 7s; }
.element-3 { bottom: 30%; left: 25%; animation-delay: 15s; }
.element-4 { top: 70%; right: 30%; animation-delay: 22s; }

@keyframes project-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-60px) rotate(180deg); opacity: 0.8; }
}

/* Professional Glow Effect */
.professional-glow {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

/* Project Cards */
.project-card:hover .bg-slate-800\/40 {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
}

/* Technology Tags */
.tech-tag {
  padding: 0.25rem 0.75rem;
  background-color: rgba(51, 65, 85, 0.5);
  color: rgb(203, 213, 225);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s;
}

.tech-tag:hover {
  background-color: rgba(71, 85, 105, 0.5);
  border-color: rgb(100, 116, 139);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Project Links */
.project-link {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: rgba(51, 65, 85, 0.5);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(71, 85, 105, 0.5);
  color: rgb(203, 213, 225);
  font-weight: 600;
  border-radius: 0.5rem;
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

/* Project Stats */
.project-stat:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  color: rgb(148, 163, 184);
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Responsive Design */
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