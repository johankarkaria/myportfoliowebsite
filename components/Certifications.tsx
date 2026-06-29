'use client';

import { useEffect, useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import styles from './Certifications.module.css';

const certs = [
  {
    id: 'llm-eng',
    title: 'LLM Engineering',
    issuer: 'Udemy',
    date: 'Feb 2026',
    color: '#00e5ff',
    topics: ['Prompt Engineering', 'RAG Systems', 'Fine-tuning', 'Agentic AI'],
  },
  {
    id: 'ml-codebasics',
    title: 'Master Machine Learning for Data Science',
    issuer: 'Codebasics',
    date: 'Dec 2025',
    color: '#7c3aed',
    topics: ['Supervised Learning', 'Ensemble Methods', 'Pipeline Design', 'Model Evaluation'],
  },
  {
    id: 'math-stats',
    title: 'Mathematics & Statistics for ML',
    issuer: 'Codebasics',
    date: 'Oct 2025',
    color: '#00ffa3',
    topics: ['Linear Algebra', 'Calculus', 'Probability', 'Bayesian Inference'],
  },
  {
    id: 'dl-bootcamp',
    title: 'Deep Learning: Beginner to Advanced',
    issuer: 'Codebasics',
    date: '2025',
    color: '#a855f7',
    topics: ['Neural Networks', 'CNNs', 'RNNs', 'Transformers'],
  },
  {
    id: 'sql-ds',
    title: 'SQL for Data Science',
    issuer: 'Codebasics',
    date: '2025',
    color: '#f59e0b',
    topics: ['Advanced Queries', 'Window Functions', 'Query Optimisation'],
  },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className={styles.certs} ref={sectionRef}>
      <div className="section-container">
        <div className="reveal">
          <p className="section-label">04 — Credentials</p>
          <h2 className={styles.heading}>
            Certified &amp;<br />
            <span className="gradient-text">Continuously Learning</span>
          </h2>
          <p className={styles.sub}>
            Structured learning programmes that turned theoretical knowledge into applied skills.
          </p>
        </div>

        <div className={`${styles.grid} stagger-children`}>
          {certs.map((c) => (
            <div
              key={c.id}
              id={`cert-${c.id}`}
              className={`${styles.card} glass-card reveal`}
            >
              <div className={styles.cardLeft}>
                <div
                  className={styles.iconBadge}
                  style={{ '--cert-color': c.color } as React.CSSProperties}
                >
                  <Award size={22} />
                </div>
                <div className={styles.line} style={{ background: c.color, opacity: 0.25 }} />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.meta}>
                  <span className={styles.issuer}>{c.issuer}</span>
                  <span className={styles.date}>{c.date}</span>
                </div>
                <h3 className={styles.title}>{c.title}</h3>
                <div className={styles.topics}>
                  {c.topics.map((t) => (
                    <span
                      key={t}
                      className={styles.topic}
                      style={{ '--cert-color': c.color } as React.CSSProperties}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <ExternalLink size={16} className={styles.extLink} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
