const solutions = [
  "Web Application Security",
  "Cloud Hardening",
  "Infrastructure Reviews",
  "Threat-Led Testing",
];

export default function SolutionsPage() {
  return (
    <main className="inner-page shell">
      <section className="inner-hero">
        <span className="eyebrow">Solutions</span>
        <h1>Security solutions that stay practical.</h1>
        <p>
          We focus on the areas where modern teams most often carry hidden
          risk—applications, cloud, infrastructure, and process gaps.
        </p>
      </section>

      <section className="inner-grid">
        {solutions.map((solution) => (
          <article className="inner-card" key={solution}>
            <h3>{solution}</h3>
            <p>
              Designed to reduce exposure early and help teams take the next
              right step with more confidence.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}