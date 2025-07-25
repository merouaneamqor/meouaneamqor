<template>
  <section class="py-0 bg-gray-900 border-b border-gray-800 relative overflow-hidden font-markdown text-base min-h-screen flex items-center justify-center">
    <!-- Subtle parchment/thesis-like background texture -->
    <div class="absolute inset-0 opacity-3 pointer-events-none">
      <div class="academic-texture"></div>
    </div>
    <!-- Floating elements for a scholarly yet digital feel -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="floating-academic elem-1"></div>
      <div class="floating-academic elem-2"></div>
      <div class="floating-academic elem-3"></div>
    </div>
    
    <div class="container mx-auto px-0 sm:px-0 relative z-10 w-full">
      <!-- Section header -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-gray-100 mb-2 tracking-tight">Academic_Foundation.md</h2>
        <div class="w-24 h-0.5 bg-green-400 mb-4"></div>
        <blockquote class="text-gray-400 italic pl-4 border-l-4 border-gray-700">My academic background in computer science and leadership.</blockquote>
      </div>
      <hr class="my-8 border-gray-800" />
      <!-- Degree Header -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold text-gray-200 mb-1">Master in Computer Science</h3>
        <div class="text-green-400 font-medium mb-2">Engineering in Networks & Multimedia</div>
        <div class="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-2">
          <span><strong>SUPEMIR</strong></span>
          <span>•</span>
          <span>2019 - 2021</span>
        </div>
        <code class="bg-gray-800 text-gray-200 px-2 py-0.5 rounded text-xs">/assets/images/supemir.jpg</code>
      </div>
      <hr class="my-8 border-gray-800" />
      <!-- Leadership Roles -->
      <div class="mb-8">
        <h4 class="text-lg font-bold text-gray-100 mb-4">Leadership Positions</h4>
        <ul class="list-disc pl-6 space-y-2 text-gray-200">
          <li><strong>President</strong>, Junior Enterprise Club<br/><span class="text-gray-400 text-sm">Led entrepreneurial initiatives and business development projects within the academic community.</span></li>
          <li><strong>President</strong>, Student Union (BDE)<br/><span class="text-gray-400 text-sm">Represented student interests and organized campus-wide events and activities.</span></li>
        </ul>
      </div>
      <hr class="my-8 border-gray-800" />
      <!-- Institution Info -->
      <div class="mb-8">
        <h4 class="text-lg font-bold text-gray-100 mb-3">About SUPEMIR</h4>
        <blockquote class="border-l-4 border-green-700 pl-4 text-gray-300 italic">SUPEMIR is now an institution equivalent to public status, offering comprehensive degree programs in computer science, management, marketing, and entrepreneurship. The institution focuses on developing both technical expertise and leadership skills in its graduates.</blockquote>
      </div>
      <hr class="my-8 border-gray-800" />
      <!-- Academic Achievements Summary -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="text-center">
          <div class="text-xl font-bold text-green-400">2</div>
          <div class="text-xs text-gray-400 uppercase tracking-wide">Leadership Roles</div>
        </div>
        <div class="text-center">
          <div class="text-xl font-bold text-blue-400">2021</div>
          <div class="text-xs text-gray-400 uppercase tracking-wide">Graduation Year</div>
        </div>
        <div class="text-center">
          <div class="text-xl font-bold text-purple-400">M.Sc</div>
          <div class="text-xs text-gray-400 uppercase tracking-wide">Master's Degree</div>
        </div>
        <div class="text-center">
          <div class="text-xl font-bold text-yellow-400">CS</div>
          <div class="text-xs text-gray-400 uppercase tracking-wide">Field</div>
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
.font-markdown {
  font-family: 'Merriweather', 'Georgia', 'Times New Roman', serif;
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