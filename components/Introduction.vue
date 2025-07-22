<template>
  <section class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
    <!-- Advanced Background Effects -->
    <div class="absolute inset-0">
      <div class="scrum-grid-pattern"></div>
      <div class="gradient-orbs"></div>
    </div>
    
    <!-- Floating Scrum Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="scrum-particle particle-1"></div>
      <div class="scrum-particle particle-2"></div>
      <div class="scrum-particle particle-3"></div>
      <div class="scrum-particle particle-4"></div>
    </div>

    <div class="container mx-auto px-6 lg:px-8 relative z-10">
      
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-2 mb-6">
          <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span class="text-emerald-400 font-medium">Certified ScrumMaster®</span>
        </div>
        
        <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Transforming Teams Through
          <span class="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Agile Excellence
          </span>
        </h1>
        
        <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          I don't just facilitate Scrum ceremonies—I architect high-performing cultures, 
          eliminate organizational friction, and turn cross-functional teams into delivery powerhouses.
        </p>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <div 
          v-for="stat in stats" 
          :key="stat.label" 
          class="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 text-center transition-all duration-500 hover:bg-slate-800/60 hover:border-slate-500/50 hover:scale-105"
        >
          <div class="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-emerald-400">
            <component :is="stat.icon" class="w-6 h-6" />
          </div>
          <div class="text-3xl font-bold text-white mb-2">{{ stat.value }}</div>
          <div class="text-slate-400 font-medium">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-3 gap-12 mb-20">
        
        <!-- Left: Certificate & Credentials -->
        <div class="lg:col-span-1">
          <div class="space-y-2">
            <div class="group relative">
              <img 
                src="/assets/images/1__xsAVKi5G0AzK7INXcma7w.png" 
                alt="Certified ScrumMaster Certificate" 
                class="w-full h-auto rounded-2xl shadow-2xl border border-slate-600/30 transition-all duration-500"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent rounded-2xl"></div>
              <div class="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                <TrophyIcon class="w-5 h-5" />
                <span>CSM®</span>
              </div>
            </div>
            
            <!-- Credentials List -->
            <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6">
              <h3 class="text-lg font-semibold text-white mb-4">Agile Credentials</h3>
              <div class="space-y-3">
                <div class="flex items-center gap-3 text-slate-300">
                  <CheckCircleIcon class="w-5 h-5 text-emerald-400" />
                  <span>Certified ScrumMaster® (CSM)</span>
                </div>
                <div class="flex items-center gap-3 text-slate-300">
                  <CheckCircleIcon class="w-5 h-5 text-cyan-400" />
                  <span>Agile Leadership Certified</span>
                </div>
                <div class="flex items-center gap-3 text-slate-300">
                  <CheckCircleIcon class="w-5 h-5 text-blue-400" />
                  <span>SAFe® Practitioner</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Skills & Expertise -->
        <div class="lg:col-span-2">
          
          <!-- Scrum Mastery Skills -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div class="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <TargetIcon class="w-4 h-4 text-white" />
              </div>
              Scrum Mastery Expertise
            </h2>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div 
                v-for="skill in scrumSkills" 
                :key="skill.name" 
                class="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 transition-all duration-500 hover:bg-slate-800/60 hover:border-slate-500/50 hover:scale-105"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center" :class="skill.colorClass">
                      <component :is="skill.icon" class="w-5 h-5" />
                    </div>
                    <h4 class="text-white font-semibold">{{ skill.name }}</h4>
                  </div>
                  <div class="text-emerald-400 font-bold">{{ skill.level }}%</div>
                </div>
                
                <div class="mb-4">
                  <div class="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      class="h-full transition-all duration-1000 ease-out progress-fill" 
                      :class="skill.progressClass"
                      :style="{ width: skill.level + '%' }"
                    ></div>
                  </div>
                </div>
                
                <ul class="space-y-2">
                  <li v-for="detail in skill.details" :key="detail" class="flex items-center gap-2 text-sm text-slate-300">
                    <div class="w-1.5 h-1.5 rounded-full" :class="skill.dotClass"></div>
                    <span>{{ detail }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Scrum Process Flow -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <RefreshCwIcon class="w-5 h-5 text-emerald-400" />
              My Scrum Implementation Process
            </h3>
            
            <div class="space-y-6">
              <div v-for="(step, index) in processSteps" :key="step.title" class="relative flex gap-4">
                <div v-if="index < processSteps.length - 1" class="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-emerald-500 to-cyan-500"></div>
                <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <h4 class="text-white font-semibold mb-2">{{ step.title }}</h4>
                  <p class="text-slate-300 text-sm">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Impact Showcase -->
      <div class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-4">Measurable Impact</h2>
          <p class="text-slate-300 text-lg">Real results from real transformations</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="impact in impactMetrics" 
            :key="impact.title" 
            class="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 text-center transition-all duration-500 hover:bg-slate-800/60 hover:border-slate-500/50 hover:scale-105"
          >
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" :class="impact.iconBg">
              <component :is="impact.icon" class="w-6 h-6" :class="impact.iconColor" />
            </div>
            <div class="text-4xl font-bold text-white mb-2">{{ impact.metric }}</div>
            <div class="text-lg font-semibold text-white mb-2">{{ impact.title }}</div>
            <div class="text-slate-400 text-sm">{{ impact.description }}</div>
          </div>
        </div>
      </div>

      <!-- Testimonial -->
      <div class="mb-16">
        <div class="bg-gradient-to-r from-slate-800/60 to-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-8 lg:p-12">
          <QuoteIcon class="w-8 h-8 text-emerald-400 mb-4" />
          <blockquote class="text-lg lg:text-xl text-slate-200 leading-relaxed mb-8 italic">
            "Merouane transformed our chaotic development process into a well-oiled Agile machine. 
            His ability to identify and eliminate blockers while keeping the team motivated is exceptional. 
            Our velocity increased by 40% and team satisfaction reached an all-time high."
          </blockquote>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
              <UserIcon class="w-6 h-6 text-slate-400" />
            </div>
            <div>
              <div class="text-white font-semibold">Sarah Johnson</div>
              <div class="text-slate-400 text-sm">VP of Engineering, HealthTech Solutions</div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-12">
          <h3 class="text-2xl font-bold text-white mb-4">Ready to Transform Your Team?</h3>
          <p class="text-slate-300 mb-8">Let's discuss how Agile excellence can accelerate your product delivery</p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/portfolio" 
              class="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 overflow-hidden hover:from-emerald-400 hover:to-cyan-400 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-emerald-500/30"
            >
              <span class="relative z-10 flex items-center gap-2 justify-center">
                <RocketIcon class="w-5 h-5" />
                View Agile Transformations
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NuxtLink>
            
            <NuxtLink 
              to="/contact" 
              class="group relative px-8 py-4 bg-transparent border-2 border-emerald-500/50 text-emerald-400 font-semibold rounded-xl transition-all duration-300 overflow-hidden hover:border-emerald-400 hover:text-emerald-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              <span class="relative z-10 flex items-center gap-2 justify-center">
                <MessageCircleIcon class="w-5 h-5" />
                Schedule Consultation
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  TrophyIcon, CheckCircleIcon, TargetIcon, RefreshCwIcon, QuoteIcon, 
  UserIcon, RocketIcon, MessageCircleIcon, CalendarIcon, UsersIcon, 
  ShieldCheckIcon, TrendingUpIcon, ZapIcon, AwardIcon, BarChart3Icon,
  ClockIcon, HeartIcon
} from 'lucide-vue-next'

