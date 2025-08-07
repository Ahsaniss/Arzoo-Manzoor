import { CyberCard, CyberCardContent, CyberCardHeader, CyberCardTitle } from "@/components/ui/cyber-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, Calendar, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

const CertificatesSection = () => {
  const navigate = useNavigate()
  
  const featuredCertificates = [
   
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-green-500/20 text-green-400 border-green-400/30">Completed</Badge>
      case "In Progress":
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-400/30">In Progress</Badge>
      case "Planned":
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-400/30">Planned</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <section id="certificates" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Award className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Certifications & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and courses that validate my expertise in cybersecurity, 
            web development, and mathematical concepts.
          </p>
        </div>

        {/* Featured Certificates */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredCertificates.map((cert, index) => (
            <CyberCard key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CyberCardHeader className="relative">
                {/* Certificate Image Placeholder */}
                <div className="w-full h-40 bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-4 flex items-center justify-center border border-border">
                  <div className="text-center">
                    <Award className="h-12 w-12 text-primary mb-2 mx-auto" />
                    <p className="text-xs text-muted-foreground">Certificate Preview</p>
                  </div>
                </div>
                
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CyberCardTitle className="text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {cert.title}
                    </CyberCardTitle>
                    <p className="text-primary font-semibold text-sm">{cert.issuer}</p>
                  </div>
                  {getStatusBadge(cert.status)}
                </div>
                
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {cert.date}
                </div>
              </CyberCardHeader>
              
              <CyberCardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="bg-primary/10 text-primary border-primary/30 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{cert.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                {cert.status === "Completed" && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground text-xs"
                  >
                    <ExternalLink className="h-3 w-3 mr-2" />
                    View Certificate
                  </Button>
                )}
              </CyberCardContent>
            </CyberCard>
          ))}
        </div>

        {/* Stats & CTA */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Stats */}
          <CyberCard className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CyberCardContent>
              <h3 className="text-xl font-bold text-foreground mb-4">Certification Progress</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">2</div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">3</div>
                  <p className="text-sm text-muted-foreground">In Progress</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">4</div>
                  <p className="text-sm text-muted-foreground">Planned</p>
                </div>
              </div>
            </CyberCardContent>
          </CyberCard>

          {/* Call to Action */}
          <CyberCard className="p-6 bg-gradient-to-br from-secondary/20 to-secondary/10">
            <CyberCardContent>
              <h3 className="text-xl font-bold text-foreground mb-2">View All Certificates</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Explore my complete certification portfolio including detailed descriptions, 
                skills covered, and achievement dates.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                onClick={() => navigate('/certificates')}
              >
                View Complete Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CyberCardContent>
          </CyberCard>
        </div>

        {/* Learning Path Preview */}
        <div className="mt-12">
          <CyberCard className="p-8 bg-gradient-to-r from-muted/20 to-muted/10 border-muted/30">
            <CyberCardContent className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm committed to staying current with cybersecurity threats, web development frameworks, 
                and mathematical concepts through ongoing professional development and certification.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-red-500/20 text-red-400 border-red-400/30 px-4 py-2">
                  Cybersecurity Track
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-400/30 px-4 py-2">
                  Web Development Track
                </Badge>
                <Badge className="bg-green-500/20 text-green-400 border-green-400/30 px-4 py-2">
                  Mathematics Track
                </Badge>
              </div>
            </CyberCardContent>
          </CyberCard>
        </div>
      </div>
    </section>
  )
}

export default CertificatesSection
