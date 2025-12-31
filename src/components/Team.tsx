import { Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const teamMembers = [
  {
    id: 1,
    name: "J. Hamilton",
    position: "Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "D. Rogers",
    position: "CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "S. Allen",
    position: "Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "R. Garcia",
    position: "Creative Dir",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
];

export const Team = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="team" className="py-24 bg-dark text-light">
      <div ref={ref} className="container-custom">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Title and Button */}
          <div className={`lg:col-span-3 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
              ● Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-display leading-tight mb-6">
              OUR TEAM
            </h2>
            <p className="text-light/50 text-sm leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-5 text-xs tracking-[0.1em] uppercase">
              About Us
            </Button>
          </div>

          {/* Right Column - Team Members */}
          <div className={`lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-4 ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
            {teamMembers.map((member, index) => (
              <div key={member.id} className="group relative">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                  
                  {/* Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-accent text-[10px] tracking-[0.2em] uppercase mb-1">
                      {member.position}
                    </p>
                    <h3 className="text-sm font-display text-light">
                      {member.name}
                    </h3>
                  </div>
                  
                  {/* Social Icons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                      <Linkedin className="w-3 h-3 text-accent-foreground" />
                    </a>
                    <a href="#" className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                      <Twitter className="w-3 h-3 text-accent-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
