import { useEffect, useRef, useState } from "react";
import { User, Code, Trophy } from "lucide-react";

const stats = [
  { label: "Projects", value: 20, suffix: "+", icon: Code },
  { label: "Hackathons", value: 2, suffix: "", icon: Trophy },
  { label: "Coding Hours", value: 500, suffix: "+", icon: User },
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = stat.value;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }
      }, duration / steps);
    });
  }, [isVisible]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative"
    >
      <div className="absolute inset-0 cyber-grid-bg opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Profile Image Placeholder */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-secondary flex items-center justify-center border-4 border-primary/50 box-glow transition-all duration-300 group-hover:border-primary overflow-hidden">
                  <User className="w-32 h-32 text-muted-foreground" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I am a cybersecurity student focused on penetration testing, network security, and web application security. I enjoy exploring vulnerabilities, analyzing threats, and building tools to enhance system security.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Motivated by hands-on projects, I continuously improve my technical knowledge in Python, Linux, and ML-based security solutions.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-lg p-6 text-center card-hover-lift box-glow-hover transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
