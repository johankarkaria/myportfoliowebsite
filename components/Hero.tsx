'use client';

import { useEffect, useState } from 'react';
import { Mail, ArrowDown, Terminal } from 'lucide-react';
import { GithubIcon, LinkedInIcon } from './BrandIcons';
import styles from './Hero.module.css';

const ROLES = [
  'ML Engineer',
  'MLOps Builder',
  'AI Systems Designer',
  'NLP Practitioner',
  'Cloud Deployer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const role = ROLES[roleIndex];

    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          60
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          30
        );
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex, mounted]);

  return (
    <section id="hero" className={styles.hero}>
      {/* Radial glow blobs */}
      <div className={styles.blobCyan} />
      <div className={styles.blobPurple} />

      <div className={styles.content}>
        {/* Badge */}
        <div className={styles.badge}>
          <Terminal size={14} />
          <span>Available for Internships &amp; Projects</span>
          <span className={styles.dot} />
        </div>

        {/* Name */}
        <h1 className={styles.name}>
          Johan<br />
          <span className="gradient-text">Karkaria</span>
        </h1>

        {/* Typewriter */}
        <div className={styles.typewriterWrapper}>
          <span className={styles.typewriterPrefix}>$ role=&ldquo;</span>
          <span className={styles.typewriterText}>{displayed}</span>
          <span className={styles.cursor}>|</span>
          <span className={styles.typewriterSuffix}>&rdquo;</span>
        </div>

        {/* Bio */}
        <p className={styles.bio}>
          Building <strong>production-grade ML pipelines</strong> — from model training
          to cloud deployment with MLflow, Docker &amp; GitHub Actions CI/CD.
          Chemical Engineering @ <strong>NIT Hamirpur</strong> | Focused on MLOps,
          NLP &amp; real-world AI systems.
        </p>

        {/* CTA buttons */}
        <div className={styles.ctas}>
          <a
            id="hero-contact-btn"
            href="mailto:johankar555@gmail.com"
            className="btn-primary"
          >
            <Mail size={16} />
            <span>Get in Touch</span>
          </a>
          <a
            id="hero-github-btn"
            href="https://github.com/JohanKarkaria"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>
          <a
            id="hero-linkedin-btn"
            href="https://www.linkedin.com/in/johan-karkaria"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <LinkedInIcon size={16} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Tech stack strip */}
        <div className={styles.techStrip}>
          {['Python', 'PyTorch', 'MLflow', 'Docker', 'AWS', 'FastAPI', 'HuggingFace'].map((t) => (
            <span key={t} className={styles.techPill}>{t}</span>
          ))}
        </div>

        {/* Scroll indicator */}
        <a href="#about" className={styles.scrollDown} aria-label="Scroll to About">
          <ArrowDown size={18} />
        </a>
      </div>

      {/* Floating stat cards */}
      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} glass-card`} style={{ animationDelay: '0s' }}>
          <span className={styles.statNumber}>3+</span>
          <span className={styles.statLabel}>End-to-End Projects</span>
        </div>
        <div className={`${styles.statCard} glass-card`} style={{ animationDelay: '0.5s' }}>
          <span className={styles.statNumber}>0.90</span>
          <span className={styles.statLabel}>F1-Score (IDS)</span>
        </div>
        <div className={`${styles.statCard} glass-card`} style={{ animationDelay: '1s' }}>
          <span className={styles.statNumber}>3</span>
          <span className={styles.statLabel}>ML Certifications</span>
        </div>
      </div>
    </section>
  );
}
