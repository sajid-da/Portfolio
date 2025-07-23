import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/sajid-profile-final.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 bg-accent/3" />
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">
                  SAJID
                </span>
                <br />
                <span className="text-foreground">ANSARI</span>
              </h1>
              <p className="text-xl lg:text-2xl text-primary font-medium">
                Aspiring AI/ML Engineer
              </p>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Crafting Data-Driven Futures
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary-gradient hover:shadow-primary transition-all duration-300 animate-glow-pulse"
                onClick={() => scrollToSection('portfolio')}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/sajid-da" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:shadow-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sajid-ansari-64a0092a4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:shadow-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
                <img 
                  src={profileImage} 
                  alt="Sajid Ansari - AI/ML Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-1 bg-primary-gradient rounded-full blur-xl opacity-30 animate-glow-pulse" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="h-8 w-8 text-primary cursor-pointer" 
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default Hero;