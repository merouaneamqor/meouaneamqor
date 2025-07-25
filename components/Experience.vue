<template>
  <section class="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/50 relative overflow-hidden min-h-screen flex items-center justify-center">
    <!-- Professional background pattern -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="executive-grid-pattern"></div>
    </div>
    <!-- Subtle floating elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="leadership-element element-1"></div>
      <div class="leadership-element element-2"></div>
      <div class="leadership-element element-3"></div>
    </div>
    
    <div class="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 w-full">
      <!-- Professional section header -->
      <div class="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <div class="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <div class="text-left">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white professional-glow">
              Leadership Journey
            </h2>
            <p class="text-slate-400 text-xs sm:text-sm">Building teams • Driving results • Creating impact</p>
          </div>
        </div>
        <div class="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full mx-auto"></div>
      </div>

      <!-- Executive Experience Timeline -->
      <div class="max-w-5xl mx-auto">
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-3 sm:left-4 md:left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-400 opacity-30"></div>
          
          <div class="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
            <div 
              v-for="(experience, index) in executiveExperiences"
              :key="index"
              class="experience-card group relative"
            >
              <!-- Timeline dot -->
              <div class="absolute left-2 sm:left-3 md:left-5 lg:left-6.5 top-4 sm:top-5 md:top-6 lg:top-7 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full border border-slate-900 sm:border-2 md:border-4 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              
              <!-- Experience content -->
              <div class="ml-8 sm:ml-10 md:ml-14 lg:ml-20 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300">
                <!-- Header -->
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 sm:mb-4 md:mb-6">
                  <div>
                    <h3 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-emerald-300 transition-colors">
                      {{ experience.role }}
                    </h3>
                    <div class="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-4 text-slate-400 text-xs sm:text-sm">
                      <div class="flex items-center gap-1 sm:gap-2">
                        <svg class="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h3v3H7V7z"/>
                        </svg>
                        <span class="font-medium text-xs sm:text-sm">{{ experience.company }}</span>
                      </div>
                      <div class="flex items-center gap-1 sm:gap-2">
                        <svg class="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116 8a8.001 8.001 0 01-1.343 8.657z"/>
                        </svg>
                        <span class="text-xs sm:text-sm">{{ experience.location }}</span>
                      </div>
                      <div class="flex items-center gap-1 sm:gap-2">
                        <svg class="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <span class="font-medium text-xs sm:text-sm">{{ experience.startDate }} – {{ experience.endDate }}</span>
                      </div>
                    </div>
                  </div>
                  <div v-if="experience.teamSize" class="lg:text-right mt-2 sm:mt-3 lg:mt-0">
                    <div class="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 bg-slate-700/50 rounded-full text-xs">
                      <svg class="w-3 h-3 mr-1 sm:mr-1.5 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                      <span class="text-slate-300">{{ experience.teamSize }} team</span>
                    </div>
                  </div>
                </div>
                
                <div class="grid lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                  <!-- Leadership Impact -->
                  <div>
                    <div class="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                      <svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span class="text-white font-semibold text-xs sm:text-sm md:text-base">Leadership Impact:</span>
                    </div>
                    <ul class="space-y-1.5 sm:space-y-2">
                      <li v-for="(achievement, achIndex) in experience.achievements" :key="achIndex" class="flex items-start gap-1.5 sm:gap-2 text-slate-300 text-xs sm:text-sm">
                        <span class="text-emerald-400 mt-1 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                        <span class="leading-relaxed">{{ achievement }}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <!-- Technical Excellence -->
                  <div>
                    <div class="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                      <svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                      </svg>
                      <span class="text-white font-semibold text-xs sm:text-sm md:text-base">Technical Excellence:</span>
                    </div>
                    <div class="flex flex-wrap gap-1 sm:gap-1.5">
                      <span 
                        v-for="(skill, skillIndex) in experience.skills"
                        :key="skillIndex"
                        class="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-slate-700/50 border border-slate-600/50 text-xs text-slate-300 rounded hover:bg-slate-600/50 hover:border-slate-500/50 transition-colors"
                      >
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Key metrics if available -->
                <div v-if="experience.metrics" class="mt-3 sm:mt-4 md:mt-6 pt-3 sm:pt-4 border-t border-slate-700/50">
                  <div class="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    <div v-for="(metric, metricIndex) in experience.metrics" :key="metricIndex" class="text-center">
                      <div class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-emerald-400 mb-0.5 sm:mb-1">{{ metric.value }}</div>
                      <div class="text-xs text-slate-400">{{ metric.label }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Challenges & Lessons Learned -->
      <div class="mt-12 sm:mt-16 md:mt-20 bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
        <div class="text-center mb-6 sm:mb-8">
          <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Challenges & Lessons Learned</h3>
          <div class="w-12 sm:w-16 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div v-for="(lesson, index) in challengesLearned" :key="lesson.title" class="bg-slate-800/30 border border-slate-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-orange-400/30 transition-all duration-300">
            <div class="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div class="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                <svg class="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 14.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2">{{ lesson.title }}</h4>
                <p class="text-slate-300 mb-2 sm:mb-3 leading-relaxed text-xs sm:text-sm">{{ lesson.challenge }}</p>
                <div class="text-xs sm:text-sm text-emerald-400 font-medium">
                  <span class="flex items-start gap-1 sm:gap-2">
                    <svg class="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                    <span class="leading-relaxed">Solution: {{ lesson.solution }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Executive summary -->
      <div class="mt-8 sm:mt-10 md:mt-12 bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
        <div class="text-center mb-6 sm:mb-8">
          <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Executive Summary</h3>
          <div class="w-12 sm:w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div v-for="(stat, index) in executiveStats" :key="stat.label" class="text-center group">
            <div class="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-400 mb-1 sm:mb-2">
              {{ stat.value }}
            </div>
            <div class="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">
              {{ stat.label }}
            </div>
            <div class="text-xs text-slate-500">
              {{ stat.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ExecutiveExperience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  teamSize?: string;
  achievements: string[];
  skills: string[];
  metrics?: { value: string; label: string }[];
}

const executiveExperiences = ref<ExecutiveExperience[]>([
  {
    role: 'Tech Lead & Engineering Manager',
    company: 'DabaDoc',
    location: 'Casablanca, Morocco',
    startDate: 'Jan 2024',
    endDate: 'Present',
    teamSize: '15+',
    achievements: [
      'Leading cross-functional engineering teams across Africa and Middle East healthcare markets',
      'Architected microservices infrastructure reducing system latency by 40% and improving user satisfaction',
      'Implemented Agile/Scrum methodologies resulting in 30% faster delivery cycles',
      'Mentored junior developers and established code review processes that improved code quality by 50%',
      'Spearheaded cloud migration to AWS, reducing operational costs by 25% while improving scalability'
    ],
    skills: ['Team Leadership', 'AWS Architecture', 'Agile/Scrum', 'Performance Optimization', 'Microservices'],
    metrics: [
      { value: '40%', label: 'Performance Gain' },
      { value: '25%', label: 'Cost Reduction' },
      { value: '30%', label: 'Faster Delivery' }
    ]
  },
  {
    role: 'Senior Full-stack Developer',
    company: 'DabaDoc',
    location: 'Casablanca, Morocco',
    startDate: 'Apr 2022',
    endDate: 'Dec 2023',
    teamSize: '8',
    achievements: [
      'Led development of patient-doctor matching platform serving 100K+ users across multiple countries',
      'Collaborated with product teams to translate business requirements into scalable technical solutions',
      'Designed and implemented RESTful APIs handling 1M+ requests daily with 99.9% uptime',
      'Mentored 3 junior developers and established best practices for code quality and testing'
    ],
    skills: ['Ruby on Rails', 'React', 'MongoDB', 'API Design', 'Mentoring', 'Product Development'],
    metrics: [
      { value: '400K+', label: 'Active Users monthly' },
      { value: '99.9%', label: 'System Uptime' },
      { value: '1.2M+', label: 'Daily API Calls' }
    ]
  },
  {
    role: 'Software Engineer & Team Contributor',
    company: 'Majorel',
    location: 'Casablanca, Morocco',
    startDate: 'May 2020',
    endDate: 'Apr 2022',
    teamSize: '12',
    achievements: [
      'Contributed to multi-client projects serving international markets with diverse technical requirements',
      'Developed responsive web applications using modern JavaScript frameworks and backend technologies',
      'Participated in agile development processes and cross-team collaboration initiatives',
      'Gained expertise in client communication and project management in international context'
    ],
    skills: ['Full-stack Development', 'JavaScript', 'Agile Methodologies', 'Client Relations', 'Project Management']
  },
  {
    role: 'Junior Developer',
    company: 'Majorel (Solocal Partnership)',
    location: 'Casablanca, Morocco',
    startDate: 'Mar 2018',
    endDate: 'Apr 2020',
    teamSize: '6',
    achievements: [
      'Developed websites for French clients while working remotely, gaining international project experience',
      'Learned foundational web development technologies and professional development practices',
      'Built communication skills working with distributed teams across different time zones',
      'Established strong foundation in software development lifecycle and client requirements analysis'
    ],
    skills: ['Web Development', 'Remote Collaboration', 'HTML/CSS/JavaScript', 'PHP', 'Client Communication']
  }
])

const challengesLearned = [
  {
    title: 'Scaling Database Performance',
    challenge: 'DabaDoc\'s user base grew 300% in 6 months, causing database timeouts and affecting user experience. Initial attempts to optimize queries weren\'t sufficient.',
    solution: 'Implemented database sharding and caching strategies, reducing query times by 75% and handling the increased load effectively.'
  },
  {
    title: 'Remote Team Communication',
    challenge: 'Managing distributed teams across different time zones led to misaligned priorities and delayed deliveries. Some projects fell behind schedule by 2-3 weeks.',
    solution: 'Established clear communication protocols, introduced daily async standups, and created shared documentation standards.'
  },
  {
    title: 'Legacy Code Refactoring',
    challenge: 'Inherited a monolithic codebase at Majorel with 60% test coverage and frequent production bugs. Technical debt was slowing down feature development.',
    solution: 'Gradually extracted microservices, improved test coverage to 85%, and established code review practices that reduced bugs by 50%.'
  },
  {
    title: 'Team Retention During Growth',
    challenge: 'Lost 3 senior engineers within 6 months due to burnout and unclear career progression. Team morale and productivity dropped significantly.',
    solution: 'Implemented regular 1-on-1s, created clear career paths, and introduced rotation opportunities. Retention improved to 90% over the next year.'
  }
]

const executiveStats = [
  { 
    value: '6+', 
    label: 'Years Leadership', 
    description: 'Managing technical teams' 
  },
  { 
    value: '15+', 
    label: 'Engineers Led', 
    description: 'Across multiple projects' 
  },
  { 
    value: '$3M+', 
    label: 'Project Value', 
    description: 'Healthcare & E-commerce' 
  },
  { 
    value: '5', 
    label: 'Countries', 
    description: 'International reach' 
  }
]
</script>

<style scoped>
/* Professional executive theme */
.professional-glow {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

/* Executive grid pattern */
.executive-grid-pattern {
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.05) 0%, transparent 50%),
    linear-gradient(rgba(148, 163, 184, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.02) 1px, transparent 1px);
  background-size: 300px 300px, 200px 200px, 60px 60px, 60px 60px;
  width: 100%;
  height: 100%;
  animation: executive-grid-float 120s linear infinite;
}

@keyframes executive-grid-float {
  0% { transform: translate(0, 0); }
  100% { transform: translate(60px, 60px); }
}

/* Leadership floating elements */
.leadership-element {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, #10b981, #06b6d4);
  border-radius: 50%;
  animation: leadership-float 40s ease-in-out infinite;
  opacity: 0.3;
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
}

.element-1 { top: 15%; left: 10%; animation-delay: 0s; }
.element-2 { bottom: 25%; right: 15%; animation-delay: 15s; }
.element-3 { top: 60%; right: 10%; animation-delay: 30s; }

@keyframes leadership-float {
  0%, 100% { 
    transform: translate(0px, 0px) rotate(0deg); 
    opacity: 0.3; 
  }
  25% { 
    transform: translate(-30px, 20px) rotate(90deg); 
    opacity: 0.6; 
  }
  50% { 
    transform: translate(20px, -40px) rotate(180deg); 
    opacity: 0.4; 
  }
  75% { 
    transform: translate(30px, 30px) rotate(270deg); 
    opacity: 0.5; 
  }
}

/* Experience cards */
.experience-card {
  opacity: 0;
  transform: translateX(-30px);
  animation: slideInLeft 0.6s ease-out forwards;
}

.experience-card:nth-child(1) { animation-delay: 0.1s; }
.experience-card:nth-child(2) { animation-delay: 0.3s; }
.experience-card:nth-child(3) { animation-delay: 0.5s; }
.experience-card:nth-child(4) { animation-delay: 0.7s; }

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive design */
@media (max-width: 1024px) {
  .ml-20 {
    margin-left: 3.5rem;
  }
}

@media (max-width: 768px) {
  .absolute.left-6 {
    left: 0.75rem;
  }
  
  .ml-20 {
    margin-left: 2.5rem;
  }
}

@media (max-width: 640px) {
  .absolute.left-4 {
    left: 0.75rem;
  }
  
  .ml-20 {
    margin-left: 2rem;
  }

  .grid.lg\\:grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>