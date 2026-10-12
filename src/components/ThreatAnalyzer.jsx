
import { useState } from "react";
import "./ThreatAnalyzer.css";

const RULES = [
  {
    id: "urgency",
    label: "Urgency or pressure",
    description: "The message pressures you to act immediately.",
    points: 20,
    patterns: [
      /\b(urgent|immediately|act now|right now|within \d+ minutes?|expires today|final warning|last chance)\b/i,
      /\b(account will be blocked|account suspended|limited time)\b/i,
    ],
  },
  {
    id: "credentials",
    label: "Sensitive information request",
    description: "The message asks for passwords, OTPs, PINs, or account details.",
    points: 30,
    patterns: [
      /\b(share|send|enter|confirm|verify|provide)\b.{0,55}\b(otp|one.time password|password|pin|cvv|card number|bank details|login credentials)\b/i,
      /\b(otp|one.time password|password|pin|cvv|bank details)\b.{0,55}\b(share|send|enter|confirm|provide)\b/i,
    ],
  },
  {
    id: "links",
    label: "Potentially suspicious link",
    description: "The message includes a link that should be checked independently.",
    points: 20,
    patterns: [
      /\bhttps?:\/\/\S+/i,
      /\b(bit\.ly|tinyurl\.com|t\.co|is\.gd|cutt\.ly)\b/i,
    ],
  },
  {
    id: "money",
    label: "Unexpected payment",
    description: "The message requests money, a fee, or a transfer.",
    points: 25,
    patterns: [
      /\b(pay|payment|transfer|processing fee|registration fee|redelivery fee|send money|claim your prize)\b/i,
    ],
  },
  {
    id: "prize",
    label: "Unexpected reward or offer",
    description: "The message promises a prize, reward, or unusually attractive offer.",
    points: 15,
    patterns: [
      /\b(you have won|congratulations|lucky winner|claim your prize|free gift|guaranteed job|selected for an internship)\b/i,
    ],
  },
  {
    id: "identity",
    label: "Possible impersonation",
    description: "The sender may be pretending to be a trusted person or organisation.",
    points: 20,
    patterns: [
      /\b(pretend|impersonat|on behalf of|i am your (friend|son|daughter|manager|boss))\b/i,
      /\b(lost access to my account|new number|don't call|do not call|keep this secret)\b/i,
    ],
  },
  {
    id: "threat",
    label: "Threat or intimidation",
    description: "The message uses threats or fear to influence your decision.",
    points: 20,
    patterns: [
      /\b(legal action|police case|arrest warrant|penalty|fine will be imposed|account will be permanently blocked)\b/i,
    ],
  },
];

function analyseMessage(message) {
  const matchedRules = RULES.filter((rule) =>
    rule.patterns.some((pattern) => pattern.test(message))
  );

  const rawScore = matchedRules.reduce(
    (sum, rule) => sum + rule.points,
    0
  );

  const score = Math.min(rawScore, 100);

  let level = "Low indicators";
  let description =
    "Few predefined warning patterns were detected. This does not establish that the message is safe.";

  if (score >= 60) {
    level = "High indicators";
    description =
      "Several warning patterns were detected. Avoid acting on the message until you verify it independently.";
  } else if (score >= 30) {
    level = "Elevated indicators";
    description =
      "Some warning patterns were detected. Pause and verify the sender and request through an independent channel.";
  }

  return {
    score,
    level,
    description,
    matchedRules,
  };
}

export default function ThreatAnalyzer({ onBack }) {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function handleAnalyse(event) {
    event.preventDefault();

    const trimmed = message.trim();

    if (trimmed.length < 10) {
      setError("Enter a longer message so SHIELD can check its warning patterns.");
      setResult(null);
      return;
    }

    if (trimmed.length > 5000) {
      setError("Please keep the message under 5,000 characters.");
      setResult(null);
      return;
    }

    setError("");
    setResult(analyseMessage(trimmed));
  }

  function clearMessage() {
    setMessage("");
    setResult(null);
    setError("");
  }

  return (
    <main className="analyzer-page">
      <header className="analyzer-header">
        <button className="analyzer-back" onClick={onBack} type="button">
          ← Back to overview
        </button>
        <span className="analyzer-status">
          <span /> LOCAL ANALYSIS MODE
        </span>
      </header>

      <section className="analyzer-intro">
        <span className="analyzer-kicker">SHIELD INTELLIGENCE / MODULE 01</span>
        <h1>
          Look closer.
          <br />
          <span>Spot the signals.</span>
        </h1>
        <p>
          Inspect a suspicious message for common manipulation patterns.
          Understand the warning signs before deciding what to do next.
        </p>
      </section>

      <div className="analyzer-layout">
        <form className="analyzer-input-panel" onSubmit={handleAnalyse}>
          <div className="analyzer-panel-heading">
            <div>
              <span className="analyzer-step">01 / INPUT</span>
              <h2>Inspect a message</h2>
            </div>
            <span className="analyzer-lock">LOCAL ONLY</span>
          </div>

          <label htmlFor="threat-message">
            Suspicious message
          </label>

          <textarea
            id="threat-message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              setError("");
            }}
            maxLength={5000}
            placeholder="Paste an example message here…

Example: Your account will be suspended today. Click this link to verify your details."
          />

          <div className="analyzer-input-footer">
            <span>{message.length} / 5000</span>
            <button type="button" onClick={clearMessage}>
              Clear message
            </button>
          </div>

          {error && (
            <p className="analyzer-error" role="alert">
              {error}
            </p>
          )}

          <button className="analyzer-submit" type="submit">
            Analyse warning signs <span>↗</span>
          </button>

          <p className="analyzer-privacy">
            Your text is analysed in this browser using predefined rules.
            Avoid entering real passwords, OTPs, account numbers, or private
            personal information.
          </p>
        </form>

        <section className="analyzer-result-panel" aria-live="polite">
          {!result ? (
            <div className="analyzer-empty">
              <div className="analyzer-radar">
                <span>◎</span>
              </div>
              <span className="analyzer-step">02 / ANALYSIS</span>
              <h2>Awaiting a message</h2>
              <p>
                Your findings will appear here after analysis, including
                detected patterns and practical safety recommendations.
              </p>
              <div className="analyzer-empty-line">
                <span />
                READY FOR INSPECTION
              </div>
            </div>
          ) : (
            <div className="analyzer-findings">
              <span className="analyzer-step">02 / FINDINGS</span>

              <div className="analyzer-score-row">
                <div>
                  <h2>Warning signal score</h2>
                  <p>Based on matched rules, not a verified probability.</p>
                </div>
                <div className="analyzer-score">
                  {result.score}
                  <small>/100</small>
                </div>
              </div>

              <div className="analyzer-meter">
                <span style={{ width: `${result.score}%` }} />
              </div>

              <div className="analyzer-risk-label">
                <span className={result.score >= 60 ? "high" : result.score >= 30 ? "medium" : "low"}>
                  {result.level}
                </span>
              </div>

              <p className="analyzer-summary">{result.description}</p>

              <h3>Detected patterns</h3>

              {result.matchedRules.length === 0 ? (
                <div className="analyzer-no-findings">
                  <span>✓</span>
                  No predefined warning patterns matched. A message can
                  still be deceptive even when these rules find nothing.
                </div>
              ) : (
                <div className="analyzer-matches">
                  {result.matchedRules.map((rule) => (
                    <article className="analyzer-match" key={rule.id}>
                      <span className="match-symbol">!</span>
                      <div>
                        <strong>{rule.label}</strong>
                        <p>{rule.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              <div className="analyzer-next-steps">
                <h3>Recommended next steps</h3>
                <ul>
                  <li>Do not click links or open attachments until verified.</li>
                  <li>Contact the organisation or person through a known, independent channel.</li>
                  <li>Never share passwords, OTPs, PINs, or recovery codes.</li>
                  <li>If money is requested, verify the request before paying.</li>
                </ul>
              </div>

              <button
                className="analyzer-reset"
                onClick={clearMessage}
                type="button"
              >
                Analyse another message ↗
              </button>
            </div>
          )}
        </section>
      </div>

      <footer className="analyzer-disclaimer">
        SHIELD provides educational indicators, not a definitive scam
        detection service. Scores are heuristic and may produce false
        positives or miss deceptive messages.
      </footer>
    </main>
  );
}
