<template>
    <canvas ref="canvasRef" class="absolute inset-0 z-0"></canvas>
  </template>
  
  <script setup lang="ts">
  
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  let animationFrameId: number | null = null
  let particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = []
  
  const initParticles = () => {
    const canvas = canvasRef.value
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Clear previous particles
    particles = []
    
    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    // Create particles
    const particleCount = Math.min(150, Math.floor((window.innerWidth * window.innerHeight) / 5000))
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1
      })
    }
  }
  
  const animate = () => {
    const canvas = canvasRef.value
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Clear canvas with a subtle fade effect
    ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    // Update and draw particles
    particles.forEach((particle, i) => {
      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY
      
      // Boundary checks with bounce effect
      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      
      // Keep particles within bounds
      particle.x = Math.max(0, Math.min(canvas.width, particle.x))
      particle.y = Math.max(0, Math.min(canvas.height, particle.y))
      
      // Draw particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(103, 232, 249, ${particle.opacity})`
      ctx.fill()
      
      // Draw connections to nearby particles
      particles.forEach((otherParticle, j) => {
        if (i !== j) {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            const opacity = Math.max(0.05, 0.3 - distance / 400)
            ctx.strokeStyle = `rgba(103, 232, 249, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })
    })
    
    animationFrameId = requestAnimationFrame(animate)
  }
  
  const handleResize = () => {
    initParticles()
  }
  
  onMounted(() => {
    initParticles()
    animate()
    window.addEventListener('resize', handleResize)
  })
  
  onUnmounted(() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
    window.removeEventListener('resize', handleResize)
  })
  </script>