<template>
  <section class="py-12 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700/50 relative overflow-hidden">
    <div class="container mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
      <div class="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
        <img src="https://www.agile42.com/za/wp-content/uploads/sites/23/2024/02/CSM-1.png" alt="" srcset="">
      </div>
      <!-- Left: Manager Info -->
      <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h2 class="text-xl lg:text-2xl font-semibold mb-4 text-emerald-400">Engineering Manager & Certified ScrumMaster®</h2>
        <p class="text-lg text-slate-300 mb-6 max-w-xl">
          Empowering teams to deliver world-class products through vision, empathy, and operational excellence. Passionate about building high-performing cultures and driving digital transformation.
        </p>
        <ul class="mb-8 w-full max-w-md space-y-3">
          <li class="flex items-center gap-3 text-slate-300 text-base">
            <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Led and mentored cross-functional teams of 10+ engineers
          </li>
          <li class="flex items-center gap-3 text-slate-300 text-base">
            <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Scaled products to 1M+ users in healthcare and tech
          </li>
          <li class="flex items-center gap-3 text-slate-300 text-base">
            <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Agile & Scrum champion, fostering continuous improvement
          </li>
          <li class="flex items-center gap-3 text-slate-300 text-base">
            <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Advocate for diversity, inclusion, and team growth
          </li>
        </ul>
        <NuxtLink to="/portfolio" class="inline-block px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg shadow hover:bg-emerald-700 transition">View My Work</NuxtLink>
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

/* Scrum Master SVG Styling */
.scrum-illustration-container {
  position: relative;
  padding: 2rem;
}

.scrum-master-svg {
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
  animation: gentle-float 6s ease-in-out infinite;
}

@keyframes gentle-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
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

/* Mobile responsiveness for SVG */
@media (max-width: 768px) {
  .scrum-master-svg {
    width: 300px;
    height: 300px;
  }
}
</style>