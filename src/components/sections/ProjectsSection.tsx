import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Github, Folder, Clock } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'VahanIQ (An Intelligent Vehicle System)',
    description:
      'Built a full-stack Vehicle Intelligence System integrating real-time parking detection, vehicle health monitoring, and smart navigation for efficient urban mobility.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL (Supabase)', 'Redis', 'WebSockets', 'Leaflet', 'JWT'],
    github: 'https://github.com/Nutanpatil06/Vehicle_Intelligence_System',
    status: 'completed',
  },
  {
    id: 2,
    title: 'InKo (Indo-Korean Traditional Medicine Advisor)',
    description:
      'AI-powered wellness platform integrating Korean and Indian Traditional medicine to deliver safe, personalized herbal health recommendations and symptom tracking.',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'TypeScript', 'Python', 'TensorFlow', 'OpenAI API'],
    github: 'https://github.com/Nutanpatil06/Indo-Korean_Traditional_Medicine_Advisor',
    status: 'completed',
  },
  {
    id: 3,
    title: 'ProjeX (Project Management System)',
    description:
      'A real-time Kanban-based project management platform built with Next.js and Supabase, enabling teams to collaborate, assign tasks, and track project progress efficiently.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Supabase'],
    github: 'https://github.com/Nutanpatil06/ProjeX',
    status: 'completed',
  },
  {
    id: 4,
    title: 'AI-Powered Park Surveillance System',
    description:
      'A real-time video analytics platform that uses object detection to identify and flag unauthorized activities in parks, enhancing security with a color-coded alert dashboard.',
    technologies: ['Python', 'YOLO/SSD', 'Streamlit', 'OpenCV', 'TensorFlow/PyTorch'],
    github: 'https://github.com/Nutanpatil06/AI-Enabled-Surveillance-Platform-for-Public-Parks-with-Behavioral-Based-Safety-Monitoring',
    status: 'completed',
  },
  {
    id: 4,
    title: 'Fine Tuning LLM with LLaMA Factory',
    description:
      'Built a complete LLM fine-tuning system that adapts models like Gemma using 70% less memory while maintaining full performance.',
    technologies: ['Hugging Face Transformers', 'PEFT (LoRA/QLoRA)', 'Gradio'],
    github: 'https://github.com/Nutanpatil06/Fine-Tuning-LLM-with-LLaMA-Factory',
    status: 'completed',
  },
  {
    id: 5,
    title: 'RAG Based Chatbot with Memory',
    description:
      'Developed a context-aware chatbot that remembers conversations and provides coherent multi-turn responses using RAG and memory systems.',
    technologies: ['Python', 'LangChain', 'Google Gemini API', 'ChromaDB', 'BeautifulSoup'],
    github: 'https://github.com/Nutanpatil06/RAG_Based_Chatbot_With_Memory',
    status: 'completed',
  },
  {
    id: 6,
    title: 'Advanced RAG with Sentence Window Retrieval',
    description:
      'Built a smart document Q&A system that understands context beyond keywords, delivering 40% more accurate answers than standard search engines.',
    technologies: ['LlamaIndex', 'Qdrant', 'Gemini LLM', 'HuggingFace Embeddings'],
    github: 'https://github.com/Nutanpatil06/Advanced_RAG_With_Sentence_Window_Retrieval',
    status: 'completed',
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
