import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    year: '2024 - 2026 (Expected)',
    gpa: '4.0/4.0',
    highlights: [
      'Focus on Machine Learning and Distributed Systems',
      'Graduate Research Assistant',
      'Teaching Assistant for Advanced Algorithms',
    ],
  },
  {
    id: 2,
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Indian Institute of Technology',
    year: '2020 - 2024',
    gpa: '9.5/10.0',
    highlights: [
      'First Class with Distinction',
      "Dean's List all semesters",
      'President of Coding Club',
      'Hackathon Winner (3x)',
    ],
  },
];

export const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="education" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic background and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`glass-card-hover p-8 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {edu.year}
                </span>
                <span className="flex items-center gap-2">
                  <Award size={16} />
                  GPA: {edu.gpa}
                </span>
              </div>

              <div className="space-y-3">
                {edu.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
