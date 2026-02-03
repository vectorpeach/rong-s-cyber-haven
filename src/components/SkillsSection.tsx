import { useEffect, useRef, useState } from "react";
import { Code, Users, Database, Globe, Shield, Terminal, MessageSquare, Lightbulb, Handshake } from "lucide-react";

const technicalSkills = [
  { name: "Python", level: 85, icon: Code },
  { name: "Nest.js", level: 75, icon: Code },
  { name: "SQL", level: 80, icon: Database },
  { name: "MongoDB", level: 70, icon: Database },
  { name: "Cisco Networking", level: 75, icon: Globe },
  { name: "Web Security", level: 80, icon: Shield },
  { name: "Malware Analysis", level: 70, icon: Terminal },
];

const softSkills = [
  { name: "Teamwork", icon: Users },
  { name: "Communication", icon: MessageSquare },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Collaboration", icon: Handshake },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-card relative"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary" />
                Technical Skills
              </h3>
              <div className="space-y-5">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-primary" />
                        <span className="text-foreground font-medium">{skill.name}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-secondary/50 border border-border rounded-lg p-6 text-center card-hover-lift box-glow-hover transition-all duration-300 group"
                    style={{
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    <skill.icon className="w-10 h-10 text-accent mx-auto mb-3 group-hover:text-primary transition-colors" />
                    <span className="text-foreground font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
