'use client';

import { useEffect, useRef } from 'react';
import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'Languages & Data',
    color: '#00e5ff',
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL'],
  },
  {
    category: 'ML / DL Frameworks',
    color: '#7c3aed',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'HuggingFace Transformers', 'CatBoost'],
  },
  {
    category: 'MLOps & DevOps',
    color: '#a855f7',
    skills: ['MLflow', 'DagsHub', 'Docker', 'GitHub Actions CI/CD', 'FastAPI', 'Flask'],
  },
  {
    category: 'Cloud',
    color: '#00ffa3',
    skills: ['AWS EC2', 'AWS ECR', 'AWS S3', 'Elastic Beanstalk', 'CloudWatch', 'Azure'],
  },
  {
    category: 'Agentic AI',
    color: '#ff6b35',
    skills: ['OpenAI Agent SDK', 'AutoGen', 'CrewAI', 'LLM Engineering'],
  },
  {
    category: 'Math & Statistics',
    color: '#f59e0b',
    skills: [
      'Linear Algebra',
      'Calculus & Optimisation',
      'Probability',
      'Hypothesis Testing',
      'Bayesian Inference',
    ],
  },
];

export default function Skills() {
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
    <section id="skills" className={styles.skills} ref={sectionRef}>
      <div className="section-container">
        <div className="reveal">
          <p className="section-label">02 — Expertise</p>
          <h2 className={styles.heading}>
            The Stack Behind<br />
            <span className="gradient-text">the Pipelines</span>
          </h2>
          <p className={styles.sub}>
            Every tool chosen for a reason — from data ingestion through to production inference.
          </p>
        </div>

        <div className={`${styles.groups} stagger-children`}>
          {skillGroups.map((g) => (
            <div key={g.category} className={`${styles.group} glass-card reveal`}>
              <div className={styles.groupHeader} style={{ '--group-color': g.color } as React.CSSProperties}>
                <span className={styles.groupDot} style={{ background: g.color, boxShadow: `0 0 8px ${g.color}` }} />
                <h3 className={styles.groupTitle}>{g.category}</h3>
              </div>
              <div className={styles.pills}>
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className={styles.pill}
                    style={{ '--pill-color': g.color } as React.CSSProperties}
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
}
