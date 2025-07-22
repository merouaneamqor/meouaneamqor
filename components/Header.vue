<template>
  <header class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
    <!-- Subtle Grid Background -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>
    
    <!-- Minimal Floating Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="floating-dot dot-1"></div>
      <div class="floating-dot dot-2"></div>
      <div class="floating-dot dot-3"></div>
    </div>

    <div class="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
      
      <!-- Left: Professional Info -->
      <div class="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-3xl">
        
        <!-- Clean Name with Subtle Glow -->
        <h1 class="mb-6">
          <span class="block text-4xl lg:text-6xl font-bold text-white mb-2 professional-glow">
            Merouane Amqor
          </span>
          <span class="block text-lg lg:text-xl text-slate-300 font-medium tracking-wide">
            Ruby on Rails Developer • Tech Lead • Certified ScrumMaster®
          </span>
        </h1>

        <!-- Professional Contact Panel -->
        <div class="bg-slate-800/60 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 mb-8 w-full max-w-lg">
          <div class="space-y-3">
            <div class="flex items-center gap-3 text-slate-300">
              <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span class="text-sm font-medium">Available for leadership opportunities</span>
            </div>
            <div class="flex items-center gap-3 text-slate-300">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116 8a8.001 8.001 0 01-1.343 8.657z"/>
              </svg>
              <span>Casablanca, Morocco</span>
            </div>
            <div class="flex items-center gap-3 text-slate-300">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm-4 4v4m0 0H8m4 0h4"/>
              </svg>
              <span>marouane.amqor@gmail.com</span>
            </div>
          </div>
        </div>

        <!-- Professional Action Buttons -->
        <div class="flex flex-wrap gap-4 mb-8">
          <a 
            href="mailto:marouane.amqor@gmail.com" 
            class="professional-button primary-button group"
          >
            <span class="relative z-10">Contact Me</span>
          </a>
          <a 
            href="/resume.pdf" 
            class="professional-button secondary-button group"
          >
            <span class="relative z-10">View Resume</span>
          </a>
          <a 
            href="https://linkedin.com/in/merouane-amqor" 
            target="_blank" 
            class="professional-button secondary-button group"
          >
            <span class="relative z-10">LinkedIn</span>
          </a>
          <a 
            href="https://github.com/merouaneamqor" 
            target="_blank" 
            class="professional-button secondary-button group"
          >
            <span class="relative z-10">GitHub</span>
          </a>
        </div>

        <!-- Enhanced Professional Bio with Leadership Focus -->
        <div class="space-y-6 max-w-2xl">
          <!-- Main Bio -->
          <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-600/20 rounded-lg p-6">
            <p class="text-slate-300 leading-relaxed mb-4">
              Full-stack developer specializing in Ruby on Rails with a focus on building 
              scalable, maintainable applications. Experienced Tech Lead and Certified 
              ScrumMaster® with startup co-founding experience.
            </p>
          </div>

          <!-- Leadership Expertise Tabs -->
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-lg overflow-hidden">
            <div class="flex border-b border-slate-600/20">
              <button 
                @click="activeTab = 'scrum'"
                :class="[
                  'flex-1 px-4 py-3 text-sm font-medium transition-colors',
                  activeTab === 'scrum' 
                    ? 'bg-slate-700/50 text-white border-b-2 border-emerald-400' 
                    : 'text-slate-400 hover:text-slate-300'
                ]"
              >
                Scrum Master
              </button>
              <button 
                @click="activeTab = 'leader'"
                :class="[
                  'flex-1 px-4 py-3 text-sm font-medium transition-colors',
                  activeTab === 'leader' 
                    ? 'bg-slate-700/50 text-white border-b-2 border-emerald-400' 
                    : 'text-slate-400 hover:text-slate-300'
                ]"
              >
                Team Leader
              </button>
            </div>
            
            <div class="p-6">
              <!-- Scrum Master Content -->
              <div v-if="activeTab === 'scrum'" class="space-y-4">
                <h3 class="text-lg font-semibold text-white mb-3">Certified Agile Facilitator & Process Champion</h3>
                <p class="text-slate-300 text-sm leading-relaxed mb-4">
                  Certified ScrumMaster® (CSM) who expertly facilitates sprint ceremonies and removes impediments 
                  that block team progress. Creates psychological safety for teams to experiment, fail fast, and iterate.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div class="flex items-center gap-2 text-slate-400">
                    <div class="w-1 h-1 bg-emerald-400 rounded-full"></div>
                    <span>Servant Leadership</span>
                  </div>
                  <div class="flex items-center gap-2 text-slate-400">
                    <div class="w-1 h-1 bg-emerald-400 rounded-full"></div>
                    <span>Impediment Removal</span>
                  </div>
                  <div class="flex items-center gap-2 text-slate-400">
                    <div class="w-1 h-1 bg-emerald-400 rounded-full"></div>
                    <span>Continuous Improvement</span>
                  </div>
                  <div class="flex items-center gap-2 text-slate-400">
                    <div class="w-1 h-1 bg-emerald-400 rounded-full"></div>
                    <span>Metrics-Driven Optimization</span>
                  </div>
                </div>
              </div>

              <!-- Team Leader Content -->
              <div v-if="activeTab === 'leader'" class="space-y-4">
                <h3 class="text-lg font-semibold text-white mb-3">Technical Leader with Product Mindset</h3>
                <p class="text-slate-300 text-sm leading-relaxed mb-4">
                  Combines deep Ruby on Rails expertise with strong leadership skills to guide development teams 
                  toward successful product outcomes while maintaining code quality and developer satisfaction.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div class="flex items-center gap-2 text-slate-400">
                    <div class="w-1 h-1 bg-emerald-400 rounded-full"></div>
                    <span>Mentorship-First Approach</span>
                  </div>
                  <div class="flex items-center gap-2 text-slate-400">
                    <div class="w-1 h-1 bg-emerald-400 rounded-full"></div>
                    <span>Technical Vision & Architecture</span>
                  </div>
                  <div class="flex items-center gap-2 text-slate-400">
                    <div class="w-1 h-1 bg-emerald-400 rounded-full"></div>
                    <span>Cross-Functional Collaboration</span>
                  </div>
                  <div class="flex items-center gap-2 text-slate-400">
                    <div class="w-1 h-1 bg-emerald-400 rounded-full"></div>
                    <span>Quality Advocacy & Best Practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Professional Avatar -->
      <div class="flex-1 flex items-center justify-center lg:justify-end">
        <div class="relative">
          <!-- Subtle Accent Ring -->
          <div class="absolute inset-0 w-72 h-72 rounded-full border border-slate-600/30 slow-rotate"></div>
          
          <!-- Professional Avatar -->
          <div class="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-slate-500/50 shadow-2xl shadow-slate-900/50">
            <img 
              :src="avatarUrl"
              alt="Merouane Amqor"
              class="w-full h-full object-cover"
            />
            <!-- Subtle Overlay -->
            <div class="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-slate-700/20"></div>
          </div>
          
          <!-- Status Indicator -->
          <div class="absolute -bottom-2 -right-2 bg-emerald-500 w-6 h-6 rounded-full border-3 border-slate-800 flex items-center justify-center">
            <div class="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const avatarUrl = ref('https://avatars.githubusercontent.com/u/37594453?v=4')
