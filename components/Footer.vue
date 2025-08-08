<template>
  <footer class="bg-transparent text-slate-700 border-t border-slate-200 relative">

    <div class="container mx-auto px-6 py-20 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <!-- Enhanced about section -->
        <div class="lg:col-span-2">
          <div class="mb-8">
            <h2 class="text-3xl font-bold mb-6 text-white professional-glow relative inline-block">
              <span class="relative z-10">Merouane Amqor</span>
              <span class="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent opacity-20">Merouane Amqor</span>
            </h2>
            <div class="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
          </div>
          
          <p class="text-slate-300 mb-8 leading-relaxed max-w-md text-lg">
            {{ t('footer.about_line1') }}
            {{ t('footer.about_line2') }}
          </p>
          
          <!-- Enhanced status indicator -->
          <div class="flex items-center gap-4 mb-10">
            <div class="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
            <span class="text-base font-medium text-slate-400">{{ t('footer.available') }}</span>
          </div>

          <!-- Enhanced newsletter signup -->
          <div class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 group/newsletter">
            <h3 class="text-lg font-bold text-slate-200 mb-3">
              {{ t('footer.stay_connected') }}
            </h3>
            <p class="text-sm text-slate-400 mb-5">
              {{ t('footer.newsletter_cta') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                :placeholder="t('common.email_placeholder')"
                class="flex-1 px-5 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-base text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
              >
              <button class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-base font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-emerald-500/20">
                {{ t('common.subscribe') }}
              </button>
            </div>
             
          </div>
        </div>

        <!-- Enhanced navigation section -->
        <div>
          <h3 class="text-xl font-bold mb-8 text-white flex items-center gap-3">
            <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
            {{ t('footer.quick_links') }}
          </h3>
          <ul class="space-y-4">
            <li v-for="link in quickLinks" :key="link.url">
              <NuxtLink
                :to="localePath(link.url)"
                class="footer-link group flex items-center gap-3 py-2"
              >
                <div class="w-2 h-2 bg-slate-500 rounded-full group-hover:bg-emerald-400 transition-colors"></div>
                <span class="text-base group-hover:text-emerald-300 transition-colors">{{ t(link.textKey) }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Enhanced contact & social section -->
        <div>
          <h3 class="text-xl font-bold mb-8 text-white flex items-center gap-3">
            <div class="w-3 h-3 bg-emerald-400 rounded-full"></div>
            {{ t('footer.get_in_touch') }}
          </h3>
          
          <!-- Enhanced contact info -->
          <ul class="space-y-5 mb-10">
            <li>
              <a
                href="mailto:marouane.amqor@gmail.com"
                class="footer-contact-link group"
              >
                <div class="contact-icon">
                  <Mail class="w-5 h-5" />
                </div>
                <div>
                  <div class="text-xs text-slate-500 uppercase tracking-wider">{{ t('common.email') }}</div>
                  <div class="text-base font-medium">marouane.amqor@gmail.com</div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="tel:+212701086726"
                class="footer-contact-link group"
              >
                <div class="contact-icon">
                  <Phone class="w-5 h-5" />
                </div>
                <div>
                  <div class="text-xs text-slate-500 uppercase tracking-wider">{{ t('common.phone') }}</div>
                  <div class="text-base font-medium">+212 7 01 086 726</div>
                </div>
              </a>
            </li>
            <li class="footer-contact-link">
              <div class="contact-icon">
                <MapPin class="w-5 h-5" />
              </div>
              <div>
                <div class="text-xs text-slate-500 uppercase tracking-wider">{{ t('common.location') }}</div>
                <div class="text-base font-medium">Casablanca, Morocco</div>
              </div>
            </li>
          </ul>

          <!-- Enhanced social media -->
          <div>
            <h4 class="text-lg font-bold text-slate-200 mb-5">
              {{ t('footer.connect') }}
            </h4>
            <div class="flex gap-4">
              <a
                href="https://linkedin.com/in/merouane-amqor"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link linkedin-link group/social"
                title="LinkedIn"
              >
                <Linkedin class="w-6 h-6" />
                 
              </a>
              <a
                href="https://github.com/merouaneamqor"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link github-link group/social"
                title="GitHub"
              >
                <Github class="w-6 h-6" />
                 
              </a>
              <a
                href="https://douq.ma/about"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link website-link group/social"
                title="Douq.ma"
              >
                <Globe class="w-6 h-6" />
                 
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced footer bottom -->
      <div class="mt-20 pt-10 border-t border-slate-700/50">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div class="flex flex-col sm:flex-row sm:items-center gap-4">
            <p class="text-slate-600 text-base">
              © {{ new Date().getFullYear() }} Merouane Amqor. {{ t('footer.rights') }}
            </p>
            <div class="hidden md:flex items-center gap-3">
              <div class="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
              <span class="text-sm text-slate-600">{{ t('footer.built_with') }}</span>
            </div>
          </div>
          
          <!-- Enhanced back to top -->
          <button 
            @click="scrollToTop"
            class="back-to-top-btn group"
            :title="t('footer.back_to_top')"
          >
            <svg class="w-5 h-5 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
            <span class="text-sm">{{ t('footer.back_to_top') }}</span>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-vue-next'
const { t } = useI18n()
const localePath = useLocalePath()

const quickLinks = [
  { textKey: 'nav.home', url: '/' },
  { textKey: 'nav.portfolio', url: '/portfolio' },
  { textKey: 'nav.about', url: '/about' },
  { textKey: 'nav.contact', url: '/contact' },
  { textKey: 'nav.blog', url: '/blog' }
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
/* Enhanced background grid pattern */
.footer-grid-pattern {
  background-image: 
    linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
  background-size: 220px 220px;
  width: 100%;
  height: 100%;
  animation: footer-grid-drift 160s linear infinite;
}

@keyframes footer-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(220px, 220px); }
}

/* Enhanced floating footer elements */
.footer-element {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, rgba(16, 185, 129, 0.5), rgba(6, 182, 212, 0.5));
  border-radius: 50%;
  animation: footer-float 35s ease-in-out infinite;
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
}

.element-1 { top: 25%; left: 15%; animation-delay: 0s; }
.element-2 { bottom: 35%; right: 20%; animation-delay: 15s; }
.element-3 { top: 45%; right: 25%; animation-delay: 25s; }

@keyframes footer-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
  50% { transform: translateY(-40px) rotate(180deg); opacity: 0.8; }
}

