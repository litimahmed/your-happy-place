import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    number: "01",
    title: "Digital Strategy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "02",
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "03",
    title: "Social Media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 bg-background">
      <div ref={ref} className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
            ● What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            OUR SERVICES
          </h2>
        </div>

        {/* Decorative Line */}
        <div className={`flex justify-center mb-16 ${isVisible ? "animate-fade-up delay-100" : "opacity-0"}`}>
          <div className="w-px h-16 bg-border" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`text-center px-6 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <h3 className="text-lg font-display text-foreground mb-4 tracking-wide uppercase">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="w-10 h-10 rounded-full border border-accent bg-accent/10 flex items-center justify-center mx-auto hover:bg-accent group transition-colors">
                <ArrowRight className="w-4 h-4 text-accent group-hover:text-accent-foreground transition-colors" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className={`flex justify-center mt-16 ${isVisible ? "animate-fade-up delay-400" : "opacity-0"}`}>
          <div className="w-px h-16 bg-border" />
        </div>
      </div>
    </section>
  );
};
