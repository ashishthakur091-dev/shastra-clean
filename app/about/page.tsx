export default function AboutPage() {
  return (
    <main className="inner-page shell">
      <section className="inner-hero">
        <span className="eyebrow">About</span>
        <h1>Cybersecurity with more clarity and less theatre.</h1>
        <p>
          Shastra Cyber Solutions is built for teams that want practical security
          guidance, stronger decisions, and cleaner execution.
        </p>
      </section>

      <section className="inner-grid">
        <article className="inner-card">
          <h3>What we believe</h3>
          <p>
            Security should be understandable, actionable, and aligned with how
            modern businesses actually operate.
          </p>
        </article>

        <article className="inner-card">
          <h3>How we work</h3>
          <p>
            We focus on real weaknesses, practical findings, and next steps that
            teams can actually use.
          </p>
        </article>
      </section>
    </main>
  );
}