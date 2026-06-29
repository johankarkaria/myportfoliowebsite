'use client';

import { useEffect, useRef } from 'react';
import { Mail, MapPin, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedInIcon } from './BrandIcons';
import styles from './Footer.module.css';

export default function Footer() {
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
    <footer id="contact" className={styles.footer} ref={sectionRef}>
      {/* CTA Band */}
      <div className={`section-container ${styles.ctaBand} reveal`}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaHeading}>
            Let&apos;s Build Something<br />
            <span className="gradient-text">Production-Ready</span>
          </h2>
          <p className={styles.ctaText}>
            Open to internships, ML engineering roles, and collaborative projects.
            I ship end-to-end systems — not just notebooks.
          </p>
          <div className={styles.ctaBtns}>
            <a
              href="mailto:johankar555@gmail.com"
              id="footer-email-btn"
              className="btn-primary"
            >
              <Mail size={16} />
              <span>johankar555@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/johan-karkaria"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin-btn"
              className="btn-ghost"
            >
              <LinkedInIcon size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/JohanKarkaria"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github-btn"
              className="btn-ghost"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Info panel */}
        <div className={styles.infoPanel}>
          <div className={styles.infoItem}>
            <MapPin size={16} className={styles.infoIcon} />
            <div>
              <span className={styles.infoLabel}>Location</span>
              <span className={styles.infoValue}>India · Remote-Ready</span>
            </div>
          </div>
          <div className={styles.infoItem}>
            <GraduationCap size={16} className={styles.infoIcon} />
            <div>
              <span className={styles.infoLabel}>Education</span>
              <span className={styles.infoValue}>NIT Hamirpur · B.Tech ChemE</span>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.statusDot} />
            <div>
              <span className={styles.infoLabel}>Status</span>
              <span className={styles.infoValue} style={{ color: '#00ffa3' }}>
                Open to Opportunities
              </span>
            </div>
          </div>
          <div className={styles.phone}>
            <span className={styles.infoLabel}>Phone</span>
            <a href="tel:+918075203004" className={styles.phoneLink}>+91 8075203004</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="section-container">
          <div className={styles.bottomInner}>
            <span className={styles.copyright}>
              © 2026 Johan Karkaria. Built with Next.js.
            </span>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/JohanKarkaria"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/johan-karkaria"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="mailto:johankar555@gmail.com"
                className={styles.socialLink}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
