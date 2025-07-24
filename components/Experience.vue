<template>
  <section class="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700/50 relative overflow-hidden">
    <!-- Enhanced background pattern -->
    <div class="absolute inset-0 opacity-3">
      <div class="experience-grid-pattern"></div>
    </div>
    
    <!-- Enhanced floating elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="timeline-dot dot-1"></div>
      <div class="timeline-dot dot-2"></div>
      <div class="timeline-dot dot-3"></div>
      <div class="timeline-dot dot-4"></div>
    </div>

    <div class="container mx-auto px-6 lg:px-8 relative z-10">
      <!-- Enhanced section header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 professional-glow relative inline-block">
          <span class="relative z-10">Professional Journey</span>
          <span class="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent opacity-20">Professional Journey</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full mx-auto mb-6"></div>
        <p class="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          My path from developer to tech lead, delivering impact across multiple industries.
        </p>
      </div>

      <!-- Enhanced timeline container -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Enhanced vertical timeline line -->
        <div class="timeline-line absolute top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400/30 via-cyan-400/30 to-blue-400/30 opacity-50 rounded-full"></div>
        
        <!-- Experience cards with improved design -->
        <div class="space-y-12">
          <div 
            v-for="(experience, index) in sortedExperiences"
            :key="index"
            class="relative flex items-start experience-item group"
          >
            <!-- Enhanced timeline node -->
            <div class="timeline-node relative z-10 flex-shrink-0">
              <div class="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-600 rounded-full flex items-center justify-center shadow-xl">
                <div class="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <div class="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              <!-- Enhanced connection line to card -->
              <div class="connection-line absolute top-10 w-12 h-1 bg-gradient-to-r from-emerald-400/50 to-transparent"></div>
            </div>

            <!-- Enhanced experience card -->
            <div class="flex-1 experience-card">
              <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 transition-all duration-500 hover:border-slate-500/50 hover:bg-slate-800/60 shadow-xl hover:shadow-2xl ml-8">
                
                <!-- Enhanced header -->
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 pb-6 border-b border-slate-700/30">
                  <div class="mb-4 lg:mb-0">
                    <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                      {{ experience.role }}
                    </h3>
                    <div class="flex items-center gap-3 text-slate-300">
                      <span class="font-semibold text-lg">{{ experience.company }}</span>
                      <div class="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                      <span class="text-base">{{ experience.location }}</span>
                    </div>
                  </div>
                  
                  <!-- Enhanced date badge -->
                  <div class="inline-flex items-center px-5 py-2.5 bg-slate-700/50 border border-slate-600/50 rounded-full text-sm font-medium text-slate-300">
                    <svg class="w-4 h-4 mr-2 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {{ experience.startDate }} – {{ experience.endDate }}
                  </div>
                </div>

                <!-- Enhanced achievements section -->
                <div class="mb-8">
                  <h4 class="text-lg font-semibold text-slate-200 mb-5 flex items-center gap-2.5">
                    <div class="w-2.5 h-2.5 bg-cyan-400 rounded-full"></div>
                    Key Achievements
                  </h4>
                  <ul class="space-y-4">
                    <li 
                      v-for="(achievement, achIndex) in experience.achievements" 
                      :key="achIndex"
                      class="flex items-start gap-4 text-slate-300 leading-relaxed group/achievement"
                    >
                      <div class="w-2 h-2 bg-emerald-400 rounded-full mt-2.5 flex-shrink-0 group-hover/achievement:scale-125 transition-transform duration-300"></div>
                      <span>{{ achievement }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Enhanced skills section -->
                <div>
                  <h4 class="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                    Technologies & Skills
                  </h4>
                  <div class="flex flex-wrap gap-3">
                    <span 
                      v-for="(skill, skillIndex) in experience.skills"
                      :key="skillIndex"
                      class="skill-tag group/skill"
                    >
                      {{ skill }}
                      <span class="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced career stats -->
      <div class="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div class="stat-card group/stat">
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-2xl p-8 text-center transition-all duration-500 hover:border-slate-500/50 hover:bg-slate-800/50 shadow-lg hover:shadow-xl">
            <div class="stat-number mb-3">6+</div>
            <div class="stat-label">Years Experience</div>
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        <div class="stat-card group/stat">
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-2xl p-8 text-center transition-all duration-500 hover:border-slate-500/50 hover:bg-slate-800/50 shadow-lg hover:shadow-xl">
            <div class="stat-number mb-3">15+</div>
            <div class="stat-label">Projects Delivered</div>
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        <div class="stat-card group/stat">
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-2xl p-8 text-center transition-all duration-500 hover:border-slate-500/50 hover:bg-slate-800/50 shadow-lg hover:shadow-xl">
            <div class="stat-number mb-3">3</div>
            <div class="stat-label">Leadership Roles</div>
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  skills: string[];
}

