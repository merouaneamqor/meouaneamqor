<template>
  <section class="py-5 bg-black border-b border-odyssey-border relative overflow-hidden font-mono text-sm min-h-screen flex items-center justify-center">
    <!-- Subtle starfield background -->
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <div class="starfield"></div>
    </div>
    <!-- Floating data particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="data-particle particle-1"></div>
      <div class="data-particle particle-2"></div>
      <div class="data-particle particle-3"></div>
    </div>
    
    <div class="container mx-auto px-0 sm:px-0 relative z-10 w-full">
      <!-- Section header -->
      <div class="mb-12">
        <div class="flex items-center gap-2 mb-2">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <h2 class="text-3xl font-bold text-odyssey-green mb-2">
          // Professional_Journey.log
        </h2>
        <div class="w-32 h-0.5 bg-odyssey-blue mb-4"></div>
        <p class="text-odyssey-text-secondary">
          // My path from developer to tech lead, delivering impact across multiple industries.
        </p>
      </div>

      <!-- Terminal log container -->
      <div class="bg-odyssey-terminal border border-odyssey-border overflow-hidden shadow-2xl font-mono" style="border-radius:0;">
        <!-- Terminal header -->
        <div class="px-4 py-2 bg-odyssey-terminal-header border-b border-odyssey-border flex items-center font-mono" style="border-radius:0;">
          <div class="flex items-center gap-1.5">
            <span class="text-xs text-green-400">user@portfolio</span>
            <span class="text-xs text-odyssey-text-secondary">:</span>
            <span class="text-xs text-green-400">~</span>
            <span class="text-xs text-odyssey-text-secondary">$</span>
          </div>
          <span class="ml-2 text-odyssey-text font-mono">view_professional_journey --sorted<span class="animate-blink">|</span></span>
        </div>
        
        <!-- Terminal content -->
        <div class="p-4 md:p-6 space-y-8">
          <!-- Experience entries -->
          <div v-for="(experience, index) in sortedExperiences" :key="index" class="experience-entry">
            <div class="flex items-start gap-3 mb-3">
              <div class="text-odyssey-blue font-bold">></div>
              <div>
                <h3 class="text-lg font-bold text-odyssey-green">{{ experience.role }}</h3>
                <div class="flex flex-wrap items-center gap-2 text-xs text-odyssey-text-secondary mt-1">
                  <span class="font-semibold">{{ experience.company }}</span>
                  <span>•</span>
                  <span>{{ experience.location }}</span>
                  <span>•</span>
                  <span class="text-odyssey-blue">{{ experience.startDate }} – {{ experience.endDate }}</span>
                </div>
              </div>
            </div>
            
            <div class="ml-6 pl-3 border-l border-odyssey-border/30 space-y-3">
              <!-- Achievements -->
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <Icon name="mdi:star" class="text-yellow-400 w-4 h-4" />
                  <span class="text-odyssey-text font-semibold">Key Achievements:</span>
                </div>
                <ul class="space-y-2">
                  <li v-for="(achievement, achIndex) in experience.achievements" :key="achIndex" class="flex items-start gap-2 text-odyssey-text">
                    <span class="text-odyssey-green mt-1">•</span>
                    <span>{{ achievement }}</span>
                  </li>
                </ul>
              </div>
              
              <!-- Skills -->
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <Icon name="mdi:code-tags" class="text-cyan-400 w-4 h-4" />
                  <span class="text-odyssey-text font-semibold">Technologies & Skills:</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="(skill, skillIndex) in experience.skills"
                    :key="skillIndex"
                    class="skill-tag px-2.5 py-1 bg-odyssey-dark/50 border border-odyssey-border text-xs text-odyssey-text rounded hover:bg-odyssey-blue/10 hover:border-odyssey-blue/30 transition-colors"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Career stats summary -->
          <div class="pt-6 border-t border-odyssey-border/30">
            <div class="flex items-center gap-2 mb-4">
              <Icon name="mdi:chart-line" class="text-emerald-400 w-5 h-5" />
              <span class="text-odyssey-text font-semibold">Career Summary:</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="stat-card p-4 bg-odyssey-dark/30 border border-odyssey-border rounded text-center">
                <div class="text-2xl font-bold text-odyssey-green">6+</div>
                <div class="text-xs text-odyssey-text-secondary uppercase tracking-wider">Years Experience</div>
              </div>
              <div class="stat-card p-4 bg-odyssey-dark/30 border border-odyssey-border rounded text-center">
                <div class="text-2xl font-bold text-odyssey-blue">15+</div>
                <div class="text-xs text-odyssey-text-secondary uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div class="stat-card p-4 bg-odyssey-dark/30 border border-odyssey-border rounded text-center">
                <div class="text-2xl font-bold text-purple-400">3</div>
                <div class="text-xs text-odyssey-text-secondary uppercase tracking-wider">Leadership Roles</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Terminal footer -->
        <div class="px-4 py-2 bg-odyssey-terminal-header border-t border-odyssey-border text-xs text-odyssey-text-secondary font-mono" style="border-radius:0;">
          <div class="flex items-center gap-4">
            <span class="text-green-400">user@portfolio</span><span class="text-odyssey-text-secondary">:</span><span class="text-green-400">~</span><span class="text-odyssey-text-secondary">$</span>
            <span class="text-odyssey-text-secondary"># End of log. Press any key to continue...</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  skills: string[];
}
const experiences = ref<Experience[]>([
  {
    role: 'Tech Lead',
    company: 'DabaDoc',
    location: 'Casablanca, Morocco',
    startDate: 'Jan 2024',
    endDate: 'Present',
    achievements: [
      'Led a team of engineers in developing innovative healthcare web and mobile applications across Africa and the Middle East.',
      'Successfully reduced page load times by 40%, improving site performance and user satisfaction.',
      'Introduced Agile methodologies and Scrum practices, enhancing team collaboration and project delivery speed.',
      'Spearheaded cloud infrastructure migration to AWS, reducing operational costs by 15%.'
    ],
    skills: ['Team Leadership', 'Healthcare Tech', 'Agile & Scrum', 'AWS', 'Performance Optimization']
  },
  {
    role: 'Full-stack Developer',
    company: 'DabaDoc',
    location: 'Casablanca, Morocco',
    startDate: 'Apr 2022',
    endDate: 'Dec 2023',
    achievements: [
      'Collaborated with product and design teams to develop new features, improving user engagement by 25%.',
      'Utilized Ruby on Rails, MongoDB, AngularJS, and Tailwind to build responsive web applications.',
      'Implemented cloud-based deployments on AWS and Heroku, ensuring seamless scalability and uptime.'
    ],
    skills: ['Ruby on Rails', 'MongoDB', 'AngularJS', 'Tailwind CSS', 'AWS', 'Heroku']
  },
  {
    role: 'Software Engineer',
    company: 'Majorel',
    location: 'Casablanca, Morocco',
    startDate: 'May 2020',
    endDate: 'Apr 2022',
    achievements: [
      'Worked on both front-end and back-end development for various clients, delivering comprehensive web solutions.',
      'Collaborated with cross-functional teams to implement scalable and efficient systems, ensuring seamless user experiences.'
    ],
    skills: ['Full-stack Development', 'Cross-functional Collaboration', 'Scalable Systems']
  },
  {
    role: 'Full-stack Developer',
    company: 'Majorel',
    location: 'Casablanca, Morocco',
    startDate: 'Mar 2018',
    endDate: 'Apr 2020',
    achievements: [
      "Developed websites for Solocal's clients from Morocco while Solocal was based in France.",
      'Gained valuable experience in remote collaboration and international project management.'
    ],
    skills: ['Web Development', 'Remote Collaboration', 'International Projects']
  }
])
const sortedExperiences = computed(() => {
  return [...experiences.value].sort((a, b) => {
    const dateA = new Date(a.startDate === 'Present' ? new Date() : a.startDate)
    const dateB = new Date(b.startDate === 'Present' ? new Date() : b.startDate)
    return dateB.getTime() - dateA.getTime()
  })
})
</script>

