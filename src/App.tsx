import './App.css'

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'National alpha foundation',
    description:
      'The first working release proves the concept: AI-assisted Canadian home pricing with a fast, approachable estimate flow.',
    status: 'Live now',
  },
  {
    phase: 'Phase 2',
    title: 'Neighborhood-level pricing',
    description:
      'Priceit is moving from city-level signal to neighborhood-level accuracy, incorporating submarket behavior, postal zones, and local pricing context.',
    status: 'In progress',
  },
  {
    phase: 'Phase 3',
    title: 'Micro-market intelligence',
    description:
      'Future releases will refine price confidence at a finer geographic resolution with stronger local comparables, dynamic market trends, and richer seller insights.',
    status: 'Planned',
  },
]

const pillars = [
  'Canada-focused real estate pricing',
  'Fast estimate flow for early decisions',
  'Neighborhood-aware pricing refinement',
  'Designed to evolve into a sharper seller intelligence platform',
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="maker-tag" href="https://waleeeeed88.github.io/portfolio/" target="_blank" rel="noreferrer">
          Built by Mohammad Waliduddin
        </a>
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">
            P
          </span>
          <div>
            <p className="eyebrow">Priceit alpha</p>
            <p className="brand-copy">Canadian real estate pricing, moving toward neighborhood-level accuracy.</p>
          </div>
        </div>
      </header>

      <main>
        <section className="hero section-card">
          <div className="hero-copy">
            <p className="eyebrow">Canadian pricing intelligence</p>
            <h1>Priceit is building a more precise way to understand what a home is worth.</h1>
            <p className="hero-text">
              Phase 1 established the product direction with a live alpha experience. The next step is sharper pricing at the
              neighborhood level — not just by city, but by the local market behavior that actually changes value.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="https://aires-production.up.railway.app//" target="_blank" rel="noreferrer">
                View phase 1 demo
              </a>
              <a className="secondary-button" href="#roadmap">
                Explore the roadmap
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Project snapshot">
            <p className="panel-label">Current snapshot</p>
            <dl className="metric-list">
              <div>
                <dt>Focus</dt>
                <dd>Canadian residential pricing</dd>
              </div>
              <div>
                <dt>Current stage</dt>
                <dd>Alpha foundation complete</dd>
              </div>
              <div>
                <dt>Next leap</dt>
                <dd>Neighborhood-level accuracy</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="section-grid">
          <article className="section-card info-card">
            <p className="section-kicker">What this project is</p>
            <h2>An AI-driven pricing platform for Canadian homes.</h2>
            <p>
              Priceit is being shaped as a cleaner, more trustworthy way to get a fast pricing read on residential properties
              across Canada, with room to grow into a much more intelligent local-market product.
            </p>
            <ul className="bullet-list">
              {pillars.map((pillar) => (
                <li key={pillar}>{pillar}</li>
              ))}
            </ul>
          </article>

          <article className="section-card info-card">
            <p className="section-kicker">Why phase 2 matters</p>
            <h2>City-level pricing is useful. Neighborhood-level pricing is where confidence improves.</h2>
            <p>
              Two homes in the same city can behave like different markets entirely. Priceit&apos;s next phase is about tightening
              accuracy by learning from neighborhood context, submarket behavior, and more local pricing patterns.
            </p>
            <div className="signal-box">
              <span className="signal-pill">Alpha direction</span>
              <p>From broad city pricing → toward neighborhood-aware pricing intelligence.</p>
            </div>
          </article>
        </section>

        <section id="roadmap" className="section-card roadmap-card">
          <div className="section-heading">
            <p className="section-kicker">Roadmap</p>
            <h2>Where Priceit is headed next</h2>
            <p>
              The first release validated the concept. The next releases focus on tighter geographic precision and a clearer,
              more powerful product experience.
            </p>
          </div>

          <div className="timeline" role="list" aria-label="Project roadmap">
            {roadmap.map((item) => (
              <article className="timeline-item" key={item.phase} role="listitem">
                <div className="timeline-meta">
                  <span className="timeline-phase">{item.phase}</span>
                  <span className={`status-pill status-${item.status.toLowerCase().replace(/\s+/g, '-')}`}>{item.status}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          Priceit alpha. Phase 1 by{' '}
          <a href="https://waleeeeed88.github.io/portfolio/" target="_blank" rel="noreferrer">
            Mohammad Waliduddin
          </a>
          .
        </p>
        <p>
          Live phase 1 experience:{' '}
          <a href="https://aires-production.up.railway.app//" target="_blank" rel="noreferrer">
            aires-production.up.railway.app
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
