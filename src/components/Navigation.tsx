import { Button } from "@/components/ui/button"
import { useLocation, useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleCertificatesClick = () => {
    if (location.pathname === '/') {
      scrollToSection('certificates')
    } else {
      navigate('/certificates')
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-xl font-bold text-primary hover:text-primary/80"
          >
            Arzoo Manzoor
          </Button>
          
          <div className="hidden md:flex space-x-8">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('home')}
              className="hover:text-primary"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="hover:text-primary"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('skills')}
              className="hover:text-primary"
            >
              Skills
            </Button>
            <Button 
              variant="ghost" 
              onClick={handleCertificatesClick}
              className="hover:text-primary"
            >
              Certificates
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="hover:text-primary"
            >
              Contact
            </Button>
            <li>
              <button
                onClick={() => {
                  navigate("/projects");
                  window.scrollTo({ top: 0, behavior: "smooth" }); // ensures scroll to top
                }}
                className="px-4 py-2 rounded hover:bg-primary/10 transition-colors"
              >
                Projects
              </button>
            </li>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation