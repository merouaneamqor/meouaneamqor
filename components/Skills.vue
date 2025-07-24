<template>
  <section class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 relative overflow-hidden">
    <!-- Enhanced background pattern -->
    <div class="absolute inset-0 opacity-3">
      <div class="skills-grid-pattern"></div>
    </div>
    
    <!-- Enhanced floating tech elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="floating-tech tech-1"></div>
      <div class="floating-tech tech-2"></div>
      <div class="floating-tech tech-3"></div>
      <div class="floating-tech tech-4"></div>
      <div class="floating-tech tech-5"></div>
    </div>

    <div class="container mx-auto px-6 lg:px-8 relative z-10">
      <!-- Enhanced section header -->
      <div class="text-center mb-20">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 professional-glow relative inline-block">
          <span class="relative z-10">Technical Arsenal</span>
          <span class="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent opacity-20">Technical Arsenal</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full mx-auto mb-6"></div>
        <p class="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          My core technologies and tools for building robust, modern web applications and leading teams.
        </p>
      </div>

      <!-- Enhanced skills grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        <!-- Backend & Infrastructure -->
        <div class="skill-domain p-8 group">
          <div class="skill-domain-header mb-8">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">Backend & Infrastructure</h3>
                <p class="text-slate-400">Server-side development & cloud platforms</p>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 gap-5">
            <div v-for="skill in backendSkills" :key="skill.name" class="skill-card backend-skill group/skill">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-3">
                  <div class="skill-icon text-2xl">{{ skill.icon }}</div>
                  <span class="skill-name text-lg font-medium text-slate-200">{{ skill.name }}</span>
                </div>
                <span class="text-slate-400 text-sm font-medium">{{ skill.level }}%</span>
              </div>
              <div class="skill-level">
                <div class="skill-bar">
                  <div class="skill-progress backend-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
              <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        <!-- Frontend & UI -->
        <div class="skill-domain p-8 group">
          <div class="skill-domain-header mb-8">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">Frontend & UI</h3>
                <p class="text-slate-400">Modern web interfaces & user experience</p>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 gap-5">
            <div v-for="skill in frontendSkills" :key="skill.name" class="skill-card frontend-skill group/skill">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-3">
                  <div class="skill-icon text-2xl">{{ skill.icon }}</div>
                  <span class="skill-name text-lg font-medium text-slate-200">{{ skill.name }}</span>
                </div>
                <span class="text-slate-400 text-sm font-medium">{{ skill.level }}%</span>
              </div>
              <div class="skill-level">
                <div class="skill-bar">
                  <div class="skill-progress frontend-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        <!-- DevOps & Tools -->
        <div class="skill-domain p-8 group">
          <div class="skill-domain-header mb-8">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">DevOps & Tools</h3>
                <p class="text-slate-400">Deployment, automation & development tools</p>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 gap-5">
            <div v-for="skill in devopsSkills" :key="skill.name" class="skill-card devops-skill group/skill">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-3">
                  <div class="skill-icon text-2xl">{{ skill.icon }}</div>
                  <span class="skill-name text-lg font-medium text-slate-200">{{ skill.name }}</span>
                </div>
                <span class="text-slate-400 text-sm font-medium">{{ skill.level }}%</span>
              </div>
              <div class="skill-level">
                <div class="skill-bar">
                  <div class="skill-progress devops-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        <!-- Leadership & Process -->
        <div class="skill-domain p-8 group">
          <div class="skill-domain-header mb-8">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">Leadership & Process</h3>
                <p class="text-slate-400">Team management & agile methodologies</p>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 gap-5">
            <div v-for="skill in leadershipSkills" :key="skill.name" class="skill-card leadership-skill group/skill">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-3">
                  <div class="skill-icon text-2xl">{{ skill.icon }}</div>
                  <span class="skill-name text-lg font-medium text-slate-200">{{ skill.name }}</span>
                </div>
                <span class="text-slate-400 text-sm font-medium">{{ skill.level }}%</span>
              </div>
              <div class="skill-level">
                <div class="skill-bar">
                  <div class="skill-progress leadership-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const backendSkills = [
  { name: "Ruby on Rails", icon: "💎", level: 95 },
  { name: "PostgreSQL", icon: "🐘", level: 90 },
  { name: "MongoDB", icon: "🍃", level: 85 },
  { name: "GraphQL", icon: "⚡", level: 80 },
  { name: "Redis", icon: "🔴", level: 85 },
  { name: "AWS", icon: "☁️", level: 80 }
]

