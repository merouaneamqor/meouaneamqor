<template>
  <section class="py-16 bg-academic-dark border-b border-academic-border relative overflow-hidden font-sans">
    <!-- Subtle parchment/thesis-like background texture -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="academic-texture"></div>
    </div>
    <!-- Floating elements for a scholarly yet digital feel -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="floating-academic elem-1"></div>
      <div class="floating-academic elem-2"></div>
      <div class="floating-academic elem-3"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
      <!-- Section header -->
      <div class="mb-10">
        <div class="flex items-center gap-2 mb-2">
          <!-- Academic/Coding icon set -->
          <Icon name="mdi:book-open-variant" class="text-academic-blue w-5 h-5" />
          <Icon name="mdi:code-braces" class="text-academic-green w-5 h-5" />
        </div>
        <h2 class="text-3xl font-bold text-academic-text mb-2">
          // Academic_Foundation.md
        </h2>
        <div class="w-24 h-0.5 bg-academic-green mb-4"></div>
        <p class="text-academic-text-secondary text-sm">
          // My academic background in computer science and leadership.
        </p>
      </div>

      <!-- Main content container -->
      <div class="bg-academic-card-bg border border-academic-border rounded-lg overflow-hidden shadow-xl">
        <!-- Degree Header -->
        <div class="px-6 py-5 bg-academic-header-bg border-b border-academic-border">
          <div class="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div class="flex-shrink-0">
              <div class="w-14 h-14 bg-academic-blue/20 border border-academic-blue/30 rounded-lg flex items-center justify-center">
                <img src="/assets/images/supemir.jpg" alt="BDE" class="w-14 h-14 rounded-lg p-1 grayscale" />
              </div>
            </div>
            <div>
              <h3 class="text-xl font-bold text-academic-text">Master in Computer Science</h3>
              <p class="text-academic-green font-medium">Engineering in Networks & Multimedia</p>
              <div class="flex flex-wrap items-center gap-3 mt-2 text-xs text-academic-text-secondary">
                <span class="flex items-center gap-1">
                  <Icon name="mdi:domain" class="w-4 h-4" />
                  SUPEMIR
                </span>
                <span class="flex items-center gap-1">
                  <Icon name="mdi:calendar-range" class="w-4 h-4" />
                  2019 - 2021
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Content Body -->
        <div class="p-6 space-y-8">
          <!-- Leadership Roles -->
          <div>
            <h4 class="text-lg font-semibold text-academic-text mb-4 flex items-center gap-2">
              <Icon name="mdi:account-group" class="text-academic-blue w-5 h-5" />
              Leadership Positions
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="leadership-card p-4 bg-academic-card-bg/50 border border-academic-border rounded hover:border-academic-green/30 transition-colors">
                <div class="flex items-start gap-3 mb-3">
                  <div class="w-10 h-10 bg-academic-green/20 border border-academic-green/30 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="mdi:briefcase" class="text-academic-green w-5 h-5" />
                  </div>
                  <div>
                    <h5 class="font-bold text-academic-text">President</h5>
                    <p class="text-xs text-academic-text-secondary">Junior Enterprise Club</p>
                  </div>
                </div>
                <p class="text-sm text-academic-text-secondary">
                  Led entrepreneurial initiatives and business development projects within the academic community.
                </p>
              </div>
              <div class="leadership-card p-4 bg-academic-card-bg/50 border border-academic-border rounded hover:border-academic-blue/30 transition-colors">
                <div class="flex items-start gap-3 mb-3">
                  <div class="w-10 h-10 bg-academic-blue/20 border border-academic-blue/30 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="mdi:account-multiple" class="text-academic-blue w-5 h-5" />
                  </div>
                  <div>
                    <h5 class="font-bold text-academic-text">President</h5>
                    <p class="text-xs text-academic-text-secondary">Student Union (BDE)</p>
                  </div>
                </div>
                <p class="text-sm text-academic-text-secondary">
                  Represented student interests and organized campus-wide events and activities.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Institution Info -->
          <div class="p-4 bg-academic-card-bg/30 border border-academic-border rounded">
            <h4 class="text-lg font-semibold text-academic-text mb-3 flex items-center gap-2">
              <Icon name="mdi:information" class="text-academic-purple w-5 h-5" />
              About SUPEMIR
            </h4>
            <p class="text-sm text-academic-text-secondary leading-relaxed">
              SUPEMIR is now an institution equivalent to public status, offering comprehensive degree programs 
              in computer science, management, marketing, and entrepreneurship. The institution focuses on 
              developing both technical expertise and leadership skills in its graduates.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Academic Achievements Summary -->
      <div class="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="stat-card p-4 bg-academic-card-bg/50 border border-academic-border rounded text-center hover:border-academic-green/30 transition-colors">
          <div class="text-xl font-bold text-academic-green">2</div>
          <div class="text-xs text-academic-text-secondary uppercase tracking-wide">Leadership Roles</div>
        </div>
        <div class="stat-card p-4 bg-academic-card-bg/50 border border-academic-border rounded text-center hover:border-academic-blue/30 transition-colors">
          <div class="text-xl font-bold text-academic-blue">2021</div>
          <div class="text-xs text-academic-text-secondary uppercase tracking-wide">Graduation Year</div>
        </div>
        <div class="stat-card p-4 bg-academic-card-bg/50 border border-academic-border rounded text-center hover:border-academic-purple/30 transition-colors">
          <div class="text-xl font-bold text-academic-purple">M.Sc</div>
          <div class="text-xs text-academic-text-secondary uppercase tracking-wide">Master's Degree</div>
        </div>
        <div class="stat-card p-4 bg-academic-card-bg/50 border border-academic-border rounded text-center hover:border-academic-yellow/30 transition-colors">
          <div class="text-xl font-bold text-academic-yellow">CS</div>
          <div class="text-xs text-academic-text-secondary uppercase tracking-wide">Field</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script changes needed for this version
