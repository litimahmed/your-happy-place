import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tags = [
  "GRAPHIC", "DESIGN", "CREATIVE", "WEB", "DEVELOPMENT", 
  "MARKETING", "E-COMMERCE", "BRANDING", "STRATEGY"
];

export const VideoBanner = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 bg-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-dark/70" />
      </div>

      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[25vw] font-display text-light/[0.03] whitespace-nowrap">
          VIDEOS
        </span>
      </div>

      <div ref={ref} className="container-custom relative z-10">
        {/* Play Button */}
        <div className={`flex justify-center mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <button className="group relative">
            <div className="w-20 h-20 rounded-full border border-light/20 flex items-center justify-center group-hover:border-accent transition-colors">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-5 h-5 text-accent-foreground fill-current ml-1" />
              </div>
            </div>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-light/50 text-[10px] tracking-[0.2em] uppercase whitespace-nowrap">
              ● Watch Now
            </span>
          </button>
        </div>

        {/* Scrolling Tags */}
        <div className={`overflow-hidden ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          <div className="flex animate-marquee whitespace-nowrap">
            {[...tags, ...tags].map((tag, index) => (
              <span
                key={index}
                className="mx-6 px-6 py-2 border border-light/20 rounded-full text-xs tracking-[0.15em] text-light/40 hover:text-accent hover:border-accent transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
