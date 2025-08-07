<template>
  <header class="bg-github-gradient font-myriad relative overflow-hidden">
    <!-- Code Background -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <!-- Swift Code Snippets -->
      <div class="absolute top-20 left-8 opacity-10 font-mono text-xs transform rotate-12">
        <div class="whitespace-pre-line"><span class="text-xcode-keyword">import</span> <span class="text-xcode-type">UIKit</span>
<span class="text-xcode-keyword">import</span> <span class="text-xcode-type">SwiftUI</span>

<span class="text-xcode-keyword">class</span> <span class="text-xcode-type">ViewController</span>: <span class="text-xcode-type">UIViewController</span> {
    <span class="text-xcode-keyword">override</span> <span class="text-xcode-keyword">func</span> <span class="text-xcode-function">viewDidLoad</span>() {
        <span class="text-xcode-keyword">super</span>.<span class="text-xcode-function">viewDidLoad</span>()
        <span class="text-xcode-function">setupUI</span>()
    }

    <span class="text-xcode-keyword">private</span> <span class="text-xcode-keyword">func</span> <span class="text-xcode-function">setupUI</span>() {
        <span class="text-xcode-property">view</span>.<span class="text-xcode-property">backgroundColor</span> = .<span class="text-xcode-constant">systemBackground</span>
    }
}</div>
      </div>
      
      <div class="absolute top-40 right-12 opacity-10 font-mono text-xs transform -rotate-6">
        <div class="whitespace-pre-line"><span class="text-xcode-keyword">struct</span> <span class="text-xcode-type">ContentView</span>: <span class="text-xcode-type">View</span> {
    <span class="text-xcode-keyword">@State</span> <span class="text-xcode-keyword">private</span> <span class="text-xcode-keyword">var</span> <span class="text-xcode-property">isPressed</span> = <span class="text-xcode-constant">false</span>
    
    <span class="text-xcode-keyword">var</span> <span class="text-xcode-property">body</span>: <span class="text-xcode-keyword">some</span> <span class="text-xcode-type">View</span> {
        <span class="text-xcode-type">VStack</span> {
            <span class="text-xcode-type">Text</span>(<span class="text-xcode-string">"Hello, SwiftUI!"</span>)
                .<span class="text-xcode-function">font</span>(.<span class="text-xcode-constant">largeTitle</span>)
                .<span class="text-xcode-function">foregroundColor</span>(.<span class="text-xcode-constant">primary</span>)
        }
        .<span class="text-xcode-function">padding</span>()
    }
}</div>
      </div>

      <div class="absolute bottom-32 left-16 opacity-10 font-mono text-xs transform rotate-3">
        <div class="whitespace-pre-line"><span class="text-xcode-keyword">func</span> <span class="text-xcode-function">fetchData</span>() <span class="text-xcode-keyword">async</span> <span class="text-xcode-keyword">throws</span> -> [<span class="text-xcode-type">User</span>] {
    <span class="text-xcode-keyword">let</span> <span class="text-xcode-property">url</span> = <span class="text-xcode-type">URL</span>(<span class="text-xcode-property">string</span>: <span class="text-xcode-string">"api/users"</span>)!
    <span class="text-xcode-keyword">let</span> (<span class="text-xcode-property">data</span>, _) = <span class="text-xcode-keyword">try</span> <span class="text-xcode-keyword">await</span> <span class="text-xcode-type">URLSession</span>
        .<span class="text-xcode-property">shared</span>.<span class="text-xcode-function">data</span>(<span class="text-xcode-property">from</span>: <span class="text-xcode-property">url</span>)
    <span class="text-xcode-keyword">return</span> <span class="text-xcode-keyword">try</span> <span class="text-xcode-type">JSONDecoder</span>()
        .<span class="text-xcode-function">decode</span>([<span class="text-xcode-type">User</span>].<span class="text-xcode-keyword">self</span>, <span class="text-xcode-property">from</span>: <span class="text-xcode-property">data</span>)
}</div>
      </div>

      <!-- Ruby Code Snippets -->
      <div class="absolute top-60 left-1/4 opacity-10 font-mono text-xs transform -rotate-12">
        <div class="whitespace-pre-line"><span class="text-xcode-keyword">class</span> <span class="text-xcode-type">User</span> &lt; <span class="text-xcode-type">ApplicationRecord</span>
  <span class="text-xcode-function">has_many</span> <span class="text-xcode-constant">:projects</span>
  <span class="text-xcode-function">validates</span> <span class="text-xcode-constant">:email</span>, <span class="text-xcode-property">presence</span>: <span class="text-xcode-constant">true</span>
  
  <span class="text-xcode-keyword">def</span> <span class="text-xcode-function">full_name</span>
    <span class="text-xcode-string">"#{</span><span class="text-xcode-property">first_name</span><span class="text-xcode-string">} #{</span><span class="text-xcode-property">last_name</span><span class="text-xcode-string">}"</span>
  <span class="text-xcode-keyword">end</span>
  
  <span class="text-xcode-function">scope</span> <span class="text-xcode-constant">:active</span>, -> { <span class="text-xcode-function">where</span>(<span class="text-xcode-property">active</span>: <span class="text-xcode-constant">true</span>) }
