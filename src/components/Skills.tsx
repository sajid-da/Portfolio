import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Award } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Skills = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "SQL", "Java"],
      color: "text-blue-400"
    },
    {
      title: "Libraries/Tools",
      icon: Database,
      skills: ["Pandas", "NumPy", "Matplotlib", "TensorFlow", "Streamlit"],
      color: "text-green-400"
    },
    {
      title: "Cloud/Infrastructure",
      icon: Cloud,
      skills: ["Google Cloud", "DevOps Basics", "Cloud Computing"],
      color: "text-purple-400"
    }
  ];

  const certifications = [
    "ML Specialization (Coursera)",
    "TensorFlow (Udacity)",
    "Google Cloud (2024)",
    "Networking (Cisco)",
    "Streamlit App (Coursera)"
  ];

  return (
    <section ref={ref} id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isIntersecting ? 'animate-zoom-in' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="text-foreground">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-primary-gradient mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent systems and data-driven solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 stagger-children">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`bg-card-gradient border-border/50 shadow-card hover:shadow-primary/20 transition-all duration-300 ${isIntersecting ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <category.icon className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <Card className={`bg-card-gradient border-border/50 shadow-card ${isIntersecting ? 'animate-reveal' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors"
                  >
                    <p className="text-sm font-medium text-foreground">{cert}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;