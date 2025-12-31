import { ArrowRight, Linkedin, Twitter, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-light/10">
          {/* Brand Column */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display text-sm">D</span>
              </div>
              <span className="text-sm font-display text-light tracking-wide">AGENCY</span>
            </a>
            <p className="text-light/50 text-sm leading-relaxed mb-6 max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-light/10 flex items-center justify-center hover:bg-accent transition-colors group"
                >
                  <social.icon className="w-3.5 h-3.5 group-hover:text-accent-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm mb-6 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-light/50 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-sm mb-6 tracking-wide">NEWSLETTER</h4>
            <p className="text-light/50 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your Address"
                className="bg-transparent border-light/20 text-light placeholder:text-light/30 text-sm rounded-none focus:border-accent"
              />
              <button className="w-10 h-10 bg-accent flex items-center justify-center hover:bg-accent/90 transition-colors">
                <ArrowRight className="w-4 h-4 text-accent-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center">
          <p className="text-light/30 text-xs">
            © Copyright 2024 DAgency. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