<span class="text-xcode-keyword">end</span></div>
      </div>

      <div class="absolute bottom-20 right-8 opacity-10 font-mono text-xs transform rotate-6">
        <div class="whitespace-pre-line"><span class="text-xcode-keyword">def</span> <span class="text-xcode-function">create_project</span>
  <span class="text-xcode-property">@project</span> = <span class="text-xcode-property">current_user</span>.<span class="text-xcode-property">projects</span>.<span class="text-xcode-function">build</span>(<span class="text-xcode-function">project_params</span>)
  
  <span class="text-xcode-keyword">if</span> <span class="text-xcode-property">@project</span>.<span class="text-xcode-function">save</span>
    <span class="text-xcode-function">render</span> <span class="text-xcode-property">json</span>: <span class="text-xcode-property">@project</span>, <span class="text-xcode-property">status</span>: <span class="text-xcode-constant">:created</span>
  <span class="text-xcode-keyword">else</span>
    <span class="text-xcode-function">render</span> <span class="text-xcode-property">json</span>: <span class="text-xcode-property">@project</span>.<span class="text-xcode-property">errors</span>
  <span class="text-xcode-keyword">end</span>
<span class="text-xcode-keyword">end</span></div>
      </div>

      <div class="absolute top-80 right-1/3 opacity-10 font-mono text-xs transform rotate-12">
        <div class="whitespace-pre-line"><span class="text-xcode-function">require</span> <span class="text-xcode-string">'rails_helper'</span>

<span class="text-xcode-type">RSpec</span>.<span class="text-xcode-function">describe</span> <span class="text-xcode-type">User</span>, <span class="text-xcode-property">type</span>: <span class="text-xcode-constant">:model</span> <span class="text-xcode-keyword">do</span>
  <span class="text-xcode-function">it</span> <span class="text-xcode-string">'validates presence of email'</span> <span class="text-xcode-keyword">do</span>
    <span class="text-xcode-property">user</span> = <span class="text-xcode-type">User</span>.<span class="text-xcode-function">new</span>
    <span class="text-xcode-function">expect</span>(<span class="text-xcode-property">user</span>).<span class="text-xcode-function">not_to</span> <span class="text-xcode-function">be_valid</span>
    <span class="text-xcode-function">expect</span>(<span class="text-xcode-property">user</span>.<span class="text-xcode-property">errors</span>[<span class="text-xcode-constant">:email</span>])
      .<span class="text-xcode-function">to</span> <span class="text-xcode-function">include</span>(<span class="text-xcode-string">"can't be blank"</span>)
  <span class="text-xcode-keyword">end</span>