// Animated Statistics
const stats = [
  { icon: TrendingUpIcon, value: '40%', label: 'Velocity Increase' },
  { icon: AwardIcon, value: '100%', label: 'Sprint Success' },
  { icon: UsersIcon, value: '95%', label: 'Team Satisfaction' },
  { icon: ZapIcon, value: '5+', label: 'Departments Aligned' }
]

// Enhanced Scrum Skills
const scrumSkills = [
  {
    name: 'Scrum Events Mastery',
    level: 95,
    icon: CalendarIcon,
    colorClass: 'bg-emerald-500/20 text-emerald-400',
    progressClass: 'bg-gradient-to-r from-emerald-500 to-emerald-400',
    dotClass: 'bg-emerald-400',
    details: ['Sprint Planning Excellence', 'Daily Standup Facilitation', 'Retrospective Innovation']
  },
  {
    name: 'Team Facilitation',
    level: 92,
    icon: UsersIcon,
    colorClass: 'bg-cyan-500/20 text-cyan-400',
    progressClass: 'bg-gradient-to-r from-cyan-500 to-cyan-400',
    dotClass: 'bg-cyan-400',
    details: ['Conflict Resolution', 'Cross-team Collaboration', 'Psychological Safety']
  },
  {
    name: 'Impediment Removal',
    level: 88,
    icon: ShieldCheckIcon,
    colorClass: 'bg-blue-500/20 text-blue-400',
    progressClass: 'bg-gradient-to-r from-blue-500 to-blue-400',
    dotClass: 'bg-blue-400',
    details: ['Organizational Blockers', 'Process Optimization', 'Stakeholder Alignment']
  },
  {
    name: 'Continuous Improvement',
    level: 90,
    icon: TrendingUpIcon,
    colorClass: 'bg-purple-500/20 text-purple-400',
    progressClass: 'bg-gradient-to-r from-purple-500 to-purple-400',
    dotClass: 'bg-purple-400',
    details: ['Metrics & Analytics', 'Kaizen Implementation', 'Team Maturity Growth']
  }
]

