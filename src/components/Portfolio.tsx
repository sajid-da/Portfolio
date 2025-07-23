import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, Cloud, Eye } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Portfolio = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const projects = [
    {
      title: "SmartCart",
      subtitle: "AI-Powered Shopping Cart",
      description: "Advanced shopping cart system featuring real-time product recognition, automated billing, and cloud-based inventory management.",
      features: [
        "Real-time product recognition",
        "Automated billing system",
        "Cloud-based inventory",
        "IoT integration",
        "Computer vision processing"
      ],
      techStack: ["Python", "Computer Vision", "IoT", "Google Cloud", "TensorFlow"],
      status: "Featured Project",
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const comingSoon = [
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for business intelligence",
      techStack: ["React", "Python", "D3.js"]
    },
    {
      title: "ML Prediction Model",
      description: "Predictive analytics for market trends",
      techStack: ["Python", "Scikit-learn", "Pandas"]
    },
    {
      title: "AI Chatbot Assistant",
      description: "Intelligent conversational AI system",
      techStack: ["NLP", "Python", "OpenAI"]
    }
  ];

  return (
    <section ref={ref} id="portfolio" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isIntersecting ? 'animate-fade-down' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="text-foreground">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-primary-gradient mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions that blend AI, data science, and modern development
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-16">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`bg-card-gradient border-border/50 shadow-glow hover:shadow-primary/30 transition-all duration-500 overflow-hidden ${isIntersecting ? 'animate-zoom-in' : 'opacity-0'}`}
                style={{ animationDelay: '300ms' }}
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Project Image/Visual */}
                    <div className="bg-primary/5 p-12 flex items-center justify-center relative overflow-hidden">
                      <div className="w-full max-w-sm mx-auto">
                        <div className="bg-primary/10 rounded-lg p-8 border border-primary/20">
                          <div className="flex items-center justify-center mb-4">
                            <Zap className="h-16 w-16 text-primary" />
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 bg-primary/30 rounded"></div>
                            <div className="h-3 bg-primary/20 rounded w-3/4"></div>
                            <div className="h-3 bg-primary/10 rounded w-1/2"></div>
                          </div>
                        </div>
                      </div>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-primary/5"></div>
                    </div>
                    
                    {/* Project Details */}
                    <div className="p-8 lg:p-12">
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="secondary" className="bg-primary text-primary-foreground">
                              {project.status}
                            </Badge>
                          </div>
                          <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                          <p className="text-xl text-primary font-medium mb-4">{project.subtitle}</p>
                          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="font-semibold mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="font-semibold mb-3">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                          <Button className="bg-primary-gradient hover:shadow-primary">
                            <Eye className="mr-2 h-4 w-4" />
                            View Demo
                          </Button>
                          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            <Github className="mr-2 h-4 w-4" />
                            Source Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Projects */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Coming Soon</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {comingSoon.map((project, index) => (
                <Card 
                  key={index}
                  className={`bg-card-gradient border-border/50 shadow-card opacity-60 hover:opacity-80 transition-opacity ${isIntersecting ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <Cloud className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">{project.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;