<template>
  <section class="py-12 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700/50 relative overflow-hidden">
    <!-- Subtle Background Pattern -->
    <div class="absolute inset-0 opacity-2">
      <div class="experience-grid-pattern"></div>
    </div>
    
    <!-- Timeline Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="timeline-dot dot-1" style="opacity:0.2;"></div>
      <div class="timeline-dot dot-2" style="opacity:0.2;"></div>
      <div class="timeline-dot dot-3" style="opacity:0.2;"></div>
    </div>

    <div class="container mx-auto px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4 professional-glow">
          Professional Journey
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full mx-auto mb-4"></div>
        <p class="text-slate-300 text-lg max-w-2xl mx-auto">
          My path from developer to tech lead, delivering impact across multiple industries.
        </p>
      </div>

      <!-- Timeline Container -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Vertical Timeline Line -->
        <div class="timeline-line absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-400 opacity-30"></div>
        
        <!-- Experience Cards -->
        <div class="space-y-8">
          <div 
            v-for="(experience, index) in sortedExperiences"
            :key="index"
            class="relative flex items-start experience-item"
          >
            <!-- Timeline Node -->
            <div class="timeline-node relative z-10 flex-shrink-0">
              <div class="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-600 rounded-full flex items-center justify-center">
                <div class="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <div class="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              <!-- Connection Line to Card -->
              <div class="connection-line absolute top-8 w-8 h-0.5 bg-gradient-to-r from-emerald-400/50 to-transparent"></div>
            </div>

            <!-- Experience Card -->
            <div class="flex-1 experience-card group">
              <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 transition-all duration-300 hover:border-slate-500/50 hover:bg-slate-800/60">
                
                <!-- Header -->
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div class="mb-4 lg:mb-0">
                    <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {{ experience.role }}
                    </h3>
                    <div class="flex items-center gap-3 text-slate-300">
                      <span class="font-semibold">{{ experience.company }}</span>
                      <div class="w-1 h-1 bg-slate-500 rounded-full"></div>
                      <span class="text-sm">{{ experience.location }}</span>
                    </div>
                  </div>
                  
                  <!-- Date Badge -->
                  <div class="inline-flex items-center px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-full text-sm font-medium text-slate-300">
                    <svg class="w-4 h-4 mr-2 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {{ experience.startDate }} – {{ experience.endDate }}
                  </div>
                </div>

                <!-- Achievements -->
                <div class="mb-6">
                  <h4 class="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
                    <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Key Achievements
                  </h4>
                  <ul class="space-y-3">
                    <li 
                      v-for="(achievement, achIndex) in experience.achievements" 
                      :key="achIndex"
                      class="flex items-start gap-3 text-slate-300 leading-relaxed"
                    >
                      <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{{ achievement }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Skills -->
                <div>
                  <h4 class="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                    Technologies & Skills
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="(skill, skillIndex) in experience.skills"
                      :key="skillIndex"
                      class="skill-tag"
                    >
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Career Stats -->
      <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div class="stat-card">
          <div class="stat-number">6+</div>
          <div class="stat-label">Years Experience</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">15+</div>
          <div class="stat-label">Projects Delivered</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">3</div>
          <div class="stat-label">Leadership Roles</div>
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
/* Background Grid Pattern */
.experience-grid-pattern {
  background-image: 
    linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
  background-size: 120px 120px;
  width: 100%;
  height: 100%;
  animation: experience-grid-drift 80s linear infinite;
}

@keyframes experience-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(120px, 120px); }
}

/* Timeline Floating Dots */
.timeline-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, rgba(16, 185, 129, 0.3), rgba(6, 182, 212, 0.3));
  border-radius: 50%;
  animation: timeline-float 20s ease-in-out infinite;
}

.dot-1 { top: 20%; right: 20%; animation-delay: 0s; }
.dot-2 { top: 50%; left: 10%; animation-delay: 7s; }
.dot-3 { bottom: 30%; right: 15%; animation-delay: 14s; }

@keyframes timeline-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-40px) rotate(180deg); opacity: 0.7; }
}

/* Professional Glow Effect */
.professional-glow {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

/* Timeline Line */
.timeline-line {
  left: 2rem;
}

/* Timeline Node */
.timeline-node .connection-line {
  left: 4rem;
}

/* Experience Items */
.experience-item {
  gap: 2rem;
}

/* Experience Cards */
.experience-card:hover .bg-slate-800\/40 {
  transform: translateX(8px);
}

/* Skill Tags */
.skill-tag {
  padding: 0.25rem 0.75rem;
  background-color: rgba(51, 65, 85, 0.5);
  color: rgb(203, 213, 225);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s;
}

.skill-tag:hover {
  background-color: rgba(71, 85, 105, 0.5);
  border-color: rgb(100, 116, 139);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Career Stats */
.stat-card {
  background-color: rgba(30, 41, 59, 0.3);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(71, 85, 105, 0.2);
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s;
}

.stat-card:hover {
  border-color: rgba(100, 116, 139, 0.5);
  background-color: rgba(30, 41, 59, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.stat-number {
  font-size: 1.875rem;
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
  .timeline-line {
    left: 1rem;
  }
  
  .timeline-node .connection-line {
    left: 3rem;
  }
  
  .experience-item {
    gap: 1rem;
  }
  
  .timeline-node .w-16 {
    width: 3rem;
    height: 3rem;
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
}
</style>