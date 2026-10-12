
export default function ResultsDashboard({
  score,
  total,
  percentage,
  answers = {},
  scenarios = [],
  onRestart,
  correctCount,
  categoryScores,
  missedRedFlags,
  recommendations,
}) {
  const safeAnswers = answers && typeof answers === "object" ? answers : {};
  const safeScenarios = Array.isArray(scenarios) ? scenarios : [];

  const styles = {
    page: {
      width: "100%",
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "clamp(16px, 4vw, 32px)",
      boxSizing: "border-box",
      color: "#172033",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      marginBottom: "24px",
    },
    eyebrow: {
      color: "#0f766e",
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
    heading: {
      fontSize: "clamp(26px, 4vw, 36px)",
      margin: "8px 0",
    },
    muted: {
      color: "#596579",
      lineHeight: 1.6,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
      gap: "16px",
      marginBottom: "24px",
    },
    card: {
      background: "#ffffff",
      border: "1px solid #dbe3ed",
      borderRadius: "14px",
      padding: "22px",
      minWidth: 0,
      boxSizing: "border-box",
    },
    section: {
      background: "#ffffff",
      border: "1px solid #dbe3ed",
      borderRadius: "14px",
      padding: "22px",
      marginBottom: "18px",
      overflowWrap: "anywhere",
    },
    sectionTitle: {
      fontSize: "20px",
      margin: "0 0 16px",
    },
    metric: {
      fontSize: "clamp(28px, 4vw, 36px)",
      fontWeight: "700",
      margin: "12px 0",
    },
    progressTrack: {
      width: "100%",
      height: "10px",
      background: "#e8edf4",
      borderRadius: "20px",
      overflow: "hidden",
      marginTop: "12px",
    },
    list: {
      paddingLeft: "22px",
      margin: 0,
      lineHeight: 1.8,
    },
    button: {
      background: "#0f766e",
      color: "#ffffff",
      border: "none",
      borderRadius: "10px",
      padding: "14px 22px",
      fontSize: "16px",
      fontWeight: "700",
      cursor: "pointer",
      minHeight: "48px",
    },
    note: {
      background: "#f1f5f9",
      borderRadius: "10px",
      padding: "14px",
      color: "#475569",
      lineHeight: 1.6,
    },
  };

  function displayValue(value) {
    if (value === null || value === undefined || value === "") {
      return "Not available";
    }

    if (typeof value === "string" || typeof value === "number") {
      return String(value);
    }

    if (typeof value === "object") {
      return String(
        value.title ??
          value.name ??
          value.label ??
          value.message ??
          value.text ??
          value.description ??
          "Details unavailable"
      );
    }

    return "Details unavailable";
  }

  function getCategory(scenario) {
    return scenario?.category ?? scenario?.categoryName ?? scenario?.topic ?? null;
  }

  function getCorrectOption(scenario) {
    return (
      scenario?.correctOptionId ??
      scenario?.correctAnswerId ??
      scenario?.correctOption?.id ??
      null
    );
  }

  // Only derive category results when the scenario explicitly
  // identifies its correct option. Never guess the scoring rules.
  const derivedCategories = {};

  safeScenarios.forEach((scenario) => {
    const category = getCategory(scenario);
    const correctOption = getCorrectOption(scenario);

    if (!category || correctOption === null || correctOption === undefined) {
      return;
    }

    const key = String(category);

    if (!derivedCategories[key]) {
      derivedCategories[key] = { score: 0, total: 0 };
    }

    derivedCategories[key].total += 1;

    if (safeAnswers[scenario.id] === correctOption) {
      derivedCategories[key].score += 1;
    }
  });

  const hasCategoryScores =
    Array.isArray(categoryScores)
      ? categoryScores.length > 0
      : Boolean(
          categoryScores &&
            typeof categoryScores === "object" &&
            Object.keys(categoryScores).length > 0
        );

  const categories = hasCategoryScores
    ? Array.isArray(categoryScores)
      ? categoryScores.map((item, index) => ({
          name: displayValue(
            item.category ?? item.name ?? item.label ?? `Category ${index + 1}`
          ),
          score: item.score ?? item.correctCount,
          total: item.total ?? item.questionCount,
          percentage: item.percentage,
        }))
      : Object.entries(categoryScores).map(([name, result]) => ({
          name,
          score:
            typeof result === "number"
              ? undefined
              : result?.score ?? result?.correctCount,
          total: typeof result === "number" ? undefined : result?.total,
          percentage:
            typeof result === "number"
              ? result
              : result?.percentage,
        }))
    : Object.entries(derivedCategories).map(([name, result]) => ({
        name,
        score: result.score,
        total: result.total,
      }));

  const flags = Array.isArray(missedRedFlags) ? missedRedFlags : [];
  const tips = Array.isArray(recommendations) ? recommendations : [];

  const hasCorrectCount =
    correctCount !== null &&
    correctCount !== undefined &&
    Number.isFinite(Number(correctCount));

  const percentageText =
    percentage === null || percentage === undefined || percentage === ""
      ? "Not available"
      : `${percentage}%`;

  return (
    <main style={styles.page} aria-labelledby="results-title">
      <header style={styles.header}>
        <div style={styles.eyebrow}>SHIELD 2.0 · Training report</div>
        <h1 id="results-title" style={styles.heading}>
          Your training results
        </h1>
        <p style={styles.muted}>
          Review your performance, identify missed warning signs, and learn
          how to recognize suspicious online activity.
        </p>
      </header>

      <section aria-label="Overall results" style={styles.grid}>
        <article style={styles.card}>
          <div style={styles.muted}>Your score</div>
          <div style={styles.metric}>
            {score ?? "—"} / {total ?? "—"}
          </div>
          <p style={styles.muted}>Points earned in this training session.</p>
        </article>

        <article style={styles.card}>
          <div style={styles.muted}>Overall percentage</div>
          <div style={styles.metric}>{percentageText}</div>
          <div
            style={styles.progressTrack}
            role="progressbar"
            aria-label="Supplied training percentage"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={
              Number.isFinite(Number(percentage)) &&
              percentage !== "" &&
              percentage !== null &&
              percentage !== undefined
                ? Math.min(100, Math.max(0, Number(percentage)))
                : undefined
            }
          >
            <div
              style={{
                height: "100%",
                width:
                  Number.isFinite(Number(percentage)) &&
                  percentage !== "" &&
                  percentage !== null &&
                  percentage !== undefined
                    ? `${Math.min(100, Math.max(0, Number(percentage)))}%`
                    : "0%",
                background: "#0f766e",
                borderRadius: "20px",
              }}
            />
          </div>
          <p style={styles.muted}>
            This is your training score, not a probability of being defrauded.
          </p>
        </article>

        <article style={styles.card}>
          <div style={styles.muted}>Correct answers</div>
          <div style={styles.metric}>
            {hasCorrectCount ? correctCount : "—"}
          </div>
          <p style={styles.muted}>
            {hasCorrectCount
              ? "Correct responses recorded by the scoring engine."
              : "Correct-answer details will appear when the scoring result is connected."}
          </p>
        </article>
      </section>

      <section style={styles.section} aria-labelledby="category-title">
        <h2 id="category-title" style={styles.sectionTitle}>
          Category performance
        </h2>

        {categories.length > 0 ? (
          <div style={{ display: "grid", gap: "18px" }}>
            {categories.map((category, index) => {
              const hasCounts =
                Number.isFinite(Number(category.score)) &&
                Number.isFinite(Number(category.total)) &&
                category.score !== null &&
                category.total !== null &&
                category.total > 0;

              const categoryPercentage =
                category.percentage !== null &&
                category.percentage !== undefined &&
                category.percentage !== ""
                  ? Number(category.percentage)
                  : hasCounts
                    ? (Number(category.score) / Number(category.total)) * 100
                    : null;

              const validPercentage =
                categoryPercentage !== null &&
                Number.isFinite(categoryPercentage);

              return (
                <div key={`${category.name}-${index}`}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <strong>{category.name}</strong>
                    <span style={styles.muted}>
                      {hasCounts
                        ? `${category.score} / ${category.total}`
                        : validPercentage
                          ? `${categoryPercentage}%`
                          : "Score pending"}
                    </span>
                  </div>
                  <div style={styles.progressTrack}>
                    <div
                      style={{
                        height: "100%",
                        width: validPercentage
                          ? `${Math.min(100, Math.max(0, categoryPercentage))}%`
                          : "0%",
                        background: "#2563eb",
                        borderRadius: "20px",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p style={styles.muted}>
            Detailed category scores will appear when the scoring engine
            supplies categoryScores or scenarios include explicit category
            and correct-option information.
          </p>
        )}
      </section>

      <section style={styles.section} aria-labelledby="flags-title">
        <h2 id="flags-title" style={styles.sectionTitle}>
          Missed warning signs
        </h2>

        {flags.length > 0 ? (
          <ul style={styles.list}>
            {flags.map((flag, index) => (
              <li key={index}>{displayValue(flag)}</li>
            ))}
          </ul>
        ) : (
          <p style={styles.muted}>
            {missedRedFlags === undefined
              ? "Detailed warning-sign feedback will appear when the scoring engine supplies missedRedFlags."
              : "No missed warning signs were supplied for this session."}
          </p>
        )}
      </section>

      <section style={styles.section} aria-labelledby="recommendations-title">
        <h2 id="recommendations-title" style={styles.sectionTitle}>
          Recommended next steps
        </h2>

        {tips.length > 0 ? (
          <ol style={styles.list}>
            {tips.map((tip, index) => (
              <li key={index}>{displayValue(tip)}</li>
            ))}
          </ol>
        ) : (
          <>
            <p style={styles.muted}>
              Use these practical habits to strengthen your cybersecurity
              awareness.
            </p>
            <ul style={styles.list}>
              <li>
                Verify the sender and the full website address before clicking
                links.
              </li>
              <li>
                Never share passwords or one-time passwords in response to
                unexpected requests.
              </li>
              <li>
                Treat urgent messages, unexpected prizes, and unusual payment
                requests with caution.
              </li>
              <li>
                Confirm suspicious requests through a trusted, independent
                contact method.
              </li>
            </ul>
          </>
        )}
      </section>

      <div style={styles.note} role="note">
        Remember: pause, verify, and report suspicious activity. A training
        score measures your answers in this exercise; it does not guarantee
        protection against real-world threats.
      </div>

      <div style={{ marginTop: "24px" }}>
        <button
          type="button"
          style={styles.button}
          onClick={() => {
            if (typeof onRestart === "function") {
              onRestart();
            }
          }}
        >
          Restart Training
        </button>
      </div>
    </main>
  );
}
