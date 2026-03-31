"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const featureCards = [
  {
    title: "Pen Testing",
    copy: "Find exploitable weaknesses before attackers do.",
  },
  {
    title: "Cloud Reviews",
    copy: "Reduce exposure across modern infrastructure and services.",
  },
  {
    title: "Threat Simulation",
    copy: "Test resilience under realistic attack conditions.",
  },
];

const trustItems = [
  "Fast reviews",
  "Clear findings",
  "Modern stack focus",
  "Practical remediation",
];

export default function HomePage() {
  return (
    <main className="page-home">
      <section className="hero-v3 shell">
        <div className="hero-frame">
          <div className="hero-glow hero-glow-a" />
          <div className="hero-glow hero-glow-b" />
          <div className="hero-grid" />

          <div className="hero-copy">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              Editorial Cyber Defense
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
            >
              Security that feels
              <br />
              sharp, modern,
              <br />
              and under control.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
            >
              Shastra helps teams identify real weaknesses early, improve
              resilience, and move faster with less uncertainty.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22 }}
            >
              <Link href="/contact" className="button-primary">
                Get Assessment
              </Link>
              <Link href="/services" className="button-secondary">
                View Services
              </Link>
            </motion.div>

            <motion.div
              className="trust-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              {trustItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="visual-orb" />
            <div className="visual-ring visual-ring-1" />
            <div className="visual-ring visual-ring-2" />
            <div className="visual-card visual-card-top">
              <span className="visual-label">Threat Signal</span>
              <strong>Reduced exposure starts with visibility.</strong>
            </div>
            <div className="visual-card visual-card-bottom">
              <span className="visual-label">Shastra Focus</span>
              <p>Clearer reviews. Faster action. Better confidence.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="feature-section shell">
        <div className="section-heading">
          <span className="eyebrow">Core Capabilities</span>
          <h2>Three sharp starting points.</h2>
        </div>

        <div className="feature-grid">
          {featureCards.map((card, index) => (
            <motion.article
              className="feature-card"
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="feature-icon" />
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="statement-section shell">
        <div className="statement-panel">
          <span className="eyebrow">Why Shastra</span>
          <h2>Less noise. Better judgment.</h2>
          <p>
            We focus on what actually matters: identifying risk clearly,
            prioritizing action, and making security decisions easier to execute.
          </p>
        </div>
      </section>

      <section className="preview-section shell">
        <div className="preview-grid">
          <div className="preview-box">
            <span>Application Security</span>
          </div>
          <div className="preview-box">
            <span>Cloud Hardening</span>
          </div>
          <div className="preview-box">
            <span>Threat-Led Reviews</span>
          </div>
          <div className="preview-box">
            <span>Security Readiness</span>
          </div>
        </div>
      </section>

      <section className="cta-section shell">
        <div className="cta-panel">
          <span className="eyebrow">Start Now</span>
          <h2>Get a security assessment in 24 hours.</h2>
          <p>
            Practical findings, clean communication, and a stronger next step.
          </p>
          <Link href="/contact" className="button-primary">
            Talk to Shastra
          </Link>
        </div>
      </section>
    </main>
  );
}