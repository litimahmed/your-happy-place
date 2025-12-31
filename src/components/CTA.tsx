import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-dark text-light">
      <div ref={ref} className="container-custom">
        <div className={`text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
            ● Let's Talk
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight mb-10">
            HAVE A PROJECT IN MIND?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-light/50 text-[10px] tracking-[0.15em] uppercase">Phone Now</p>
                <p className="text-sm">+01 555 123 456</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-light/20" />

            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-5 text-xs tracking-[0.1em] uppercase gap-2">
              <Calendar className="w-4 h-4" />
              Schedule
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
