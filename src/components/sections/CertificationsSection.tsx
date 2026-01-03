import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, X } from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  summary: string;
  imageUrl: string;
  date: string;
}

const certifications: Certification[] = [
  {
    id: '1',
    name: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    summary: 'Validated expertise in designing distributed systems on AWS cloud infrastructure.',
    imageUrl: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800',
    date: '2024',
  },
  {
    id: '2',
    name: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    summary: 'Demonstrated proficiency in GCP services and cloud architecture best practices.',
    imageUrl: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800',
    date: '2024',
  },
  {
    id: '3',
    name: 'TensorFlow Developer',
    issuer: 'Google',
    summary: 'Certified in building and deploying ML models using TensorFlow framework.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    date: '2024',
  },
  {
    id: '4',
    name: 'Kubernetes Administrator',
    issuer: 'CNCF',
    summary: 'Expert knowledge in container orchestration and Kubernetes cluster management.',
    imageUrl: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800',
    date: '2023',
  },
  {
    id: '5',
    name: 'Azure Data Engineer',
    issuer: 'Microsoft',
    summary: 'Specialized in designing and implementing data solutions on Azure platform.',
    imageUrl: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800',
    date: '2023',
  },
  {
    id: '6',
    name: 'Deep Learning Specialization',
    issuer: 'Coursera / DeepLearning.AI',
    summary: 'Comprehensive training in neural networks, CNNs, RNNs, and sequence models.',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
    date: '2023',
  },
  {
    id: '7',
    name: 'Python Professional',
    issuer: 'Python Institute',
    summary: 'Advanced Python programming skills including OOP and design patterns.',
    imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800',
    date: '2023',
  },
  {
    id: '8',
    name: 'Data Science Professional',
    issuer: 'IBM',
    summary: 'End-to-end data science methodology from data collection to model deployment.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    date: '2022',
  },
  {
    id: '9',
    name: 'Machine Learning Engineer',
    issuer: 'Udacity',
    summary: 'Building production-ready ML pipelines and deploying models at scale.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
    date: '2022',
  },
  {
    id: '10',
    name: 'SQL Advanced Analytics',
    issuer: 'DataCamp',
    summary: 'Advanced SQL techniques for complex data analysis and optimization.',
    imageUrl: 'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=800',
    date: '2022',
  },
];

export const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Professional credentials and achievements</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`glass-card-hover p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-lg font-display font-bold text-left hover:text-primary transition-colors story-link"
                  >
                    {cert.name}
                  </button>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{cert.date}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{cert.summary}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" 
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 glass-card p-4 flex items-center justify-between border-b border-border/50">
              <div>
                <h2 className="font-display font-bold">{selectedCert.name}</h2>
                <p className="text-sm text-muted-foreground">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
              <button 
                onClick={() => setSelectedCert(null)} 
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <img 
                src={selectedCert.imageUrl} 
                alt={`${selectedCert.name} Certificate`} 
                className="w-full rounded-lg shadow-lg"
              />
              <p className="mt-4 text-muted-foreground">{selectedCert.summary}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