const experiences = ref<Experience[]>([
  {
    role: 'Tech Lead',
    company: 'DabaDoc',
    location: 'Casablanca, Morocco',
    startDate: 'Jan 2024',
    endDate: 'Present',
    achievements: [
      'Led a team of engineers in developing innovative healthcare web and mobile applications across Africa and the Middle East.',
      'Successfully reduced page load times by 40%, improving site performance and user satisfaction.',
      'Introduced Agile methodologies and Scrum practices, enhancing team collaboration and project delivery speed.',
      'Spearheaded cloud infrastructure migration to AWS, reducing operational costs by 15%.'
    ],
    skills: ['Team Leadership', 'Healthcare Tech', 'Agile & Scrum', 'AWS', 'Performance Optimization']
  },
  {
    role: 'Full-stack Developer',
    company: 'DabaDoc',
    location: 'Casablanca, Morocco',
    startDate: 'Apr 2022',
    endDate: 'Dec 2023',
    achievements: [
      'Collaborated with product and design teams to develop new features, improving user engagement by 25%.',
      'Utilized Ruby on Rails, MongoDB, AngularJS, and Tailwind to build responsive web applications.',
      'Implemented cloud-based deployments on AWS and Heroku, ensuring seamless scalability and uptime.'
    ],
    skills: ['Ruby on Rails', 'MongoDB', 'AngularJS', 'Tailwind CSS', 'AWS', 'Heroku']
  },
  {
    role: 'Software Engineer',
    company: 'Majorel',
    location: 'Casablanca, Morocco',
    startDate: 'May 2020',
    endDate: 'Apr 2022',
    achievements: [
      'Worked on both front-end and back-end development for various clients, delivering comprehensive web solutions.',
      'Collaborated with cross-functional teams to implement scalable and efficient systems, ensuring seamless user experiences.'
    ],
    skills: ['Full-stack Development', 'Cross-functional Collaboration', 'Scalable Systems']
  },
  {
    role: 'Full-stack Developer',
    company: 'Majorel',
    location: 'Casablanca, Morocco',
    startDate: 'Mar 2018',
    endDate: 'Apr 2020',
    achievements: [
      "Developed websites for Solocal's clients from Morocco while Solocal was based in France.",
      'Gained valuable experience in remote collaboration and international project management.'
    ],
    skills: ['Web Development', 'Remote Collaboration', 'International Projects']
  }
])

const sortedExperiences = computed(() => {
  return [...experiences.value].sort((a, b) => {
    const dateA = new Date(a.startDate === 'Present' ? new Date() : a.startDate)
    const dateB = new Date(b.startDate === 'Present' ? new Date() : b.startDate)
    return dateB.getTime() - dateA.getTime()
  })
})
</script>

<style scoped>
/* Enhanced background grid pattern */
.experience-grid-pattern {
  background-image: 
    linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
  background-size: 140px 140px;
  width: 100%;
  height: 100%;
  animation: experience-grid-drift 100s linear infinite;
}

@keyframes experience-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(140px, 140px); }
}

/* Enhanced timeline floating dots */
.timeline-dot {
  position: absolute;
  width: 6px;
  height: 6px;
  background: linear-gradient(45deg, rgba(16, 185, 129, 0.5), rgba(6, 182, 212, 0.5));
  border-radius: 50%;
  animation: timeline-float 25s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
}

.dot-1 { top: 15%; right: 15%; animation-delay: 0s; }
.dot-2 { top: 40%; left: 10%; animation-delay: 7s; }
.dot-3 { bottom: 25%; right: 20%; animation-delay: 14s; }
.dot-4 { top: 70%; left: 20%; animation-delay: 21s; }

@keyframes timeline-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
  50% { transform: translateY(-50px) rotate(180deg); opacity: 0.8; }
}

/* Professional glow effect */
.professional-glow {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.15);
}

/* Enhanced timeline line */
.timeline-line {
  left: 2.5rem;
}

/* Enhanced timeline node */
.timeline-node .connection-line {
  left: 5rem;
}

/* Experience items */
.experience-item {
  gap: 2.5rem;
}

/* Enhanced experience cards */
.experience-card {
  position: relative;
  overflow: hidden;
}

.experience-card::before {
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

.experience-card:hover::before {
  transform: translateX(100%);
}

.experience-card:hover .bg-slate-800\/40 {
  transform: translateX(10px);
}

/* Enhanced skill tags */
.skill-tag {
  position: relative;
  padding: 0.35rem 1rem;
  background-color: rgba(51, 65, 85, 0.5);
  color: rgb(203, 213, 225);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s;
  overflow: hidden;
}

.skill-tag:hover {
  background-color: rgba(71, 85, 105, 0.7);
  border-color: rgb(100, 116, 139);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

/* Enhanced career stats */
.stat-card {
  position: relative;
  overflow: hidden;
}

.stat-card::before {
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

.stat-card:hover::before {
  transform: translateX(100%);
}

.stat-card:hover {
  transform: translateY(-6px);
}

.stat-number {
  font-size: 2.5rem;
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
  .timeline-line {
    left: 1.5rem;
  }
  
  .timeline-node .connection-line {
    left: 3.5rem;
  }
  
  .experience-item {
    gap: 1.5rem;
  }
  
  .timeline-node .w-20 {
    width: 3.5rem;
    height: 3.5rem;
  }
  
  .experience-card {
    margin-left: 0;
  }
}

@media (max-width: 768px) {
  .timeline-line {
    display: none;
  }
  
  .timeline-dot {
    display: none;
  }
  
  .experience-item {
    display: block;
  }
  
  .timeline-node {
    display: none;
  }
  
  .experience-card {
    margin-left: 0;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}
</style>