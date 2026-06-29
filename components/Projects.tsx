'use client';

import { useEffect, useRef } from 'react';
import { ExternalLink, Shield, FileText, TrendingUp } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import styles from './Projects.module.css';

const projects = [
  {
    id: 'nids',
    num: '01',
    title: 'Network Intrusion Detection System',
    subtitle: 'ML / MLOps · Mar – Jun 2026',
    description:
      'End-to-end supervised ML pipeline that detects network threats in real-time on 1M+ record traffic datasets. Built with a full MLOps lifecycle — reproducible, automated, and production-deployed.',
    icon: <Shield size={24} />,
    color: '#00e5ff',
    metrics: [
      { label: 'F1-Score', value: '0.90' },
      { label: 'Records', value: '1M+' },
      { label: 'Infra', value: 'AWS EC2' },
    ],
    highlights: [
      'KNN Imputer + targeted feature selection on imbalanced data',
      'MLflow + DagsHub for experiment tracking & model versioning',
      'GitHub Actions → AWS ECR → EC2 automated CI/CD',
      'FastAPI + MongoDB real-time inference service',
    ],
    tech: ['Python', 'Scikit-learn', 'MongoDB', 'FastAPI', 'MLflow', 'Docker', 'AWS', 'GitHub Actions'],
    github: 'https://github.com/JohanKarkaria',
  },
  {
    id: 'summarizer',
    num: '02',
    title: 'Transformer-Based Text Summarizer',
    subtitle: 'NLP / MLOps · Feb – May 2026',
    description:
      'Fine-tuned Google Pegasus on SAMSum dataset for abstractive dialogue summarisation. Containerised inference service with sub-300ms latency, shipped as a Flask API inside Docker.',
    icon: <FileText size={24} />,
    color: '#7c3aed',
    metrics: [
      { label: 'ROUGE-L ↑', value: '+12%' },
      { label: 'Val Loss ↓', value: '-10%' },
      { label: 'Latency', value: '<300ms' },
    ],
    highlights: [
      'Google Pegasus fine-tuned on conversational SAMSum dataset',
      'Modular pipeline: ingest → transform → train with dataclass config',
      'Resolved HuggingFace deprecated API compatibility issues',
      'Docker + Flask inference service with strict latency target',
    ],
    tech: ['PyTorch', 'HuggingFace Transformers', 'Pegasus', 'Flask', 'Docker', 'Google Colab T4'],
    github: 'https://github.com/JohanKarkaria',
  },
  {
    id: 'student-perf',
    num: '03',
    title: 'Student Performance Predictor',
    subtitle: 'ML / MLOps · Feb – Apr 2026',
    description:
      'Modular ML pipeline with OOP design principles for predicting student exam scores. Deployed as Dockerised Flask API on AWS Elastic Beanstalk with full CI/CD automation.',
    icon: <TrendingUp size={24} />,
    color: '#00ffa3',
    metrics: [
      { label: 'RMSE ↓', value: '-15%' },
      { label: 'CV', value: 'Stable' },
      { label: 'Deploy', value: 'AWS EB' },
    ],
    highlights: [
      'OOP-based modular pipeline with version-controlled preprocessing',
      'CatBoost hyperparameter tuning to minimise RMSE by 15%',
      'Dockerised Flask API on AWS Elastic Beanstalk',
      'Automated CI/CD reducing manual deployment effort to zero',
    ],
    tech: ['Python', 'CatBoost', 'Flask', 'Docker', 'AWS Elastic Beanstalk', 'GitHub Actions'],
    github: 'https://github.com/JohanKarkaria',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className={styles.projects} ref={sectionRef}>
      <div className="section-container">
        <div className="reveal">
          <p className="section-label">03 — Work</p>
          <h2 className={styles.heading}>
            Production-Grade<br />
            <span className="gradient-text">ML Systems</span>
          </h2>
          <p className={styles.sub}>
            Every project ships. Every pipeline is reproducible. Every deployment is automated.
          </p>
        </div>

        <div className={styles.list}>
          {projects.map((p, i) => (
            <div
              key={p.id}
              id={`project-${p.id}`}
              className={`${styles.card} glass-card reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Top bar */}
              <div className={styles.cardTop}>
                <div className={styles.cardIcon} style={{ '--proj-color': p.color } as React.CSSProperties}>
                  {p.icon}
                </div>
                <div>
                  <span className={styles.cardNum}>{p.num}</span>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardSubtitle}>{p.subtitle}</p>
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubBtn}
                  id={`project-${p.id}-github`}
                >
                  <GithubIcon size={18} />
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Metrics */}
              <div className={styles.metrics}>
                {p.metrics.map((m) => (
                  <div key={m.label} className={styles.metric} style={{ '--proj-color': p.color } as React.CSSProperties}>
                    <span className={styles.metricValue}>{m.value}</span>
                    <span className={styles.metricLabel}>{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className={styles.description}>{p.description}</p>

              {/* Highlights */}
              <ul className={styles.highlights}>
                {p.highlights.map((h) => (
                  <li key={h} className={styles.highlight}>
                    <span className={styles.bullet} style={{ background: p.color, boxShadow: `0 0 6px ${p.color}` }} />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className={styles.techTags}>
                {p.tech.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
