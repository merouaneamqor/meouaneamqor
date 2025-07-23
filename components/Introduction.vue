<template>
  <section class="py-12 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700/50 relative overflow-hidden">
    <div class="container mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
      <!-- Left: Manager Info -->
      <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 class="text-4xl lg:text-5xl font-bold mb-2 text-white">Merouane Amqor</h1>
        <h2 class="text-xl lg:text-2xl font-semibold mb-4 text-emerald-400">Professional Scrum Master & Engineering Manager</h2>
        <p class="text-lg text-slate-300 mb-6 max-w-xl">
          Experienced leader in Agile transformation, team empowerment, and operational excellence. Proven track record in building high-performing teams and delivering business value through disciplined Scrum practices.
        </p>
        <ul class="mb-8 w-full max-w-md space-y-3">
          <li class="flex items-center gap-3 text-slate-300 text-base">
            <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Led and mentored cross-functional teams of 10+ engineers
          </li>
          <li class="flex items-center gap-3 text-slate-300 text-base">
            <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Delivered enterprise-scale products in healthcare and technology
          </li>
          <li class="flex items-center gap-3 text-slate-300 text-base">
            <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Certified Scrum Master (CSM®) & Agile Coach
          </li>
          <li class="flex items-center gap-3 text-slate-300 text-base">
            <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Advocate for continuous improvement and business agility
          </li>
        </ul>
        <NuxtLink to="/portfolio" class="inline-block px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg shadow hover:bg-emerald-700 transition">View My Work</NuxtLink>
      </div>
      <!-- Right: Professional Avatar/Illustration -->
      <div class="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
        <div class="relative flex items-center justify-center">
          <div class="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-emerald-400/10 via-cyan-400/10 to-blue-400/10 blur-2xl"></div>
          <div class="relative w-44 h-44 rounded-full bg-slate-700 flex items-center justify-center border-4 border-slate-600/50 shadow-2xl">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="40" r="28" fill="#334155"/>
              <ellipse cx="60" cy="80" rx="32" ry="16" fill="#475569"/>
              <circle cx="60" cy="40" r="12" fill="#fff"/>
              <rect x="48" y="52" width="24" height="18" rx="8" fill="#fff"/>
              <rect x="58" y="68" width="4" height="12" rx="2" fill="#0f172a"/>
            </svg>
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
