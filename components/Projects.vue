<template>
  <section class="py-20 bg-transparent border-b border-slate-200 relative min-h-screen flex items-center justify-center">
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <!-- Professional section header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h3v3H7V7z"/>
            </svg>
          </div>
          <div class="text-left">
            <h2 class="text-4xl lg:text-5xl font-bold text-slate-900">
              Featured Projects
            </h2>
            <p class="text-slate-600 text-sm">Case studies • Outcomes • Impact</p>
          </div>
        </div>
        <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full mx-auto mb-6"></div>
        <p class="text-slate-700 text-lg max-w-3xl mx-auto leading-relaxed">
          A selection of work highlighting product leadership, engineering execution, and measurable business results
        </p>
      </div>
      
      <!-- Strategic Projects Grid -->
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 items-stretch">
          <div 
            v-for="(project, index) in projects"
            :key="project.name"
            class="project-card group relative transition-transform duration-300"
          >
            <!-- Card Container -->
            <div class="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
              <!-- Card Header -->
               <div class="bg-white border-b border-slate-200 p-4 sm:p-6">
                <div class="flex items-start gap-3">
                  <div class="flex items-center gap-3 flex-1">
                    <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <div>
                       <h3 class="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                        {{ project.name }}
                      </h3>
                       <p class="text-slate-600 text-sm">{{ project.category }}</p>
                    </div>
                  </div>
                  <div class="ml-auto">
                    <span class="inline-flex items-center px-3 py-1 bg-emerald-500/15 border border-emerald-400/40 rounded-full text-emerald-700 text-xs font-medium">
                      <span class="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                      {{ project.status }}
                    </span>
                  </div>
                </div>
                <div class="flex flex-wrap items-center gap-3 text-slate-600 text-xs sm:text-sm mt-3">
                  <span class="inline-flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"/></svg>
                    {{ project.category }}
                  </span>
                  <span class="inline-flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3"/></svg>
                    {{ project.duration }}
                  </span>
                </div>
              </div>

              <!-- Card Content -->
              <div class="p-4 sm:p-6 flex-1 flex flex-col">
                <!-- Leadership Impact -->
                <div class="mb-6">
                  <h4 class="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-3">Overview</h4>
                  <p class="text-slate-700 leading-relaxed">{{ project.summary || project.leadershipImpact }}</p>
                </div>

                <!-- Business Metrics -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6" v-if="project.metrics">
                  <div v-for="metric in project.metrics" :key="metric.label" class="text-center p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div class="text-xl sm:text-2xl font-bold text-slate-900">{{ metric.value }}</div>
                    <div class="text-xs sm:text-sm text-slate-600">{{ metric.label }}</div>
                  </div>
                </div>

                <!-- Technical Stack -->
                <div class="mb-6">
                  <h4 class="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-3">Tech</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in project.technologies" :key="tech" 
                          class="px-2 py-1 bg-slate-100 border border-slate-200 text-xs text-slate-700 rounded-md hover:bg-slate-200 transition-colors">
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- Project Link -->
                <div class="flex items-center justify-between mt-auto pt-2">
                  <a v-if="project.link !== '#'" :href="project.link" target="_blank" rel="noopener noreferrer" 
                     class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                    <span>Open</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                  <span v-else class="inline-flex items-center gap-2 text-slate-500">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                    Confidential Project
                  </span>
                  <div class="text-xs text-slate-500">{{ project.duration }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Executive Summary -->
        <div class="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-2xl p-8">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Portfolio Impact Summary</h3>
            <div class="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto"></div>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="(stat, index) in portfolioStats" :key="stat.label" class="text-center group">
              <div class="text-3xl font-bold text-slate-900 mb-2">
                {{ stat.value }}
              </div>
              <div class="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-1">
                {{ stat.label }}
              </div>
              <div class="text-xs text-slate-600">
                {{ stat.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Project {
  name: string;
  category: string;
  status: string;
  duration: string;
  leadershipImpact: string;
  summary?: string;
  technologies: string[];
  metrics?: { value: string; label: string }[];
  link: string;
}

const projects = ref<Project[]>([
  {
    name: 'DabaDoc Healthcare Platform',
    category: 'Healthcare Technology',
    status: 'Leading Production',
    duration: '2022 - Present',
    leadershipImpact: 'Led engineering teams of 15+ developers across multiple countries. Architected scalable healthcare infrastructure serving 100K+ users. Implemented Agile methodologies resulting in 40% faster delivery cycles and improved team performance.',
    technologies: ['Ruby on Rails', 'Angular', 'MongoDB', 'AWS', 'Microservices'],
    metrics: [
      { value: '100K+', label: 'Active Users' },
      { value: '40%', label: 'Performance Gain' },
      { value: '15+', label: 'Team Members' },
      { value: '5', label: 'Countries' }
    ],
    link: 'https://www.dabadoc.com'
  },
  {
    name: 'Douq.ma Discovery Platform',
    category: 'Location Intelligence',
    status: 'Co-Founded',
    duration: '2021 - Present',
    leadershipImpact: 'Co-founded and led product development for Morocco\'s premier location discovery platform. Established technical vision, built founding team, and secured initial user base. Integrated AI-powered recommendations with community-driven content strategy.',
    technologies: ['React', 'Ruby on Rails', 'MongoDB', 'AI/ML', 'Geolocation APIs'],
    metrics: [
      { value: '10K+', label: 'Venues Listed' },
      { value: '2', label: 'Co-Founded' },
      { value: '95%', label: 'User Satisfaction' },
      { value: '3', label: 'Cities Covered' }
    ],
    link: 'https://www.douq.ma'
  },
  {
    name: 'Meram/Texam E-commerce Platform',
    category: 'E-commerce Solutions',
    status: 'Co-Founded',
    duration: '2018 - 2019',
    leadershipImpact: 'Co-founded innovative e-commerce platform with focus on mobile-first experience. Led technical team of 6 developers, established development processes, and delivered cross-platform solution with complex inventory and payment integrations.',
    technologies: ['Ruby on Rails', 'React Native', 'PostgreSQL', 'Payment Gateways'],
    metrics: [
      { value: '5K+', label: 'Products' },
      { value: '6', label: 'Team Size' },
      { value: '99.9%', label: 'Uptime' },
      { value: '2', label: 'Platforms' }
    ],
    link: 'https://www.texam.ma'
  },
  {
    name: 'Real Estate Management System',
    category: 'Enterprise Solutions',
    status: 'Client Delivery',
    duration: '2021',
    leadershipImpact: 'Delivered comprehensive real estate management solution for Riad Raha. Managed client relationships, defined technical requirements, and led development team to deliver on-time, on-budget solution that improved operational efficiency by 60%.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'RESTful APIs'],
    metrics: [
      { value: '60%', label: 'Efficiency Gain' },
      { value: '100%', label: 'On-Time Delivery' },
      { value: '1M', label: 'Process Optimization' },
      { value: '24/7', label: 'System Availability' }
    ],
    link: '#'
  }
])

const portfolioStats = [
  { 
    value: '$2M+', 
    label: 'Project Value', 
    description: 'Total business impact delivered' 
  },
  { 
    value: '2', 
    label: 'Startups Founded', 
    description: 'Entrepreneurial ventures led' 
  },
  { 
    value: '200K+', 
    label: 'Users Impacted', 
    description: 'Across all platforms' 
  },
  { 
    value: '4', 
    label: 'Industry Sectors', 
    description: 'Healthcare, E-commerce, Real Estate, Discovery' 
  }
]
</script>

<style scoped>
/* Professional theme */
.professional-glow {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

/* Professional grid pattern */
.projects-grid-pattern {
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.04) 0%, transparent 50%),
    linear-gradient(rgba(148, 163, 184, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.02) 1px, transparent 1px);
  background-size: 300px 300px, 200px 200px, 60px 60px, 60px 60px;
  width: 100%;
  height: 100%;
  animation: professional-grid-drift 120s linear infinite;
}

@keyframes professional-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(60px, 60px); }
}

/* Professional floating elements */
.professional-element {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, #10b981, #06b6d4);
  border-radius: 50%;
  animation: professional-float 40s ease-in-out infinite;
  opacity: 0.3;
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
}

.element-1 { top: 20%; left: 15%; animation-delay: 0s; }
.element-2 { top: 60%; right: 20%; animation-delay: 10s; }
.element-3 { bottom: 30%; left: 25%; animation-delay: 20s; }
.element-4 { top: 40%; right: 15%; animation-delay: 30s; }

@keyframes professional-float {
  0%, 100% { 
    transform: translate(0px, 0px) rotate(0deg); 
    opacity: 0.3; 
  }
  25% { 
    transform: translate(-30px, 20px) rotate(90deg); 
    opacity: 0.5; 
  }
  50% { 
    transform: translate(20px, -35px) rotate(180deg); 
    opacity: 0.4; 
  }
  75% { 
    transform: translate(25px, 30px) rotate(270deg); 
    opacity: 0.45; 
  }
}

/* Project cards */
.project-card {
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

/* Responsive design */
@media (max-width: 1024px) {
  .grid.grid-cols-1.lg\\:grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .grid.grid-cols-2.md\\:grid-cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  .grid.grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>