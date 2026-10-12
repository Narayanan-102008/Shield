
import "./Home.css";

export default function Home({ onStart, onOpenAnalyzer }) {
  return (
    <div className="home-page">
      <header className="home-navbar">
        <div className="home-brand">
          <span className="brand-icon">⬡</span>
          <span>SHIELD<span className="brand-dot">.</span></span>
        </div>

        <nav className="home-nav">
          <button
            className="nav-link active"
            type="button"
          >
            Overview
          </button>

          <button
            className="nav-link"
            onClick={onOpenAnalyzer}
            type="button"
          >
            <span className="nav-icon">◎</span>
            Threat Analyzer
          </button>
        </nav>

        <div className="navbar-status">
          <span className="status-dot" />
          SECURITY MODE ACTIVE
        </div>
      </header>

      <main className="home-main">
        <section className="home-hero">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="status-dot" />
              YOUR PERSONAL CYBER SAFETY CENTRE
            </div>

            <h1>
              Think before
              <br />
              you <span>trust.</span>
            </h1>

            <p className="hero-description">
              Build smarter digital habits. Learn to recognise
              suspicious messages, identify online scams, and
              protect yourself in an increasingly connected world.
            </p>

            <div className="hero-actions">
              <button
                className="shield-button"
                onClick={onStart}
                type="button"
              >
                Test your cyber awareness
                <span>↗</span>
              </button>

              <button
                className="analyzer-button"
                onClick={onOpenAnalyzer}
                type="button"
              >
                Analyse a message
                <span>⌁</span>
              </button>
            </div>

            <div className="hero-note">
              <span>✓</span>
              Learn safely with simulated scenarios
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-grid" />

            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />

            <div className="shield-emblem">
              <svg
                viewBox="0 0 120 140"
                width="110"
                height="130"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M60 7 L105 25 V62 C105 91 87 116 60 132 C33 116 15 91 15 62 V25 Z"
                  stroke="#66F5D0"
                  strokeWidth="3"
                  fill="rgba(25, 190, 150, 0.08)"
                />
                <path
                  d="M40 68 L53 81 L81 51"
                  stroke="#66F5D0"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="floating-card card-top">
              <span className="mini-card-icon">✓</span>
              <div>
                <strong>Privacy protected</strong>
                <small>Stay alert. Stay secure.</small>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <span className="mini-card-icon warning-icon">!</span>
              <div>
                <strong>Threat awareness</strong>
                <small>Recognise suspicious signals</small>
              </div>
            </div>

            <div className="visual-caption">
              <span className="status-dot" />
              SMARTER CHOICES. SAFER CONNECTIONS.
            </div>
          </div>
        </section>

        <section className="home-features">
          <div className="section-heading">
            <div>
              <span className="section-kicker">EXPLORE SHIELD</span>
              <h2>Your safety toolkit</h2>
            </div>
            <p>
              Practical tools to help you navigate the digital world
              with confidence.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">⌕</div>
              <span className="feature-number">01 / LEARN</span>
              <h3>Threat Analyzer</h3>
              <p>
                Examine a suspicious message for common warning
                signs and learn what to look out for.
              </p>
              <button
                className="feature-link"
                onClick={onOpenAnalyzer}
                type="button"
              >
                Analyse a message <span>→</span>
              </button>
            </article>

            <article className="feature-card">
              <div className="feature-icon">◎</div>
              <span className="feature-number">02 / PRACTISE</span>
              <h3>Scenario Challenge</h3>
              <p>
                Test your judgement with realistic, simulated
                online safety situations.
              </p>
              <button
                className="feature-link"
                onClick={onStart}
                type="button"
              >
                Start challenge <span>→</span>
              </button>
            </article>

            <article className="feature-card">
              <div className="feature-icon">⌑</div>
              <span className="feature-number">03 / PROTECT</span>
              <h3>Build safer habits</h3>
              <p>
                Learn to pause, verify unexpected requests, and
                protect sensitive personal information.
              </p>
              <button
                className="feature-link"
                onClick={onStart}
                type="button"
              >
                Learn through practice <span>→</span>
              </button>
            </article>
          </div>
        </section>

        <footer className="home-footer">
          <div className="home-brand footer-brand">
            <span className="brand-icon">⬡</span>
            <span>SHIELD<span className="brand-dot">.</span></span>
          </div>
          <p>Pause. Verify. Protect.</p>
          <span className="footer-label">CYBER AWARENESS PROJECT</span>
        </footer>
      </main>
    </div>
  );
}
