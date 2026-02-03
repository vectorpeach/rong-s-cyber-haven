import { useState } from "react";
import { Send, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Feel free to reach out for collaboration, freelance opportunities, or cybersecurity discussions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full box-glow box-glow-hover transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-foreground">
                  Find me on
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/rong-sovannrot-176789348/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="mailto:contact@example.com"
                    className="p-3 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                    aria-label="Email"
                  >
                    <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
