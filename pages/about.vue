<template>
  <section class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden min-h-screen">
    <!-- Subtle Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="about-grid-pattern"></div>
    </div>
    
    <!-- Floating About Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="about-element element-1"></div>
      <div class="about-element element-2"></div>
      <div class="about-element element-3"></div>
      <div class="about-element element-4"></div>
    </div>

    <div class="container mx-auto px-6 lg:px-8 max-w-4xl relative z-10">
      
      <!-- Profile Header -->
      <div class="flex flex-col items-center text-center mb-16">
        <!-- Avatar with Holographic Effect -->
        <div class="relative mb-8">
          <!-- Holographic Rings -->
          <div class="absolute inset-0 w-40 h-40 rounded-full border border-slate-600/30 animate-spin-slow"></div>
          <div class="absolute inset-2 w-36 h-36 rounded-full border border-cyan-400/20 animate-spin-reverse"></div>
          
          <!-- Avatar Container -->
          <div class="relative w-32 h-32 rounded-full overflow-hidden border-4 border-slate-500/50 shadow-2xl shadow-slate-900/50">
            <img 
              class="w-full h-full object-cover filter brightness-110 contrast-110" 
              src="/assets/images/me.jpeg" 
              alt="Merouane Amqor"
            >
            <!-- Holographic Overlay -->
            <div class="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-emerald-400/10"></div>
          </div>
          
          <!-- Status Indicator -->
          <div class="absolute -bottom-1 -right-1 bg-emerald-500 w-6 h-6 rounded-full border-3 border-slate-800 flex items-center justify-center">
            <div class="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
          </div>
        </div>

        <!-- Name and Title -->
        <h1 class="text-4xl lg:text-5xl font-bold text-white mb-4 professional-glow">
          Merouane Amqor
        </h1>
        <div class="text-lg lg:text-xl text-slate-300 font-medium mb-4 tracking-wide">
          Ruby on Rails Developer • Tech Lead • Certified ScrumMaster®
        </div>
        
        <!-- Location Badge -->
        <div class="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-full text-slate-300 mb-6">
          <svg class="w-4 h-4 mr-2 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116 8a8.001 8.001 0 01-1.343 8.657z"/>
          </svg>
          Casablanca, Morocco
        </div>

        <!-- Introduction -->
        <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-xl p-8 max-w-3xl">
          <p class="text-slate-300 leading-relaxed text-lg">
            I'm a full-stack developer specializing in Ruby on Rails with a passion for building 
            fast, scalable applications. I combine clean code practices with strong product thinking 
            and leadership skills. As a Certified ScrumMaster® and startup co-founder, I bring both 
            technical expertise and business acumen to every project.
          </p>
        </div>
      </div>

      <!-- Professional Journey Sections -->
      <div class="space-y-12 mb-16">
        
        <!-- Professional Journey -->
        <div class="journey-section">
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">Professional Journey</h3>
                <p class="text-slate-400 text-sm">From developer to tech leader</p>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="journey-card">
                <div class="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-lg p-6">
                  <h4 class="font-semibold text-white mb-3 flex items-center gap-2">
                    <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Current Role
                  </h4>
                  <p class="text-slate-300 text-sm leading-relaxed">
                    Leading engineering teams at DabaDoc, driving innovation in healthcare technology 
                    across Africa and the Middle East. Focused on scalable architecture and team growth.
                  </p>
                </div>
              </div>
              
              <div class="journey-card">
                <div class="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-lg p-6">
                  <h4 class="font-semibold text-white mb-3 flex items-center gap-2">
                    <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Entrepreneurship
                  </h4>
                  <p class="text-slate-300 text-sm leading-relaxed">
                    Co-founded multiple startups including Meram/Texam and Douq.ma, combining 
                    technical leadership with business strategy and product development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mentoring -->
        <div class="mentoring-section">
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">Mentoring & Knowledge Sharing</h3>
                <p class="text-slate-400 text-sm">Empowering the next generation</p>
              </div>
            </div>
            
            <div class="space-y-4">
              <p class="text-slate-300 leading-relaxed">
                I'm passionate about mentoring developers and entrepreneurs, sharing practical insights 
                on using technology to solve real-world problems. My approach focuses on:
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="mentoring-point">
                  <div class="flex items-center gap-2 mb-2">
                    <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span class="text-white font-medium text-sm">Technical Growth</span>
                  </div>
                  <p class="text-slate-400 text-xs">Code quality, architecture, and best practices</p>
                </div>
                
                <div class="mentoring-point">
                  <div class="flex items-center gap-2 mb-2">
                    <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span class="text-white font-medium text-sm">Leadership Skills</span>
                  </div>
                  <p class="text-slate-400 text-xs">Team management and agile methodologies</p>
                </div>
                
                <div class="mentoring-point">
                  <div class="flex items-center gap-2 mb-2">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span class="text-white font-medium text-sm">Product Thinking</span>
                  </div>
                  <p class="text-slate-400 text-xs">Business strategy and user-focused development</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Aspirations -->
        <div class="aspirations-section">
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">Vision & Aspirations</h3>
                <p class="text-slate-400 text-sm">Building the future of technology</p>
              </div>
            </div>
            
            <div class="space-y-6">
              <p class="text-slate-300 leading-relaxed">
                I'm passionate about technology innovation and committed to building products that create 
                meaningful impact. My vision extends beyond code to encompass:
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="aspiration-card">
                  <div class="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-lg p-6">
                    <h4 class="font-semibold text-white mb-3">Innovation Leadership</h4>
                    <p class="text-slate-300 text-sm leading-relaxed">
                      Driving technological advancement in emerging markets, particularly in healthcare 
                      and e-commerce sectors across Africa and the Middle East.
                    </p>
                  </div>
                </div>
                
                <div class="aspiration-card">
                  <div class="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-lg p-6">
                    <h4 class="font-semibold text-white mb-3">Social Impact</h4>
                    <p class="text-slate-300 text-sm leading-relaxed">
                      Creating technology solutions that solve real problems and improve lives, 
                      with a focus on accessibility and sustainable development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Actions -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-white mb-8 professional-glow">Let's Connect</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="mailto:marouane.amqor@gmail.com" 
            class="contact-action-btn email-btn group"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>Email</span>
          </a>
          
          <a 
            href="tel:+212701086726" 
            class="contact-action-btn phone-btn group"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>Phone</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/merouane-amqor" 
            target="_blank" 
            rel="noopener noreferrer"
            class="contact-action-btn linkedin-btn group"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          
          <a 
            href="https://github.com/merouaneamqor" 
            target="_blank" 
            rel="noopener noreferrer"
            class="contact-action-btn github-btn group"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
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
.about-grid-pattern {
  background-image: 
    linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
  background-size: 180px 180px;
  width: 100%;
  height: 100%;
  animation: about-page-grid-drift 200s linear infinite;
}