</script>

<style scoped>
/* Academic/Coding inspired theme */
.bg-academic-dark { background-color: #0f1419; } /* Deep, scholarly dark */
.bg-academic-card-bg { background-color: #1a2026; } /* Slightly lighter card */
.bg-academic-header-bg { background-color: #1e2933; } /* Header background */
.border-academic-border { border-color: #2d3748; } /* Muted border */
.text-academic-text { color: #e2e8f0; } /* Main text */
.text-academic-text-secondary { color: #a0aec0; } /* Secondary text */
.text-academic-green { color: #4ade80; } /* Academic success */
.text-academic-blue { color: #60a5fa; } /* Academic info */
.text-academic-purple { color: #a78bfa; } /* Academic specialty */
.text-academic-yellow { color: #fbbf24; } /* Academic highlight */

/* Font stack prioritizing readability */
.font-sans {
  font-family: 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', sans-serif;
}

/* Subtle background texture */
.academic-texture {
  background-image: 
    radial-gradient(#2d374820 1px, transparent 1px),
    radial-gradient(#2d374810 1px, transparent 1px);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
  width: 100%;
  height: 100%;
}

/* Floating scholarly elements */
.floating-academic {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #4ade80;
  border-radius: 2px;
  animation: academic-float 25s ease-in-out infinite;
  opacity: 0.2;
  box-shadow: 0 0 6px #4ade80;
}
.elem-1 { top: 15%; left: 10%; animation-delay: 0s; }
.elem-2 { bottom: 25%; right: 15%; animation-delay: 8s; }
.elem-3 { top: 60%; right: 10%; animation-delay: 16s; }
@keyframes academic-float {
  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
  25% { transform: translateY(-30px) translateX(20px); opacity: 0.5; }
  50% { transform: translateY(15px) translateX(-25px); opacity: 0.3; }
  75% { transform: translateY(-20px) translateX(30px); opacity: 0.4; }
}

/* Card hover effects */
.leadership-card, .stat-card {
  transition: all 0.2s ease;
}
.leadership-card:hover, .stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .sm\:grid-cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>