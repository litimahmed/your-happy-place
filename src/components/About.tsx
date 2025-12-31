import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-background">
      <div ref={ref} className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={isVisible ? "animate-slide-right" : "opacity-0"}>
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
              ● About Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-display text-foreground leading-[1.2] mb-6">
              ALWAYS PROVIDING <span className="text-accent">THE</span><br />
              BEST SERVICES
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <p className="text-foreground/80 text-xs tracking-[0.15em] uppercase mb-8">
              WE ARE YOUR FRIEND &<br />
              BEST AGENCY
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-5 text-xs tracking-[0.1em] uppercase">
                Explore
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-accent gap-2 group text-xs tracking-[0.1em] uppercase">
                <div className="w-8 h-8 rounded-full border border-foreground/30 flex items-center justify-center group-hover:border-accent transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Image with VIEW VIDEO overlay */}
          <div className={`relative ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[400px] object-cover"
              />
              {/* VIEW VIDEO Overlay */}
              <div className="absolute bottom-0 right-0 bg-accent px-8 py-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center">
                  <Play className="w-4 h-4 text-accent-foreground fill-current ml-0.5" />
                </div>
                <span className="text-accent-foreground text-xs tracking-[0.15em] uppercase font-medium">
                  View Video
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
