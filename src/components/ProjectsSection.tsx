import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Gamepad2, Shield, Binary, Zap, ShoppingCart, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Typing Game",
    description: "Python game for mastering basic to intermediate programming concepts through interactive typing challenges.",
    tools: ["Python", "Pygame"],
    github: "#",
    icon: Gamepad2,
  },
  {
    title: "Phishing Detection Tool",
    description: "ML-based Python tool to detect phishing URLs using machine learning algorithms and URL analysis.",
    tools: ["Python", "Machine Learning", "Scikit-learn"],
    github: "#",
    icon: Shield,
  },
  {
    title: "Binary File Analyzer",
    description: "Tool to analyze binary files for Indicators of Compromise (IOCs) and potential malware signatures.",
    tools: ["Python", "Binary Analysis"],
    github: "#",
    icon: Binary,
  },
  {
    title: "DoS Attack Simulation",
    description: "Layer 7 simulated attack project to understand DoS techniques and develop mitigation strategies.",
    tools: ["Python", "Network Security"],
    github: "#",
    icon: Zap,
  },
  {
    title: "Localgrew E-commerce Platform",
    description: "Web and mobile development project with frontend security testing. Supporting local businesses.",
    tools: ["React", "Node.js", "MongoDB", "Security Testing"],
    github: "#",
    icon: ShoppingCart,
  },
  {
    title: "Reankitlek Learning App",
    description: "Freelance project focusing on frontend development and security testing for educational platform.",
    tools: ["React", "TypeScript", "Security Audit"],
    github: "#",
    icon: GraduationCap,
  },
];

const ProjectsSection = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative"
    >
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-card border border-border rounded-lg overflow-hidden card-hover-lift transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Card Header with Icon */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-8 h-8 text-primary" />
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded-md border border-border"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Action Buttons */}
                <div className="p-6 pt-0 flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
