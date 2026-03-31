"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
            >
              Premium Cyber Defense
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Security that feels
              <br />
              sharp and controlled.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Shastra helps teams identify real weaknesses early and move faster
              with confidence.
            </motion.p>

            <div className="hero-actions">
              <Link href="/contact" className="button-primary">
                Get Assessment
              </Link>
              <Link href="/services" className="button-secondary">
                View Services
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-core" />
            <div className="visual-layer visual-layer-1" />
            <div className="visual-layer visual-layer-2" />
            <div className="visual-layer visual-layer-3" />
          </div>
        </div>
      </section>

      <section className="feature-section shell">
        <div className="feature-grid">
          {["Pen Testing", "Cloud Security", "Threat Simulation"].map(
            (item) => (
              <div className="feature-card" key={item}>
                <div className="feature-icon" />
                <h3>{item}</h3>
                <p>Clear, practical, real-world security insights.</p>
              </div>
            )
          )}
        </div>
      </section>

      <section className="cta-section shell">
        <div className="cta-panel">
          <h2>Get a security assessment in 24 hours.</h2>
          <Link href="/contact" className="button-primary">
            Talk to Shastra
          </Link>
        </div>
      </section>
    </main>
  );
}