@keyframes about-page-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(180px, 180px); }
}

/* Floating About Elements */
.about-element {
  position: absolute;
  width: 5px;
  height: 5px;
  background: linear-gradient(45deg, rgba(16, 185, 129, 0.3), rgba(6, 182, 212, 0.3));
  border-radius: 50%;
  animation: about-element-float 35s ease-in-out infinite;
}

.element-1 { top: 20%; left: 15%; animation-delay: 0s; }
.element-2 { top: 60%; right: 20%; animation-delay: 8s; }
.element-3 { bottom: 30%; left: 25%; animation-delay: 17s; }
.element-4 { top: 40%; right: 30%; animation-delay: 25s; }

@keyframes about-element-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-50px) rotate(180deg); opacity: 0.7; }
}

/* Professional Glow Effect */
.professional-glow {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

/* Spinning Animations for Avatar */
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spin-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-spin-reverse {
  animation: spin-reverse 30s linear infinite;
}

/* Journey Cards */
.journey-card:hover,
.aspiration-card:hover {
  transform: translateY(-2px);
}

.journey-card .bg-slate-700\/30,
.aspiration-card .bg-slate-700\/30 {
  transition: all 0.3s;
}

.journey-card:hover .bg-slate-700\/30,
.aspiration-card:hover .bg-slate-700\/30 {
  background-color: rgba(51, 65, 85, 0.5);
  border-color: rgba(100, 116, 139, 0.5);
}

/* Contact Action Buttons */
.contact-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: rgba(51, 65, 85, 0.5);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(71, 85, 105, 0.5);
  color: rgb(203, 213, 225);
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.contact-action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.email-btn:hover {
  background-color: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
  color: rgb(16, 185, 129);
}

.phone-btn:hover {
  background-color: rgba(6, 182, 212, 0.1);
  border-color: rgba(6, 182, 212, 0.3);
  color: rgb(6, 182, 212);
}

.linkedin-btn:hover {
  background-color: rgba(0, 119, 181, 0.1);
  border-color: rgba(0, 119, 181, 0.3);
  color: rgb(0, 119, 181);
}

.github-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .flex-wrap {
    flex-direction: column;
    align-items: center;
  }
}
</style>