<template>
  <section class="py-8 sm:py-16 md:py-20 bg-transparent font-myriad border-b border-slate-200 relative min-h-screen flex items-center justify-center">
        
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <!-- Professional section header -->
      <div class="text-center mb-8 sm:mb-14 md:mb-16 px-4 sm:px-0">
        <div class="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
          <div class="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-lg sm:rounded-xl flex items-center justify-center">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14v6.25l-9-5.25v6.25L12 22l9-1.25v-6.25l-9 5.25V14z"/>
            </svg>
          </div>
          <div class="text-left">
            <h2 class="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
              {{ t('education.title') }}
            </h2>
            <p class="text-slate-700 text-xs sm:text-sm">{{ t('education.subtitle') }}</p>
          </div>
        </div>
        <div class="w-16 sm:w-20 md:w-24 h-1 bg-slate-300 rounded-full mx-auto mb-4 sm:mb-6"></div>
        <p class="text-slate-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
          {{ t('education.description') }}
        </p>
      </div>
      <div class="max-w-5xl mx-auto">
        <!-- Education Card -->
        <div class="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-10 md:mb-12 hover:bg-white/80 transition-all duration-300 group">
          <!-- Card Header -->
          <div class="bg-white border-b border-slate-200 p-4 sm:p-6 md:p-8">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div class="flex items-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 lg:mb-0">
                <!-- University Logo Placeholder -->
                <div class="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-slate-100 border border-slate-200 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg class="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-ios-system-blue" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14v6.25l-9-5.25v6.25L12 22l9-1.25v-6.25l-9 5.25V14z"/>
                  </svg>
                </div>
                                
                <div>
                  <h3 class="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 mb-1 sm:mb-2">{{ t('education.degree') }}</h3>
                  <div class="text-base sm:text-lg md:text-xl text-slate-800 font-semibold mb-2 sm:mb-3">{{ t('education.specialization') }}</div>
                  <div class="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-slate-700 text-sm">
                    <div class="flex items-center gap-1 sm:gap-2">
                       <svg class="w-3 h-3 sm:w-4 sm:h-4 text-slate-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h3v3H7V7z"/>
                      </svg>
                      <span class="font-medium text-xs sm:text-sm">SUPEMIR</span>
                    </div>
                    <div class="flex items-center gap-1 sm:gap-2">
                       <svg class="w-3 h-3 sm:w-4 sm:h-4 text-slate-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span class="font-medium text-xs sm:text-sm">2019 - 2021</span>
                    </div>
                    <div class="flex items-center gap-1 sm:gap-2">
                       <svg class="w-3 h-3 sm:w-4 sm:h-4 text-slate-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116 8a8.001 8.001 0 01-1.343 8.657z"/>
                      </svg>
                      <span class="text-xs sm:text-sm">Casablanca, Morocco</span>
                    </div>
                  </div>
                </div>
              </div>
                              
              <!-- Graduation Status -->
              <div class="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-100 backdrop-blur-sm border border-slate-200 rounded-full text-slate-800 text-xs sm:text-sm font-medium">
                <svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                 <span class="hidden sm:inline">{{ t('education.graduated_with_distinction') }}</span>
                 <span class="sm:hidden">{{ t('education.distinction_short') }}</span>
              </div>
            </div>
          </div>
          <!-- Card Content -->
           <div class="p-4 sm:p-6 md:p-8">
            <div class="grid lg:grid-cols-2 gap-6 sm:gap-8">
              <!-- Leadership Development -->
              <div>
                <div class="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 bg-slate-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <h4 class="text-lg sm:text-xl font-semibold text-slate-900">{{ t('education.leadership_positions') }}</h4>
                </div>
                                
                <div class="space-y-4 sm:space-y-6">
                  <div class="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/80 transition-all duration-300">
                    <div class="flex items-start gap-3 sm:gap-4">
                      <div class="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 class="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">{{ t('education.president_junior_enterprise') }}</h5>
                        <p class="text-slate-700 text-xs sm:text-sm leading-relaxed">
                          {{ t('education.president_junior_enterprise_desc') }}
                        </p>
                      </div>
                    </div>
                  </div>
                                      
                  <div class="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/80 transition-all duration-300">
                    <div class="flex items-start gap-3 sm:gap-4">
                      <div class="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 class="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">{{ t('education.president_student_union') }}</h5>
                        <p class="text-slate-700 text-xs sm:text-sm leading-relaxed">
                          {{ t('education.president_student_union_desc') }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Academic Excellence -->
              <div>
                <div class="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 bg-slate-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <h4 class="text-lg sm:text-xl font-semibold text-slate-900">{{ t('education.academic_excellence') }}</h4>
                </div>
                <div class="bg-ios-background backdrop-blur-sm border border-ios-separator rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                  <h5 class="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">{{ t('education.about_supemir') }}</h5>
                  <p class="text-slate-700 leading-relaxed text-xs sm:text-sm mb-3 sm:mb-4">
                    {{ t('education.about_supemir_desc_1') }} 
                    <span class="text-ios-system-blue font-medium">{{ t('education.technical_expertise') }}</span> 
                    {{ t('education.and') }} 
                    <span class="text-ios-system-purple font-medium">{{ t('education.leadership_skills') }}</span> {{ t('education.about_supemir_desc_2') }}
                  </p>
                  <div class="inline-flex items-center px-2 sm:px-3 py-1 bg-slate-100 backdrop-blur-sm border border-slate-200 rounded-full text-slate-800 text-xs font-medium">
                    <span class="hidden sm:inline">{{ t('education.equivalent_public_status') }}</span>
                    <span class="sm:hidden">{{ t('education.university_status') }}</span>
                  </div>
                </div>
                <!-- Core Competencies Developed -->
                <div class="space-y-1 sm:space-y-2">
                  <h5 class="text-sm sm:text-base md:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2">{{ t('education.core_competencies') }}</h5>
                  <div class="flex items-center gap-1.5 sm:gap-2 py-0.5 sm:py-1">
                    <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-slate-400 rounded-full"></div>
                    <span class="text-slate-700 text-xs">{{ t('education.competency_software') }}</span>
                  </div>
                  <div class="flex items-center gap-1.5 sm:gap-2 py-0.5 sm:py-1">
                    <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-slate-400 rounded-full"></div>
                    <span class="text-slate-700 text-xs">{{ t('education.competency_network') }}</span>
                  </div>
                  <div class="flex items-center gap-1.5 sm:gap-2 py-0.5 sm:py-1">
                    <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-slate-400 rounded-full"></div>
                    <span class="text-slate-700 text-xs">{{ t('education.competency_project') }}</span>
                  </div>
                  <div class="flex items-center gap-1.5 sm:gap-2 py-0.5 sm:py-1">
                    <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-slate-400 rounded-full"></div>
                    <span class="text-slate-700 text-xs">{{ t('education.competency_entrepreneurship') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Academic Achievements Summary -->
        <div class="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
          <div class="text-center mb-6 sm:mb-8">
            <h3 class="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 mb-3 sm:mb-4">{{ t('education.achievements_summary') }}</h3>
            <div class="w-12 sm:w-16 h-1 bg-slate-300 rounded-full mx-auto"></div>
          </div>
                      
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div class="text-center group">
              <div class="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">
                2
              </div>
              <div class="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wider mb-1">
                {{ t('education.leadership_roles') }}
              </div>
              <div class="text-xs text-slate-600">
                {{ t('education.campus_organizations') }}
              </div>
            </div>
                        
            <div class="text-center group">
              <div class="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">
                2021
              </div>
              <div class="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wider mb-1">
                {{ t('education.graduation') }}
              </div>
              <div class="text-xs text-slate-600">
                {{ t('education.masters_degree') }}
              </div>
            </div>
                        
            <div class="text-center group">
              <div class="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">
                M.Sc
              </div>
              <div class="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wider mb-1">
                {{ t('education.degree_level') }}
              </div>
              <div class="text-xs text-slate-600">
                {{ t('education.computer_science') }}
              </div>
            </div>
                        
            <div class="text-center group">
              <div class="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">
                Excellence
              </div>
              <div class="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wider mb-1">
                {{ t('education.academic_standing') }}
              </div>
              <div class="text-xs text-slate-600">
                {{ t('education.distinguished_graduate') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
// Professional education component - no additional logic needed
</script>

<style scoped>
/* Tailwind's default animations are used for subtle effects. */
/* Custom keyframes are not included to adhere to "use only tailwind" constraint. */
/* The `backdrop-blur-sm` class requires Tailwind JIT mode or a modern browser. */
</style>
