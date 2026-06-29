'use client';

import { useEffect, useRef } from 'react';
import { BookOpen, Cpu, Globe, Brain } from 'lucide-react';
import styles from './About.module.css';

const traits = [
  {
    icon: <Brain size={20} />,
    title: 'Systems Thinker',
    desc: 'Chemical Engineering foundations give me a unique lens: rigorous math, process optimisation, and first-principles reasoning applied directly to ML.',
  },
  {
    icon: <Cpu size={20} />,
    title: 'MLOps-First',
    desc: "Models that can't be deployed don't matter. Every project is built with reproducibility, versioning, and CI/CD from day one.",
  },
  {
    icon: <Globe size={20} />,
    title: 'Cloud Native',
    desc: 'Production deployments on AWS (EC2, ECR, Elastic Beanstalk) with Docker containers and automated GitHub Actions pipelines.',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'Perpetual Learner',
    desc: 'Currently exploring Agentic AI with OpenAI Agent SDK, AutoGen & CrewAI — building the next generation of autonomous systems.',
  },
];

export default function About() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className="section-container">
        <div className={styles.grid}>
          {/* Left — visual */}
          <div className={`${styles.visual} reveal-left`}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarRing} />
              <div className={styles.avatar}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpg"
                  alt="Johan Karkaria"
                  className={styles.avatarPhoto}
                />
              </div>
              <div className={styles.avatarGlow} />
            </div>

            {/* Info chips */}
            <div className={styles.infoChips}>
              <div className={styles.chip}>
                <span className={styles.chipDot} style={{ background: '#00ffa3' }} />
                NIT Hamirpur, India
              </div>
              <div className={styles.chip}>
                <span className={styles.chipDot} style={{ background: '#00e5ff' }} />
                B.Tech Chemical Engineering
              </div>
              <div className={styles.chip}>
                <span className={styles.chipDot} style={{ background: '#a855f7' }} />
                2023 – 2027
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className={`${styles.text} reveal`}>
            <p className="section-label">01 — About Me</p>
            <h2 className={styles.heading}>
              Engineering Intuition,<br />
              <span className="gradient-text">AI Ambition</span>
            </h2>
            <p className={styles.bio}>
              I&apos;m Johan — a Chemical Engineering student at{' '}
              <strong>NIT Hamirpur</strong> who fell headfirst into the world of
              Artificial Intelligence and never looked back.
            </p>
            <p className={styles.bio}>
              My engineering background gives me something rare in the ML world:
              a deep appreciation for <em>systems</em>. I don&apos;t just train models;
              I build <strong>complete, maintainable ML systems</strong> — with proper
              data pipelines, experiment tracking, containerisation, and automated
              deployment.
            </p>
            <p className={styles.bio}>
              Currently seeking <strong>internships and project collaborations</strong>{' '}
              in Machine Learning Engineering, MLOps, and AI — especially roles where I
              can ship real ML to production.
            </p>

            <a
              href="mailto:johankar555@gmail.com"
              id="about-contact-btn"
              className="btn-primary"
              style={{ marginTop: '1.5rem', display: 'inline-flex' }}
            >
              <span>Let&apos;s Talk</span>
            </a>
          </div>
        </div>

        {/* Traits grid */}
        <div className={`${styles.traits} stagger-children`}>
          {traits.map((t) => (
            <div key={t.title} className={`${styles.traitCard} glass-card reveal`}>
              <div className={styles.traitIcon}>{t.icon}</div>
              <h3 className={styles.traitTitle}>{t.title}</h3>
              <p className={styles.traitDesc}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
