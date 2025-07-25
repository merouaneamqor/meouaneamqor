<template>
  <section class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 relative overflow-hidden min-h-screen flex items-center justify-center">
    <!-- Professional background pattern -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="professional-grid-pattern"></div>
    </div>
    <!-- Refined floating elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="professional-element elem-1"></div>
      <div class="professional-element elem-2"></div>
      <div class="professional-element elem-3"></div>
    </div>
    
    <div class="container mx-auto px-6 lg:px-8 relative z-10 w-full">
      <!-- Professional section header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <div class="text-left">
            <h2 class="text-4xl lg:text-5xl font-bold text-white professional-glow">
              Core Competencies
            </h2>
            <p class="text-slate-400 text-sm">Leadership • Technology • Strategy</p>
          </div>
        </div>
        <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full mx-auto mb-6"></div>
        <p class="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Combining strategic leadership with deep technical expertise to drive organizational success and team excellence
        </p>
      </div>

      <!-- Professional Skills Grid -->
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- Executive Leadership (Priority 1) -->
          <div class="skill-category group">
            <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300">
              <div class="category-header px-6 py-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-b border-slate-700/50">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white">Executive Leadership</h3>
                    <p class="text-slate-400 text-sm">Strategic team management and organizational development</p>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <div class="space-y-4">
                  <div v-for="skill in leadershipSkills" :key="skill.name" class="skill-item group/skill">
                    <div class="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-300">
                      <div class="flex items-center gap-3">
                        <span class="text-lg">{{ skill.icon }}</span>
                        <div>
                          <span class="text-slate-200 font-medium">{{ skill.name }}</span>
                          <p class="text-slate-500 text-xs">{{ skill.description }}</p>
                        </div>
                      </div>
                      <div class="flex items-center gap-2">
                        <div class="w-16 h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <div 
                            class="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full transition-all duration-1000"
                            :style="{ width: `${skill.level}%` }"
                          ></div>
                        </div>
                        <span class="text-xs text-slate-400 font-medium w-8">{{ skill.level }}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Strategic Management (Priority 2) -->
          <div class="skill-category group">
            <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300">
              <div class="category-header px-6 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-slate-700/50">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white">Strategic Management</h3>
                    <p class="text-slate-400 text-sm">Process optimization and business strategy</p>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <div class="space-y-4">
                  <div v-for="skill in strategicSkills" :key="skill.name" class="skill-item group/skill">
                    <div class="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-300">
                      <div class="flex items-center gap-3">
                        <span class="text-lg">{{ skill.icon }}</span>
                        <div>
                          <span class="text-slate-200 font-medium">{{ skill.name }}</span>
                          <p class="text-slate-500 text-xs">{{ skill.description }}</p>
                        </div>
                      </div>
                      <div class="flex items-center gap-2">
                        <div class="w-16 h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <div 
                            class="h-full bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full transition-all duration-1000"
                            :style="{ width: `${skill.level}%` }"
                          ></div>
                        </div>
                        <span class="text-xs text-slate-400 font-medium w-8">{{ skill.level }}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Technical Architecture -->
          <div class="skill-category group">
            <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300">
              <div class="category-header px-6 py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-b border-slate-700/50">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white">Technical Architecture</h3>
                    <p class="text-slate-400 text-sm">System design and technology leadership</p>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <div class="space-y-4">
                  <div v-for="skill in technicalSkills" :key="skill.name" class="skill-item group/skill">
                    <div class="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-300">
                      <div class="flex items-center gap-3">
                        <span class="text-lg">{{ skill.icon }}</span>
                        <div>
                          <span class="text-slate-200 font-medium">{{ skill.name }}</span>
                          <p class="text-slate-500 text-xs">{{ skill.description }}</p>
                        </div>
                      </div>
                      <div class="flex items-center gap-2">
                        <div class="w-16 h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <div 
                            class="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-1000"
                            :style="{ width: `${skill.level}%` }"
                          ></div>
                        </div>
                        <span class="text-xs text-slate-400 font-medium w-8">{{ skill.level }}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Business Development -->
          <div class="skill-category group">
            <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300">
              <div class="category-header px-6 py-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-b border-slate-700/50">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white">Business Development</h3>
                    <p class="text-slate-400 text-sm">Growth strategy and market expansion</p>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <div class="space-y-4">
                  <div v-for="skill in businessSkills" :key="skill.name" class="skill-item group/skill">
                    <div class="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-300">
                      <div class="flex items-center gap-3">
                        <span class="text-lg">{{ skill.icon }}</span>
                        <div>
                          <span class="text-slate-200 font-medium">{{ skill.name }}</span>
                          <p class="text-slate-500 text-xs">{{ skill.description }}</p>
                        </div>
                      </div>
                      <div class="flex items-center gap-2">
                        <div class="w-16 h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <div 
                            class="h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full transition-all duration-1000"
                            :style="{ width: `${skill.level}%` }"
                          ></div>
                        </div>
                        <span class="text-xs text-slate-400 font-medium w-8">{{ skill.level }}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Professional Certifications -->
        <div class="mt-16 bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-white mb-4">Professional Certifications & Recognition</h3>
            <div class="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(cert, index) in certifications" :key="cert.name" class="text-center group">
              <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span class="text-2xl">{{ cert.icon }}</span>
              </div>
              <h4 class="text-lg font-semibold text-white mb-2">{{ cert.name }}</h4>
              <p class="text-slate-400 text-sm mb-2">{{ cert.issuer }}</p>
              <span class="inline-flex items-center px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                {{ cert.year }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Executive Leadership Skills (Priority 1)
