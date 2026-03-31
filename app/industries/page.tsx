const industries = [
  "SaaS",
  "Fintech",
  "Healthcare",
  "Digital Platforms",
];

export default function IndustriesPage() {
  return (
    <main className="inner-page shell">
      <section className="inner-hero">
        <span className="eyebrow">Industries</span>
        <h1>Built for modern, exposed environments.</h1>
        <p>
          Different industries face different pressures. We adapt security work
          to the pace, stack, and risk profile of each environment.
        </p>
      </section>

      <section className="inner-grid">
        {industries.map((industry) => (
          <article className="inner-card" key={industry}>
            <h3>{industry}</h3>
            <p>
              Security support shaped around how teams operate, where pressure
              shows up, and how risk actually moves through the business.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}