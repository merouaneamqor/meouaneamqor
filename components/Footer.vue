<template>
  <footer class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 border-t border-slate-700/50 relative overflow-hidden">
    <!-- Subtle Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="footer-grid-pattern"></div>
    </div>
    
    <!-- Floating Footer Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="footer-element element-1"></div>
      <div class="footer-element element-2"></div>
    </div>

    <div class="container mx-auto px-6 py-16 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <!-- About Section -->
        <div class="lg:col-span-2">
          <div class="mb-6">
            <h2 class="text-2xl font-bold mb-4 text-white professional-glow">
              Merouane Amqor
            </h2>
            <div class="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mb-4"></div>
          </div>
          
          <p class="text-slate-300 mb-6 leading-relaxed max-w-md">
            Ruby on Rails Developer | Tech Lead | Certified ScrumMaster® based in Casablanca, Morocco. 
            Building innovative solutions and leading high-performing teams.
          </p>
          
          <!-- Status Indicator -->
          <div class="flex items-center gap-3 mb-6">
            <div class="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <span class="text-sm font-medium text-slate-400">Available for new opportunities</span>
          </div>

          <!-- Newsletter Signup -->
          <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-600/30 rounded-lg p-4">
            <h3 class="text-sm font-semibold text-slate-200 mb-2 uppercase tracking-wider">
              Stay Connected
            </h3>
            <p class="text-xs text-slate-400 mb-3">
              Get updates on new projects and tech insights
            </p>
            <div class="flex gap-2">
              <input 
                type="email" 
                placeholder="your@email.com"
                class="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
              >
              <button class="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-medium rounded hover:from-emerald-600 hover:to-cyan-600 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <!-- Navigation Section -->
        <div>
          <h3 class="text-lg font-bold mb-6 text-white flex items-center gap-2">
            <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
            Quick Links
          </h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.url">
              <NuxtLink
                :to="link.url"
                class="footer-link group flex items-center gap-2"
              >
                <div class="w-1 h-1 bg-slate-500 rounded-full group-hover:bg-emerald-400 transition-colors"></div>
                <span>{{ link.text }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact & Social Section -->
        <div>
          <h3 class="text-lg font-bold mb-6 text-white flex items-center gap-2">
            <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
            Get In Touch
          </h3>
          
          <!-- Contact Info -->
          <ul class="space-y-4 mb-8">
            <li>
              <a
                href="mailto:marouane.amqor@gmail.com"
                class="footer-contact-link group"
              >
                <div class="contact-icon">
                  <Mail class="w-4 h-4" />
                </div>
                <div>
                  <div class="text-xs text-slate-500 uppercase tracking-wider">Email</div>
                  <div class="text-sm font-medium">marouane.amqor@gmail.com</div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="tel:+212701086726"
                class="footer-contact-link group"
              >
                <div class="contact-icon">
                  <Phone class="w-4 h-4" />
                </div>
                <div>
                  <div class="text-xs text-slate-500 uppercase tracking-wider">Phone</div>
                  <div class="text-sm font-medium">+212 7 01 086 726</div>
                </div>
              </a>
            </li>
            <li class="footer-contact-link">
              <div class="contact-icon">
                <MapPin class="w-4 h-4" />
              </div>
              <div>
                <div class="text-xs text-slate-500 uppercase tracking-wider">Location</div>
                <div class="text-sm font-medium">Casablanca, Morocco</div>
              </div>
            </li>
          </ul>

          <!-- Social Media -->
          <div>
            <h4 class="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div class="flex gap-3">
              <a
                href="https://linkedin.com/in/merouane-amqor"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link linkedin-link"
                title="LinkedIn"
              >
                <Linkedin class="w-5 h-5" />
              </a>
              <a
                href="https://github.com/merouaneamqor"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link github-link"
                title="GitHub"
              >
                <Github class="w-5 h-5" />
              </a>
              <a
                href="https://douq.ma/about"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link website-link"
                title="Douq.ma"
              >
                <Globe class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="mt-16 pt-8 border-t border-slate-700/50">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="flex items-center gap-4">
            <p class="text-slate-500 text-sm">
              © {{ new Date().getFullYear() }} Merouane Amqor. All rights reserved.
            </p>
            <div class="hidden md:flex items-center gap-2">
              <div class="w-1 h-1 bg-slate-600 rounded-full"></div>
              <span class="text-xs text-slate-600">Built with Vue.js & Nuxt.js</span>
            </div>
          </div>
          
          <!-- Back to Top -->
          <button 
            @click="scrollToTop"
            class="back-to-top-btn group"
            title="Back to top"
          >
            <svg class="w-4 h-4 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
            <span class="text-xs">Top</span>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-vue-next'

const quickLinks = [
  { text: 'Home', url: '/' },
  { text: 'Portfolio', url: '/portfolio' },
  { text: 'About', url: '/about' },
  { text: 'Contact', url: '/contact' },
  { text: 'Blog', url: '/blog' }
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
/* Background Grid Pattern */
.footer-grid-pattern {
  background-image: 
    linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
  background-size: 200px 200px;
  width: 100%;
  height: 100%;
  animation: footer-grid-drift 150s linear infinite;
}

@keyframes footer-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(200px, 200px); }
}

/* Floating Footer Elements */
.footer-element {
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2));
  border-radius: 50%;
  animation: footer-float 40s ease-in-out infinite;
}

.element-1 { top: 30%; left: 20%; animation-delay: 0s; }
.element-2 { bottom: 40%; right: 25%; animation-delay: 20s; }

@keyframes footer-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
  50% { transform: translateY(-30px) rotate(180deg); opacity: 0.6; }
}

/* Professional Glow Effect */
.professional-glow {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

/* Footer Links */
.footer-link {
  color: rgb(203, 213, 225);
  transition: all 0.2s;
  font-weight: 500;
}

.footer-link:hover {
  color: rgb(16, 185, 129);
  transform: translateX(4px);
}

/* Contact Links */
.footer-contact-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgb(203, 213, 225);
  transition: all 0.2s;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.footer-contact-link:hover {
  background-color: rgba(51, 65, 85, 0.3);
  transform: translateX(4px);
}

.contact-icon {
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(51, 65, 85, 0.5);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(148, 163, 184);
  transition: all 0.2s;
  flex-shrink: 0;
}

.footer-contact-link:hover .contact-icon {
  background-color: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
  color: rgb(16, 185, 129);
}

/* Social Links */
.social-link {
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(51, 65, 85, 0.5);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(148, 163, 184);
  transition: all 0.3s;
}

.social-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.linkedin-link:hover {
  background-color: rgba(0, 119, 181, 0.1);
  border-color: rgba(0, 119, 181, 0.3);
  color: rgb(0, 119, 181);
}

.github-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

.website-link:hover {
  background-color: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
  color: rgb(16, 185, 129);
}

/* Back to Top Button */
.back-to-top-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background-color: rgba(51, 65, 85, 0.5);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: 0.5rem;
  color: rgb(148, 163, 184);
  transition: all 0.3s;
}

.back-to-top-btn:hover {
  background-color: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
  color: rgb(16, 185, 129);
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .lg\:col-span-2 {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .grid-cols-4 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .flex-col.md\:flex-row {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .md\:justify-between {
    justify-content: flex-start;
  }
}
</style>