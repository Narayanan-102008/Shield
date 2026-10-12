
import "./ExtraPages.css";

export default function MyProgress({ answers, scenarios, onBack }) {
  const answeredCount = Object.keys(answers || {}).length;
  const total = scenarios?.length || 0;

  const correctCount = (scenarios || []).filter(
    (scenario) => answers?.[scenario.id] === scenario.correctOptionId
  ).length;

  const percentage =
    total > 0 ? Math.round((correctCount / total) * 100) : 0;

  return (
    <main className="extra-page">
      <div className="extra-page-label">WORKSPACE / YOUR ACTIVITY</div>

      <h1>My Progress</h1>

      <p className="extra-page-description">
        Track your cybersecurity awareness training progress.
      </p>

      <section className="progress-grid">
        <article className="extra-page-card">
          <p>SCENARIOS ANSWERED</p>
          <h2>{answeredCount} / {total}</h2>
        </article>

        <article className="extra-page-card">
          <p>CORRECT ANSWERS</p>
          <h2>{correctCount}</h2>
        </article>

        <article className="extra-page-card">
          <p>ACCURACY</p>
          <h2>{percentage}%</h2>
        </article>
      </section>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${total ? (answeredCount / total) * 100 : 0}%` }}
        />
      </div>

      <p className="progress-note">
        Your progress is tracked for this session. Refreshing the page
        may reset it.
      </p>

      <button className="extra-page-button" onClick={onBack}>
        ← Back to Overview
      </button>
    </main>
  );
}
