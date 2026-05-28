import './Internship.css'

const timeline = [
  {
    month: 'Jan 2025',
    title: 'Onboarding & Baseline Study',
    desc: 'Joined PM VIKAS as a field intern. Conducted baseline interviews with artisan families across 2 clusters in Kerala to understand income patterns, skill gaps, and aspirations.',
    outcomes: ['40+ artisan interviews', 'Cluster mapping completed', 'Gap analysis report'],
    accent: 'gold',
  },
  {
    month: 'Feb 2025',
    title: 'Training Program Design',
    desc: 'Collaborated with state coordinators to co-design a 3-week skill module. Focused on financial literacy, digital tools, and market access for traditional weavers and potters.',
    outcomes: ['3-week curriculum drafted', 'Trainer orientation held', 'Pilot batch: 35 artisans'],
    accent: 'sage',
  },
  {
    month: 'Mar 2025',
    title: 'Field Execution & Monitoring',
    desc: 'Oversaw daily training sessions, tracked attendance and engagement metrics. Resolved logistics and facilitated government liaison for materials procurement.',
    outcomes: ['92% attendance rate', 'Daily progress reports', '3 district offices coordinated'],
    accent: 'rust',
  },
  {
    month: 'Apr 2025',
    title: 'Outcome Assessment & Reporting',
    desc: 'Measured post-training income outcomes using structured surveys. Drafted the impact report submitted to ministry stakeholders. Presented findings at regional review.',
    outcomes: ['Impact report submitted', '28% avg income increase', 'Presented to 12 officials'],
    accent: 'gold',
  },
]

const highlights = [
  { icon: '👥', label: 'Artisans Trained', value: '300+' },
  { icon: '🗺️', label: 'Districts Covered', value: '3' },
  { icon: '📈', label: 'Avg Income Uplift', value: '28%' },
  { icon: '📋', label: 'Reports Filed', value: '12' },
]

const skills_learned = [
  'Government program implementation',
  'Field research & qualitative methods',
  'Stakeholder management across levels',
  'Monitoring & evaluation frameworks',
  'Community facilitation',
  'Data collection & reporting',
  'Cross-cultural communication',
  'Impact measurement',
]

export default function Internship() {
  return (
    <main className="internship-page page-enter">

      {/* Header */}
      <section className="intern-hero">
        <div className="intern-hero-bg" />
        <div className="container intern-hero-inner">
          <div className="section-label" style={{marginBottom:'1.5rem'}}>Upcoming Internship · 2026</div>
          <div className="intern-badge">
            <span className="badge-dot" />
            <span>Starting April 1, 2026 · PM VIKAS, Govt. of India</span>
          </div>
          <h1 className="intern-title">PM VIKAS<br /><em>Internship</em></h1>
          <p className="intern-subtitle">
            PM Vishwakarma Kalyan Yojana — a flagship scheme empowering traditional artisans
            with skill training, credit access, and market linkage. I work as a Field &amp; Program
            Associate, bridging the ground reality with policy goals.
          </p>
          <div className="intern-tags">
            <span className="tag gold">Skill Development</span>
            <span className="tag sage">Rural India</span>
            <span className="tag rust">Government Scheme</span>
            <span className="tag">Kerala</span>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights-strip">
        <div className="container highlights-grid">
          {highlights.map(h => (
            <div className="highlight-card" key={h.label}>
              <span className="highlight-icon">{h.icon}</span>
              <span className="highlight-value">{h.value}</span>
              <span className="highlight-label">{h.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About PM VIKAS */}
      <section className="scheme-info">
        <div className="container scheme-grid">
          <div>
            <div className="section-label" style={{marginBottom:'1rem'}}>About the Scheme</div>
            <h2 className="section-h2">What is <em>PM VIKAS?</em></h2>
            <p>
              PM Vishwakarma Kalyan Yojana (PM VIKAS) is a Central Sector Scheme launched by the
              Government of India in 2023. It aims to holistically support traditional craftsmen
              and artisans — the Vishwakarma community — through end-to-end support:
            </p>
            <ul className="scheme-list">
              <li>Recognition via PM Vishwakarma Certificate & ID Card</li>
              <li>Skill upgradation through basic &amp; advanced training</li>
              <li>Toolkit incentive of ₹15,000</li>
              <li>Collateral-free credit support up to ₹3 lakh</li>
              <li>Digital &amp; financial literacy training</li>
              <li>Market linkage through GeM portal &amp; e-commerce</li>
            </ul>
          </div>
          <div className="scheme-aside">
            <div className="aside-card">
              <h4>My Role</h4>
              <p>Field & Program Associate — embedded at the district level, responsible for trainee mobilization, session delivery monitoring, data collection, and reporting to state coordinators.</p>
            </div>
            <div className="aside-card">
              <h4>Duration</h4>
              <p>April 1, 2026 – Currently pursuing</p>
            </div>
            <div className="aside-card">
              <h4>Location</h4>
              <p>Kerala (Multi-district: Kottayam, Idukki, Ernakulam)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-label" style={{marginBottom:'0.5rem'}}>Journey</div>
          <h2 className="section-h2" style={{marginBottom:'3.5rem'}}>Month-by-Month <em>Highlights</em></h2>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div className={`timeline-item accent-${item.accent}`} key={i}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-month">{item.month}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.desc}</p>
                  <div className="timeline-outcomes">
                    {item.outcomes.map(o => (
                      <span key={o} className={`tag ${item.accent}`}>{o}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills learned */}
      <section className="intern-skills">
        <div className="container intern-skills-inner">
          <div>
            <div className="section-label" style={{marginBottom:'1rem'}}>Growth</div>
            <h2 className="section-h2">Skills I've <em>Developed</em></h2>
            <p className="intern-skills-sub">This internship has been a masterclass in real-world program management — from policy to people.</p>
          </div>
          <div className="skills-pill-grid">
            {skills_learned.map(s => (
              <span key={s} className="skills-pill">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="reflection">
        <div className="container reflection-inner">
          <div className="reflection-quote">
            <div className="quote-mark">"</div>
            <blockquote>
              Working directly with artisans — understanding their lives, challenges, and quiet
              resilience — has permanently shaped how I think about product and policy design.
              Empathy isn't a UX principle here; it's the only way to do the work.
            </blockquote>
            <cite>— Personal reflection, April 2025</cite>
          </div>
        </div>
      </section>

    </main>
  )
}
