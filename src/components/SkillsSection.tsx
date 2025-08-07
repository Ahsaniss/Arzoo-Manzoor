import { CyberCard, CyberCardContent, CyberCardHeader, CyberCardTitle } from "@/components/ui/cyber-card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedLevels, setAnimatedLevels] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "Tailwind CSS"],
      color: "bg-primary/10 text-primary border-primary/30"
    },
    {
      title: "Cybersecurity",
      skills: ["Network Security", "Threat Analysis", "Security Best Practices", "Risk Assessment", "Ethical Hacking Basics"],
      color: "bg-primary/15 text-primary border-primary/40"
    },
    {
      title: "Mathematics",
      skills: ["Calculus", "Statistics", "Discrete Mathematics", "Cryptography Fundamentals", "Problem Solving"],
      color: "bg-primary/10 text-primary border-primary/30"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "VS Code", "npm/yarn", "Browser DevTools", "Linux Basics"],
      color: "bg-primary/12 text-primary border-primary/35"
    }
  ]

  const proficiencyLevels = [
    { skill: "HTML/CSS", level: 90 },
    { skill: "JavaScript", level: 85 },
    { skill: "React", level: 80 },
    { skill: "Cybersecurity Concepts", level: 75 },
    { skill: "Mathematics", level: 88 },
    { skill: "Problem Solving", level: 92 }
  ]

  // Initialize animated levels to 0
  useEffect(() => {
    setAnimatedLevels(new Array(proficiencyLevels.length).fill(0))
  }, [])

  // Intersection Observer to detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateProgressBars()
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Start animation a bit before fully visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  // Animate progress bars from 0 to target values
  const animateProgressBars = () => {
    const duration = 2000 // 2 seconds
    const startTime = Date.now()
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
      const easedProgress = easeOutCubic(progress)
      
      setAnimatedLevels(proficiencyLevels.map(item => 
        Math.round(item.level * easedProgress)
      ))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning web development, cybersecurity, and mathematical analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <CyberCard 
              key={index} 
              className={`p-6 transition-all duration-700 border-border hover:border-primary/30 ${
                isVisible 
                  ? 'opacity-100 transform translate-y-0 shadow-lg shadow-primary/5' 
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms` 
              }}
            >
              <CyberCardHeader>
                <CyberCardTitle className="text-xl text-primary mb-4">
                  {category.title}
                </CyberCardTitle>
              </CyberCardHeader>
              <CyberCardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className={`${category.color} hover:scale-110 hover:shadow-lg hover:shadow-primary/25 hover:border-primary transition-all duration-300 cursor-pointer ${
                        isVisible 
                          ? 'opacity-100 transform scale-100' 
                          : 'opacity-0 transform scale-95'
                      }`}
                      style={{ 
                        transitionDelay: `${(index * 200) + (skillIndex * 100)}ms` 
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CyberCardContent>
            </CyberCard>
          ))}
        </div>

        <CyberCard 
          className={`p-8 transition-all duration-700 border-border hover:border-primary/30 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0 shadow-xl shadow-primary/10' 
              : 'opacity-0 transform translate-y-8'
          }`}
          style={{ 
            transitionDelay: '800ms' 
          }}
        >
          <CyberCardHeader>
            <CyberCardTitle className="text-2xl text-primary mb-8 text-center">
              Proficiency Levels
            </CyberCardTitle>
          </CyberCardHeader>
          <CyberCardContent>
            <div className="space-y-6">
              {proficiencyLevels.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{item.skill}</span>
                    <span className="text-primary font-bold text-lg">
                      {animatedLevels[index] || 0}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden shadow-inner">
                    <div 
                      className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 h-3 rounded-full transition-all duration-100 ease-out relative shadow-lg"
                      style={{ 
                        width: `${animatedLevels[index] || 0}%`,
                        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                        boxShadow: '0 0 20px hsl(var(--primary) / 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      {/* Add a glowing effect */}
                      <div className="absolute inset-0 bg-primary/60 rounded-full"></div>
                      {/* Add a shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full"></div>
                      {/* Add a moving highlight */}
                      <div 
                        className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full animate-pulse"
                        style={{
                          left: `${Math.max(0, (animatedLevels[index] || 0) - 10)}%`,
                          opacity: animatedLevels[index] > 10 ? 1 : 0
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CyberCardContent>
        </CyberCard>
      </div>
    </section>
  )
}

export default SkillsSection