import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, Layout, Server, Database, Brain, Wrench, Cloud } from 'lucide-react';

const skillGroups = [
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js'],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    icon: Brain,
    title: 'AI / ML',
    skills: ['Machine Learning', 'NLP', 'TensorFlow', 'OpenAI API', 'RAG Systems'],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Deployment',
    skills: ['AWS (basic)', 'Vercel', 'Netlify'],
  },
];

export const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={`glass-card-hover p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <group.icon size={22} />
                </div>
                <h3 className="font-display font-bold text-lg">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
