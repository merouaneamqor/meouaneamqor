<template>
    <canvas ref="canvasRef" class="absolute inset-0 z-0"></canvas>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  
  onMounted(() => {
    const canvas = canvasRef.value
    if (!canvas) return
  
    const ctx = canvas.getContext('2d')
    if (!ctx) return
  
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  
    const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = []
    const particleCount = 100
  
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1
      })
    }
  
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle, i) => {
        particle.x += particle.speedX
        particle.y += particle.speedY
  
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
  
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(103, 232, 249, ${0.1 + Math.random() * 0.2})`
        ctx.fill()
  
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)
  
            if (distance < 100) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `rgba(103, 232, 249, ${0.1 - distance / 1000})`
              ctx.stroke()
            }
          }
        })
      })
  
      requestAnimationFrame(animate)
    }
  
    animate()
  })
  </script>