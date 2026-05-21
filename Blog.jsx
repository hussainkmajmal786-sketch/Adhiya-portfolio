import { Link } from 'react-router-dom'
import { posts } from './posts'
import './Blog.css'

const categories = ['All', ...new Set(posts.map(p => p.category))]

export default function Blog() {
  return (
    <main className="blog-page page-enter">

      <section className="blog-hero">
        <div className="container blog-hero-inner">
          <div className="section-label" style={{marginBottom:'1.5rem'}}>Writing</div>
          <h1 className="blog-hero-title">
            Thinking out loud<br /><em>on product &amp; people.</em>
          </h1>
          <p className="blog-hero-sub">
            Essays on product management, field research, social impact, and the craft of building
            things that matter. Written for practitioners, not theorists.
          </p>
        </div>
      </section>

      <section className="blog-list-section">
        <div className="container">
          <div className="posts-grid">
            {posts.map((post, i) => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className={`post-card accent-${post.accent}`} style={{animationDelay:`${i*0.08}s`}}>
                <div className="post-card-meta">
                  <span className={`tag ${post.accent}`}>{post.category}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-subtitle">{post.subtitle}</p>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <span className="post-read-time">{post.readTime}</span>
                  <span className="post-read-link">Read essay →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container newsletter-inner">
          <div>
            <h3 className="newsletter-title">Get new essays in your inbox.</h3>
            <p className="newsletter-sub">Occasional writing — never spam. Unsubscribe anytime.</p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="your@email.com" className="email-input" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>

    </main>
  )
}
