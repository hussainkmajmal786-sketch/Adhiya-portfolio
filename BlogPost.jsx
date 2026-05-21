import { useParams, Link, Navigate } from 'react-router-dom'
import { posts } from './posts'
import './BlogPost.css'

function renderBody(text) {
  const lines = text.trim().split('\n')
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()

    if (!line) { i++; continue }

    if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      elements.push(<h3 key={i} className="post-body-h3">{line.slice(2, -2)}</h3>)
    } else {
      // Process inline bold
      const parts = line.split(/(\*\*[^*]+\*\*)/)
      const rendered = parts.map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={j}>{part.slice(2, -2)}</strong>
        }
        return part
      })
      elements.push(<p key={i} className="post-body-p">{rendered}</p>)
    }
    i++
  }

  return elements
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  const otherPosts = posts.filter(p => p.slug !== slug).slice(0, 2)

  if (!post) return <Navigate to="/blog" />

  return (
    <main className="blogpost-page page-enter">

      <section className={`post-hero accent-${post.accent}`}>
        <div className="container post-hero-inner">
          <Link to="/blog" className="back-link">← Back to Blog</Link>
          <div className="post-hero-meta">
            <span className={`tag ${post.accent}`}>{post.category}</span>
            <span className="meta-dot-sep" />
            <span className="post-meta-date">{post.date}</span>
            <span className="meta-dot-sep" />
            <span className="post-meta-date">{post.readTime}</span>
          </div>
          <h1 className="post-hero-title">{post.title}</h1>
          <p className="post-hero-subtitle">{post.subtitle}</p>
        </div>
      </section>

      <div className="post-layout container">
        <aside className="post-sidebar">
          <div className="sidebar-sticky">
            <div className="sidebar-section">
              <div className="section-label" style={{marginBottom:'0.75rem'}}>Written by</div>
              <div className="author-card">
                <div className="author-avatar">AM</div>
                <div>
                  <div className="author-name">Adhiya Mujeeb</div>
                  <div className="author-role">PM · Researcher · Intern @ PM VIKAS</div>
                </div>
              </div>
            </div>
            <div className="sidebar-section">
              <div className="section-label" style={{marginBottom:'0.75rem'}}>Filed under</div>
              <span className={`tag ${post.accent}`}>{post.category}</span>
            </div>
            <div className="sidebar-section">
              <div className="section-label" style={{marginBottom:'0.75rem'}}>Share</div>
              <div className="share-links">
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`} target="_blank" rel="noreferrer" className="share-btn">Twitter</a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer" className="share-btn">LinkedIn</a>
              </div>
            </div>
          </div>
        </aside>

        <article className="post-body">
          <p className="post-lead">{post.excerpt}</p>
          <hr className="post-divider" />
          <div className="post-content">
            {renderBody(post.body)}
          </div>
        </article>
      </div>

      {/* More posts */}
      {otherPosts.length > 0 && (
        <section className="more-posts">
          <div className="container">
            <div className="section-label" style={{marginBottom:'0.5rem'}}>Continue Reading</div>
            <h3 className="more-posts-title">More Essays</h3>
            <div className="more-posts-grid">
              {otherPosts.map(p => (
                <Link to={`/blog/${p.slug}`} key={p.slug} className={`more-post-card accent-${p.accent}`}>
                  <span className={`tag ${p.accent}`}>{p.category}</span>
                  <h4>{p.title}</h4>
                  <span className="more-post-time">{p.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  )
}
