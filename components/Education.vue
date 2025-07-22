<template>
  <section class="py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 relative overflow-hidden">
    <!-- Subtle Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="education-grid-pattern"></div>
    </div>
    
    <!-- Floating Academic Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="academic-element element-1"></div>
      <div class="academic-element element-2"></div>
      <div class="academic-element element-3"></div>
    </div>

    <div class="container mx-auto px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4 professional-glow">
          Academic Foundation
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full mx-auto mb-4"></div>
        <p class="text-slate-300 text-lg max-w-2xl mx-auto">
          My academic background in computer science and leadership.
        </p>
      </div>

      <!-- Education Card -->
      <div class="max-w-4xl mx-auto">
        <div class="education-card group">
          <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-500/50 hover:bg-slate-800/60">
            
            <!-- Card Header with Icon -->
            <div class="bg-gradient-to-r from-slate-700/50 to-slate-800/50 p-8 border-b border-slate-600/30">
              <div class="flex items-start gap-6">
                <!-- Academic Icon -->
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    </svg>
                  </div>
                </div>

                <!-- Degree Information -->
                <div class="flex-1">
                  <h3 class="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    Master in Computer Science
                  </h3>
                  <p class="text-lg text-slate-300 mb-4 font-medium">
                    Engineering in Networks & Multimedia
                  </p>
                  
                  <!-- Institution and Date -->
                  <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span class="text-slate-200 font-semibold">SUPEMIR</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span class="text-slate-300">2019 - 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-8">
              <!-- Leadership Roles -->
              <div class="mb-8">
                <h4 class="text-lg font-semibold text-slate-200 mb-6 flex items-center gap-2">
                  <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  Leadership Positions
                </h4>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Junior Enterprise Club -->
                  <div class="leadership-role">
                    <div class="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-lg p-6 transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-700/50">
                      <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center">
                          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 012-2h2a2 2 0 012 2v12"/>
                          </svg>
                        </div>
                        <div>
                          <h5 class="font-semibold text-white">President</h5>
                          <p class="text-sm text-slate-400">Junior Enterprise Club</p>
                        </div>
                      </div>
                      <p class="text-slate-300 text-sm">
                        Led entrepreneurial initiatives and business development projects within the academic community.
                      </p>
                    </div>
                  </div>

                  <!-- Student Union -->
                  <div class="leadership-role">
                    <div class="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-lg p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-700/50">
                      <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center">
                          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                          </svg>
                        </div>
                        <div>
                          <h5 class="font-semibold text-white">President</h5>
                          <p class="text-sm text-slate-400">Student Union (BDE)</p>
                        </div>
                      </div>
                      <p class="text-slate-300 text-sm">
                        Represented student interests and organized campus-wide events and activities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Institution Information -->
              <div class="bg-slate-700/20 backdrop-blur-sm border border-slate-600/20 rounded-lg p-6">
                <h4 class="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
                  <div class="w-3 h-3 bg-blue-400 rounded-full"></div>
                  About SUPEMIR
                </h4>
                <p class="text-slate-300 leading-relaxed">
                  SUPEMIR is now an institution equivalent to public status, offering comprehensive degree programs 
                  in computer science, management, marketing, and entrepreneurship. The institution focuses on 
                  developing both technical expertise and leadership skills in its graduates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Academic Achievements Stats -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="achievement-stat">
            <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-xl p-6 text-center transition-all duration-300 hover:border-slate-500/50 hover:bg-slate-800/50">
              <div class="achievement-number">2</div>
              <div class="achievement-label">Leadership Roles</div>
            </div>
          </div>
          <div class="achievement-stat">
            <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-xl p-6 text-center transition-all duration-300 hover:border-slate-500/50 hover:bg-slate-800/50">
              <div class="achievement-number">2021</div>
              <div class="achievement-label">Graduation Year</div>
            </div>
          </div>
          <div class="achievement-stat">
            <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-xl p-6 text-center transition-all duration-300 hover:border-slate-500/50 hover:bg-slate-800/50">
              <div class="achievement-number">M.Sc</div>
              <div class="achievement-label">Master's Degree</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed for this component
</script>

<style scoped>
/* Background Grid Pattern */
.education-grid-pattern {
  background-image: 
    linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
  background-size: 140px 140px;
  width: 100%;
  height: 100%;
  animation: education-grid-drift 100s linear infinite;
}

@keyframes education-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(140px, 140px); }
}

/* Floating Academic Elements */
.academic-element {
  position: absolute;
  width: 5px;
  height: 5px;
  background: linear-gradient(45deg, rgba(16, 185, 129, 0.3), rgba(6, 182, 212, 0.3));
  border-radius: 50%;
  animation: academic-float 25s ease-in-out infinite;
}

.element-1 { top: 25%; left: 20%; animation-delay: 0s; }
.element-2 { top: 60%; right: 25%; animation-delay: 8s; }
.element-3 { bottom: 30%; left: 30%; animation-delay: 16s; }

@keyframes academic-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-50px) rotate(180deg); opacity: 0.7; }
}

/* Professional Glow Effect */
.professional-glow {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

/* Education Card */
.education-card:hover .bg-slate-800\/40 {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

/* Leadership Roles */
.leadership-role:hover {
  transform: translateY(-2px);
}

/* Achievement Stats */
.achievement-stat:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.achievement-number {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.achievement-label {
  color: rgb(148, 163, 184);
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Responsive Design */
@media (max-width: 768px) {
  .grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .flex-col.sm\:flex-row {
    flex-direction: column;
  }
  
  .gap-4 {
    gap: 1rem;
  }
}
</style>