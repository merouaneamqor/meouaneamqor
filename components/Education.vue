<template>
  <section class="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/50 relative overflow-hidden min-h-screen flex items-center justify-center">
    <!-- Professional background pattern -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="academic-grid-pattern"></div>
    </div>
    <!-- Refined floating elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="academic-element elem-1"></div>
      <div class="academic-element elem-2"></div>
      <div class="academic-element elem-3"></div>
    </div>
    
    <div class="container mx-auto px-6 lg:px-8 relative z-10 w-full">
      <!-- Professional section header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14v6.25l-9-5.25v6.25L12 22l9-1.25v-6.25l-9 5.25V14z"/>
            </svg>
          </div>
          <div class="text-left">
            <h2 class="text-4xl lg:text-5xl font-bold text-white professional-glow">
              Academic Foundation
            </h2>
            <p class="text-slate-400 text-sm">Education • Leadership Development • Excellence</p>
          </div>
        </div>
        <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full mx-auto mb-6"></div>
        <p class="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Building leadership capabilities through rigorous academic training and hands-on organizational experience
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <!-- Education Card -->
        <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden mb-12 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300">
          <!-- Card Header -->
          <div class="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-b border-slate-700/50 p-8">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div class="flex items-center gap-6 mb-6 lg:mb-0">
                <!-- University Logo Placeholder -->
                <div class="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg class="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14v6.25l-9-5.25v6.25L12 22l9-1.25v-6.25l-9 5.25V14z"/>
                  </svg>
                </div>
                
                <div>
                  <h3 class="text-3xl font-bold text-white mb-2">Master in Computer Science</h3>
                  <div class="text-xl text-emerald-400 font-semibold mb-3">Engineering in Networks & Multimedia</div>
                  <div class="flex flex-wrap items-center gap-4 text-slate-300">
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h3v3H7V7z"/>
                      </svg>
                      <span class="font-medium">SUPEMIR</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span class="font-medium">2019 - 2021</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116 8a8.001 8.001 0 01-1.343 8.657z"/>
                      </svg>
                      <span>Casablanca, Morocco</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Graduation Status -->
              <div class="inline-flex items-center px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/50 rounded-full text-emerald-300 text-sm font-medium">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Graduated with Distinction
              </div>
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-8">
            <div class="grid lg:grid-cols-2 gap-8">
              <!-- Leadership Development -->
              <div>
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <h4 class="text-xl font-bold text-white">Leadership Positions</h4>
                </div>
                
                <div class="space-y-6">
                  <div class="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300">
                    <div class="flex items-start gap-4">
                      <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 class="text-lg font-semibold text-white mb-2">President, Junior Enterprise Club</h5>
                        <p class="text-slate-300 text-sm leading-relaxed">
                          Led entrepreneurial initiatives and business development projects within the academic community. 
                          Managed cross-functional teams and drove strategic partnerships with industry leaders.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300">
                    <div class="flex items-start gap-4">
                      <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 class="text-lg font-semibold text-white mb-2">President, Student Union (BDE)</h5>
                        <p class="text-slate-300 text-sm leading-relaxed">
                          Represented student interests and organized campus-wide events and activities. 
                          Developed stakeholder management and organizational skills that shaped my leadership approach.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Academic Excellence -->
              <div>
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <h4 class="text-xl font-bold text-white">Academic Excellence</h4>
                </div>

                <div class="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 mb-6">
                  <h5 class="text-lg font-semibold text-white mb-4">About SUPEMIR</h5>
                  <p class="text-slate-300 leading-relaxed text-sm mb-4">
                    SUPEMIR is a prestigious institution offering comprehensive degree programs in computer science, 
                    management, marketing, and entrepreneurship. The institution focuses on developing both 
                    <span class="text-emerald-400 font-medium">technical expertise</span> and 
                    <span class="text-cyan-400 font-medium">leadership skills</span> in its graduates.
                  </p>
                  <div class="inline-flex items-center px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-400/50 rounded-full text-blue-300 text-xs font-medium">
                    Equivalent to Public University Status
                  </div>
                </div>

                <!-- Core Competencies Developed -->
                <div class="space-y-3">
                  <h5 class="text-lg font-semibold text-white mb-3">Core Competencies Developed</h5>
                  <div class="flex items-center gap-3 py-2">
                    <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span class="text-slate-300 text-sm">Advanced Software Engineering</span>
                  </div>
                  <div class="flex items-center gap-3 py-2">
                    <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span class="text-slate-300 text-sm">Network Architecture & Security</span>
                  </div>
                  <div class="flex items-center gap-3 py-2">
                    <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span class="text-slate-300 text-sm">Project Management Methodologies</span>
                  </div>
                  <div class="flex items-center gap-3 py-2">
                    <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span class="text-slate-300 text-sm">Entrepreneurship & Innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Academic Achievements Summary -->
        <div class="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-white mb-4">Academic Achievement Summary</h3>
            <div class="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto"></div>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center group">
              <div class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-emerald-500 mb-2">
                2
              </div>
              <div class="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Leadership Roles
              </div>
              <div class="text-xs text-slate-500">
                Campus organizations
              </div>
            </div>
            
            <div class="text-center group">
              <div class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-cyan-500 mb-2">
                2021
              </div>
              <div class="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Graduation
              </div>
              <div class="text-xs text-slate-500">
                Master's degree
              </div>
            </div>
            
            <div class="text-center group">
              <div class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-500 mb-2">
                M.Sc
              </div>
              <div class="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Degree Level
              </div>
              <div class="text-xs text-slate-500">
                Computer Science
              </div>
            </div>
            
            <div class="text-center group">
              <div class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-500 mb-2">
                Excellence
              </div>
              <div class="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Academic Standing
              </div>
              <div class="text-xs text-slate-500">
                Distinguished graduate
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Professional education component - no additional logic needed
</script>

