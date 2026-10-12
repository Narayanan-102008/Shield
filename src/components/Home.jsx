
export default function Home({ onStart }) {
  return (
    <main className="home">
      <nav className="navbar">
        <a className="brand" href="#">
          <span className="brand-icon">S</span>
          SHIELD
        </a>
        <span className="nav-label">DIGITAL SAFETY LAB</span>
      </nav>

      <section className="hero">
        <div className="hero-badge">
          <span className="status-dot" />
          YOUR DIGITAL DEFENCE STARTS HERE
        </div>

        <h1>
          Think before
          <br />
          you <span className="accent">click.</span>
        </h1>

        <p className="hero-description">
          The internet is full of traps. Learn to recognise scams,
          test your instincts, and build safer digital habits.
        </p>

        <button className="start-button" onClick={onStart}>
          Start your training <span>↗</span>
        </button>

        <div className="hero-stats">
          <div>
            <strong>01</strong>
            <span>Spot the scam</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Make a decision</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Learn the signs</span>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <span>SHIELD / DIGITAL AWARENESS</span>
        <span>STAY ALERT. STAY PROTECTED.</span>
      </footer>
    </main>
  );
}
