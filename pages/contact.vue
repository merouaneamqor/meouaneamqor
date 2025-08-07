<template>
  <section id="contact" class="py-20 bg-ios-background font-myriad relative overflow-hidden min-h-screen">
    <!-- Subtle Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="contact-grid-pattern"></div>
    </div>
    
    <!-- Floating Contact Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="contact-element element-1"></div>
      <div class="contact-element element-2"></div>
      <div class="contact-element element-3"></div>
    </div>

    <div class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-semibold text-ios-label mb-4 tracking-tight">
          Let's Connect
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-ios-system-blue via-ios-system-purple to-ios-system-blue rounded-full mx-auto mb-6"></div>
        <p class="text-ios-label-secondary text-lg max-w-2xl mx-auto leading-relaxed">
          Ready to collaborate on your next project? Whether you need a tech lead, want to discuss 
          opportunities, or just want to connect, I'd love to hear from you.
        </p>
      </div>

      <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
        
        <!-- Contact Information -->
        <div class="mb-12 lg:mb-0">
          <!-- Contact Methods -->
          <div class="space-y-6 mb-12">
            <div class="contact-method-card group">
              <a href="mailto:marouane.amqor@gmail.com" class="contact-method-link">
                <div class="contact-icon email-icon">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div class="contact-info">
                  <h3 class="contact-title">Email</h3>
                  <p class="contact-detail">marouane.amqor@gmail.com</p>
                  <p class="contact-description">Best for detailed discussions and project inquiries</p>
                </div>
                <div class="contact-arrow">
                  <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </div>
              </a>
            </div>

            <div class="contact-method-card group">
              <a href="tel:+212701086726" class="contact-method-link">
                <div class="contact-icon phone-icon">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div class="contact-info">
                  <h3 class="contact-title">Phone</h3>
                  <p class="contact-detail">+212 7 01 086 726</p>
                  <p class="contact-description">Available for urgent matters and quick calls</p>
                </div>
                <div class="contact-arrow">
                  <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </div>
              </a>
            </div>

            <div class="contact-method-card group">
              <a href="https://linkedin.com/in/merouane-amqor" target="_blank" rel="noopener noreferrer" class="contact-method-link">
                <div class="contact-icon linkedin-icon">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div class="contact-info">
                  <h3 class="contact-title">LinkedIn</h3>
                  <p class="contact-detail">Professional Network</p>
                  <p class="contact-description">Connect for professional opportunities</p>
                </div>
                <div class="contact-arrow">
                  <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </div>
              </a>
            </div>

            <div class="contact-method-card group">
              <a href="https://github.com/merouaneamqor" target="_blank" rel="noopener noreferrer" class="contact-method-link">
                <div class="contact-icon github-icon">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div class="contact-info">
                  <h3 class="contact-title">GitHub</h3>
                  <p class="contact-detail">Code Repository</p>
                  <p class="contact-description">Explore my projects and contributions</p>
                </div>
                <div class="contact-arrow">
                  <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <!-- Availability Status -->
          <div class="availability-card">
            <div class="bg-ios-background-secondary backdrop-blur-sm border border-ios-separator rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-3 h-3 bg-ios-system-green rounded-full animate-pulse"></div>
                <h3 class="text-lg font-semibold text-ios-label">Current Availability</h3>
              </div>
              <p class="text-ios-label-secondary text-sm leading-relaxed mb-4">
                I'm currently available for new opportunities and interesting projects. 
                Response time is typically within 24 hours.
              </p>
              <div class="flex items-center gap-2 text-xs text-ios-label-tertiary">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Timezone: GMT+1 (Casablanca, Morocco)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form-container">
          <div class="bg-ios-background-secondary backdrop-blur-sm border border-ios-separator rounded-xl overflow-hidden">
            <div class="bg-ios-background/50 p-6 border-b border-ios-separator">
              <h3 class="text-2xl font-semibold text-ios-label mb-2">Send a Message</h3>
              <p class="text-ios-label-tertiary text-sm">Fill out the form below and I'll get back to you soon</p>
            </div>
            
            <div class="p-8">
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="form-group">
                  <label for="name" class="form-label">
                    Full Name
                    <span class="text-ios-system-red">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    required 
                    class="form-input"
                    placeholder="Enter your full name"
                  >
                </div>

                <div class="form-group">
                  <label for="email" class="form-label">
                    Email Address
                    <span class="text-ios-system-red">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    required 
                    class="form-input"
                    placeholder="your@email.com"
                  >
                </div>

                <div class="form-group">
                  <label for="subject" class="form-label">
                    Subject
                  </label>
                  <select 
                    id="subject" 
                    v-model="form.subject" 
                    class="form-input"
                  >
                    <option value="">Select a subject</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="opportunity">Job Opportunity</option>
                    <option value="consulting">Consulting Inquiry</option>
                    <option value="mentoring">Mentoring Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="message" class="form-label">
                    Message
                    <span class="text-ios-system-red">*</span>
                  </label>
                  <textarea 
                    id="message" 
                    v-model="form.message" 
                    rows="5" 
                    required 
                    class="form-input resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <div class="form-group">
                  <button 
                    type="submit" 
                    :disabled="isSubmitting"
                    class="submit-button group"
                  >
                    <span v-if="!isSubmitting" class="flex items-center gap-2">
                      Send Message
                      <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                    </span>
                    <span v-else class="flex items-center gap-2">
                      <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  </button>
                </div>
              </form>

              <!-- Success Message -->
              <div v-if="showSuccess" class="success-message">
                <div class="bg-ios-system-green/10 border border-ios-system-green/30 rounded-lg p-4 flex items-center gap-3">
                  <div class="w-8 h-8 bg-ios-system-green rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-ios-system-green font-semibold">Message Sent Successfully!</h4>
                    <p class="text-ios-system-green text-sm">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', form.value)
    
    // Show success message
    showSuccess.value = true
    
    // Reset form after submission
    form.value = { name: '', email: '', subject: '', message: '' }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* iOS-style Background Grid Pattern */