<style scoped>
/* "Digital Odyssey" theme colors */
.bg-odyssey-dark { background-color: #0a0e17; } /* Deep space */
.bg-odyssey-terminal { background-color: #0f1421; } /* Terminal background */
.bg-odyssey-terminal-header { background-color: #151b2b; } /* Terminal header */
.border-odyssey-border { border-color: #2a334c; }
.text-odyssey-text { color: #c0c7d9; } /* Main text */
.text-odyssey-text-secondary { color: #7d87a5; } /* Secondary text */
.text-odyssey-green { color: #4ade80; } /* Success/Accent green */
.text-odyssey-blue { color: #60a5fa; } /* Info/Accent blue */

/* Font */
.font-mono {
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
}

/* Starfield background */
.starfield {
  background-image: 
    radial-gradient(2px 2px at 20px 30px, #4ade80, transparent),
    radial-gradient(2px 2px at 40px 70px, #60a5fa, transparent),
    radial-gradient(1px 1px at 90px 40px, #7d87a5, transparent),
    radial-gradient(1px 1px at 130px 80px, #4ade80, transparent),
    radial-gradient(2px 2px at 40px 120px, #c0c7d9, transparent);
  background-repeat: repeat;
  background-size: 200px 200px;
  width: 100%;
  height: 100%;
  animation: drift 120s linear infinite;
}
@keyframes drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(200px, 200px); }
}

/* Floating data particles */
.data-particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #4ade80;
  border-radius: 2px;
  animation: particle-float 25s ease-in-out infinite;
  opacity: 0.3;
  box-shadow: 0 0 8px #4ade80;
}
.particle-1 { top: 20%; left: 15%; animation-delay: 0s; }
.particle-2 { bottom: 30%; right: 20%; animation-delay: 8s; }
.particle-3 { top: 60%; right: 10%; animation-delay: 16s; }
@keyframes particle-float {
  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
  25% { transform: translateY(-40px) translateX(20px); opacity: 0.7; }
  50% { transform: translateY(20px) translateX(-30px); opacity: 0.5; }
  75% { transform: translateY(-30px) translateX(40px); opacity: 0.6; }
}

/* Terminal elements */
.skill-tag {
  transition: all 0.2s ease;
}
.skill-tag:hover {
  transform: translateY(-2px);
}

/* Experience entry styling */
.experience-entry {
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
}
.experience-entry:nth-child(1) { animation-delay: 0.1s; }
.experience-entry:nth-child(2) { animation-delay: 0.3s; }
.experience-entry:nth-child(3) { animation-delay: 0.5s; }
.experience-entry:nth-child(4) { animation-delay: 0.7s; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Stat cards */
.stat-card {
  transition: all 0.3s ease;
}
.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border-color: #4ade80;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .ml-6 {
    margin-left: 0;
  }
  .pl-3 {
    padding-left: 0;
  }
  .border-l {
    border-left-width: 0;
  }
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-blink {
  animation: blink 1s steps(2, start) infinite;
}
</style>