const leadershipSkills = [
  { 
    name: "Team Leadership", 
    icon: "👥", 
    level: 95,
    description: "Managing cross-functional engineering teams"
  },
  { 
    name: "Agile/Scrum Mastery", 
    icon: "🏃", 
    level: 98,
    description: "Certified ScrumMaster® with proven track record"
  },
  { 
    name: "Mentoring & Coaching", 
    icon: "🎓", 
    level: 92,
    description: "Developing junior developers and leaders"
  },
  { 
    name: "Performance Management", 
    icon: "📊", 
    level: 88,
    description: "Goal setting and performance optimization"
  },
  { 
    name: "Conflict Resolution", 
    icon: "🤝", 
    level: 85,
    description: "Mediating technical and interpersonal conflicts"
  }
]

// Strategic Management Skills (Priority 2)
const strategicSkills = [
  { 
    name: "Project Management", 
    icon: "📋", 
    level: 92,
    description: "End-to-end project delivery and coordination"
  },
  { 
    name: "Product Strategy", 
    icon: "🎯", 
    level: 88,
    description: "Product roadmap and feature prioritization"
  },
  { 
    name: "Process Optimization", 
    icon: "⚡", 
    level: 90,
    description: "Streamlining workflows and reducing bottlenecks"
  },
  { 
    name: "Stakeholder Management", 
    icon: "🤝", 
    level: 87,
    description: "Cross-functional collaboration and alignment"
  },
  { 
    name: "Risk Management", 
    icon: "🛡️", 
    level: 83,
    description: "Identifying and mitigating project risks"
  }
]

// Technical Architecture Skills
const technicalSkills = [
  { 
    name: "System Architecture", 
    icon: "🏗️", 
    level: 90,
    description: "Designing scalable distributed systems"
  },
  { 
    name: "Cloud Infrastructure", 
    icon: "☁️", 
    level: 85,
    description: "AWS, Docker, and microservices architecture"
  },
  { 
    name: "Full-Stack Development", 
    icon: "💻", 
    level: 95,
    description: "Ruby on Rails, React, and modern web technologies"
  },
  { 
    name: "Database Design", 
    icon: "🗄️", 
    level: 88,
    description: "PostgreSQL, MongoDB, and data modeling"
  },
  { 
    name: "DevOps & CI/CD", 
    icon: "🔄", 
    level: 82,
    description: "Automated deployment and infrastructure"
  }
]

// Business Development Skills
const businessSkills = [
  { 
    name: "Market Analysis", 
    icon: "📈", 
    level: 80,
    description: "Understanding market trends and opportunities"
  },
  { 
    name: "Client Relations", 
    icon: "🤝", 
    level: 85,
    description: "Building and maintaining client relationships"
  },
  { 
    name: "Budget Management", 
    icon: "💰", 
    level: 78,
    description: "Resource allocation and cost optimization"
  },
  { 
    name: "Innovation Strategy", 
    icon: "💡", 
    level: 83,
    description: "Driving technological innovation and R&D"
  },
  { 
    name: "Partnership Development", 
    icon: "🔗", 
    level: 75,
    description: "Strategic alliances and business partnerships"
  }
]

// Professional Certifications
const certifications = [
  {
    name: "Certified ScrumMaster®",
    issuer: "Scrum Alliance",
    icon: "🏆",
    year: "2023"
  },
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    icon: "☁️",
    year: "2023"
  },
  {
    name: "Master's in Computer Science",
    issuer: "SUPEMIR",
    icon: "🎓",
    year: "2021"
  }
]
</script>

<style scoped>
/* Professional theme */
.professional-glow {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

/* Professional grid pattern */
.professional-grid-pattern {
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.03) 0%, transparent 50%),
    linear-gradient(rgba(148, 163, 184, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.02) 1px, transparent 1px);
  background-size: 400px 400px, 300px 300px, 40px 40px, 40px 40px;
  width: 100%;
  height: 100%;
  animation: professional-drift 180s linear infinite;
}

@keyframes professional-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(40px, 40px); }
}

/* Professional floating elements */
.professional-element {
  position: absolute;
  width: 6px;
  height: 6px;
  background: linear-gradient(45deg, #10b981, #06b6d4);
  border-radius: 50%;
  animation: professional-float 35s ease-in-out infinite;
  opacity: 0.25;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
}

.elem-1 { top: 20%; left: 15%; animation-delay: 0s; }
.elem-2 { bottom: 30%; right: 20%; animation-delay: 12s; }
.elem-3 { top: 60%; right: 15%; animation-delay: 24s; }

@keyframes professional-float {
  0%, 100% { 
    transform: translate(0px, 0px) rotate(0deg); 
    opacity: 0.25; 
  }
  33% { 
    transform: translate(-20px, 15px) rotate(120deg); 
    opacity: 0.4; 
  }
  66% { 
    transform: translate(15px, -25px) rotate(240deg); 
    opacity: 0.3; 
  }
}

/* Skill categories */
.skill-category {
  transition: transform 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
}

/* Skill items */
.skill-item {
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateX(5px);
}

/* Progress bar animations */
.skill-item:hover .h-full {
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
}

/* Responsive design */
@media (max-width: 1024px) {
  .grid.lg\\:grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .flex.items-center.justify-between {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .w-16.h-2 {
    width: 100%;
  }
}
</style>