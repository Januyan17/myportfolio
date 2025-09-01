import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 fade-up">
            Hi, I'm{" "}
            <span className="text-gradient">Seralagan Januyan</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 text-muted-foreground fade-up fade-up-delay-1">
            Full Stack Mobile App Developer
          </h2>
          
          <p className="text-lg sm:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto fade-up fade-up-delay-2">
          Crafting Elegant Mobile and Web Applications that Blend Design, Functionality, and Robust Backend Systems
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-up fade-up-delay-3">
            <Button 
              onClick={scrollToAbout}
              className="btn-hero px-8 py-3 text-lg"
              size="lg"
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              className="btn-outline-glow px-8 py-3 text-lg"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown 
            className="h-6 w-6 text-muted-foreground cursor-pointer hover:text-primary transition-colors"
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;