<span class="text-xcode-keyword">end</span></div>
      </div>

      <div class="absolute bottom-60 left-1/3 opacity-10 font-mono text-xs transform -rotate-6">
        <div class="whitespace-pre-line"><span class="text-xcode-type">Rails</span>.<span class="text-xcode-property">application</span>.<span class="text-xcode-property">routes</span>.<span class="text-xcode-function">draw</span> <span class="text-xcode-keyword">do</span>
  <span class="text-xcode-function">root</span> <span class="text-xcode-string">'home#index'</span>
  
  <span class="text-xcode-function">resources</span> <span class="text-xcode-constant">:users</span> <span class="text-xcode-keyword">do</span>
    <span class="text-xcode-function">resources</span> <span class="text-xcode-constant">:projects</span>
  <span class="text-xcode-keyword">end</span>
  
  <span class="text-xcode-function">namespace</span> <span class="text-xcode-constant">:api</span> <span class="text-xcode-keyword">do</span>
    <span class="text-xcode-function">resources</span> <span class="text-xcode-constant">:users</span>, <span class="text-xcode-property">only</span>: [<span class="text-xcode-constant">:index</span>, <span class="text-xcode-constant">:show</span>]
  <span class="text-xcode-keyword">end</span>
<span class="text-xcode-keyword">end</span></div>
      </div>
    </div>

    <!-- Clean iOS Navigation -->
    
    <!-- Hero Section with massive white space like Apple -->
    <div class="pt-32 pb-24 px-6 max-w-6xl mx-auto text-center relative z-20 h-screen flex flex-col justify-center">
      
      <!-- Clean minimal title -->
      <h1 class="text-5xl sm:text-7xl lg:text-8xl font-semibold text-ios-label mb-4 tracking-tight leading-none">
      iAmqor
      </h1>
      
      <!-- Subtitle -->
      <p class="text-2xl sm:text-3xl lg:text-4xl font-light text-ios-label-secondary mb-8 tracking-tight">
        Senior Engineering Manager
      </p>
      
      <!-- Clean description -->
      <p class="text-lg sm:text-xl text-ios-label-tertiary max-w-2xl mx-auto mb-16 leading-relaxed">
        Building exceptional engineering teams and scalable solutions. 
        Certified ScrumMaster® with expertise in iOS development and AWS architecture.
      </p>
     

      <!-- Clean Technologies List -->
      <div class="mb-20">
        <h3 class="text-2xl font-semibold text-ios-label mb-8">Core Technologies</h3>
        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="tech in technologies" :key="tech" 
                class="px-4 py-2 bg-ios-background-secondary text-ios-label-secondary text-base rounded-full border border-ios-separator">
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- iOS-style CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <a href="mailto:marouaneamqor@gmail.com" 
           class="px-6 py-3 bg-ios-label text-ios-background text-base font-semibold rounded-full hover:bg-ios-label-secondary transition-colors min-w-[140px] text-center">
          Get in touch
        </a>
        <a href="/assets/pdfs/Merouane-AMQOR-en.pdf" 
           download
           class="px-6 py-3 text-ios-label text-base font-medium hover:text-ios-label-secondary transition-colors">
          Download resume
        </a>
      </div>
    </div>
  
  </header>

</template>

<script setup lang="ts">
// Clean iOS-style technologies list
const technologies = [
  'Swift',
  'Ruby',
  'iOS Development', 
  'Engineering Leadership',
  'AWS Solutions',
  'Agile & Scrum',
  'Team Management',
  'Ruby on Rails',
  'Vue.js',
  'React',
  'Next.js',
  'Nuxt.js',
  'Node.js',
  'Docker',
  'System Design'
]
</script>

<style scoped>
/* GitHub-style gradient background */
.bg-github-gradient {
  background: linear-gradient(135deg, #f6f8fa 0%, #ffffff 25%, #f1f3f4 50%, #e1e7f0 75%, #d0d7de 100%);
}

/* Ensure code snippets are visible over the gradient */
.whitespace-pre-line {
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>