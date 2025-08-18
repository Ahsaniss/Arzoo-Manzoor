import { CyberCard, CyberCardContent, CyberCardDescription, CyberCardHeader, CyberCardTitle } from "@/components/ui/cyber-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, Award, Shield, Code, Database, Briefcase, BarChart, Languages, Users, BookOpen } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Cpu } from "lucide-react"; // Or any other valid icon


type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  status: string;
  description: string;
  image?: string | null;
  pdf?: string;
  skills: string[];
  category: string;
  color: string;
  icon: any;
};

const certificates: Certificate[] = [
    {
        id: 1,
        title: "Cybersecurity Foundations",
        issuer: "LinkedIn",
        date: "2025",
        status: "Completed",
        description: "Comprehensive cybersecurity fundamentals covering network security, compliance, operational security, threats and vulnerabilities.",
        image: null, // Direct image URL
        pdf: "https://drive.google.com/file/d/1B9hVgat9zQkvxRHuzfE-QWVJreZyZtus/view?usp=sharing",
        skills: ["Network Security", "Risk Assessment", "Incident Response", "Cybersecurity Fundamentals"],
        category: "Cybersecurity",
        color: "bg-red-500/10 text-red-400 border-red-400/30",
        icon: Shield
    },
    {
        id: 2,
        title: "Cybersecurity Awareness: Cybersecurity Terminology",
        issuer: "LinkedIn",
        date: "2025",
        status: "Completed",
        description: "Introduction to essential cybersecurity concepts and terminology, covering threats, vulnerabilities, risk management, and best practices for protecting digital assets.",
        image: null, // No preview image available
        pdf: "https://drive.google.com/file/d/1B9hVgat9zQkvxRHuzfE-QWVJreZyZtus/view?usp=sharing",
        skills: ["Project Management", "Risk Management", "Team Leadership", "Agile Methodology"],
        category: "Project Management",
        color: "bg-blue-500/10 text-blue-400 border-blue-400/30",
        icon: Award
    },
    {
  id: 3,
  title: "Korean Full Course",
  issuer: "Yonsei University",
  date: "2025-06-18",
  status: "Completed",
  description: "Completed the Korean Full Course offered by Yonsei University, covering comprehensive Korean language learning. Total duration: 4 hours 21 minutes.",
  image: null, // Can add certificate preview image if available
  pdf: "https://drive.google.com/file/d/1tEw9ywyEcLsGl2N577sOM_t4-YAhFZd7/view?usp=sharing", // Replace with actual Google Drive link
  skills: ["Korean Language", "Linguistics", "Cultural Understanding"],
  category: "Language",
  color: "bg-blue-500/10 text-blue-400 border-blue-400/30",
  icon: BookOpen
},

    {
        id: 4,
        title: "Cybersecurity Threat Landscape",
        issuer: "LinkedIn Learning",
        date: "2025",
        status: "Completed",
        description: "Comprehensive learning certificate covering professional skills and technology development.",
        image: null, // No preview image available
        pdf: "/certificates/LinkedIn Learning Certificate.pdf",
        skills: ["Professional Skills", "Technology Development", "Online Learning"],
        category: "Professional Development",
        color: "bg-purple-500/10 text-purple-400 border-purple-400/30",
        icon: Code
    },
    {
        id: 5,
        title: "Linux Bash Scripting",
        issuer: "Udemy",
        date: "2025",
        status: "Completed",
        description: "University certificate program covering advanced technical skills and methodologies.",
        image: null, // No preview image available
        pdf: "/certificates/UC-5e25101c-bc28-4c85-b9a6-68d0be27f05a.pdf",
        skills: ["Technical Skills", "Advanced Methodologies", "University Level"],
        category: "Education",
        color: "bg-yellow-500/10 text-yellow-400 border-yellow-400/30",
        icon: Award
    },
    {
        id: 6,
        title: "Information & Cyber Security Basics- IT Support Technicians",
        issuer: "Udemy",
        date: "2025",
        status: "Completed",
        description: "Advanced university certificate program in specialized technical domains.",
        image: null, // No preview image available
        pdf: "/certificates/UC-734a9594-0a85-4064-8579-333c148bbcc7.pdf",
        skills: ["Specialized Domains", "Advanced Technical Skills", "Research Methods"],
        category: "Education",
        color: "bg-yellow-500/10 text-yellow-400 border-yellow-400/30",
        icon: Award
    },
   
  
    
    {
  id: 7,
  title: "Career Essentials in Cybersecurity",
  issuer: "Microsoft and LinkedIn Learning",
  date: "2025-08-04",
  status: "Completed",
  description: "Completed the Career Essentials in Cybersecurity learning path on LinkedIn Learning by Microsoft, covering core skills in cybersecurity and threat management.",
  image: null,
  pdf: "https://drive.google.com/file/d/1SHwpLScthH3w3-HDdeE-VP6WYHLZRFsM/view?usp=sharing", // Add the certificate link here if you have it
  skills: ["Cybersecurity", "Threat & Vulnerability Management"],
  category: "Cybersecurity",
  color: "bg-red-500/10 text-red-400 border-red-400/30",
  icon: Shield
},


   {
  id: 8,
 title: "Introduction to Artificial Intelligence",
  issuer: "Simplilearn SkillÚP",
  date: "2025-09-02",
  status: "Completed",
  description: "Completed the online course on Introduction to Artificial Intelligence.",
  image: null,
 
  pdf: "https://drive.google.com/file/d/1Y2ouAD-Vt0VLD0lEnh8G2RHl6RyzrL5v/view?usp=sharing",
  skills: ["Artificial Intelligence"],
  category: "Artificial Intelligence",
  color: "bg-indigo-500/10 text-indigo-400 border-indigo-400/30",
  icon: Cpu
},
{
  id: 9,
  title: "Bash Scripting for Linux Security",
  issuer: "Udemy",
  date: "2025-07-06",
  status: "Completed",
  description: "Completed the course 'Bash Scripting for Linux Security' instructed by Frank Anemaet on Udemy.",
  image: null,
  pdf: "https://drive.google.com/file/d/1HSrwSnOui-UtPLRswaRfKycUKRS84OBT/view?usp=sharing",
  skills: ["Bash Scripting", "Linux Security"],
  category: "Cybersecurity",
  color: "bg-red-500/10 text-red-400 border-red-400/30",
  icon: Shield
},
{
  id: 10,
  title: "JavaScript Internship",
  issuer: "INTERWARE (Pvt.) Ltd.",
  date: "2025-02-01 to 2025-04-30",
  status: "Completed",
  description: "Served as a JavaScript Intern, developing and enhancing front-end features using modern JavaScript frameworks, solving complex problems, collaborating with cross-functional teams, and consistently delivering high-quality results.",
  image: null,
  pdf: "https://drive.google.com/file/d/1SEOPkqhJeK1vJNKxv-0wHVEOume0ztIe/view?usp=sharing", // Replace with actual file link if uploaded
  skills: ["JavaScript", "Front-End Development", "Problem Solving", "Team Collaboration"],
  category: "Professional Experience",
  color: "bg-yellow-500/10 text-yellow-400 border-yellow-400/30",
  icon: Briefcase
},
{
  id: 11,
  title: "R Programming for Data Science",
  issuer: "Cursa (by Geeks Lesson)",
  date: "2024-08-29 to 2024-08-31",
  status: "Completed",
  description: "Completed the 'R Programming for Data Science' course on Cursa, covering fundamental concepts and applications of R for data analysis and visualization.",
  image: null,
  pdf: "https://drive.google.com/file/d/1vX9VjicK0g_dUha0flbwD4iDmRYEwses/view?usp=sharing", // Replace with actual Google Drive or Cursa link
  skills: ["R Programming", "Data Science", "Data Analysis", "Data Visualization"],
  category: "Data Science",
  color: "bg-green-500/10 text-green-400 border-green-400/30",
  icon: BarChart
},
{
  id: 12,
  title: "HTML by EJ Media",
  issuer: "Cursa (by Packethacks)",
  date: "2025-02-14",
  status: "Completed",
  description: "Completed the 'HTML by EJ Media' course on Cursa by Packethacks, gaining knowledge in core HTML concepts and practices.",
  image: null,
  pdf: "https://drive.google.com/file/d/1bzje571z28VK8lUXONC_H_lZpV7Rzicx/view?usp=sharing", // Replace with actual Google Drive or Cursa certificate link
  skills: ["HTML", "Web Development", "Front-End Development"],
  category: "Web Development",
  color: "bg-blue-500/10 text-blue-400 border-blue-400/30",
  icon: Shield
},
{
  id: 13,
  title: "Microsoft Security Essentials Professional Certificate",
  issuer: "Microsoft and LinkedIn Learning",
  date: "2025-08-15",
  status: "Completed",
  description: "Completed the Microsoft Security Essentials Professional Certificate learning path on LinkedIn Learning, covering Microsoft Security, Governance, Risk Management, Compliance (GRC), and Cloud Security.",
  image: null,
  pdf: "https://drive.google.com/file/d/1hb7Yy_EbedTjiwQyL0rWSLq6dTPQx848/view?usp=sharing", // Replace with actual certificate link
  skills: ["Microsoft Security", "Governance, Risk Management, and Compliance (GRC)", "Cloud Security"],
  category: "Cybersecurity",
  color: "bg-red-500/10 text-red-400 border-red-400/30",
  icon: Shield
},
{
  id: 14,
  title: "Introduction to Cybersecurity Awareness",
  issuer: "HP LIFE (HP Foundation)",
  date: "2025-01-16",
  status: "Completed",
  description: "Completed the HP LIFE online course 'Introduction to Cybersecurity Awareness', learning about common cybersecurity threats and basic strategies to protect online data and information.",
  image: null,
  pdf: "https://drive.google.com/file/d/1tEw9ywyEcLsGl2N577sOM_t4-YAhFZd7/view?usp=sharing", //with actual certificate link
  skills: ["Cybersecurity Awareness", "Data Protection", "Threat Identification"],
  category: "Cybersecurity",
  color: "bg-red-500/10 text-red-400 border-red-400/30",
  icon: Shield
},
{
  id: 15,
  title: "Data Science & Analytics",
  issuer: "HP LIFE (HP Foundation)",
  date: "2025-01-17",
  status: "Completed",
  description: "Completed the HP LIFE online course 'Data Science & Analytics', covering leading practices, methodologies, and tools in the field, exploring the benefits and challenges of a data-driven approach for businesses, and gaining knowledge about essential skills for a career in data science.",
  image: null,
  pdf: "https://drive.google.com/file/d/1tEw9ywyEcLsGl2N577sOM_t4-YAhFZd7/view?usp=sharing", // Replace with actual certificate link
  skills: ["Data Science", "Data Analytics", "Data-Driven Decision Making"],
  category: "Data Science",
  color: "bg-green-500/10 text-green-400 border-green-400/30",
  icon: BarChart
},
{
  id: 16,
  title: "Python",
  issuer: "Cursa (by Thenewboston)",
  date: "2024-07-05 to 2024-07-09",
  status: "Completed",
  description: "Completed the 'Python' course on Cursa by Thenewboston, covering Python programming fundamentals and core concepts.",
  image: null,
  pdf: "https://drive.google.com/file/d/1tEw9ywyEcLsGl2N577sOM_t4-YAhFZd7/view?usp=sharing", // Replace with actual Google Drive or Cursa certificate link
  skills: ["Python", "Programming Fundamentals"],
  category: "Programming",
  color: "bg-blue-500/10 text-blue-400 border-blue-400/30",
  icon: Code
},
{
  id: 17,
  title: "Korean Full Course",
  issuer: "Cursa (by Yonsei University)",
  date: "2025-06-18",
  status: "Completed",
  description: "Completed the 'Korean Full Course' on Cursa by Yonsei University, covering essential Korean language skills and cultural understanding.",
  image: null,
  pdf: "https://drive.google.com/file/d/1tEw9ywyEcLsGl2N577sOM_t4-YAhFZd7/view?usp=sharing", // Replace with actual Google Drive or Cursa certificate link
  skills: ["Korean Language", "Cultural Awareness"],
  category: "Languages",
  color: "bg-yellow-500/10 text-yellow-400 border-yellow-400/30",
  icon: Languages
},
{
  id: 18,
  title: "Effective Leadership",
  issuer: "HP LIFE (HP Foundation)",
  date: "2025-02-13",
  status: "Completed",
  description: "Completed the HP LIFE online course 'Effective Leadership', learning about the importance of effective leadership, leveraging different leadership strategies, and understanding the role of ethics in leadership.",
  image: null,
  pdf: "https://drive.google.com/file/d/1tEw9ywyEcLsGl2N577sOM_t4-YAhFZd7/view?usp=sharing", // Replace with actual Google Drive link
  skills: ["Leadership", "Ethics in Leadership", "Leadership Strategies"],
  category: "Leadership",
  color: "bg-purple-500/10 text-purple-400 border-purple-400/30",
  icon: Users
}









];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Completed":
      return <Badge className="bg-green-500/20 text-green-400 border-green-400/30">Completed</Badge>;
    case "In Progress":
      return <Badge className="bg-blue-500/20 text-blue-400 border-blue-400/30">In Progress</Badge>;
    case "Planned":
      return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-400/30">Planned</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const categories = [...new Set(certificates.map(cert => cert.category))];

