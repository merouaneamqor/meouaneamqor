<template>
  <section class="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700/50 relative overflow-hidden">
    <!-- Subtle Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="about-grid-pattern"></div>
    </div>
    
    <!-- Floating Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="floating-element element-1"></div>
      <div class="floating-element element-2"></div>
    </div>

    <div class="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-start justify-between gap-16 relative z-10">
      
      <!-- About Me Section -->
      <div class="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
        <div class="mb-8">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-2 professional-glow">
            About Me
          </h2>
          <div class="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
        </div>
        
        <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-xl p-8 mb-8 w-full">
          <p class="text-slate-300 leading-relaxed text-lg mb-6">
            I'm a full-stack developer specializing in Ruby on Rails with a passion for building 
            fast, scalable applications. I combine clean code practices with strong product thinking 
            to deliver exceptional user experiences.
          </p>
          
          <div class="space-y-4 mb-6">
            <div class="flex items-center gap-3 text-slate-300">
              <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span class="text-sm">Certified ScrumMaster® (CSM)</span>
            </div>
            <div class="flex items-center gap-3 text-slate-300">
              <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span class="text-sm">Startup Co-founder & Tech Lead</span>
            </div>
            <div class="flex items-center gap-3 text-slate-300">
              <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span class="text-sm">Full-Stack Development Expert</span>
            </div>
          </div>
        </div>

        <NuxtLink
          to="/portfolio"
          class="professional-cta-button group"
        >
          <span class="relative z-10 flex items-center gap-2">
            View My Work
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
        </NuxtLink>
      </div>

      <!-- Skills Section -->
      <div class="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
        <div class="mb-8">
          <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2 professional-glow">
            Technical Expertise
          </h3>
          <div class="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
        </div>

        <!-- Skills Categories -->
        <div class="space-y-8 w-full">
          <!-- Backend & Frameworks -->
          <div class="skill-category">
            <h4 class="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
              <div class="w-3 h-3 bg-emerald-400 rounded-full"></div>
              Backend & Frameworks
            </h4>
            <div class="flex flex-wrap gap-3">
              <span v-for="tech in backendTech" :key="tech" class="skill-tag backend-tag">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Frontend & UI -->
          <div class="skill-category">
            <h4 class="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
              <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
              Frontend & UI
            </h4>
            <div class="flex flex-wrap gap-3">
              <span v-for="tech in frontendTech" :key="tech" class="skill-tag frontend-tag">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- DevOps & Tools -->
          <div class="skill-category">
            <h4 class="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
              <div class="w-3 h-3 bg-blue-400 rounded-full"></div>
              DevOps & Tools
            </h4>
            <div class="flex flex-wrap gap-3">
              <span v-for="tech in devopsTech" :key="tech" class="skill-tag devops-tag">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Leadership & Process -->
          <div class="skill-category">
            <h4 class="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
              <div class="w-3 h-3 bg-purple-400 rounded-full"></div>
              Leadership & Process
            </h4>
            <div class="flex flex-wrap gap-3">
              <span v-for="tech in leadershipTech" :key="tech" class="skill-tag leadership-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const backendTech = [
  "Ruby on Rails", "PostgreSQL", "MongoDB", "Redis", "GraphQL"
]

const frontendTech = [
  "Vue.js", "Nuxt.js", "React", "Next.js", "Tailwind CSS", "TypeScript"
]

const devopsTech = [
  "AWS", "Docker", "CI/CD", "GitHub Actions", "Heroku", "Vercel"
]

const leadershipTech = [
  "Agile/Scrum", "Team Leadership", "Code Review", "Mentoring", "Product Strategy"
]
</script>

<style scoped>
/* Background Grid Pattern */
.about-grid-pattern {
  background-image: 
    linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
  background-size: 80px 80px;
  width: 100%;
  height: 100%;
  animation: about-grid-drift 45s linear infinite;
}

@keyframes about-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(80px, 80px); }
}

/* Floating Elements */
.floating-element {
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, rgba(16, 185, 129, 0.3), rgba(6, 182, 212, 0.3));
  border-radius: 50%;
  animation: element-float 12s ease-in-out infinite;
}

.element-1 { 
  top: 20%; 
  right: 20%; 
  animation-delay: 0s; 
}

.element-2 { 
  bottom: 30%; 
  left: 15%; 
  animation-delay: 6s; 
}

@keyframes element-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-25px) rotate(180deg); opacity: 0.7; }
}

/* Professional Glow Effect */
.professional-glow {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

/* Professional CTA Button */
.professional-cta-button {
  @apply px-8 py-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 text-slate-200 font-semibold rounded-lg transition-all duration-300 relative overflow-hidden hover:border-slate-500 hover:text-white;
}

.professional-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

/* Skill Categories */
.skill-category {
  @apply bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-lg p-6;
}

/* Skill Tags */
.skill-tag {
  @apply px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border backdrop-blur-sm;
}

.backend-tag {
  @apply bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400;
}

.frontend-tag {
  @apply bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400;
}

.devops-tag {
  @apply bg-blue-500/10 text-blue-300 border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400;
}

.leadership-tag {
  @apply bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400;
}

.skill-tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .container {
    text-align: center;
  }
  
  .skill-category h4 {
    justify-content: center;
  }
}
</style>