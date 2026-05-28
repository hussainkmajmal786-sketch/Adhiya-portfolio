import { Link } from 'react-router-dom'
import './Portfolio.css'

const featuredProjects = [
  {
    id: 1,
    title: '8085 Temperature Monitor',
    desc: 'Interfacing an 8085 with ADC0808 through an 8255 PPI — SOC/EOC handshaking to read an 8-bit digital temperature value. A classic microprocessor instrumentation build from the lab.',
    tags: ['8085', 'ADC0808', 'Assembly'],
    year: '2026',
    accent: 'rust',
    link: '/projects',
  },
  {
    id: 2,
    title: 'Smart Home + Cybersecurity',
    desc: 'A future-internet concept for elderly grandparents — smart-home automation linked to live traffic and a cyber-wing SOS layer for emergencies and trusted delivery access.',
    tags: ['IoT', 'Smart City', 'Concept'],
    year: '2026',
    accent: 'sage',
    link: '/projects',
  },
  {
    id: 3,
    title: 'MCU ↔ MCU + LCD Link',
    desc: 'Two-MCU embedded serial link: a transmitter continuously sends a character while a receiver decodes it and shows the result on an LCD — hands-on intro to embedded serial comm.',
    tags: ['8051', 'Serial', 'Embedded C'],
    year: '2026',
    accent: 'gold',
    link: '/projects',
  },
  {
    id: 4,
    title: 'PM VIKAS Class Journal',
    desc: 'A live, day-by-day journal of every electronics and IoT class — formulas, exercises, callouts, and concept maps from the PM VIKAS programme at IIIT Kottayam.',
    tags: ['Journal', 'PM VIKAS', 'IIIT-K'],
    year: '2026',
    accent: 'gold',
    link: '/internship',
  },
]

const skills = [
  { category: 'Electronics', items: ['Network Theory', 'Analog & Digital Circuits', 'Rectifiers & Filters', 'PCB / Breadboard'] },
  { category: 'Digital & MCU', items: ['Boolean Algebra', 'K-Maps', '8085 / 8051', 'Sequential Logic'] },
  { category: 'IoT & Comms', items: ['M2M Systems', 'IEEE 802.3 / 802.11', 'Sensor Interfacing', 'IoT Architecture'] },
  { category: 'Tools', items: ['VS Code', 'Circuit Simulators', 'Multimeter / DSO', 'Embedded C'] },
]

