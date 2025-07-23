import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Languages } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const About = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const education = [
    {
      degree: "B.Tech CSE (AI/ML)",
      institution: "Jain University",
      period: "2023 – 2027",
      status: "Current"
    },
    {
      degree: "Pre-University",
      institution: "St. Joseph's",
      period: "2021 – 2023",
      status: "Completed"
    },
    {
      degree: "Schooling",
      institution: "Silicon Valley School",
      period: "2008 – 2021",
      status: "Completed"
    }
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" },
    { name: "Kannada", level: "Conversational" }
  ];

  return (
    <section ref={ref} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isIntersecting ? 'animate-fade-down' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">About</span> Me
            </h2>
            <div className="w-24 h-1 bg-primary-gradient mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div className={`space-y-8 ${isIntersecting ? 'animate-slide-in-left' : ''}`}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm Sajid, an aspiring AI/ML Engineer currently pursuing a B.Tech in Artificial Intelligence at Jain University. 
                  Passionate about implementing machine learning, data analysis, and AI-driven technologies to solve real-world problems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a strong foundation in Python and cloud computing, I'm dedicated to transforming complex data into actionable insights 
                  and building intelligent systems that make a difference.
                </p>
              </div>

              {/* Languages */}
              <Card className="bg-card-gradient border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Languages className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Languages</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {languages.map((lang, index) => (
                      <div key={index} className="text-center">
                        <p className="font-medium text-foreground">{lang.name}</p>
                        <p className="text-sm text-muted-foreground">{lang.level}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Education Timeline */}
            <div className={`${isIntersecting ? 'animate-slide-in-right' : ''}`} style={{ animationDelay: '200ms' }}>
              <Card className="bg-card-gradient border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-semibold">Education</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="relative">
                        {index !== education.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-16 bg-primary/30"></div>
                        )}
                        <div className="flex gap-4">
                          <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                edu.status === 'Current' 
                                  ? 'bg-primary text-primary-foreground' 
                                  : 'bg-secondary text-secondary-foreground'
                              }`}>
                                {edu.status}
                              </span>
                            </div>
                            <p className="text-muted-foreground">{edu.institution}</p>
                            <p className="text-sm text-muted-foreground">{edu.period}</p>
                          </div>
                        </div>
                      </div>
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

export default About;