import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Github, Folder, Clock } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Code Assistant',
    description:
      'An intelligent code completion tool powered by GPT-4 that helps developers write better code faster with context-aware suggestions.',
    technologies: ['Python', 'OpenAI API', 'FastAPI', 'React'],
    github: 'https://github.com',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Distributed Task Queue',
    description:
      'High-performance distributed task queue system capable of handling millions of jobs with fault tolerance and horizontal scaling.',
    technologies: ['Go', 'Redis', 'Kubernetes', 'gRPC'],
    github: 'https://github.com',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Real-time Collaboration App',
    description:
      'Google Docs-like real-time collaboration platform with CRDT-based conflict resolution and offline support.',
    technologies: ['TypeScript', 'WebSocket', 'Yjs', 'Next.js'],
    github: 'https://github.com',
    status: 'completed',
  },
  {
    id: 4,
    title: 'Neural Network Visualizer',
    description:
      'Building an interactive tool to visualize neural network architectures and training processes in real-time with 3D representations.',
    technologies: ['Python', 'Three.js', 'TensorFlow', 'WebGL'],
    github: null,
    status: 'ongoing',
  },
];

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects I've built and contributed to
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-card-hover p-6 flex flex-col h-full group transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Folder size={24} />
                </div>
                <div className="flex items-center gap-3">
                  {project.status === 'ongoing' ? (
                    <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Clock size={12} />
                      Ongoing
                    </span>
                  ) : project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  ) : null}
                </div>
              </div>

              <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground font-mono"
                  >
                    {tech}
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
