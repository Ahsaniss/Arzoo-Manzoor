import { Github, Linkedin, Mail, Shield } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">Arzoo Manzoor</span>
            </div>
            <p className="text-muted-foreground">
              Cybersecurity Aspirant & Web Developer passionate about building secure digital solutions.
            </p>
            <p className="text-muted-foreground text-sm">
              <span className="font-semibold">Home Address:</span> Narowal
            </p>
            <p className="text-muted-foreground text-sm">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:arzoomanzoor25@gmail.com"
                className="hover:text-primary underline transition-colors"
              >
                arzoomanzoor25@gmail.com
              </a>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/arzoo-manzoor-83197a317" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:arzoomanzoor25@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
                <a 
                href="https://github.com/arzoomanzoor25" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                >
                <Github className="h-6 w-6" />
                </a>

            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Arzoo Manzoor. Built with passion for cybersecurity and secure development.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer