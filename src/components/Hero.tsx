import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
          alt="Modern office workspace"
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/40" />
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="pt-20">
            <div className={`${isVisible ? "animate-fade-up" : "opacity-0"}`}>
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-8">
                ● Welcome Agency
              </p>
            </div>
            
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl font-display text-light leading-[1.1] mb-8 ${
                isVisible ? "animate-fade-up delay-100" : "opacity-0"
              }`}
            >
              DIGITAL<br />
              MEDIA<br />
              AGENCY
            </h1>
            
            <p 
              className={`text-light/50 text-sm max-w-md mb-8 leading-relaxed ${
                isVisible ? "animate-fade-up delay-200" : "opacity-0"
              }`}
            >
              ● View Video
            </p>
          </div>

          {/* Right Content - Play Button */}
          <div 
            className={`flex justify-center lg:justify-end items-center ${
              isVisible ? "animate-fade-up delay-300" : "opacity-0"
            }`}
          >
            <button className="group relative">
              <div className="w-24 h-24 rounded-full border border-accent/50 flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-accent-foreground fill-current ml-1" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border/20" />
    </section>
  );
};
