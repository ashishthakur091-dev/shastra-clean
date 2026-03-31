const solutions = [
  "Web Application Security",
  "Cloud Hardening",
  "Infrastructure Reviews",
  "Threat-Led Testing",
];

export default function SolutionsPage() {
  return (
    <main className="page-shell">
      <div className="page-hero-shell">
        <div className="about-label">Solutions</div>
        <h1>Security solutions that stay practical.</h1>
        <p>
          We focus on the areas where modern teams most often carry hidden
          risk—applications, cloud, infrastructure, and process gaps.
        </p>
      </div>

      <div className="page-grid">
        {solutions.map((solution) => (
          <div className="page-card" key={solution}>
            <h3>{solution}</h3>
            <p>
              Designed to reduce exposure early and help teams take the next
              right step with confidence.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}