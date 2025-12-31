import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const portfolioItems = [
  {
    id: 1,
    title: "Branding Design",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    size: "large",
  },
  {
    id: 2,
    title: "Creative Design",
    category: "Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    size: "small",
  },
  {
    id: 3,
    title: "Web Development",
    category: "Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    size: "small",
  },
  {
    id: 4,
    title: "Digital Marketing",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    size: "small",
  },
];

export const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div ref={ref} className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
            ● Our Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            OUR WORKS
          </h2>
        </div>

        {/* Decorative Line */}
        <div className={`flex justify-center mb-12 ${isVisible ? "animate-fade-up delay-100" : "opacity-0"}`}>
          <div className="w-px h-12 bg-border" />
        </div>

        {/* Portfolio Grid - Matching template layout */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          {/* Large item on left */}
          <div className="relative group overflow-hidden cursor-pointer h-[500px]">
            <img
              src={portfolioItems[0].image}
              alt={portfolioItems[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
            />
            <div className="absolute inset-0 bg-dark/60" />
            <div className="absolute bottom-8 left-8">
              <p className="text-accent text-xs tracking-[0.2em] uppercase mb-2">
                {portfolioItems[0].category}
              </p>
              <h3 className="text-light text-2xl font-display">
                {portfolioItems[0].title}
              </h3>
            </div>
          </div>

          {/* Right column with 3 smaller items */}
          <div className="grid grid-rows-2 gap-6">
            <div className="grid grid-cols-2 gap-6">
              {portfolioItems.slice(1, 3).map((item) => (
                <div 
                  key={item.id} 
                  className="relative group overflow-hidden cursor-pointer h-[240px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-accent text-xs tracking-[0.2em] uppercase mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-light text-lg font-display">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative group overflow-hidden cursor-pointer h-[240px]">
              <img
                src={portfolioItems[3].image}
                alt={portfolioItems[3].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-accent text-xs tracking-[0.2em] uppercase mb-1">
                  {portfolioItems[3].category}
                </p>
                <h3 className="text-light text-lg font-display">
                  {portfolioItems[3].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
