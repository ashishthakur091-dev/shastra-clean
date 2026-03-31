const services = [
  "Penetration Testing",
  "Cloud Security Reviews",
  "Threat Simulation",
  "Security Posture Assessments",
];

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <div className="page-hero-shell">
        <div className="about-label">Services</div>
        <h1>Focused services for modern risk.</h1>
        <p>
          We help teams find exposure early, prioritize what matters, and move
          toward stronger defenses with less noise.
        </p>
      </div>

      <div className="page-grid">
        {services.map((service) => (
          <div className="page-card" key={service}>
            <h3>{service}</h3>
            <p>
              Practical, clear, and built to give you real security value—not
              just a report.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}