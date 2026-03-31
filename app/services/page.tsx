const services = [
  "Penetration Testing",
  "Cloud Security Reviews",
  "Threat Simulation",
  "Security Posture Assessments",
];

export default function ServicesPage() {
  return (
    <main className="inner-page shell">
      <section className="inner-hero">
        <span className="eyebrow">Services</span>
        <h1>Focused services for modern risk.</h1>
        <p>
          We help teams find exposure early, prioritize what matters, and move
          toward stronger defenses without excess complexity.
        </p>
      </section>

      <section className="inner-grid">
        {services.map((service) => (
          <article className="inner-card" key={service}>
            <h3>{service}</h3>
            <p>
              Practical, direct, and designed to produce real security value—not
              just another report.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}