function Certificates() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Award className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Certifications & <span className="text-primary">Achievements</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive collection of my professional certifications, courses, and achievements 
              in cybersecurity, web development, and mathematics.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => {
              const IconComponent = cert.icon;
              return (
                <CyberCard key={cert.id} className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                  <CyberCardHeader className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-4 flex items-center justify-center border border-border overflow-hidden relative">
                      {cert.image ? (
                        <img 
                          src={cert.image}
                          alt={cert.title}
                          className="object-cover h-full w-full"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.parentElement?.querySelector('.fallback-preview') as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className={`flex flex-col items-center justify-center text-muted-foreground absolute inset-0 fallback-preview${cert.image ? '' : ' flex'}`} style={{display: cert.image ? 'none' : 'flex'}}>
                        <IconComponent className="h-16 w-16 mb-2" />
                        <span className="text-sm text-center px-4">Certificate Preview</span>
                      </div>
                      {cert.pdf && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="absolute bottom-2 right-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                          onClick={() => window.open(cert.pdf, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View PDF
                        </Button>
                      )}
                    </div>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CyberCardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                          {cert.title}
                        </CyberCardTitle>
                        <p className="text-primary font-semibold">{cert.issuer}</p>
                      </div>
                      {getStatusBadge(cert.status)}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      {cert.date}
                    </div>
                  </CyberCardHeader>
                  <CyberCardContent className="space-y-4">
                    <CyberCardDescription className="text-sm leading-relaxed">
                      {cert.description}
                    </CyberCardDescription>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground text-sm">Skills Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="outline" 
                            className={`${cert.color} text-xs`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CyberCardContent>
                </CyberCard>
              );
            })}
          </div>

       

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <CyberCard className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CyberCardContent>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Continuous Learning Journey
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm committed to staying current with the latest cybersecurity threats, 
                  web development frameworks, and mathematical concepts through continuous 
                  certification and professional development.
                </p>
                <Button 
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  View Learning Path
                </Button>
              </CyberCardContent>
            </CyberCard>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Certificates;
