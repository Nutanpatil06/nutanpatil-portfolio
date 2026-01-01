import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { FileText, Users, Clock } from 'lucide-react';

const papers = [
  {
    id: 1,
    title: 'Efficient Transformer Architectures for Low-Resource NLP',
    authors: ['Your Name', 'Co-Author A', 'Co-Author B'],
    venue: 'In Progress',
    abstract:
      'Proposing novel transformer modifications that reduce computational requirements by 60% while maintaining performance on low-resource language tasks.',
    status: 'ongoing',
  },
  {
    id: 2,
    title: 'Distributed Learning with Privacy Guarantees',
    authors: ['Your Name', 'Co-Author C'],
    venue: 'In Progress',
    abstract:
      'Developing a novel framework for federated learning that provides differential privacy guarantees while achieving state-of-the-art accuracy on benchmark datasets.',
    status: 'ongoing',
  },
];

export const ResearchSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="research" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Research</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ongoing research work and publications
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {papers.map((paper, index) => (
            <div
              key={paper.id}
              className={`glass-card-hover p-6 md:p-8 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary hidden md:block">
                  <FileText size={28} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Clock size={12} />
                      Ongoing
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold mb-3 leading-snug">
                    {paper.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Users size={14} />
                    <span>{paper.authors.join(', ')}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
