import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Shield } from "lucide-react"
import AnimatedProfilePhoto from "./AnimatedProfilePhoto"

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                Hi, I'm <span className="text-primary">Arzoo Manzoor</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-accent">
                Cybersecurity Aspirant & Web Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Passionate about securing digital landscapes through innovative web development 
                and cybersecurity practices. Combining technical expertise with mathematical precision 
                to build robust, secure digital solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-red-500/25"
              >
                <Shield className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Download Resume
              </Button>
            </div>

            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/arzoo-manzoor-83197a317" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:arzoomanzoor25@gmail.com"
                className="text-accent hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
                <a 
                href="https://github.com/arzoomanzoor25" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
                >
                <Github className="h-6 w-6" />
                </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <AnimatedProfilePhoto />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection