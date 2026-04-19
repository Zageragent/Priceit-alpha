import { motion, useReducedMotion, type Variants } from 'framer-motion'
import './App.css'

const roadmap = [
  { phase: 'Phase 1', title: 'Live alpha', status: 'Live now' },
  { phase: 'Phase 2', title: 'Neighborhood precision', status: 'In progress' },
  { phase: 'Phase 3', title: 'Seller intelligence', status: 'Planned' },
]

const stats = [
  { label: 'Focus', value: 'Canadian pricing' },
  { label: 'Next', value: 'Neighborhood accuracy' },
  { label: 'Mode', value: 'Black gothic UX' },
]

const microCards = [
  { label: 'Built for', value: 'Canada' },
  { label: 'Current layer', value: 'City → local' },
  { label: 'Direction', value: 'Sharper comps' },
  { label: 'Tone', value: 'Minimal / dark' },
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
            <p className="brand-copy">Minimal black-mode pricing interface.</p>
          </div>
        </div>
      </header>

      <main>
        <motion.section className="hero section-card" variants={heroVariants} {...animate}>
          <div className="hero-copy">
            <span className="hero-pill">Canadian pricing intelligence</span>
            <h1>Sharper home pricing.</h1>
            <p className="hero-text">City to neighborhood.</p>
            <div className="hero-actions">
              <a className="primary-button" href="https://aires-production.up.railway.app//" target="_blank" rel="noreferrer">
                View phase 1
              </a>
              <a className="secondary-button" href="#roadmap">
                Roadmap
              </a>
            </div>
          </div>

          <motion.aside className="hero-panel" aria-label="Project snapshot" variants={getCardVariants(1)} {...animate}>
            <p className="panel-label">Snapshot</p>
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

        <motion.section className="micro-grid" variants={getCardVariants(1)} {...animate}>
          {microCards.map((card, index) => (
            <motion.article className="micro-card section-card" key={card.label} variants={getCardVariants(index)} {...animate}>
              <p className="panel-label">{card.label}</p>
              <h3>{card.value}</h3>
            </motion.article>
          ))}
        </motion.section>

        <motion.section id="roadmap" className="section-card roadmap-card" variants={getCardVariants(2)} {...animate}>
          <div className="section-heading compact-heading">
            <p className="section-kicker">Roadmap</p>
            <h2>What comes next</h2>
          </div>

          <div className="timeline" role="list" aria-label="Project roadmap">
            {roadmap.map((item, index) => (
              <motion.article className="timeline-item" key={item.phase} role="listitem" variants={getCardVariants(index)} {...animate}>
                <div className="timeline-meta">
                  <span className="timeline-phase">{item.phase}</span>
                  <span className={`status-pill status-${item.status.toLowerCase().replace(/\s+/g, '-')}`}>{item.status}</span>
                </div>
                <h3>{item.title}</h3>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="footer">
        <p>
          Priceit alpha ·{' '}
          <a href="https://aires-production.up.railway.app//" target="_blank" rel="noreferrer">
            Phase 1 live
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