const frontendSkills = [
  { name: "Vue.js", icon: "💚", level: 90 },
  { name: "React", icon: "⚛️", level: 85 },
  { name: "Nuxt.js", icon: "🟢", level: 90 },
  { name: "Next.js", icon: "▲", level: 80 },
  { name: "Tailwind CSS", icon: "🎨", level: 95 },
  { name: "TypeScript", icon: "📘", level: 85 }
]

const devopsSkills = [
  { name: "Docker", icon: "🐳", level: 85 },
  { name: "CI/CD", icon: "🔄", level: 90 },
  { name: "GitHub Actions", icon: "🚀", level: 85 },
  { name: "Heroku", icon: "🟣", level: 90 },
  { name: "Vercel", icon: "🔺", level: 85 },
  { name: "Linux", icon: "🐧", level: 80 }
]

const leadershipSkills = [
  { name: "Agile/Scrum", icon: "🏃", level: 95 },
  { name: "Team Leadership", icon: "👥", level: 90 },
  { name: "Code Review", icon: "🔍", level: 95 },
  { name: "Mentoring", icon: "🎓", level: 90 },
  { name: "Product Strategy", icon: "📊", level: 85 },
  { name: "Project Management", icon: "📋", level: 85 }
]
</script>

<style scoped>
/* Enhanced background grid pattern */
.skills-grid-pattern {
  background-image: 
    linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
  background-size: 120px 120px;
  width: 100%;
  height: 100%;
  animation: skills-grid-drift 80s linear infinite;
}

@keyframes skills-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(120px, 120px); }
}

/* Enhanced floating tech elements */
.floating-tech {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, rgba(16, 185, 129, 0.6), rgba(6, 182, 212, 0.6));
  border-radius: 50%;
  animation: tech-float 20s ease-in-out infinite;
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
}

.tech-1 { top: 10%; left: 15%; animation-delay: 0s; }
.tech-2 { top: 55%; right: 10%; animation-delay: 5s; }
.tech-3 { bottom: 20%; left: 25%; animation-delay: 10s; }
.tech-4 { top: 40%; right: 25%; animation-delay: 7s; }
.tech-5 { bottom: 35%; right: 15%; animation-delay: 15s; }

@keyframes tech-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
  50% { transform: translateY(-40px) rotate(180deg); opacity: 0.9; }
}

/* Professional glow effect */
.professional-glow {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.15);
}

/* Skill domain containers */
.skill-domain {
  @apply bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-2xl transition-all duration-500 hover:border-slate-500/50;
  position: relative;
  overflow: hidden;
}

.skill-domain::before {
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

.skill-domain:hover::before {
  transform: translateX(100%);
}

/* Skill cards */
.skill-card {
  @apply bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-5 transition-all duration-300 relative overflow-hidden;
  position: relative;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.03), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.skill-card:hover::before {
  transform: translateX(100%);
}

.skill-card:hover {
  @apply border-slate-500/50 transform -translate-y-1 shadow-lg;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.skill-icon {
  @apply text-2xl;
}

.skill-name {
  @apply text-slate-200 font-medium;
}

/* Skill level bars */
.skill-level {
  @apply w-full;
}

.skill-bar {
  @apply w-full h-2.5 bg-slate-600/30 rounded-full overflow-hidden;
}

.skill-progress {
  @apply h-full rounded-full transition-all duration-1000 ease-out;
}

/* Progress bar colors */
.backend-progress {
  @apply bg-gradient-to-r from-emerald-400 to-emerald-500;
}

.frontend-progress {
  @apply bg-gradient-to-r from-cyan-400 to-cyan-500;
}

.devops-progress {
  @apply bg-gradient-to-r from-blue-400 to-blue-500;
}

.leadership-progress {
  @apply bg-gradient-to-r from-purple-400 to-purple-500;
}

/* Skill category hover effects */
.backend-skill:hover {
  @apply border-emerald-500/50;
}

.frontend-skill:hover {
  @apply border-cyan-500/50;
}

.devops-skill:hover {
  @apply border-blue-500/50;
}

.leadership-skill:hover {
  @apply border-purple-500/50;
}

/* Responsive design */
@media (max-width: 1024px) {
  .grid-cols-2 {
    @apply grid-cols-1;
  }
}
</style>