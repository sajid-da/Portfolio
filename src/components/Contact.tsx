import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/emailjs";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Contact = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ansarisajidofficial@gmail.com",
      href: "mailto:ansarisajidofficial@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 81233 49025",
      href: "tel:+918123349025"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "sajid-da",
      href: "https://github.com/sajid-da",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "sajid-ansari",
      href: "https://www.linkedin.com/in/sajid-ansari-64a0092a4",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      username: "@SAJID_ZAROON",
      href: "https://twitter.com/SAJID_ZAROON",
      color: "hover:text-sky-400"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "ansarisajidofficial@gmail.com",
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={ref} id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-primary/3" />
      <div className="absolute inset-0 bg-accent/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isIntersecting ? 'animate-fade-down' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's <span className="text-foreground">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-primary-gradient mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next AI/ML project? Let's discuss how we can build something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className={`bg-card-gradient border-border/50 shadow-card ${isIntersecting ? 'animate-slide-in-left' : ''}`} style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-secondary/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-secondary/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-secondary/50 border-border focus:border-primary min-h-[120px]"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary-gradient hover:shadow-primary transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social */}
            <div className={`space-y-8 ${isIntersecting ? 'animate-slide-in-right' : ''}`} style={{ animationDelay: '400ms' }}>
              {/* Contact Information */}
              <Card className="bg-card-gradient border-border/50 shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{info.label}</p>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-card-gradient border-border/50 shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <social.icon className={`h-6 w-6 text-primary transition-colors ${social.color}`} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{social.label}</p>
                          <p className="text-muted-foreground">{social.username}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;