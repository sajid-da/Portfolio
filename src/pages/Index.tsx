import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary/20 py-8 text-center">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground">
            © 2024 Sajid Ansari. Crafting data-driven futures with AI/ML.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;