<template>
  <section class="py-24 bg-ios-background-secondary font-myriad">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-ios-label mb-6 tracking-tight">{{ t('skills.title') }}</h2>
      <p class="text-xl sm:text-2xl text-ios-label-secondary mb-8 max-w-3xl mx-auto leading-relaxed font-light">
        {{ t('skills.subtitle') }}
      </p>
      <p class="text-base sm:text-lg text-ios-label-tertiary mb-16 max-w-2xl mx-auto leading-relaxed">
        {{ t('skills.description') }}
      </p>
    </div>
    
    <div class="max-w-6xl mx-auto px-6">
      <!-- Clean Skills Grid -->
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          
          <!-- Leadership & Team Management -->
          <div class="bg-ios-background border border-ios-separator rounded-3xl p-8 hover:bg-ios-background-secondary transition-colors duration-300">
            <h3 class="text-2xl font-semibold text-ios-label mb-6">{{ t('skills.leadership') }}</h3>
            <div class="space-y-4">
              <div v-for="skill in leadershipSkills" :key="skill.name" class="flex items-start gap-4">
                <span class="text-2xl">{{ skill.icon }}</span>
                <div>
                  <h4 class="text-lg font-medium text-ios-label mb-1">{{ skill.name }}</h4>
                  <p class="text-base text-ios-label-tertiary">{{ skill.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Technical Architecture -->
          <div class="bg-ios-background border border-ios-separator rounded-3xl p-8 hover:bg-ios-background-secondary transition-colors duration-300">
            <h3 class="text-2xl font-semibold text-ios-label mb-6">{{ t('skills.technical_architecture') }}</h3>
            <div class="space-y-4">
              <div v-for="skill in technicalSkills" :key="skill.name" class="flex items-start gap-4">
                <span class="text-2xl">{{ skill.icon }}</span>
                <div>
                  <h4 class="text-lg font-medium text-ios-label mb-1">{{ skill.name }}</h4>
                  <p class="text-base text-ios-label-tertiary">{{ skill.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Strategic Management -->
          <div class="bg-ios-background border border-ios-separator rounded-3xl p-8 hover:bg-ios-background-secondary transition-colors duration-300">
            <h3 class="text-2xl font-semibold text-ios-label mb-6">{{ t('skills.strategic_management') }}</h3>
            <div class="space-y-4">
              <div v-for="skill in strategicSkills" :key="skill.name" class="flex items-start gap-4">
                <span class="text-2xl">{{ skill.icon }}</span>
                <div>
                  <h4 class="text-lg font-medium text-ios-label mb-1">{{ skill.name }}</h4>
                  <p class="text-base text-ios-label-tertiary">{{ skill.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Business Development -->
          <div class="bg-ios-background border border-ios-separator rounded-3xl p-8 hover:bg-ios-background-secondary transition-colors duration-300">
            <h3 class="text-2xl font-semibold text-ios-label mb-6">{{ t('skills.business_development') }}</h3>
            <div class="space-y-4">
              <div v-for="skill in businessSkills" :key="skill.name" class="flex items-start gap-4">
                <span class="text-2xl">{{ skill.icon }}</span>
                <div>
                  <h4 class="text-lg font-medium text-ios-label mb-1">{{ skill.name }}</h4>
                  <p class="text-base text-ios-label-tertiary">{{ skill.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Professional Certifications -->
        <div class="mt-16 bg-ios-background border border-ios-separator rounded-3xl p-8">
          <div class="text-center mb-8">
            <h3 class="text-3xl font-semibold text-ios-label mb-4">{{ t('skills.certifications') }}</h3>
            <p class="text-lg text-ios-label-tertiary">{{ t('skills.certifications_desc') }}</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="cert in certifications" :key="cert.name" class="text-center">
              <div class="w-20 h-20 mx-auto mb-4 bg-ios-background-secondary rounded-2xl flex items-center justify-center">
                <span class="text-3xl">{{ cert.icon }}</span>
              </div>
              <h4 class="text-lg font-semibold text-ios-label mb-2">{{ cert.name }}</h4>
              <p class="text-base text-ios-label-secondary mb-2">{{ cert.issuer }}</p>
              <span class="inline-flex items-center px-3 py-1 bg-ios-background-secondary text-ios-label-tertiary text-sm rounded-full border border-ios-separator">
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
const { t } = useI18n()
// Leadership & Team Management
const leadershipSkills = [
  { 
    name: "Team Leadership", 
    icon: "👥", 
    description: "Leading cross-functional engineering teams of 8+ developers"
  },
  { 
    name: "Scrum Master", 
    icon: "🎯", 
    description: "Certified ScrumMaster® achieving 93% sprint success rate"
  },
  { 
    name: "Mentoring & Development", 
    icon: "🌱", 
    description: "Growing junior developers into senior engineers"
  },
  { 
    name: "Process Optimization", 
    icon: "⚡", 
    description: "Reducing development cycles by 30% through improved workflows"
  },
  { 
    name: "Strategic Planning", 
    icon: "🗺️", 
    description: "Aligning technical roadmaps with business objectives"
  }
]

// Strategic Management
const strategicSkills = [
  { 
    name: "Product Strategy", 
    icon: "🎯", 
    description: "Roadmap planning and feature prioritization for 10K+ users"
  },
  { 
    name: "Agile Methodology", 
    icon: "🔄", 
    description: "Implementing Scrum practices for continuous delivery"
  },
  { 
    name: "Stakeholder Alignment", 
    icon: "🤝", 
    description: "Bridging technical and business requirements"
  },
  { 
    name: "Performance Analytics", 
    icon: "📊", 
    description: "Data-driven decision making and team metrics"
  },
  { 
    name: "Resource Planning", 
    icon: "📋", 
    description: "Optimizing team capacity and project timelines"
  }
]

// Technical Architecture
const technicalSkills = [
  { 
    name: "Full-Stack Development", 
    icon: "💻", 
    description: "Ruby on Rails, React, Angular, Vue.js - end-to-end solutions"
  },
  { 
    name: "System Architecture", 
    icon: "🏗️", 
    description: "Clean architecture patterns that scale effortlessly"
  },
  { 
    name: "Cloud Infrastructure", 
    icon: "☁️", 
    description: "AWS deployment and optimization for high availability"
  },
  { 
    name: "Database Design", 
    icon: "🗃️", 
    description: "MongoDB, SQL - data models that perform beautifully"
  },
  { 
    name: "Modern Toolchain", 
    icon: "🛠️", 
    description: "Next.js, Nuxt.js, Tailwind CSS - cutting-edge development"
  }
]

// Business Development
const businessSkills = [
  { 
    name: "Healthcare Technology", 
    icon: "🏥", 
    description: "DabaDoc platform serving 10K+ monthly active users"
  },
  { 
    name: "E-commerce Solutions", 
    icon: "🛒", 
    description: "Scalable systems for marketplace and booking platforms"
  },
  { 
    name: "Client Success", 
    icon: "✨", 
    description: "Delivering measurable impact through software solutions"
  },
  { 
    name: "Innovation Leadership", 
    icon: "🚀", 
    description: "Driving technology adoption and digital transformation"
  },
  { 
    name: "Market Expansion", 
    icon: "🌍", 
    description: "Building solutions that scale across international markets"
  }
]

// Professional Certifications
const certifications = [
  {
    name: "Certified ScrumMaster®",
    issuer: "Scrum Alliance",
    icon: "🏆",
    year: "2021"
  },
  {
    name: "AWS Machine Learning Foundations",
    issuer: "Amazon Web Services",
    icon: "☁️",
    year: "2021"
  },
  {
    name: "Master's in Software Engineering",
    issuer: "SUPEMIR",
    icon: "🎓",
    year: "2023"
  }
]
</script>

<style scoped>
/* Clean iOS-style minimal styles */
</style>