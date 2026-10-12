
export default function ScenarioCard({
  scenario,
  questionNumber,
  totalQuestions,
  onAnswer,
}) {
  if (!scenario) {
    return (
      <main className="shield-quiz-page">
        <div className="shield-quiz-empty" role="status">
          No training scenario is available.
        </div>
      </main>
    );
  }

  const progress =
    totalQuestions > 0
      ? Math.min(
          100,
          Math.max(0, (questionNumber / totalQuestions) * 100)
        )
      : 0;

  const difficultyClass = String(scenario.difficulty || "")
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "");

  return (
    <main className="shield-quiz-page">
      <header className="shield-quiz-header">
        <a className="shield-brand" href="#" aria-label="SHIELD home">
          <span className="shield-brand-icon" aria-hidden="true">
            S
          </span>
          <span>
            SHIELD<span className="shield-brand-version"> 2.0</span>
          </span>
        </a>

        <span className="shield-quiz-label">
          SECURITY SIMULATION
        </span>
      </header>

      <section className="shield-quiz-content">
        <div className="shield-progress-section">
          <div className="shield-progress-labels">
            <span>YOUR TRAINING PROGRESS</span>
            <span className="shield-progress-count">
              {questionNumber} <span>/ {totalQuestions}</span>
            </span>
          </div>

          <div
            className="shield-progress-track"
            role="progressbar"
            aria-label="Training progress"
            aria-valuemin={0}
            aria-valuemax={totalQuestions || 1}
            aria-valuenow={Math.min(questionNumber, totalQuestions)}
          >
            <div
              className="shield-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <article className="shield-scenario-card">
          <div className="shield-scenario-meta">
            <span className="shield-category">
              {scenario.category}
            </span>

            <span
              className={`shield-difficulty ${
                difficultyClass
                  ? `shield-difficulty-${difficultyClass}`
                  : ""
              }`}
            >
              {scenario.difficulty}
            </span>
          </div>

          <div className="shield-scenario-heading">
            <span className="shield-scenario-number">
              SCENARIO {String(questionNumber).padStart(2, "0")}
            </span>
            <h1>{scenario.title}</h1>
          </div>

          <section className="shield-message-panel">
            <div className="shield-panel-heading">
              <span className="shield-panel-icon" aria-hidden="true">
                ✉
              </span>
              <h2>THE SITUATION</h2>
            </div>

            <p className="shield-scenario-message">
              {scenario.message}
            </p>
          </section>

          {Array.isArray(scenario.evidence) &&
            scenario.evidence.length > 0 && (
              <section className="shield-evidence-section">
                <div className="shield-panel-heading">
                  <span className="shield-panel-icon" aria-hidden="true">
                    ⌕
                  </span>
                  <h2>INVESTIGATE THE EVIDENCE</h2>
                </div>

                <div className="shield-evidence-list">
                  {scenario.evidence.map((item, index) => (
                    <div
                      className="shield-evidence-item"
                      key={`${scenario.id}-evidence-${index}`}
                    >
                      <span className="shield-evidence-marker">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          <section className="shield-question-section">
            <span className="shield-question-label">
              MAKE YOUR DECISION
            </span>

            <h2 className="shield-question">
              {scenario.question}
            </h2>

            <div
              className="shield-options"
              role="group"
              aria-label="Answer options"
            >
              {Array.isArray(scenario.options) &&
                scenario.options.map((option, index) => (
                  <button
                    className="shield-option"
                    key={option.id}
                    type="button"
                    onClick={() => onAnswer(option.id)}
                    aria-label={`Option ${index + 1}: ${option.text}`}
                  >
                    <span className="shield-option-letter">
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="shield-option-text">
                      {option.text}
                    </span>

                    <span className="shield-option-arrow" aria-hidden="true">
                      →
                    </span>
                  </button>
                ))}
            </div>

            <p className="shield-selection-hint">
              Select the response you believe is safest.
            </p>
          </section>
        </article>

        <p className="shield-quiz-footer-note">
          Pause. Observe. Verify. Then act.
        </p>
      </section>
    </main>
  );
}
