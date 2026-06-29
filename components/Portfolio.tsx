'use client';

import { useEffect, useRef } from 'react';
import { Rocket, ArrowRight } from 'lucide-react';
import styles from './Portfolio.module.css';

const comingSoon = [
  {
    title: 'LLM-Powered Agentic Systems',
    desc: 'Multi-agent workflows with OpenAI SDK, AutoGen & CrewAI for autonomous task completion.',
    tag: 'Agentic AI',
    color: '#00e5ff',
  },
  {
    title: 'Real-Time Anomaly Detection',
    desc: 'Streaming ML pipeline with Kafka + Flink detecting anomalies at sub-second latency.',
    tag: 'Streaming ML',
    color: '#7c3aed',
  },
  {
    title: 'RAG-Based Document Intelligence',
    desc: 'Retrieval-augmented generation system for enterprise document Q&A with semantic search.',
    tag: 'NLP / RAG',
    color: '#a855f7',
  },
];

export default function Portfolio() {
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
    <section id="portfolio" className={styles.portfolio} ref={sectionRef}>
      <div className="section-container">
        <div className="reveal">
          <p className="section-label">05 — Portfolio</p>
          <h2 className={styles.heading}>
            What&apos;s<br />
            <span className="gradient-text">Coming Next</span>
          </h2>
          <p className={styles.sub}>
            Full portfolio launching soon. Here&apos;s a preview of what&apos;s being built.
          </p>
        </div>

        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <div className={styles.rocketIcon}>
              <Rocket size={36} />
            </div>
            <div>
              <h3 className={styles.bannerTitle}>Portfolio In Progress</h3>
              <p className={styles.bannerText}>
                Shipping case studies, technical write-ups, and live demos. Follow along on GitHub.
              </p>
            </div>
            <a
              href="https://github.com/JohanKarkaria"
              target="_blank"
              rel="noopener noreferrer"
              id="portfolio-github-cta"
              className="btn-primary"
            >
              <span>Watch on GitHub</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className={`${styles.previews} stagger-children`}>
          {comingSoon.map((item) => (
            <div
              key={item.title}
              className={`${styles.previewCard} glass-card reveal`}
            >
              <div
                className={styles.previewTag}
                style={{ '--preview-color': item.color } as React.CSSProperties}
              >
                {item.tag}
              </div>
              <h3 className={styles.previewTitle}>{item.title}</h3>
              <p className={styles.previewDesc}>{item.desc}</p>
              <div className={styles.comingSoonBadge}>Coming Soon</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
