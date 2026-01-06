import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { FileText, Users, Clock } from 'lucide-react';

const papers = [
  {
    id: 1,
    title: 'Improving Faithfulness in Multi-Turn Dialogue Systems using Retrieval-Augmented Generation',
    authors: ['Nutan Patil'],
    venue: 'In Progress',
    abstract:
      'This ongoing research explores how retrieval-augmented generation (RAG) can improve factual consistency and faithfulness in multi-turn dialogue systems. The study focuses on maintaining context across conversation turns while grounding responses in external documents to reduce hallucinations. Currently experimenting with different retrieval strategies and dialogue memory mechanisms to analyze their impact on response quality.',
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
