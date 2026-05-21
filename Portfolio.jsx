import { Link } from 'react-router-dom'
import './Portfolio.css'

const projects = [
  {
    id: 1,
    title: 'Product Strategy Dashboard',
    desc: 'A data-driven dashboard for tracking OKRs and product metrics across teams. Built for cross-functional alignment.',
    tags: ['Product', 'Analytics', 'React'],
    year: '2024',
    accent: 'gold',
    link: '#',
  },
  {
    id: 2,
    title: 'Community Skill-Building App',
    desc: 'Mobile-first platform connecting rural artisans with mentors and markets. Piloted in 3 districts.',
    tags: ['UX Design', 'Mobile', 'Social Impact'],
    year: '2024',
    accent: 'sage',
    link: '#',
  },
  {
    id: 3,
    title: 'PM VIKAS Monitoring Tool',
    desc: 'Internal reporting tool to track trainee progress, sessions, and outcomes across PM VIKAS batches.',
    tags: ['PM VIKAS', 'Data', 'Government'],
    year: '2025',
    accent: 'rust',
    link: '/internship',
  },
  {
    id: 4,
    title: 'Market Research: Artisan Economy',
    desc: 'Qualitative + quantitative study on income patterns of traditional craft workers in rural Tamil Nadu.',
    tags: ['Research', 'Economics', 'Fieldwork'],
    year: '2025',
    accent: 'gold',
    link: '#',
  },
]

const skills = [
  { category: 'Product', items: ['Product Strategy', 'Roadmapping', 'User Research', 'Agile / Scrum'] },
  { category: 'Technical', items: ['React', 'Python', 'SQL', 'Figma'] },
  { category: 'Soft Skills', items: ['Stakeholder Management', 'Public Speaking', 'Cross-team Collaboration'] },
  { category: 'Domain', items: ['Social Impact', 'Rural Development', 'EdTech', 'Govt Schemes'] },
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
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <Link to="/blog" className="btn btn-ghost">Read My Writing →</Link>
          </div>
          <div className="hero-meta">
            <span className="meta-item"><span className="meta-dot" />Chennai, India</span>
            <span className="meta-item"><span className="meta-dot" />Open to Opportunities</span>
            <span className="meta-item"><span className="meta-dot" />PM VIKAS Intern 2025</span>
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
            <h2 className="section-heading">I build at the edge of <em>technology & community.</em></h2>
            <p>
              Currently interning with PM VIKAS — a Government of India initiative — where I work on
              skill development programs for traditional artisans. I bring a product mindset to everything:
              deeply empathizing with users, structuring problems, and shipping solutions that stick.
            </p>
            <p>
              When I'm not in the field, I'm writing about product management, urban economics, and the
              future of livelihoods.
            </p>
            <div className="about-links">
              <a href="/resume.pdf" className="btn btn-sm" target="_blank" rel="noreferrer">Download Resume ↓</a>
              <Link to="/internship" className="btn btn-sm btn-outline">PM VIKAS Work →</Link>
            </div>
          </div>
          <div className="about-stats">
            {[['4+','Projects Shipped'],['300+','Artisans Reached'],['2','Published Articles'],['1','Ongoing Internship']].map(([n,l])=>(
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
            {projects.map((p, i) => (
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

      {/* CTA strip */}
      <section className="cta-strip">
        <div className="container cta-inner">
          <div>
            <h2 className="cta-heading">Let's build something meaningful.</h2>
            <p className="cta-sub">Open to product, research, and strategy roles. Based in Chennai.</p>
          </div>
          <a href="mailto:your@email.com" className="btn btn-primary btn-large">Get in Touch →</a>
        </div>
      </section>
    </main>
  )
}
