import { useEffect, useRef, useState } from "react";
import { Trophy, Award, Star, Plus } from "lucide-react";

const achievements = [
  {
    title: "Top 3 Startups",
    event: "Hackathon in Siem Reap",
    project: "Localgrew",
    year: "2024",
    icon: Trophy,
    highlight: true,
  },
  {
    title: "Finalist",
    event: "Secure Actsmart Hackathon",
    project: "Localgrew Team",
    year: "2024",
    icon: Award,
    highlight: true,
  },
  {
    title: "More Coming Soon",
    event: "Future Achievement",
    project: "Placeholder for upcoming wins",
    year: "—",
    icon: Star,
    highlight: false,
  },
];

const AchievementsSection = () => {
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
      id="achievements"
      ref={sectionRef}
      className="py-20 md:py-32 bg-card relative"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Achievements</span> & Awards
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    style={{
                      animationDelay: `${index * 200}ms`,
                    }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full hidden md:block animate-pulse-glow" />

                    {/* Card */}
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <div
                        className={`bg-background border rounded-lg p-6 card-hover-lift transition-all duration-300 ${
                          achievement.highlight
                            ? "border-primary box-glow"
                            : "border-border"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-3 rounded-lg ${
                              achievement.highlight
                                ? "bg-primary/20"
                                : "bg-secondary"
                            }`}
                          >
                            <achievement.icon
                              className={`w-6 h-6 ${
                                achievement.highlight
                                  ? "text-primary"
                                  : "text-muted-foreground"
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="text-lg font-semibold text-foreground">
                                {achievement.title}
                              </h3>
                              <span className="text-sm text-muted-foreground">
                                {achievement.year}
                              </span>
                            </div>
                            <p className="text-primary text-sm mb-1">
                              {achievement.event}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {achievement.project}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden md:block" />
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

export default AchievementsSection;
