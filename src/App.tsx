import { motion, useReducedMotion, type Variants } from 'framer-motion'
import './App.css'

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Canadian pricing foundation',
    description:
      'A live alpha proved the first user journey: a clear, fast way to get an early Canadian home price estimate.',
    status: 'Live now',
  },
  {
    phase: 'Phase 2',
    title: 'Neighborhood-level accuracy',
    description:
      'Priceit now sharpens city-wide pricing into neighborhood-aware market intelligence, designed to reflect the local behavior that actually moves value.',
    status: 'In progress',
  },
  {
    phase: 'Phase 3',
    title: 'Confidence + seller intelligence',
    description:
      'The platform grows toward stronger micro-market confidence, better pricing narratives, and richer seller decision support.',
    status: 'Planned',
  },
]

const stats = [
  { label: 'Market focus', value: 'Canadian residential pricing' },
  { label: 'Current priority', value: 'Neighborhood-level precision' },
  { label: 'Product style', value: 'Fast, premium, high-trust UX' },
]

const pillars = [
  'Dark-mode interface with premium real-estate tone',
  'Fast conversion path from project story into product exploration',
  'Neighborhood-aware positioning instead of city-only pricing language',
  'Motion used to clarify hierarchy and make the experience feel alive',
]

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease } },
}

const getCardVariants = (index: number): Variants => ({
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, delay: 0.08 * index, ease },
  },
})

function App() {
  const prefersReducedMotion = useReducedMotion()

  const animate = prefersReducedMotion
    ? { initial: false as const, whileInView: undefined, viewport: undefined }
    : {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: { once: true, amount: 0.2 },
      }

  return (
    <div className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

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
            <p className="brand-copy">Dark-mode pricing intelligence for a cleaner Canadian real-estate experience.</p>
          </div>
        </div>
      </header>

      <main>
        <motion.section className="hero section-card" variants={heroVariants} {...animate}>
          <div className="hero-copy">
            <span className="hero-pill">Framer-inspired product direction</span>
            <p className="eyebrow">Canadian pricing intelligence</p>
            <h1>Priceit is becoming the sharper, more cinematic way to understand what a home is worth.</h1>
            <p className="hero-text">
              Phase 1 proved the concept. This next version reframes Priceit with a darker, more premium UX language — one built
              for neighborhood-level pricing accuracy, stronger trust, and a product feel that already behaves like the future.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="https://aires-production.up.railway.app//" target="_blank" rel="noreferrer">
                View phase 1 demo
              </a>
              <a className="secondary-button" href="#roadmap">
                See the roadmap
              </a>
            </div>
            <div className="hero-footnote">
              <span className="footnote-dot" aria-hidden="true" />
              Phase 2 focus: neighborhood-level pricing, stronger local context, better confidence.
            </div>
          </div>

          <motion.aside className="hero-panel" aria-label="Project snapshot" variants={getCardVariants(1)} {...animate}>
            <p className="panel-label">Current snapshot</p>
            <dl className="metric-list">
              {stats.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="hero-panel-glow" aria-hidden="true" />
          </motion.aside>
        </motion.section>

        <section className="feature-grid">
          <motion.article className="section-card info-card" variants={getCardVariants(0)} {...animate}>
            <p className="section-kicker">What this project is</p>
            <h2>A pricing product with a stronger sense of taste and a tighter sense of place.</h2>
            <p>
              Priceit is not just a calculator. It is evolving into a real-estate pricing interface that feels premium, legible,
              and trustworthy while getting more precise about how different neighborhoods actually behave.
            </p>
            <ul className="bullet-list">
              {pillars.map((pillar) => (
                <li key={pillar}>{pillar}</li>
              ))}
            </ul>
          </motion.article>

          <motion.article className="section-card highlight-card" variants={getCardVariants(1)} {...animate}>
            <p className="section-kicker">Why this redesign matters</p>
            <h2>Great pricing UX should feel confident before the numbers even appear.</h2>
            <p>
              The product now leans into a darker, more focused design language with stronger motion, cleaner surfaces, and a
              story that frames Priceit as a serious pricing platform — not just an experiment.
            </p>
            <div className="signal-stack">
              <div className="signal-box">
                <span className="signal-pill">UX shift</span>
                <p>From simple explainer page → to premium product shell with motion and presence.</p>
              </div>
              <div className="signal-box">
                <span className="signal-pill">Data shift</span>
                <p>From city-level estimates → toward neighborhood-level pricing intelligence.</p>
              </div>
            </div>
          </motion.article>
        </section>

        <motion.section id="roadmap" className="section-card roadmap-card" variants={getCardVariants(2)} {...animate}>
          <div className="section-heading">
            <p className="section-kicker">Roadmap</p>
            <h2>What the Priceit alpha becomes from here</h2>
            <p>
              The experience is being layered in two directions at once: better local pricing intelligence and a more polished,
              memorable interface that feels worthy of the product ambition.
            </p>
          </div>

          <div className="timeline" role="list" aria-label="Project roadmap">
            {roadmap.map((item, index) => (
              <motion.article className="timeline-item" key={item.phase} role="listitem" variants={getCardVariants(index)} {...animate}>
                <div className="timeline-meta">
                  <span className="timeline-phase">{item.phase}</span>
                  <span className={`status-pill status-${item.status.toLowerCase().replace(/\s+/g, '-')}`}>{item.status}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>
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
