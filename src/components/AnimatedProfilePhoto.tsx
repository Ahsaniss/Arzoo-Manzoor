import React, { useEffect, useRef } from 'react'
import profilePhoto from "@/assets/profile-photo.jpg"

interface Ball {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  angle: number
  orbitRadius: number
  orbitSpeed: number
}

const AnimatedProfilePhoto: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ballsRef = useRef<Ball[]>([])
  const animationRef = useRef<number>()
  const centerX = useRef(0)
  const centerY = useRef(0)
  const profileRadius = useRef(150)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      
      centerX.current = rect.width / 2
      centerY.current = rect.height / 2
      profileRadius.current = Math.min(rect.width, rect.height) * 0.3
    }

    updateCanvasSize()

    // Initialize balls
    const initBalls = () => {
      ballsRef.current = []
      const colors = [
        '#ef4444', // red-500
        '#dc2626', // red-600
        '#b91c1c', // red-700
        '#991b1b', // red-800
        '#7f1d1d', // red-900
        '#f87171', // red-400
        '#fca5a5', // red-300
      ]

      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8
        const orbitRadius = profileRadius.current + 80 + Math.random() * 40
        const ball: Ball = {
          x: centerX.current + Math.cos(angle) * orbitRadius,
          y: centerY.current + Math.sin(angle) * orbitRadius,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          radius: 4 + Math.random() * 6,
          color: colors[i % colors.length],
          angle: angle,
          orbitRadius: orbitRadius,
          orbitSpeed: 0.02 + Math.random() * 0.02
        }
        ballsRef.current.push(ball)
      }
    }

    initBalls()

    // Collision detection
    const checkCollision = (ball1: Ball, ball2: Ball) => {
      const dx = ball2.x - ball1.x
      const dy = ball2.y - ball1.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      return distance < ball1.radius + ball2.radius
    }

    // Handle collision response
    const handleCollision = (ball1: Ball, ball2: Ball) => {
      const dx = ball2.x - ball1.x
      const dy = ball2.y - ball1.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance === 0) return
      
      // Normalize collision vector
      const nx = dx / distance
      const ny = dy / distance
      
      // Relative velocity
      const dvx = ball2.vx - ball1.vx
      const dvy = ball2.vy - ball1.vy
      
      // Relative velocity in collision normal direction
      const dvn = dvx * nx + dvy * ny
      
      // Do not resolve if velocities are separating
      if (dvn > 0) return
      
      // Collision impulse
      const impulse = 2 * dvn / 2 // Assuming equal mass
      
      // Update velocities
      ball1.vx += impulse * nx
      ball1.vy += impulse * ny
      ball2.vx -= impulse * nx
      ball2.vy -= impulse * ny
      
      // Separate overlapping balls
      const overlap = ball1.radius + ball2.radius - distance
      const separationX = nx * overlap * 0.5
      const separationY = ny * overlap * 0.5
      
      ball1.x -= separationX
      ball1.y -= separationY
      ball2.x += separationX
      ball2.y += separationY
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)

      // Update and draw balls
      ballsRef.current.forEach((ball, index) => {
        // Update orbit position
        ball.angle += ball.orbitSpeed
        const orbitX = centerX.current + Math.cos(ball.angle) * ball.orbitRadius
        const orbitY = centerY.current + Math.sin(ball.angle) * ball.orbitRadius
        
        // Apply orbital influence and physics
        const attractionForce = 0.001
        const dx = orbitX - ball.x
        const dy = orbitY - ball.y
        
        ball.vx += dx * attractionForce
        ball.vy += dy * attractionForce
        
        // Apply damping to prevent infinite acceleration
        ball.vx *= 0.98
        ball.vy *= 0.98
        
        // Update position
        ball.x += ball.vx
        ball.y += ball.vy
        
        // Keep balls in bounds with bouncing
        const margin = ball.radius
        if (ball.x - margin < 0 || ball.x + margin > canvas.width / window.devicePixelRatio) {
          ball.vx = -ball.vx * 0.8
          ball.x = Math.max(margin, Math.min(canvas.width / window.devicePixelRatio - margin, ball.x))
        }
        if (ball.y - margin < 0 || ball.y + margin > canvas.height / window.devicePixelRatio) {
          ball.vy = -ball.vy * 0.8
          ball.y = Math.max(margin, Math.min(canvas.height / window.devicePixelRatio - margin, ball.y))
        }
        
        // Check collisions with other balls
        for (let i = index + 1; i < ballsRef.current.length; i++) {
          const otherBall = ballsRef.current[i]
          if (checkCollision(ball, otherBall)) {
            handleCollision(ball, otherBall)
          }
        }
        
        // Draw ball with glow effect
        ctx.save()
        
        // Create glow
        const gradient = ctx.createRadialGradient(
          ball.x, ball.y, 0,
          ball.x, ball.y, ball.radius * 3
        )
        gradient.addColorStop(0, ball.color + '80')
        gradient.addColorStop(0.3, ball.color + '40')
        gradient.addColorStop(1, ball.color + '00')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(ball.x, ball.y, ball.radius * 3, 0, Math.PI * 2)
        ctx.fill()
        
        // Draw main ball
        ctx.fillStyle = ball.color
        ctx.beginPath()
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
        ctx.fill()
        
        // Add inner highlight
        const highlight = ctx.createRadialGradient(
          ball.x - ball.radius * 0.3, ball.y - ball.radius * 0.3, 0,
          ball.x, ball.y, ball.radius
        )
        highlight.addColorStop(0, '#ffffff40')
        highlight.addColorStop(1, '#ffffff00')
        
        ctx.fillStyle = highlight
        ctx.beginPath()
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      updateCanvasSize()
      initBalls()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      
      {/* Profile image */}
      <img 
        src={profilePhoto}
        alt="Arzoo Manzoor - Cybersecurity Professional"
        className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary shadow-2xl z-10"
      />
      
      {/* Animation canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ 
          width: '100%', 
          height: '100%',
          transform: 'scale(1.5)',
          transformOrigin: 'center'
        }}
      />
    </div>
  )
}

export default AnimatedProfilePhoto
