
import "./ExtraPages.css";

export default function LearningLibrary({ onBack }) {
  return (
    <main className="extra-page">
      <div className="extra-page-label">LEARN / SHIELD LIBRARY</div>

      <h1>Learning Library</h1>

      <p className="extra-page-description">
        Learn how to recognise suspicious messages, avoid online scams,
        and protect your information.
      </p>

      <section className="extra-page-grid">
        <article className="extra-page-card">
          <h2>Recognise phishing</h2>
          <p>
            Be cautious of unexpected messages, urgent demands, and
            suspicious links. Verify the sender independently.
          </p>
        </article>

        <article className="extra-page-card">
          <h2>Protect your banking details</h2>
          <p>
            Never share your OTP, PIN, password, or banking credentials
            with someone who contacts you unexpectedly.
          </p>
        </article>

        <article className="extra-page-card">
          <h2>Avoid payment scams</h2>
          <p>
            Verify payment requests through official channels. You
            generally do not need to enter a PIN to receive money.
          </p>
        </article>

        <article className="extra-page-card">
          <h2>Verify before you trust</h2>
          <p>
            Contact organisations through their official apps or
            verified contact details before taking action.
          </p>
        </article>
      </section>

      <button className="extra-page-button" onClick={onBack}>
        ← Back to Overview
      </button>
    </main>
  );
}
