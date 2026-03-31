"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const cardItems = [
  {
    title: "Pen Testing",
    text: "Real attack simulation for web apps and infrastructure.",
  },
  {
    title: "Cloud Security",
    text: "Find misconfigurations before they become incidents.",
  },
  {
    title: "Threat Simulation",
    text: "Test how your defenses respond under pressure.",
  },
];

const trustItems = [
  "Fast security reviews",
  "Clear remediation guidance",
  "Modern infrastructure focus",
  "Built for growing teams",
];

export default function Home() {
  return (
    <main className="main">
      <section className="hero">
        <div className="gradient-bg" />
        <div className="grid-overlay" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-inner"
        >
          <div className="eyebrow">Premium Cyber Defense</div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            Secure What Matters
            <br />
            Before It’s Attacked
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Real-world cybersecurity for modern businesses—designed to reduce
            risk before it becomes disruption.
          </motion.p>

          <motion.div
            className="cta"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Link href="/contact" className="primary">
              Get Assessment
            </Link>
            <Link href="/services" className="secondary">
              View Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="trust-strip">
        {trustItems.map((item) => (
          <div key={item} className="trust-item">
            {item}
          </div>
        ))}
      </section>

      <section className="cards">
        {cardItems.map((item, index) => (
          <motion.div
            key={item.title}
            className="card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <div className="card-icon" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </section>

      <section className="about-strip">
        <div className="about-panel">
          <div className="about-label">Why Shastra</div>
          <h2>Minimal noise. Maximum clarity.</h2>
          <p>
            We help growing teams identify weak points early, strengthen their
            security posture, and move faster with confidence.
          </p>
        </div>
      </section>

      <section className="solutions-preview">
        <div className="solution-box">
          <span>Web Security</span>
        </div>
        <div className="solution-box">
          <span>Cloud Hardening</span>
        </div>
        <div className="solution-box">
          <span>Security Reviews</span>
        </div>
        <div className="solution-box">
          <span>Threat-Led Testing</span>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-shell">
          <div className="about-label">Start Now</div>
          <h2>Get a security assessment in 24 hours</h2>
          <p>
            Clear findings. Practical actions. No bloated reports and no wasted
            time.
          </p>
          <Link href="/contact" className="primary">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}