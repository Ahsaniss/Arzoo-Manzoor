import { Button } from "@/components/ui/button"
import { CyberCard, CyberCardContent, CyberCardHeader, CyberCardTitle } from "@/components/ui/cyber-card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Linkedin, MapPin, Phone } from "lucide-react"
import React from "react";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast"
import { useRef, useState } from "react";



const serviceID = 'service_98alvg4'; // ✅ Your actual Service ID 
const templateID = 'template_mn8aqbp'; // ✅ Your actual Template ID
const publicKey = '84RrI4uYEZ72RmStk';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arzoomanzoor25@gmail.com",
      href: "mailto:arzoomanzoor25@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/arzoo-manzoor-83197a317"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Narowal, Pakistan",
      href: null
    }
  ]
 
  const serviceID = 'service_14frth8'; // ✅ Your actual Service ID 
const templateID = 'template_9uo3eqs'; // ✅ Your actual Template ID
const publicKey = '0XNCRUaxrYfTGxytU';
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [sending, setSending] = React.useState(false);
  const [success, setSuccess] = React.useState<string|null>(null);
  const [error, setError] = React.useState<string|null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);
    setError(null);
    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message
        },
        publicKey
      );
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    }
    setSending(false);
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on cybersecurity projects or discuss web development opportunities? 
            Let's connect and build something secure together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h4 className="text-xl font-semibold text-primary mb-4">Let's Collaborate</h4>
              <p className="text-muted-foreground mb-4">
                I'm always interested in discussing:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Cybersecurity projects and research</li>
                <li>• Frontend development opportunities</li>
                <li>• Mathematical problem-solving challenges</li>
                <li>• Open source contributions</li>
                <li>• Mentorship and learning opportunities</li>
              </ul>
            </div>
          </div>

          <CyberCard className="p-8">
            <CyberCardHeader>
              <CyberCardTitle className="text-2xl text-primary">
                Send me a message
              </CyberCardTitle>
            </CyberCardHeader>
            <CyberCardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name"
                      className="bg-input border-border focus:border-primary"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="bg-input border-border focus:border-primary"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?"
                    className="bg-input border-border focus:border-primary"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or idea..."
                    className="min-h-[120px] bg-input border-border focus:border-primary"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send Message"}
                </Button>

                {success && (
                  <p className="text-green-500 text-center mt-4">{success}</p>
                )}
                {error && (
                  <p className="text-red-500 text-center mt-4">{error}</p>
                )}
              </form>
            </CyberCardContent>
          </CyberCard>
        </div>
      </div>
    </section>
  )
}

export default ContactSection