import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, User } from 'lucide-react';

const roles = ['Full Stack Developer', 'Researcher', 'Open Source Contributor'];

export const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          if (isDeleting) {
            setDisplayedText(currentRole.substring(0, displayedText.length - 1));
          } else {
            setDisplayedText(currentRole.substring(0, displayedText.length + 1));
          }
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative section-padding pt-32"
    >
      <div className="container mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8 animate-slide-up">
          <div className="relative inline-block">
            <div className="w-40 h-40 rounded-full glass-card flex items-center justify-center animate-float glow-effect">
              <User size={64} className="text-primary" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10" />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 animate-slide-up delay-100">
          <span className="gradient-text">Your Name</span>
        </h1>

        {/* Typing Animation Role */}
        <div className="h-12 mb-8 animate-slide-up delay-200">
          <p className="text-xl md:text-2xl text-muted-foreground">
            <span className="text-foreground">{displayedText}</span>
            <span className="animate-pulse text-primary">|</span>
          </p>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up delay-300">
          Crafting elegant solutions through code. Passionate about building 
          impactful software and contributing to the developer community.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-16 animate-slide-up delay-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-hover p-4 rounded-full group"
          >
            <Github
              size={24}
              className="text-muted-foreground group-hover:text-primary transition-colors"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-hover p-4 rounded-full group"
          >
            <Linkedin
              size={24}
              className="text-muted-foreground group-hover:text-primary transition-colors"
            />
          </a>
          <a
            href="mailto:hello@example.com"
            className="glass-card-hover p-4 rounded-full group"
          >
            <Mail
              size={24}
              className="text-muted-foreground group-hover:text-primary transition-colors"
            />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('experience')}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors animate-slide-up delay-500"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};
