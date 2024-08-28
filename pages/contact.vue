<template>
  <section id="contact" class="py-16 bg-gradient-to-br from-gray-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div>
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
            Connect with Merouane AMQOR
          </h2>
          <p class="text-xl text-gray-500 mb-8">
            Seeking to transform your tech challenges with innovative strategies? Merouane AMQOR, an experienced Software Engineer and Certified ScrumMaster®, stands ready to enhance your projects with his expertise and forward-thinking approach.
          </p>
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Professional Collaboration</h3>
            <ul class="space-y-3">
              <li>
                <a href="mailto:merouane.amqor@gmail.com" class="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  merouane.amqor@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+212701086726" class="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                  +212 7 01 086 726
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-12 lg:mt-0">
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Send a Message</h3>
              <form @submit.prevent="submitForm" class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" v-model="form.name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" v-model="form.email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" v-model="form.message" rows="4" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                </div>
                <div>
                  <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 text-center">
        <p class="text-xl text-gray-500">
          Merouane is more than just a developer – he's a passionate technology enthusiast dedicated to delivering excellence and efficiency in every endeavor.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  // Here you would typically send the form data to a server
  console.log('Form submitted:', form.value)
  // Reset form after submission
  form.value = { name: '', email: '', message: '' }
  // You might want to show a success message to the user here
}
</script>