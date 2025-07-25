<template>
  <section class="py-16 bg-gray-900 border-b border-gray-800 relative overflow-hidden font-mono text-sm min-h-screen flex items-center justify-center">
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="github-grid-pattern"></div>
    </div>
    <!-- Floating elements for depth -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="floating-element elem-1"></div>
      <div class="floating-element elem-2"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 relative z-10 w-full">
      <!-- Section header -->
      <div class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <span class="text-green-400">#</span>
          Technical Arsenal
        </h2>
        <p class="text-gray-400">
          Core technologies, tools, and methodologies for building and leading.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- Leadership & Process (Prioritized) -->
        <div class="skill-category bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
          <div class="flex items-center gap-2 px-4 p-3">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-green-500"></span>
          </div>
          <div class="category-header px-4 py-3 bg-gray-800/80 border-b border-gray-700 flex items-center gap-2">
            <Icon name="mdi:account-group" class="text-blue-400 w-5 h-5" />
            <h3 class="font-semibold text-white">Leadership & Process</h3>
          </div>
          <div class="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div v-for="skill in leadershipSkills" :key="skill.name" class="skill-item flex items-center justify-between py-2 px-3 rounded hover:bg-gray-700/50 transition-colors">
              <div class="flex items-center gap-2">
                <span class="text-gray-400">{{ skill.icon }}</span>
                <span class="text-gray-200">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend & Infrastructure -->
        <div class="skill-category bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
          <div class="flex items-center gap-2 px-4 p-3">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-green-500"></span>
          </div>
          <div class="category-header px-4 py-3 bg-gray-800/80 border-b border-gray-700 flex items-center gap-2">
            <Icon name="mdi:server-network" class="text-emerald-400 w-5 h-5" />
            <h3 class="font-semibold text-white">Backend & Infrastructure</h3>
          </div>
          <div class="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div v-for="skill in backendSkills" :key="skill.name" class="skill-item flex items-center justify-between py-2 px-3 rounded hover:bg-gray-700/50 transition-colors">
              <div class="flex items-center gap-2">
                <span class="text-gray-400">{{ skill.icon }}</span>
                <span class="text-gray-200">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Frontend & UI -->
        <div class="skill-category bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
          <div class="flex items-center gap-2 px-4 p-3">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-green-500"></span>
          </div>
          <div class="category-header px-4 py-3 bg-gray-800/80 border-b border-gray-700 flex items-center gap-2">
            <Icon name="mdi:monitor-screenshot" class="text-cyan-400 w-5 h-5" />
            <h3 class="font-semibold text-white">Frontend & UI</h3>
          </div>
          <div class="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div v-for="skill in frontendSkills" :key="skill.name" class="skill-item flex items-center justify-between py-2 px-3 rounded hover:bg-gray-700/50 transition-colors">
              <div class="flex items-center gap-2">
                <span class="text-gray-400">{{ skill.icon }}</span>
                <span class="text-gray-200">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- DevOps & Tools -->
        <div class="skill-category bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
          <div class="flex items-center gap-2 px-4 p-3">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-green-500"></span>
          </div>
          <div class="category-header px-4 py-3 bg-gray-800/80 border-b border-gray-700 flex items-center gap-2">
            <Icon name="mdi:cog" class="text-purple-400 w-5 h-5" />
            <h3 class="font-semibold text-white">DevOps & Tools</h3>
          </div>
          <div class="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div v-for="skill in devopsSkills" :key="skill.name" class="skill-item flex items-center justify-between py-2 px-3 rounded hover:bg-gray-700/50 transition-colors">
              <div class="flex items-center gap-2">
                <span class="text-gray-400">{{ skill.icon }}</span>
                <span class="text-gray-200">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Conception Tools -->
        <div class="skill-category bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
          <div class="flex items-center gap-2 px-4 p-3">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-green-500"></span>
          </div>
          <div class="category-header px-4 py-3 bg-gray-800/80 border-b border-gray-700 flex items-center gap-2">
            <Icon name="mdi:lightbulb-outline" class="text-yellow-400 w-5 h-5" />
            <h3 class="font-semibold text-white">Conception Tools</h3>
          </div>
          <div class="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div v-for="skill in conceptionSkills" :key="skill.name" class="skill-item flex items-center justify-between py-2 px-3 rounded hover:bg-gray-700/50 transition-colors">
              <div class="flex items-center gap-2">
                <span class="text-gray-400">{{ skill.icon }}</span>
                <span class="text-gray-200">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Prioritized Leadership & Process skills
const leadershipSkills = [
  { name: "Agile/Scrum", icon: "🏃", level: 95 },
  { name: "Team Leadership", icon: "👥", level: 90 },
  { name: "Code Review", icon: "🔍", level: 95 },
  { name: "Mentoring", icon: "🎓", level: 90 },
  { name: "Product Strategy", icon: "📊", level: 85 },
  { name: "Project Management", icon: "📋", level: 85 },
  { name: "Communication", icon: "💬" },
  { name: "Conflict Resolution", icon: "🤝" },
  { name: "Decision Making", icon: "🧠" },
  { name: "Change Management", icon: "🔄" },
  { name: "Stakeholder Management", icon: "🤝" }
]

