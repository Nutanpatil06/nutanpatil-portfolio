import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Software Engineering Intern',
    company: 'Tech Company A',
    location: 'San Francisco, CA',
    duration: 'Jun 2024 - Aug 2024',
    description:
      'Developed and deployed microservices architecture improving system performance by 40%. Collaborated with cross-functional teams on product features.',
    technologies: ['React', 'Node.js', 'AWS', 'Docker'],
  },
  {
    id: 2,
    role: 'Full Stack Developer Intern',
    company: 'Startup B',
    location: 'Remote',
    duration: 'Jan 2024 - May 2024',
    description:
      'Built responsive web applications serving 10K+ users. Implemented CI/CD pipelines reducing deployment time by 60%.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
  },
  {
    id: 3,
    role: 'Research Intern',
    company: 'University Lab',
    location: 'Boston, MA',
    duration: 'May 2023 - Dec 2023',
    description:
      'Conducted research on machine learning algorithms for natural language processing. Published findings in peer-reviewed conference.',
    technologies: ['Python', 'PyTorch', 'NLP', 'TensorFlow'],
  },
  {
    id: 4,
    role: 'Web Development Intern',
    company: 'Agency C',
    location: 'New York, NY',
    duration: 'Jun 2022 - Aug 2022',
    description:
      'Designed and developed client websites with focus on performance and accessibility. Managed multiple projects simultaneously.',
    technologies: ['JavaScript', 'HTML/CSS', 'WordPress', 'Figma'],
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
            My professional journey and internships that shaped my skills
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
                    {exp.role}
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

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

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
