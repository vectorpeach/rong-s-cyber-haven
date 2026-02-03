import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleNetwork from "./ParticleNetwork";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullName = "Rong Soavnnrot";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayText(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleNetwork />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Name with typing effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-glow">{displayText}</span>
            <span className="animate-pulse text-accent">|</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary mb-4 font-mono">
            Cybersecurity Student | Penetration Testing & Offensive Security Enthusiast
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
            Curious, motivated, and always eager to learn through hands-on projects and real-world security challenges.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="box-glow box-glow-hover transition-all duration-300 bg-primary hover:bg-primary/90"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={() => scrollToSection("#about")}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
