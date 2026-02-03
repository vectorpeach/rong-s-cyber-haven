import { useEffect, useRef, useState } from "react";
import { FileCheck, ExternalLink } from "lucide-react";

const certificates = [
  {
    name: "Cybersecurity Fundamentals",
    issuer: "Certificate Issuer",
    year: "2024",
    image: null,
  },
  {
    name: "Network Security",
    issuer: "Certificate Issuer",
    year: "2024",
    image: null,
  },
  {
    name: "Python Programming",
    issuer: "Certificate Issuer",
    year: "2023",
    image: null,
  },
  {
    name: "Ethical Hacking",
    issuer: "Certificate Issuer",
    year: "2024",
    image: null,
  },
  {
    name: "Web Security",
    issuer: "Certificate Issuer",
    year: "2024",
    image: null,
  },
  {
    name: "More Certificates",
    issuer: "Coming Soon",
    year: "—",
    image: null,
  },
];

const CertificatesSection = () => {
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
      id="certificates"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative"
    >
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Certificates</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Certificates Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certificates.map((cert, index) => (
              <div
                key={cert.name}
                className="group bg-card border border-border rounded-lg overflow-hidden card-hover-lift box-glow-hover transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Certificate Image Placeholder */}
                <div className="aspect-[4/3] bg-secondary/50 flex items-center justify-center relative overflow-hidden">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <FileCheck className="w-16 h-16 text-muted-foreground/50" />
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-foreground" />
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
