export default function AboutPage() {
  return (
    <main className="page-shell">
      <div className="page-hero-shell">
        <div className="about-label">About</div>
        <h1>Cybersecurity with clarity, not clutter.</h1>
        <p>
          Shastra Cyber Solutions is built for businesses that want practical
          security guidance, faster risk reduction, and cleaner execution.
        </p>
      </div>

      <div className="page-grid">
        <div className="page-card">
          <h3>What we believe</h3>
          <p>
            Security should be understandable, actionable, and aligned with how
            modern businesses actually work.
          </p>
        </div>

        <div className="page-card">
          <h3>How we work</h3>
          <p>
            We focus on real weaknesses, clear findings, and practical next
            steps instead of inflated complexity.
          </p>
        </div>
      </div>
    </main>
  );
}