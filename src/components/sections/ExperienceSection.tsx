import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'AI Virtual Internship',
    certLink: 'https://drive.google.com/file/d/1MHPRfx3kbq5eeg0WO-cFeJFV7Pr4D0aG/view?usp=drive_link',
    company: 'Infosys',
    location: 'Remote',
    duration: '22 Dec 2025 - 25 Feb 2026',
    description: [
      'Developing an AI-based video surveillance platform to enhance park security by detecting and flagging unauthorized activities in real time using YOLO/SSD models.',
      'Building an interactive Streamlit dashboard with a color-coded alert system (green/red) and optimizing the model for accurate, real-time activity recognition.',
    ],
    technologies: ['Python', 'YOLO/SSD', 'Streamlit', 'OpenCV'],
  },
  {
    id: 2,
    role: 'Gen AI Internship',
    certLink: 'https://drive.google.com/file/d/1ixWlH90Cmzzsxu08c-qNwjJ00qP-ay8w/view?usp=sharing',
    company: 'BrainOVision',
    location: 'Remote',
    duration: '19 May 2025 - 20 Aug 2025',
    description: [
      'Applied Generative AI concepts to build an AI-driven prototype for content automation, utilizing LLMs and APIs to solve real-world tasks.',
      'Designed and tested AI workflows that improved automation efficiency and demonstrated practical applications of modern language models.',
    ],
    technologies: ['Python', 'LLM APIs', 'Prompt Engineering'],
  },
  {
    id: 3,
    role: 'Web Application Development Internship',
    certLink: 'https://drive.google.com/file/d/1KlwxI9DcQfyal-rUkHdYl4zAOdP7O9xm/view?usp=sharing',
    company: 'Ninja Coders Hub',
    location: 'Remote',
    duration: '1 Nov 2024 - 2 May 2025',
    description: [
      'Engineered a full-stack Vehicle Intelligence System with real-time monitoring and smart parking detection to streamline vehicle management for drivers.',
      'Developed scalable features using React, Node.js, and RESTful APIs, and integrated secure third-party authentication to enhance user onboarding and system security.',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
  },
];

export const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and internship experiences
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform md:-translate-x-1/2 -translate-x-1/2 glow-effect z-10" />

              {/* Content */}
              <div
                className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'
                }`}
              >
                <div className="glass-card-hover p-6 md:p-8">
                  <div
                    className={`flex items-center gap-3 mb-3 text-primary ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    <Briefcase size={20} />
                    <span className="font-semibold">{exp.company}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-bold mb-2">
                    <a
                      href={exp.certLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors inline-flex items-center gap-2 group/link"
                    >
                      {exp.role}
                      <ExternalLink size={16} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  </h3>

                  <div
                    className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-left">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
