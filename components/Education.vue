<template>
  <section class="py-12 sm:py-16 md:py-20 bg-ios-background font-myriad border-b border-ios-separator relative overflow-hidden min-h-screen flex items-center justify-center">
    <!-- iOS-style background elements -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-ios-system-blue rounded-full animate-pulse"></div>
      <div class="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-ios-system-purple rounded-full animate-pulse delay-1000"></div>
      <div class="absolute top-2/3 right-1/6 w-1 h-1 bg-ios-system-green rounded-full animate-pulse delay-2000"></div>
    </div>
        
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <!-- Professional section header -->
      <div class="text-center mb-12 sm:mb-14 md:mb-16">
        <div class="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-ios-system-blue to-ios-system-purple rounded-lg sm:rounded-xl flex items-center justify-center">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14v6.25l-9-5.25v6.25L12 22l9-1.25v-6.25l-9 5.25V14z"/>
            </svg>
          </div>
          <div class="text-left">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-ios-label tracking-tight">
              Academic Foundation
            </h2>
            <p class="text-ios-label-tertiary text-xs sm:text-sm">Education • Leadership Development • Excellence</p>
          </div>
        </div>
        <div class="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-ios-system-blue via-ios-system-purple to-ios-system-blue rounded-full mx-auto mb-4 sm:mb-6"></div>
        <p class="text-ios-label-secondary text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
          Building leadership capabilities through rigorous academic training and hands-on organizational experience
        </p>
      </div>
      <div class="max-w-5xl mx-auto">
        <!-- Education Card -->
        <div class="bg-ios-background-secondary backdrop-blur-sm border border-ios-separator rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-10 md:mb-12 hover:bg-ios-background hover:border-ios-separator/80 transition-all duration-300 group">
          <!-- Card Header -->
          <div class="bg-gradient-to-r from-ios-system-blue/10 to-ios-system-purple/10 border-b border-ios-separator p-4 sm:p-6 md:p-8">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div class="flex items-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 lg:mb-0">
                <!-- University Logo Placeholder -->
                <div class="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-ios-system-blue to-ios-system-purple border border-ios-separator rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg class="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-ios-system-blue" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14v6.25l-9-5.25v6.25L12 22l9-1.25v-6.25l-9 5.25V14z"/>
                  </svg>
                </div>
                                
                <div>
                  <h3 class="text-xl text-white sm:text-2xl md:text-3xl font-semibold text-ios-label mb-1 sm:mb-2">Master in Computer Science</h3>
                  <div class="text-base sm:text-lg md:text-xl text-ios-system-blue font-semibold mb-2 sm:mb-3">Engineering in Networks & Multimedia</div>
                  <div class="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-ios-label-secondary text-sm">
                    <div class="flex items-center gap-1 sm:gap-2">
                      <svg class="w-3 h-3 sm:w-4 sm:h-4 text-ios-system-blue" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h3v3H7V7z"/>
                      </svg>
                      <span class="font-medium text-xs sm:text-sm">SUPEMIR</span>
                    </div>
                    <div class="flex items-center gap-1 sm:gap-2">
                      <svg class="w-3 h-3 sm:w-4 sm:h-4 text-ios-system-purple" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span class="font-medium text-xs sm:text-sm">2019 - 2021</span>
                    </div>
                    <div class="flex items-center gap-1 sm:gap-2">
                      <svg class="w-3 h-3 sm:w-4 sm:h-4 text-ios-system-green" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116 8a8.001 8.001 0 01-1.343 8.657z"/>
                      </svg>
                      <span class="text-xs sm:text-sm">Casablanca, Morocco</span>
                    </div>
                  </div>
                </div>
              </div>
                            
              <!-- Graduation Status -->
              <div class="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-ios-system-green/20 backdrop-blur-sm border border-ios-system-green/50 rounded-full text-ios-system-green text-xs sm:text-sm font-medium">
                <svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="hidden sm:inline">Graduated with Distinction</span>
                <span class="sm:hidden">Distinction Graduate</span>
              </div>
            </div>
          </div>
          <!-- Card Content -->
          <div class="p-4 sm:p-6 md:p-8">
            <div class="grid lg:grid-cols-2 gap-6 sm:gap-8">
              <!-- Leadership Development -->
              <div>
                <div class="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-ios-system-blue to-ios-system-blue/80 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <h4 class="text-lg sm:text-xl font-semibold text-ios-label">Leadership Positions</h4>
                </div>
                                
                <div class="space-y-4 sm:space-y-6">
                  <div class="bg-ios-background backdrop-blur-sm border border-ios-separator rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-ios-background-secondary transition-all duration-300">
                    <div class="flex items-start gap-3 sm:gap-4">
                      <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-ios-system-blue to-ios-system-blue/80 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 class="text-base sm:text-lg font-semibold text-ios-label mb-1 sm:mb-2">President, Junior Enterprise Club</h5>
                        <p class="text-ios-label-secondary text-xs sm:text-sm leading-relaxed">
                          Led entrepreneurial initiatives and business development projects within the academic community. 
                          Managed cross-functional teams and drove strategic partnerships with industry leaders.
                        </p>
                      </div>
                    </div>
                  </div>
                                    
                  <div class="bg-ios-background backdrop-blur-sm border border-ios-separator rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-ios-background-secondary transition-all duration-300">
                    <div class="flex items-start gap-3 sm:gap-4">
                      <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-ios-system-purple to-ios-system-purple/80 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 class="text-base sm:text-lg font-semibold text-ios-label mb-1 sm:mb-2">President, Student Union (BDE)</h5>
                        <p class="text-ios-label-secondary text-xs sm:text-sm leading-relaxed">
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
                <div class="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-ios-system-green to-ios-system-green/80 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <h4 class="text-lg sm:text-xl font-semibold text-ios-label">Academic Excellence</h4>
                </div>
                <div class="bg-ios-background backdrop-blur-sm border border-ios-separator rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                  <h5 class="text-base sm:text-lg font-semibold text-ios-label mb-3 sm:mb-4">About SUPEMIR</h5>
                  <p class="text-ios-label-secondary leading-relaxed text-xs sm:text-sm mb-3 sm:mb-4">
                    SUPEMIR is a prestigious institution offering comprehensive degree programs in computer science, 
                    management, marketing, and entrepreneurship. The institution focuses on developing both 
                    <span class="text-ios-system-blue font-medium">technical expertise</span> and 
                    <span class="text-ios-system-purple font-medium">leadership skills</span> in its graduates.
                  </p>
                  <div class="inline-flex items-center px-2 sm:px-3 py-1 bg-ios-system-blue/20 backdrop-blur-sm border border-ios-system-blue/50 rounded-full text-ios-system-blue text-xs font-medium">
                    <span class="hidden sm:inline">Equivalent to Public University Status</span>
                    <span class="sm:hidden">University Status</span>
                  </div>
                </div>
                <!-- Core Competencies Developed -->
                <div class="space-y-1 sm:space-y-2">
                  <h5 class="text-sm sm:text-base md:text-lg font-semibold text-ios-label mb-1.5 sm:mb-2">Core Competencies Developed</h5>
                  <div class="flex items-center gap-1.5 sm:gap-2 py-0.5 sm:py-1">
                    <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-ios-system-blue rounded-full"></div>
                    <span class="text-ios-label-secondary text-xs">Advanced Software Engineering</span>
                  </div>
                  <div class="flex items-center gap-1.5 sm:gap-2 py-0.5 sm:py-1">
                    <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-ios-system-purple rounded-full"></div>
                    <span class="text-ios-label-secondary text-xs">Network Architecture & Security</span>
                  </div>
                  <div class="flex items-center gap-1.5 sm:gap-2 py-0.5 sm:py-1">
                    <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-ios-system-green rounded-full"></div>
                    <span class="text-ios-label-secondary text-xs">Project Management Methodologies</span>
                  </div>
                  <div class="flex items-center gap-1.5 sm:gap-2 py-0.5 sm:py-1">
                    <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-ios-system-orange rounded-full"></div>
                    <span class="text-ios-label-secondary text-xs">Entrepreneurship & Innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Academic Achievements Summary -->
        <div class="bg-ios-background-secondary backdrop-blur-sm border border-ios-separator rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
          <div class="text-center mb-6 sm:mb-8">
            <h3 class="text-lg sm:text-xl md:text-2xl font-semibold text-ios-label mb-3 sm:mb-4">Academic Achievement Summary</h3>
            <div class="w-12 sm:w-16 h-1 bg-gradient-to-r from-ios-system-blue to-ios-system-purple rounded-full mx-auto"></div>
          </div>
                    
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div class="text-center group">
              <div class="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-ios-system-blue to-ios-system-blue/80 mb-1 sm:mb-2">
                2
              </div>
              <div class="text-xs sm:text-sm font-semibold text-ios-label-secondary uppercase tracking-wider mb-1">
                Leadership Roles
              </div>
              <div class="text-xs text-ios-label-tertiary">
                Campus organizations
              </div>
            </div>
                        
            <div class="text-center group">
              <div class="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-ios-system-purple to-ios-system-purple/80 mb-1 sm:mb-2">
                2021
              </div>
              <div class="text-xs sm:text-sm font-semibold text-ios-label-secondary uppercase tracking-wider mb-1">
                Graduation
              </div>
              <div class="text-xs text-ios-label-tertiary">
                Master's degree
              </div>
            </div>
                        
            <div class="text-center group">
              <div class="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-ios-system-green to-ios-system-green/80 mb-1 sm:mb-2">
                M.Sc
              </div>
              <div class="text-xs sm:text-sm font-semibold text-ios-label-secondary uppercase tracking-wider mb-1">
                Degree Level
              </div>
              <div class="text-xs text-ios-label-tertiary">
                Computer Science
              </div>
            </div>
                        
            <div class="text-center group">
              <div class="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-ios-system-orange to-ios-system-orange/80 mb-1 sm:mb-2">
                Excellence
              </div>
              <div class="text-xs sm:text-sm font-semibold text-ios-label-secondary uppercase tracking-wider mb-1">
                Academic Standing
              </div>
              <div class="text-xs text-ios-label-tertiary">
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
/* Tailwind's default animations are used for subtle effects. */
/* Custom keyframes are not included to adhere to "use only tailwind" constraint. */
/* The `backdrop-blur-sm` class requires Tailwind JIT mode or a modern browser. */
</style>
