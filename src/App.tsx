import { motion, useReducedMotion, type Variants } from 'framer-motion'
import './App.css'

const capabilities = [
  {
    label: '01',
    title: 'Pricing research layer',
    body: 'A controlled workspace for transforming market observations, comparables, and financial assumptions into clear pricing signals.',
  },
  {
    label: '02',
    title: 'Alpha signal design',
    body: 'Experimental models for valuation spreads, liquidity context, and scenario-aware price discovery across financial assets.',
  },
  {
    label: '03',
    title: 'Decision calibration',
    body: 'Transparent outputs built for review: confidence bands, assumption trails, and sensitivity views before production use.',
  },
]

const metrics = [
  { value: 'Pricing', label: 'Core domain' },
  { value: 'Research', label: 'Operating mode' },
  { value: 'Alpha', label: 'Current stage' },
]

const workflow = ['Ingest', 'Normalize', 'Price', 'Stress', 'Review']

const principles = [
  'Institutional-grade interface with minimal distraction.',
  'Financial pricing workflows presented with clarity and restraint.',
  'Research-first product language without public names or external links.',
]

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

function App() {
  const prefersReducedMotion = useReducedMotion()
  const animate = prefersReducedMotion
    ? { initial: false as const, animate: undefined }
    : { initial: 'hidden' as const, animate: 'visible' as const }

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />

      <header className="nav" aria-label="PriceT Labs header">
        <div className="brand">
          <span className="brand-symbol" aria-hidden="true">P</span>
          <div>
            <p className="brand-name">PriceT Labs</p>
            <p className="brand-subtitle">Financial pricing research</p>
          </div>
        </div>
        <div className="status-chip" aria-label="Alpha status">
          <span className="pulse" aria-hidden="true" />
          Alpha interface
        </div>
      </header>

      <main>
        <motion.section className="hero panel" variants={stagger} {...animate}>
          <motion.div className="hero-copy" variants={fadeUp}>
            <p className="kicker">Research system for financial price discovery</p>
            <h1>Pricing intelligence for disciplined markets.</h1>
            <p className="hero-text">
              PriceT Labs builds research tooling for financial pricing, signal calibration, and alpha-oriented valuation workflows.
            </p>
            <div className="hero-actions" aria-label="Product focus areas">
              <span>Financial pricing</span>
              <span>Market structure</span>
              <span>Alpha research</span>
            </div>
          </motion.div>

          <motion.aside className="terminal-card" variants={fadeUp} aria-label="Pricing system preview">
            <div className="terminal-topline">
              <span>pricing-lab</span>
              <span>private alpha</span>
            </div>
            <div className="signal-readout">
              <p className="readout-label">Composite pricing state</p>
              <div className="readout-value">0.742</div>
              <div className="readout-band">
                <span style={{ width: '74%' }} />
              </div>
            </div>
            <div className="matrix">
              {Array.from({ length: 36 }).map((_, index) => (
                <span key={index} className={index % 5 === 0 || index % 7 === 0 ? 'active' : ''} />
              ))}
            </div>
          </motion.aside>
        </motion.section>

        <motion.section className="metric-strip" variants={stagger} {...animate} aria-label="PriceT Labs summary">
          {metrics.map((item) => (
            <motion.div className="metric" key={item.label} variants={fadeUp}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </motion.section>

        <motion.section className="capability-grid" variants={stagger} {...animate}>
          {capabilities.map((capability) => (
            <motion.article className="capability-card panel" key={capability.title} variants={fadeUp}>
              <span className="card-index">{capability.label}</span>
              <h2>{capability.title}</h2>
              <p>{capability.body}</p>
            </motion.article>
          ))}
        </motion.section>

        <motion.section className="system-panel panel" variants={fadeUp} {...animate}>
          <div className="section-heading">
            <p className="kicker">Workflow architecture</p>
            <h2>From raw market context to reviewed pricing output.</h2>
          </div>
          <div className="workflow" aria-label="Pricing workflow">
            {workflow.map((step, index) => (
              <div className="workflow-step" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section className="principles panel" variants={fadeUp} {...animate}>
          <div>
            <p className="kicker">Interface direction</p>
            <h2>Quiet, technical, and research-grade.</h2>
          </div>
          <ul>
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </motion.section>
      </main>

      <footer className="footer">
        <span>PriceT Labs</span>
        <span>Alpha pricing research interface</span>
      </footer>
    </div>
  )
}

export default App