const activeTab = ref('scrum')
</script>

<style scoped>
/* Subtle Grid Pattern */
.grid-pattern {
  background-image: 
    linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  width: 100%;
  height: 100%;
  animation: grid-drift 30s linear infinite;
}

@keyframes grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(60px, 60px); }
}

/* Minimal Floating Elements */
.floating-dot {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(148, 163, 184, 0.4);
  border-radius: 50%;
  animation: gentle-float 8s ease-in-out infinite;
}

.dot-1 { top: 25%; left: 15%; animation-delay: 0s; }
.dot-2 { top: 70%; left: 85%; animation-delay: 3s; }
.dot-3 { top: 45%; left: 75%; animation-delay: 6s; }

@keyframes gentle-float {
  0%, 100% { transform: translateY(0px); opacity: 0.4; }
  50% { transform: translateY(-15px); opacity: 0.8; }
}

/* Professional Glow Effect */
.professional-glow {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

/* Professional Buttons */
.professional-button {
  @apply px-6 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden;
}

.primary-button {
  @apply bg-slate-700 text-white border border-slate-600 hover:bg-slate-600 hover:border-slate-500;
}

.secondary-button {
  @apply bg-transparent text-slate-300 border border-slate-600 hover:bg-slate-800 hover:text-white hover:border-slate-500;
}

.professional-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Subtle Rotation */
.slow-rotate {
  animation: slow-rotation 60s linear infinite;
}

@keyframes slow-rotation {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .container {
    text-align: center;
  }
}
</style>