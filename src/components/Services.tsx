import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Code, Palette, Brain } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Services = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const services = [
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Uncover insights, build dashboards, analyze trends",
      features: ["Statistical Analysis", "Data Visualization", "Trend Forecasting", "Business Intelligence"]
    },
    {
      icon: Code,
      title: "Website Development",
      description: "From backend logic to UI finesse",
      features: ["Full-Stack Development", "API Integration", "Database Design", "Performance Optimization"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting intuitive, responsive interfaces",
      features: ["User Experience Design", "Responsive Layouts", "Design Systems", "Prototyping"]
    },
    {
      icon: Brain,
      title: "AI/ML Integration",
      description: "Automating systems with smart models",
      features: ["Machine Learning Models", "AI Solutions", "Automation Systems", "Predictive Analytics"]
    }
  ];

  return (
    <section ref={ref} id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isIntersecting ? 'animate-fade-down' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="text-foreground">Services</span>
            </h2>
            <div className="w-24 h-1 bg-primary-gradient mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming ideas into intelligent solutions with cutting-edge technology
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`group bg-card-gradient border-border/50 shadow-card hover:shadow-primary/20 transition-all duration-300 ${isIntersecting ? 'animate-zoom-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150 + 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <p className="text-sm text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;