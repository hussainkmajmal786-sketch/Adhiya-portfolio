import { Link } from 'react-router-dom'
import './Projects.css'

const projects = [
  {
    id: 'smart-home-cyber',
    title: 'Smart Home + Cybersecurity Layer',
    status: 'Concept · Day 6 Task',
    accent: 'rust',
    year: '2026',
    summary:
      "A future-internet concept connecting smart home devices, live traffic, and a cyber-security layer — designed especially for elderly grandparents living alone. Cameras and smart gadgets link to the cloud so trusted access (e.g. a delivery) is verifiable, and an emergency SOS routes automatically to the appropriate authorities, letting a cyber-wing rapidly identify incidents.",
    role: 'Concept · System design',
    stack: ['IoT', 'Smart City', 'Cyber-Security', 'Emergency SOS'],
    why:
      'Conceived as the Day 6 task for the PM VIKAS IoT module — a real-life IoT product that solves a genuine problem.',
  },
  {
    id: '8085-temp-monitor',
    title: '8085 Temperature Monitor',
    status: 'Lab build · Microprocessors module',
    accent: 'sage',
    year: '2026',
    summary:
      'Interfacing an 8085 with an ADC0808 through an 8255 Programmable Peripheral Interface. SOC/EOC handshaking lets the processor read an 8-bit digital temperature value — the classic microprocessor-based instrumentation pattern, built in assembly.',
    role: 'Hardware interfacing · Assembly programming',
    stack: ['8085', 'ADC0808', '8255 PPI', 'Assembly'],
    why:
      'Brings together the 5-stage pipeline and the IoT-sensor data flow studied with Dr. Della Thomas.',
  },
  {
    id: 'mcu-link',
    title: 'MCU Transmitter ↔ Receiver + LCD',
    status: 'Embedded · 8051 module',
    accent: 'gold',
    year: '2026',
    summary:
      "A two-MCU link: a transmitter continuously sends a character while a receiver decodes it and shows the result on an LCD — a hands-on intro to embedded serial communication and on-chip peripherals.",
    role: 'Embedded C · Serial protocol wiring',
    stack: ['8051', 'Serial', 'LCD', 'Embedded C'],
    why:
      'Demonstrates the on-chip simplicity advantage of an MCU compared to discrete 8085 + ADC + PPI builds.',
  },
  {
    id: 'rectifier-charger',
    title: 'Inside the Charger — Rectifier Build',
    status: 'Bench experiment · Day 1',
    accent: 'rust',
    year: '2026',
    summary:
      'Opened a phone charger to trace rectification — a full-wave signal through a bridge rectifier, smoothed with RC, RLC, and LC filters. Compared filter efficiencies and built a small bench replica that turns fluctuating DC into clean DC for a 5V load.',
    role: 'Analog electronics · Measurement',
    stack: ['Bridge Rectifier', 'RC Filter', 'Voltage Divider'],
    why:
      'The first hands-on exercise of the PM VIKAS programme — and a reference for every future power-supply design.',
  },
  {
    id: 'sequential-counter',
    title: 'MOD-10 Ripple Counter',
    status: 'Digital lab · Sequential logic',
    accent: 'gold',
    year: '2026',
    summary:
      'A 4-bit asynchronous ripple counter reset via a NAND on Q3·Q1 to make a MOD-10 decade counter. Built on the digital trainer kit with JK flip-flops in DIP packages, then verified on the DSO.',
    role: 'Digital logic design',
    stack: ['JK FF', 'NAND Reset', 'DSO', 'DIP'],
    why:
      'Bridges latches → flip-flops → counters into one observable artifact — the kind of small build the journal keeps producing.',
  },
  {
    id: 'iot-class-journal',
    title: 'PM VIKAS Class Journal (this site)',
    status: 'Live · running record',
    accent: 'sage',
    year: '2026',
    summary:
      'The website you are reading is itself a project — a React + Vite single-page portfolio that doubles as a live, day-by-day journal of every electronics, digital logic, and IoT class. Each session is a collapsible card with formulas, callouts, exercises, and concept maps.',
    role: 'Design · Build · Daily authoring',
    stack: ['React', 'Vite', 'React Router', 'CSS'],
    why:
      'Writing is how I learn twice — the journal turns class notes into something searchable and shareable.',
  },
]

export default function Projects() {
  return (
    <main className="projects-page page-enter">
      <section className="proj-hero">
        <div className="proj-hero-bg" />
        <div className="container proj-hero-inner">
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>
            Projects · 2026 cohort
          </div>
          <h1 className="proj-hero-title">
            Things I'm <em>building.</em>
          </h1>
          <p className="proj-hero-sub">
            A working catalogue of every electronics, embedded, and IoT project from the PM VIKAS programme
            at IIIT Kottayam — concepts, lab builds, and small experiments. Updated as the year unfolds.
          </p>
          <div className="proj-meta">
            <span className="meta-item"><span className="meta-dot" /> {projects.length} entries</span>
            <span className="meta-item"><span className="meta-dot" /> ECE undergraduate</span>
            <span className="meta-item"><span className="meta-dot" /> Live & growing</span>
          </div>
        </div>
      </section>

      <section className="proj-list-section">
        <div className="container">
          <div className="proj-list">
            {projects.map((p, i) => (
              <article className={`proj-row accent-${p.accent}`} key={p.id} style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="proj-row-side">
                  <div className="proj-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="proj-year">{p.year}</div>
                </div>
                <div className="proj-row-main">
                  <div className="proj-row-head">
                    <h2 className="proj-row-title">{p.title}</h2>
                    <span className={`tag ${p.accent}`}>{p.status}</span>
                  </div>
                  <p className="proj-row-summary">{p.summary}</p>
                  <div className="proj-row-bottom">
                    <div className="proj-attr">
                      <span className="attr-label">Role</span>
                      <span className="attr-value">{p.role}</span>
                    </div>
                    <div className="proj-attr">
                      <span className="attr-label">Stack</span>
                      <div className="attr-stack">
                        {p.stack.map(s => (
                          <span className="stack-chip" key={s}>{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="proj-row-why">
                    <span className="why-label">Why →</span>
                    {p.why}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="proj-cta">
        <div className="container proj-cta-inner">
          <div>
            <div className="section-label" style={{ marginBottom: '0.8rem' }}>Up next</div>
            <h2 className="proj-cta-heading">
              An <em>ESP32 sensor node</em> for the Smart-Home concept.
            </h2>
            <p className="proj-cta-sub">
              The next project on the bench — interfacing a DHT22 + PIR with an ESP32 to publish events to a
              small dashboard. Follow the journal for daily progress.
            </p>
          </div>
          <Link to="/internship" className="btn btn-primary btn-large">Read the Class Journal →</Link>
        </div>
      </section>
    </main>
  )
}
