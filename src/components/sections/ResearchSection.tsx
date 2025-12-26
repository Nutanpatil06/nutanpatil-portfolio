import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { FileText, Github, ExternalLink, Users, Calendar } from 'lucide-react';

const papers = [
  {
    id: 1,
    title: 'Efficient Transformer Architectures for Low-Resource NLP',
    authors: ['Your Name', 'Co-Author A', 'Co-Author B'],
    venue: 'ACL 2024',
    year: 2024,
    abstract:
      'We propose novel transformer modifications that reduce computational requirements by 60% while maintaining performance on low-resource language tasks.',
    preprint: 'https://arxiv.org/abs/xxxx.xxxxx',
    github: 'https://github.com',
    citations: 15,
  },
  {
    id: 2,
    title: 'Distributed Learning with Privacy Guarantees',
    authors: ['Your Name', 'Co-Author C'],
    venue: 'NeurIPS 2023',
    year: 2023,
    abstract:
      'A novel framework for federated learning that provides differential privacy guarantees while achieving state-of-the-art accuracy on benchmark datasets.',
    preprint: 'https://arxiv.org/abs/xxxx.xxxxx',
    github: 'https://github.com',
    citations: 42,
  },
  {
    id: 3,
    title: 'Scaling Graph Neural Networks to Billion-Edge Graphs',
    authors: ['Your Name', 'Co-Author D', 'Co-Author E'],
    venue: 'ICML 2023',
    year: 2023,
    abstract:
      'We present a distributed GNN training system that enables training on graphs with billions of edges using commodity hardware.',
    preprint: 'https://arxiv.org/abs/xxxx.xxxxx',
    github: 'https://github.com',
    citations: 28,
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
            Published papers and ongoing research work
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
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
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                      {paper.venue}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {paper.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold mb-2">
                    {paper.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Users size={14} />
                    <span>{paper.authors.join(', ')}</span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {paper.abstract}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={paper.preprint}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink size={16} />
                      Preprint
                    </a>
                    <a
                      href={paper.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <span className="text-sm text-muted-foreground">
                      {paper.citations} citations
                    </span>
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
