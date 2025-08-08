<template>
  <section class="py-12 sm:py-16 md:py-24 lg:py-32 bg-transparent relative min-h-screen flex items-center justify-center">
        
    <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full max-w-4xl">
      <!-- iOS-style section header -->
      <div class="text-center mb-16 sm:mb-20 md:mb-24">
        <div class="mb-8">
          <div class="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-4 tracking-tight leading-tight">
            Expériences Professionnelles
          </h2>
          <p class="text-lg sm:text-xl text-slate-700 font-light">Encadrement d’équipes • Livraison continue • Impact produit</p>
        </div>
      </div>
      
      <!-- iOS-style Experience Timeline -->
      <div class="space-y-6 sm:space-y-10 md:space-y-16">
        <div 
          v-for="(experience, index) in executiveExperiences"
          :key="index"
          class="opacity-0 translate-y-4 animate-fade-in-up group"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- iOS Card -->
          <div class="bg-white/70 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-xl border border-slate-200 hover:bg-white/80 hover:-translate-y-1 transition-all duration-300 ease-out">
            <!-- Header -->
            <div class="mb-6 sm:mb-8">
              <div class="flex items-start justify-between mb-4">
                <div class="flex-1">
                  <h3 class="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 mb-2 leading-tight">
                    {{ experience.role }}
                  </h3>
                  <div class="flex flex-wrap items-center gap-4 text-slate-700 text-base sm:text-lg">
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span class="font-medium">{{ experience.company }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{{ experience.location }}</span>
                    </div>
                  </div>
                </div>
                <div v-if="experience.teamSize" class="ml-4">
                  <div class="bg-slate-100 rounded-full px-4 py-2 border border-slate-200">
                    <span class="text-slate-700 text-sm font-medium">{{ experience.teamSize }} team</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2 text-slate-600 text-sm sm:text-base">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5"/>
                </svg>
                <span class="font-medium">{{ experience.startDate }} – {{ experience.endDate }}</span>
              </div>
            </div>
            
            <!-- Content Grid -->
              <div class="grid md:grid-cols-2 gap-6 md:gap-10">
              <!-- Leadership Impact -->
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-8 h-8 bg-green-50 rounded-xl flex items-center justify-center">
                    <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span class="text-slate-900 font-semibold text-lg">Leadership Impact</span>
                </div>
                <ul class="space-y-3">
                  <li v-for="(achievement, achIndex) in experience.achievements" :key="achIndex" class="flex items-start gap-3 text-slate-700 leading-relaxed">
                    <div class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>{{ achievement }}</span>
                  </li>
                </ul>
              </div>
              
              <!-- Technical Excellence -->
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center">
                    <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
                    </svg>
                  </div>
                  <span class="text-slate-900 font-semibold text-lg">Technical Excellence</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(skill, skillIndex) in experience.skills"
                    :key="skillIndex"
                    class="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200 hover:bg-slate-200 transition-colors"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
            
            <!-- Key metrics -->
            <div v-if="experience.metrics" class="mt-8 pt-8 border-t border-slate-200">
              <div class="grid grid-cols-3 gap-6">
                <div v-for="(metric, metricIndex) in experience.metrics" :key="metricIndex" class="text-center">
                  <div class="text-2xl sm:text-3xl font-semibold text-slate-900 mb-1">{{ metric.value }}</div>
                  <div class="text-sm text-slate-600 font-medium">{{ metric.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- iOS-style Challenges Section -->
      <div class="mt-20 sm:mt-24 md:mt-32">
        <div class="text-center mb-12 sm:mb-16">
          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg class="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 7.478a12.06 12.06 0 004.5 0m-3.75 7.478V21a2.25 2.25 0 003.75 0V8.197a2.25 2.25 0 00-1.5-2.122L12 5.25a2.25 2.25 0 00-3 2.122v8.197a2.25 2.25 0 001.5 2.122z"/>
            </svg>
          </div>
          <h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Challenges & Lessons</h3>
          <p class="text-lg text-gray-600 font-light">Learning through experience</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div v-for="(lesson, index) in challengesLearned" :key="lesson.title" class="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{{ lesson.title }}</h4>
                <p class="text-gray-600 mb-4 leading-relaxed">{{ lesson.challenge }}</p>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75"/>
                    </svg>
                  </div>
                  <div>
                    <span class="text-sm font-medium text-gray-500 uppercase tracking-wide">Solution</span>
                    <p class="text-green-600 font-medium mt-1">{{ lesson.solution }}</p>
                  </div>
                </div>
              </div>
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
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}
</style>