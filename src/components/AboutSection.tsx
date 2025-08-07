import { CyberCard, CyberCardContent, CyberCardDescription, CyberCardHeader, CyberCardTitle } from "@/components/ui/cyber-card"
import { Shield, Code, Calculator } from "lucide-react"

const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Cybersecurity Focus",
      description: "Passionate about digital security, threat analysis, and building secure applications with best practices."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Experienced in modern web technologies including React, JavaScript, HTML, and CSS for creating robust applications."
    },
    {
      icon: Calculator,
      title: "Mathematical Foundation",
      description: "Strong background in mathematics, particularly Calculus, providing analytical thinking for complex problem-solving."
    }
  ]

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated professional bridging the gap between cybersecurity and web development, 
            with a strong mathematical foundation that enhances my analytical approach to problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <CyberCard key={index} className="text-center p-6 hover:scale-105 transition-transform">
              <CyberCardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <CyberCardTitle className="text-xl">{item.title}</CyberCardTitle>
              </CyberCardHeader>
              <CyberCardContent>
                <CyberCardDescription className="text-base">
                  {item.description}
                </CyberCardDescription>
              </CyberCardContent>
            </CyberCard>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 border">
          <h3 className="text-2xl font-semibold text-primary mb-6">My Journey</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              My path in technology began with a fascination for mathematics and its applications in solving real-world problems. 
              This analytical mindset naturally led me to explore cybersecurity, where mathematical concepts play a crucial role 
              in encryption, risk assessment, and threat modeling.
            </p>
            <p>
              As I delved deeper into the digital security landscape, I discovered the importance of secure web development practices. 
              This realization sparked my journey into front-end development, where I now combine my security awareness with 
              creative problem-solving to build applications that are both functional and secure.
            </p>
            <p>
              Today, I'm committed to becoming a cybersecurity professional while continuing to develop my web development skills, 
              believing that the intersection of these fields is where the most impactful digital solutions are created.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection