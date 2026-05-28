import { Link } from 'react-router-dom'
import './Works.css'

const works = [
  {
    id: 'pm-vikas-intern',
    org: 'IIIT Kottayam',
    role: 'IoT Assistant Intern — PM VIKAS Programme',
    period: '2026 — Present',
    accent: 'rust',
    summary:
      'Working as an IoT Assistant Intern under the Government of India\'s Pradhan Mantri Vishwakarma Kaushal Samman (PM VIKAS) programme. Attend daily labs and theory sessions across electronics, digital logic, microprocessors, and IoT architecture.',
    contributions: [
      'Daily class journal — 9 sessions logged across electronics, digital logic, and IoT',
      'Prototyping small IoT product concepts (Smart-Home + Cybersecurity)',
      '8085 and 8051 lab interfacing — ADC0808, 8255 PPI, LCD link',
      'Documentation and concept maps shared with the cohort',
    ],
    mentors: ['Dr. Anand (HOD ECE)', 'Dr. Vineeth (Wireless Comm.)', 'Shajulin Sir (IoT)'],
    link: '/internship',
    linkLabel: 'Read the daily journal →',
  },
  {
    id: 'cek-ece',
    org: 'College of Engineering Kidangoor',
    role: 'B.Tech · Electronics & Communication Engineering',
    period: 'Ongoing',
    accent: 'gold',
    summary:
      'Undergraduate coursework in network theory, analog & digital circuits, microprocessors, data communication, and signals & systems — the formal foundation behind the PM VIKAS work.',
    contributions: [
      'Network theory — KCL, KVL, mesh & nodal analysis',
      'Analog & digital circuits, rectifiers, diodes, filters',
      'Boolean algebra, K-maps, combinational & sequential logic',
      'Microprocessors, embedded systems, data communication',
    ],
    mentors: ['ECE department faculty, CEK'],
    link: null,
  },
  {
    id: 'portfolio-build',
    org: 'Self-initiated',
    role: 'Portfolio & Class Journal — Design and Build',
    period: '2026',
    accent: 'sage',
    summary:
      'Designed and built this site end-to-end as a React + Vite single-page app. It serves as both a portfolio and a live class journal — every PM VIKAS session is a collapsible card with formulas, callouts, and concept maps.',
    contributions: [
      'Information architecture, type system, and palette',
      'React Router routes for Home, Projects, Works, PM VIKAS',
      'Authored every journal entry from the original handwritten notes',
      'Deployed via Vercel from a GitHub repository',
    ],
    mentors: [],
    link: '/projects',
    linkLabel: 'See projects →',
  },
]

const offerings = [
  {
    title: 'IoT prototyping',
    body: 'Small sensor nodes, microcontroller wiring, and proof-of-concept builds for connected-device ideas.',
  },
  {
    title: 'Electronics tutoring',
    body: 'One-on-one help with network theory, Boolean algebra, K-maps, flip-flops, and 8085/8051 assembly.',
  },
  {
    title: 'Technical writing',
    body: 'Class notes, lab reports, and concept maps — converting tangled material into something you can actually read.',
  },
  {
    title: 'Project documentation',
    body: 'README files, build logs, and architecture write-ups for student or community electronics projects.',
  },
]

export default function Works() {
  return (
    <main className="works-page page-enter">
      <section className="works-hero">
        <div className="works-hero-bg" />
        <div className="container works-hero-inner">
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>
            Works · Engagements · Collaborations
          </div>
          <h1 className="works-hero-title">
            Where I'm <em>showing up.</em>
          </h1>
          <p className="works-hero-sub">
            A record of the places, programmes, and projects I'm contributing to right now — including
            the PM VIKAS internship at IIIT Kottayam, my undergraduate studies at College of Engineering
            Kidangoor, and self-initiated work I ship in public.
          </p>
        </div>
      </section>

      <section className="works-list-section">
        <div className="container">
          {works.map((w, i) => (
            <article className={`work-entry accent-${w.accent}`} key={w.id} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="work-side">
                <div className="work-period">{w.period}</div>
                <div className="work-org">{w.org}</div>
                <div className={`work-bar ${w.accent}`} />
              </div>
              <div className="work-body">
                <h2 className="work-role">{w.role}</h2>
                <p className="work-summary">{w.summary}</p>

                <div className="work-section">
                  <div className="work-section-label">What I do here</div>
                  <ul className="work-contribs">
                    {w.contributions.map(c => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>

                {w.mentors.length > 0 && (
                  <div className="work-section">
                    <div className="work-section-label">Faculty &amp; mentors</div>
                    <div className="work-mentors">
                      {w.mentors.map(m => (
                        <span className="mentor-chip" key={m}>{m}</span>
                      ))}
                    </div>
                  </div>
                )}

                {w.link && (
                  <div className="work-link-row">
                    <Link to={w.link} className="work-link">{w.linkLabel}</Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="offerings-section">
        <div className="container">
          <div className="offerings-head">
            <div className="section-label">Available for</div>
            <h2 className="offerings-heading">Things I can <em>help with.</em></h2>
            <p className="offerings-sub">
              Small, focused engagements that fit alongside the internship. Reach out if any of these
              would be useful to you or your team.
            </p>
          </div>
          <div className="offerings-grid">
            {offerings.map(o => (
              <div className="offering-card" key={o.title}>
                <h3 className="offering-title">{o.title}</h3>
                <p className="offering-body">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="works-cta">
        <div className="container works-cta-inner">
          <div>
            <h2 className="works-cta-heading">Have a project that could use a curious pair of hands?</h2>
            <p className="works-cta-sub">Open to short builds, lab partnerships, and writing collaborations.</p>
          </div>
          <a href="mailto:hussainkmajmal890@gmail.com" className="btn btn-primary btn-large">Email me →</a>
        </div>
      </section>
    </main>
  )
}