.contact-grid-pattern {
  background-image: 
    linear-gradient(rgba(142, 142, 147, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(142, 142, 147, 0.08) 1px, transparent 1px);
  background-size: 220px 220px;
  width: 100%;
  height: 100%;
  animation: contact-grid-drift 250s linear infinite;
}

@keyframes contact-grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(220px, 220px); }
}

/* iOS-style Floating Elements */
.contact-element {
  position: absolute;
  width: 6px;
  height: 6px;
  background: linear-gradient(45deg, rgba(0, 122, 255, 0.3), rgba(88, 86, 214, 0.3));
  border-radius: 50%;
  animation: contact-element-float 45s ease-in-out infinite;
}

.element-1 { top: 25%; left: 20%; animation-delay: 0s; }
.element-2 { top: 65%; right: 25%; animation-delay: 15s; }
.element-3 { bottom: 35%; left: 30%; animation-delay: 30s; }

@keyframes contact-element-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-60px) rotate(180deg); opacity: 0.8; }
}

/* iOS-style Contact Method Cards */
.contact-method-card {
  background: rgba(242, 242, 247, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(174, 174, 178, 0.3);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.contact-method-card:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(174, 174, 178, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.contact-method-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  color: var(--ios-label);
  text-decoration: none;
}

.contact-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s;
}

.email-icon {
  background: linear-gradient(135deg, rgba(52, 199, 89, 0.1), rgba(52, 199, 89, 0.2));
  border: 1px solid rgba(52, 199, 89, 0.3);
  color: rgb(52, 199, 89);
}

.phone-icon {
  background: linear-gradient(135deg, rgba(0, 122, 255, 0.1), rgba(0, 122, 255, 0.2));
  border: 1px solid rgba(0, 122, 255, 0.3);
  color: rgb(0, 122, 255);
}

.linkedin-icon {
  background: linear-gradient(135deg, rgba(0, 119, 181, 0.1), rgba(0, 119, 181, 0.2));
  border: 1px solid rgba(0, 119, 181, 0.3);
  color: rgb(0, 119, 181);
}

.github-icon {
  background: linear-gradient(135deg, rgba(28, 28, 30, 0.1), rgba(28, 28, 30, 0.2));
  border: 1px solid rgba(28, 28, 30, 0.3);
  color: rgb(28, 28, 30);
}

.contact-info {
  flex: 1;
}

.contact-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--ios-label);
  margin-bottom: 0.25rem;
}

.contact-detail {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--ios-label-secondary);
  margin-bottom: 0.25rem;
}

.contact-description {
  font-size: 0.75rem;
  color: var(--ios-label-tertiary);
}

.contact-arrow {
  color: var(--ios-label-tertiary);
}

/* Form Styles */
.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--ios-label);
  margin-bottom: 0.5rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(174, 174, 178, 0.3);
  border-radius: 0.75rem;
  color: var(--ios-label);
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.form-input::placeholder {
  color: var(--ios-label-tertiary);
}

.form-input:focus {
  outline: none;
  border-color: rgb(0, 122, 255);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
  background: rgba(255, 255, 255, 0.95);
}

.submit-button {
  width: 100%;
  padding: 0.875rem 1.5rem;
  background: rgb(0, 122, 255);
  border: none;
  border-radius: 0.75rem;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.submit-button:hover:not(:disabled) {
  background: rgb(0, 100, 210);
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.3);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  margin-top: 1.5rem;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .lg\:grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .lg\:gap-12 {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .contact-method-link {
    padding: 1rem;
  }
  
  .contact-icon {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>