import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  summary: string;
  link: string;
}

const certifications: Certification[] = [
  {
    id: '1',
    name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle University',
    summary: 'Validates expertise in developing and implementing generative AI solutions on Oracle Cloud Infrastructure (OCI).',
    link: 'https://drive.google.com/file/d/1GKxncXOBJlV6dt1PGzzjSaMh1nWIrPUP/view?usp=sharing',
  },
  {
    id: '2',
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle University',
    summary: 'Validates foundational knowledge of AI and machine learning concepts within the Oracle Cloud Infrastructure (OCI) ecosystem.',
    link: 'https://drive.google.com/file/d/1etuwRS-0b8hnbVwX1L8sWCdZUz6JCJjG/view?usp=sharing',
  },
  {
    id: '3',
    name: 'Cloud Computing',
    issuer: 'NPTEL (IIT Kharagpur)',
    summary: 'A foundational course covering cloud computing concepts, architectures, and services including virtualization, distributed systems, and cloud platforms.',
    link: 'https://drive.google.com/file/d/1TsM-HDMzbiKCY6vPUGxhM2WBd83p1_rM/view?usp=sharing',
  },
  {
    id: '4',
    name: 'Big Data Computing',
    issuer: 'NPTEL (IIT Kanpur)',
    summary: 'Covers big data processing, distributed computing frameworks, and tools like Hadoop and MapReduce for handling large-scale data.',
    link: 'https://drive.google.com/file/d/1ZXUaOiFUCJ1irmHi5rcXtcg_rgRz_pkd/view?usp=sharing',
  },
  {
    id: '5',
    name: 'Summer Analytics 2025',
    issuer: 'Consulting & Analytics Club, IIT Guwahati',
    summary: 'A 6-week program focused on data science and machine learning, covering core concepts, practical implementation, and real-world problem solving.',
    link: 'https://drive.google.com/file/d/18gQRr6_zUwtapeVyz7jTh_D7gHCeX1MM/view?usp=sharing',
  },
  {
    id: '6',
    name: 'Essential Mathematics for AI and Machine Learning',
    issuer: 'Northwestern Polytechnical University',
    summary: 'Covers the core mathematical principles (linear algebra, calculus, probability) essential for understanding and building AI and machine learning models.',
    link: 'https://drive.google.com/file/d/1_b1FMGMLzv5mCb0qCPG3rEFl5xYO9lIF/view?usp=sharing',
  },
  {
    id: '7',
    name: '2025 Aspire Leaders Program',
    issuer: 'Aspire Institute (Harvard University Collaboration)',
    summary: 'A prestigious global leadership program focusing on developing leadership, critical thinking, and communication skills for creating social impact.',
    link: 'https://drive.google.com/file/d/1Bcbh11N8j2RiPYytGLuibVW8MdF_whTe/view?usp=sharing',
  },
  {
    id: '8',
    name: 'IELTS (International English Language Testing System)',
    issuer: 'IDP',
    summary: 'Demonstrates English proficiency across listening, reading, writing, and speaking for academic and professional environments.',
    link: 'https://drive.google.com/file/d/1SApbqgIvc8oaBkYKreAg3NCyrymfSNk2/view?usp=sharing',
  },
  {
    id: '9',
    name: 'TOPIK I - Level 1 (Test of Proficiency in Korean)',
    issuer: 'National Institute for International Education (국립국제교육원), South Korea',
    summary: 'Certifies basic proficiency in the Korean language for everyday conversations and understanding simple written texts.',
    link: 'https://drive.google.com/file/d/1E8O5nmexu7wWKxbVv0gndazgvWvNPL7-/view?usp=sharing',
  },
];

export const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

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
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-display font-bold text-left hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    {cert.name}
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{cert.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