export default function Portfolio() {
  return (
    <main className="portfolio-page page-enter">
      {/* Hero */}
      <section className="hero">
        <div className="hero-noise" />
        <div className="container hero-inner">
          <div className="hero-eyebrow section-label">Product Manager · Researcher · Builder</div>
          <h1 className="hero-title">
            <span className="hero-line">Designing</span>
            <span className="hero-line italic">systems that</span>
            <span className="hero-line">create impact.</span>
          </h1>
          <p className="hero-sub">
            I'm a product thinker with a passion for building tools that solve real problems —
            especially at the intersection of technology and public good.
          </p>
          <div className="hero-cta-row">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/works" className="btn btn-ghost">Explore Works →</Link>
          </div>
          <div className="hero-now">
            <div className="hero-now-label">Currently</div>
            <ul className="hero-now-list">
              <li>
                <span className="now-pip" />
                Studying <strong>Electronics &amp; Communication</strong> at{' '}
                <strong>College of Engineering Kidangoor</strong>
              </li>
              <li>
                <span className="now-pip sage" />
                <strong>IoT Assistant Intern</strong> @ IIIT Kottayam — part of the{' '}
                <strong>PM VIKAS</strong> programme
              </li>
            </ul>
          </div>
          <div className="hero-meta">
            <span className="meta-item"><span className="meta-dot" />Kottayam, Kerala · IST</span>
            <span className="meta-item"><span className="meta-dot" />Open to opportunities</span>
            <span className="meta-item"><span className="meta-dot" />2026 cohort</span>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* About strip */}
      <section className="about-strip">
        <div className="container about-strip-inner">
          <div className="about-text">
            <div className="section-label" style={{marginBottom:'1.2rem'}}>About Me</div>
            <h2 className="section-heading">Learning at the edge of <em>electronics &amp; the internet.</em></h2>
            <p>
              I'm an Electronics &amp; Communication undergraduate at <strong>College of Engineering
              Kidangoor</strong>, currently interning as an <strong>IoT Assistant</strong> at IIIT Kottayam
              under the Government of India's <strong>PM VIKAS</strong> programme. My days move between
              network theory, breadboards, and connected systems.
            </p>
            <p>
              I document everything I learn — from resistor colour codes and KCL/KVL to the 8085, K-maps,
              and IoT architecture — and turn those notes into small, tangible builds.
            </p>
            <div className="about-links">
              <Link to="/works" className="btn btn-sm">Explore Works →</Link>
              <Link to="/internship" className="btn btn-sm btn-outline">PM VIKAS Journal →</Link>
            </div>
          </div>
          <div className="about-stats">
            {[['9','Class Sessions Logged'],['4','Projects in Flight'],['3','Faculty Mentors'],['1','IoT Internship']].map(([n,l])=>(
              <div className="stat-card" key={l}>
                <span className="stat-num">{n}</span>
                <span className="stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section" id="projects">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Selected Work</div>
            <h2 className="section-heading">Projects &amp; Case Studies</h2>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((p, i) => (
              <Link to={p.link} key={p.id} className={`project-card accent-${p.accent}`} style={{animationDelay:`${i*0.1}s`}}>
                <div className="project-card-top">
                  <span className="project-year tag">{p.year}</span>
                  <div className="project-arrow">→</div>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className={`tag ${p.accent}`}>{t}</span>)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Capabilities</div>
            <h2 className="section-heading">Skills &amp; Tools</h2>
          </div>
          <div className="skills-grid">
            {skills.map(s => (
              <div className="skill-group" key={s.category}>
                <h4 className="skill-category">{s.category}</h4>
                <ul className="skill-list">
                  {s.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Now / Current focus */}
      <section className="now-section">
        <div className="container now-inner">
          <div className="now-head">
            <div className="section-label">Currently</div>
            <h2 className="section-heading">What I'm <em>working on now.</em></h2>
            <p className="now-sub">
              A snapshot of where my attention sits this season — updated as the year unfolds.
            </p>
          </div>
          <div className="now-grid">
            <div className="now-card">
              <span className="now-icon">⚡</span>
              <div className="now-label">Building</div>
              <div className="now-text">
                IoT prototypes around the <strong>8085 microprocessor</strong> and ESP32 sensor nodes
                for the PM VIKAS programme at IIIT Kottayam.
              </div>
            </div>
            <div className="now-card">
              <span className="now-icon">📚</span>
              <div className="now-label">Learning</div>
              <div className="now-text">
                Sequential logic, finite-state machines, and the bridge between digital design and
                real-world embedded systems.
              </div>
            </div>
            <div className="now-card">
              <span className="now-icon">🎓</span>
              <div className="now-label">Studying</div>
              <div className="now-text">
                <strong>Electronics &amp; Communication</strong> at College of Engineering Kidangoor
                — bridging coursework with the PM VIKAS IoT lab.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Connect */}
      <section className="connect-section" id="contact">
        <div className="container">
          <div className="connect-grid">
            <div className="connect-left">
              <div className="section-label">Get in touch</div>
              <h2 className="connect-heading">
                Let's build something <em>meaningful.</em>
              </h2>
              <p className="connect-sub">
                Open to product, research, and strategy conversations. The best ideas usually start
                with a short message — say hi, share a problem, or send a half-formed idea.
              </p>
              <div className="connect-meta">
                <span className="meta-item"><span className="meta-dot" /> Kottayam, Kerala · IST</span>
                <span className="meta-item"><span className="meta-dot" /> Responds within ~24h</span>
              </div>
            </div>

            <ul className="connect-channels">
              <li>
                <a href="mailto:hussainkmajmal890@gmail.com" className="channel-card">
                  <span className="channel-label">Email</span>
                  <span className="channel-value">hussainkmajmal890@gmail.com</span>
                  <span className="channel-arrow">→</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/hussainkmajmal786-sketch" target="_blank" rel="noreferrer" className="channel-card">
                  <span className="channel-label">GitHub</span>
                  <span className="channel-value">@hussainkmajmal786-sketch</span>
                  <span className="channel-arrow">↗</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="channel-card">
                  <span className="channel-label">LinkedIn</span>
                  <span className="channel-value">Connect &amp; collaborate</span>
                  <span className="channel-arrow">↗</span>
                </a>
              </li>
              <li>
                <Link to="/internship" className="channel-card">
                  <span className="channel-label">PM VIKAS</span>
                  <span className="channel-value">Read the class journal</span>
                  <span className="channel-arrow">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="cta-strip">
        <div className="container cta-inner">
          <div>
            <h2 className="cta-heading">Let's build something meaningful.</h2>
            <p className="cta-sub">Open to product, research, and strategy roles. Based in Kottayam, India.</p>
          </div>
          <a href="mailto:hussainkmajmal890@gmail.com" className="btn btn-primary btn-large">Get in Touch →</a>
        </div>
      </section>
    </main>
  )
}
