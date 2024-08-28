<template>
  <div class="min-h-screen bg-gray-100">

    <main>
      <section id="portfolio" class="container mx-auto p-8">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">My Portfolio</h2>
          <p class="text-center text-gray-600 italic mb-4">Note: This portfolio represents a selection of projects and
            does not encompass all my work.</p>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="project in projects" :key="project.id" class="bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ project.name }}</h3>
                <p class="text-sm text-gray-500 mb-2">{{ project.duration }}</p>
                <p class="text-gray-600 mb-4">{{ project.description }}</p>
                <a :href="project.link" target="_blank" rel="noopener noreferrer"
                  class="text-blue-600 hover:underline">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>


  </div>
</template>

<script setup lang="ts">
interface Project {
  id: number;
  name: string;
  duration: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'DabaDoc - Full-stack Developer',
    duration: 'Sep 2018 - Apr 2022',
    description: 'Guided a team in leveraging cutting-edge technologies to develop impactful features, collaborated closely with marketing teams to boost brand visibility, and implemented strong, reliable back-end systems to enhance overall functionality.',
    link: 'https://dabadoc.com'
  },
  {
    id: 2,
    name: 'Meram / Texam',
    duration: '2018 - 2019',
    description: 'Spearheaded the creation and design of an innovative e-commerce web application as a Software Engineer. Developed a robust JSON API tailored for seamless integration with mobile applications.',
    link: '#'
  },
  {
    id: 3,
    name: 'Riad Raha - Information System Developer',
    duration: '1 month, 2021',
    description: 'Crafted a sophisticated real estate sales management information system, significantly optimizing and streamlining business operations.',
    link: '#'
  },
  {
    id: 4,
    name: 'DabaDoc Corporate Platform',
    duration: 'Apr 2022 - Jan 2024',
    description: 'Led the development of a comprehensive healthcare management platform for corporations, streamlining employee access to health services and enhancing overall healthcare delivery.',
    link: 'https://corporate.dabadoc.com'
  },
  {
    id: 5,
    name: 'DabaDoc Mind',
    duration: 'Apr 2022 - Jan 2024',
    description: 'Developed key features for a mental health initiative providing online consultations with mental health professionals, improving community mental health accessibility and confidentiality.',
    link: 'https://mind.dabadoc.com'
  },
  {
    id: 6,
    name: 'DabaDoc Live',
    duration: 'Apr 2022 - Jan 2024',
    description: 'Enhanced the DabaDoc Live experience by implementing interactive features and real-time communication tools to engage users and deliver live health education and consultation.',
    link: 'https://live.dabadoc.com'
  }
];
</script>