// Process Steps
const processSteps = [
  {
    title: 'Team Assessment',
    description: 'Evaluate current state, identify pain points, and establish baseline metrics'
  },
  {
    title: 'Agile Transformation',
    description: 'Implement Scrum framework with tailored ceremonies and practices'
  },
  {
    title: 'Continuous Coaching',
    description: 'Provide ongoing mentorship and remove impediments as they arise'
  },
  {
    title: 'Performance Optimization',
    description: 'Monitor metrics, facilitate retrospectives, and drive improvements'
  }
]

// Impact Metrics
const impactMetrics = [
  {
    icon: BarChart3Icon,
    iconBg: 'bg-emerald-500/20',
    iconColor: 'text-emerald-400',
    metric: '40%',
    title: 'Velocity Increase',
    description: 'Average team velocity improvement within 3 months'
  },
  {
    icon: ClockIcon,
    iconBg: 'bg-cyan-500/20',
    iconColor: 'text-cyan-400',
    metric: '60%',
    title: 'Faster Delivery',
    description: 'Reduced time-to-market for new features'
  },
  {
    icon: HeartIcon,
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
    metric: '95%',
    title: 'Team Satisfaction',
    description: 'Improved team engagement and retention'
  }
]
</script>

<style scoped>
/* Advanced Background Effects */
.scrum-grid-pattern {
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
    linear-gradient(rgba(148, 163, 184, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.02) 1px, transparent 1px);
  background-size: 800px 800px, 600px 600px, 100px 100px, 100px 100px;
  animation: grid-drift 60s linear infinite;
}

.gradient-orbs::before,
.gradient-orbs::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  animation: orb-float 20s ease-in-out infinite;
}

.gradient-orbs::before {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.gradient-orbs::after {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%);
  bottom: 20%;
  right: 10%;
  animation-delay: 10s;
}

@keyframes grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(100px, 100px); }
}

@keyframes orb-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(50px, -30px) scale(1.1); }
}

/* Floating Scrum Particles */
.scrum-particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, rgba(16, 185, 129, 0.6), rgba(6, 182, 212, 0.6));
  border-radius: 50%;
  animation: particle-float 25s linear infinite;
}

.particle-1 { top: 10%; left: 20%; animation-delay: 0s; }
.particle-2 { top: 60%; right: 15%; animation-delay: 8s; }
.particle-3 { bottom: 30%; left: 10%; animation-delay: 16s; }
.particle-4 { top: 40%; right: 30%; animation-delay: 24s; }

@keyframes particle-float {
  0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
}

/* Progress Fill Animation */
.progress-fill {
  animation: progress-fill 2s ease-out;
}

@keyframes progress-fill {
  0% { width: 0%; }
}
</style>
