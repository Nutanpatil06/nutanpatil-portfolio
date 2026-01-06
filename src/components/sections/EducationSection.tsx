import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Shri Sant Gadge Baba College of Engineering and Technology (SSGBCOET)',
    location: 'Bhusawal, Maharashtra',
    year: '2021 - 2025',
    gpa: '3.36/4.0',
    highlights: [],
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

        <div className="max-w-3xl mx-auto">
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
                  <p className="text-muted-foreground text-sm">{edu.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {edu.year}
                </span>
                <span className="flex items-center gap-2">
                  <Award size={16} />
                  CGPA: {edu.gpa}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
