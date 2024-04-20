<template>
  <div class="relative bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-800 py-6 md:justify-start md:space-x-10">
        <!-- Logo Section -->
        <div class="flex justify-start lg:w-0 lg:flex-1 text-white">
          <a href="/">
            <h1>AMQOR Merouane</h1>
          </a>
        </div>

        <!-- Hamburger Menu for Mobile -->
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
            <span class="sr-only">Open menu</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m4 6H4"></path>
            </svg>
          </button>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-10">
          <a v-for="link in links" :key="link.href" :href="link.href" :target="link.target"  class="text-base font-medium text-gray-100 hover:text-gray-200">{{ link.text }}</a>
        </nav>

      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <!-- Mobile Logo -->
              <h1>AMQOR Merouane</h1>
              
            </div>
            <!-- Close Mobile Menu Button -->
            <div class="-mr-2">
              <button @click="isMenuOpen = false" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          <!-- Mobile Navigation Links -->
          <nav class="mt-6">
            <a v-for="link in links" :key="link.href" :href="link.href" :target="link.target"  class="block p-3 rounded-md hover:bg-gray-50">{{ link.text }}</a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      links: [
        { href: 'https://github.com/merouaneamqor', text: 'GitHub', target: '_blank' },
        { href: 'https://linkedin.com/in/merouane-amqor', text: 'LinkedIn', target: '_blank' },
        { href: '/portfolio', text: 'Portfolio' },
        { href: '/about', text: 'About' },
        { href: '/contact', text: 'Contact' },
        { href: 'https://douq.ma', text: 'Douq.ma' , target: '_blank'}
        // Add more links as needed
      ]
    };
  },
  // Other script code
};
</script>


<style scoped>
/* Your CSS goes here */
</style>