const backendSkills = [
  { name: "Ruby on Rails", icon: "💎", level: 95 },
  { name: "PostgreSQL", icon: "🐘", level: 90 },
  { name: "PHP", icon: "🐘", level: 85 },
  { name: "Java", icon: "☕", level: 85 },
  { name: "Python", icon: "🐍", level: 85 },
  { name: "Node.js", icon: "🟩", level: 80 },
  { name: "C#", icon: "#️⃣", level: 80 },
  { name: "MongoDB", icon: "🍃", level: 85 },
  { name: "GraphQL", icon: "⚡", level: 80 },
  { name: "Redis", icon: "🔴", level: 85 },
  { name: "AWS", icon: "☁️", level: 80 }
]

const frontendSkills = [
  { name: "Vue.js", icon: "💚", level: 90 },
  { name: "React", icon: "⚛️", level: 85 },
  { name: "Nuxt.js", icon: "🟢", level: 90 },
  { name: "Next.js", icon: "▲", level: 80 },
  { name: "Tailwind CSS", icon: "🎨", level: 95 },
  { name: "TypeScript", icon: "📘", level: 85 },
  { name: "Angular", icon: "🅰️" },
  { name: "Bootstrap", icon: "🟦" },
  { name: "SASS", icon: "🎀" },
  { name: "jQuery", icon: "💠" },
  { name: "Figma", icon: "🎨" },
  { name: "Adobe XD", icon: "🖌️" }
]

const devopsSkills = [
  { name: "Docker", icon: "🐳", level: 85 },
  { name: "CI/CD", icon: "🔄", level: 90 },
  { name: "GitHub Actions", icon: "🚀", level: 85 },
  { name: "Heroku", icon: "🟣", level: 90 },
  { name: "Vercel", icon: "🔺", level: 85 },
  { name: "Linux", icon: "🐧", level: 80 },
  { name: "Jenkins", icon: "☕" },
  { name: "GitLab CI", icon: "🦊" },
  { name: "Terraform", icon: "🌍" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "Nginx", icon: "🚦" },
  { name: "Apache", icon: "🔥" },
  { name: "DigitalOcean", icon: "💧" },
  { name: "Azure DevOps", icon: "🔷" },
  { name: "Slack", icon: "💬" },
  { name: "Trello", icon: "📋" },
  { name: "Jira", icon: "📒" }
]

const conceptionSkills = [
  { name: "UML", icon: "📐" },
  { name: "ERD", icon: "🗂️" },
  { name: "BPMN", icon: "🔄" },
  { name: "Lucidchart", icon: "💡" },
  { name: "Miro", icon: "🟨" },
  { name: "Draw.io", icon: "✏️" }
]
</script>

<style scoped>
/* GitHub-inspired theme */
.bg-gray-900 { background-color: #0d1117; }
.bg-gray-800\/50 { background-color: rgba(33, 38, 45, 0.5); }
.border-gray-800 { border-color: #30363d; }
.border-gray-700 { border-color: #21262d; }
.text-white { color: #f0f6fc; }
.text-gray-400 { color: #8b949e; }
.text-gray-200 { color: #c9d1d9; }
.text-gray-500 { color: #6e7681; }

/* Font */
.font-mono {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
}

/* Background pattern */
.github-grid-pattern {
  background-image: 
    linear-gradient(#30363d20 1px, transparent 1px),
    linear-gradient(90deg, #30363d20 1px, transparent 1px);
  background-size: 20px 20px;
  width: 100%;
  height: 100%;
}

/* Floating elements */
.floating-element {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #238636; /* GitHub green */
  border-radius: 50%;
  animation: float 20s ease-in-out infinite;
  opacity: 0.2;
}
.elem-1 { top: 15%; left: 10%; animation-delay: 0s; }
.elem-2 { bottom: 25%; right: 15%; animation-delay: 10s; }
@keyframes float {
  0%, 100% { transform: translateY(0px); opacity: 0.2; }
  50% { transform: translateY(-30px); opacity: 0.5; }
}

/* Skill categories */
.skill-category {
  transition: border-color 0.2s ease;
}
.skill-category:hover {
  border-color: #238636;
}

/* Skill items */
.skill-item {
  position: relative;
  overflow: hidden;
}
.skill-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.02), transparent);
  transform: translateX(-100%);
  transition: transform 0.5s;
}
.skill-item:hover::before {
  transform: translateX(100%);
}

/* Progress bars */
.skill-progress {
  transition: width 0.7s ease-out;
}
.backend-progress { background-color: #2ea043; } /* GitHub green */
.frontend-progress { background-color: #1f6feb; } /* GitHub blue */
.devops-progress { background-color: #8957e5; } /* GitHub purple */
.leadership-progress { background-color: #db61a2; } /* GitHub pink */

/* Responsive adjustments */
@media (max-width: 640px) {
  .grid-cols-2 {
    @apply grid-cols-1;
  }
}
</style>