<style scoped>
/* Professional theme */
.professional-glow {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

/* Academic grid pattern */
.academic-grid-pattern {
  background-image: 
    radial-gradient(circle at 30% 40%, rgba(16, 185, 129, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 70% 60%, rgba(6, 182, 212, 0.04) 0%, transparent 50%),
    linear-gradient(rgba(148, 163, 184, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.02) 1px, transparent 1px);
  background-size: 400px 400px, 300px 300px, 80px 80px, 80px 80px;
  width: 100%;
  height: 100%;
  animation: academic-grid-drift 150s linear infinite;
}

@keyframes academic-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(80px, 80px); }
}

/* Academic floating elements */
.academic-element {
  position: absolute;
  width: 6px;
  height: 6px;
  background: linear-gradient(45deg, #10b981, #06b6d4);
  border-radius: 50%;
  animation: academic-float 30s ease-in-out infinite;
  opacity: 0.3;
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.3);
}

.elem-1 { top: 20%; left: 15%; animation-delay: 0s; }
.elem-2 { bottom: 30%; right: 20%; animation-delay: 10s; }
.elem-3 { top: 60%; right: 15%; animation-delay: 20s; }

@keyframes academic-float {
  0%, 100% { 
    transform: translate(0px, 0px) rotate(0deg); 
    opacity: 0.3; 
  }
  33% { 
    transform: translate(-25px, 20px) rotate(120deg); 
    opacity: 0.5; 
  }
  66% { 
    transform: translate(20px, -30px) rotate(240deg); 
    opacity: 0.4; 
  }
}

/* Hover effects */
.group:hover {
  transform: translateY(-2px);
}

/* Responsive design */
@media (max-width: 1024px) {
  .grid.lg\\:grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .grid.grid-cols-2.md\\:grid-cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  .flex.flex-col.lg\\:flex-row {
    flex-direction: column;
  }
}
</style>