import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-name">Your Name</span>
          <p>Building thoughtful products &amp; experiences.</p>
        </div>
        <div className="footer-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:your@email.com">Email</a>
        </div>
        <div className="footer-copy">
          <span>© {new Date().getFullYear()} · Crafted with care</span>
        </div>
      </div>
    </footer>
  )
}