/* Professional glow effect */
.professional-glow {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.15);
}

/* Enhanced footer links */
.footer-link {
  color: rgb(203, 213, 225);
  transition: all 0.3s;
  font-weight: 500;
  position: relative;
  overflow: hidden;
}

.footer-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.footer-link:hover::before {
  transform: translateX(100%);
}

.footer-link:hover {
  color: rgb(16, 185, 129);
  transform: translateX(6px);
}

/* Enhanced contact links */
.footer-contact-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgb(203, 213, 225);
  transition: all 0.3s;
  padding: 0.75rem;
  border-radius: 0.75rem;
  position: relative;
  overflow: hidden;
}

.footer-contact-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.footer-contact-link:hover::before {
  transform: translateX(100%);
}

.footer-contact-link:hover {
  background-color: rgba(51, 65, 85, 0.4);
  transform: translateX(6px);
}

.contact-icon {
  width: 3rem;
  height: 3rem;
  background-color: rgba(51, 65, 85, 0.6);
  border: 1px solid rgba(71, 85, 105, 0.6);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(148, 163, 184);
  transition: all 0.3s;
  flex-shrink: 0;
}

.footer-contact-link:hover .contact-icon {
  background-color: rgba(16, 185, 129, 0.15);
  border-color: rgba(16, 185, 129, 0.4);
  color: rgb(16, 185, 129);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2);
}

/* Enhanced social links */
.social-link {
  width: 3.5rem;
  height: 3.5rem;
  background-color: rgba(51, 65, 85, 0.6);
  border: 1px solid rgba(71, 85, 105, 0.6);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(148, 163, 184);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.social-link:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.linkedin-link:hover {
  background-color: rgba(0, 119, 181, 0.15);
  border-color: rgba(0, 119, 181, 0.4);
  color: rgb(0, 119, 181);
  box-shadow: 0 6px 20px rgba(0, 119, 181, 0.2);
}

.github-link:hover {
  background-color: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
  color: white;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
}

.website-link:hover {
  background-color: rgba(16, 185, 129, 0.15);
  border-color: rgba(16, 185, 129, 0.4);
  color: rgb(16, 185, 129);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.2);
}

/* Enhanced back to top button */
.back-to-top-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: rgba(51, 65, 85, 0.6);
  border: 1px solid rgba(71, 85, 105, 0.6);
  border-radius: 0.75rem;
  color: rgb(148, 163, 184);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.back-to-top-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.back-to-top-btn:hover::before {
  transform: translateX(100%);
}

.back-to-top-btn:hover {
  background-color: rgba(16, 185, 129, 0.15);
  border-color: rgba(16, 185, 129, 0.4);
  color: rgb(16, 185, 129);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.2);
}

/* Responsive design */
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