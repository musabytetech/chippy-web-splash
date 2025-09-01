import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";
import heroImage from "@/assets/hero-fish-chips.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Golden crispy fish and chips" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/80 via-ocean-deep/60 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Best Fish & Chips
            <span className="block text-golden-crispy">In Town</span>
          </h1>
          <p className="text-xl md:text-2xl text-ocean-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Fresh, locally-caught fish with our secret golden batter recipe. 
            Serving the community since 1952 with authentic British tradition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-golden hover:shadow-golden transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
              onClick={() => scrollToSection('menu')}
            >
              View Our Menu
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-ocean-deep transition-all duration-300 text-lg px-8 py-6"
              onClick={() => scrollToSection('contact')}
            >
              Find Us
            </Button>
          </div>

          {/* Quick Info Bar */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2 animate-float">
              <MapPin className="w-5 h-5 text-golden-crispy" />
              <span>123 Coastal Avenue</span>
            </div>
            <div className="flex items-center gap-2 animate-float" style={{ animationDelay: '0.5s' }}>
              <Clock className="w-5 h-5 text-golden-crispy" />
              <span>Open Daily 11:30 - 21:00</span>
            </div>
            <div className="flex items-center gap-2 animate-float" style={{ animationDelay: '1s' }}>
              <Phone className="w-5 h-5 text-golden-crispy" />
              <span>(555) 123-FISH</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-golden-crispy rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;