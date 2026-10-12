

import { useState } from "react";

import "./ScenarioCard.css";



export default function ScenarioCard({

  scenario,

  questionNumber,

  totalQuestions,

  onAnswer,

  onNavigate,

}) {

  const [selectedOption, setSelectedOption] = useState(null);



  if (!scenario) {

    return <div className="scenario-loading">Loading scenario...</div>;

  }



  const progress =

    totalQuestions > 0 ? (questionNumber / totalQuestions) * 100 : 0;



  const options = scenario.options || [];



  const evidence = scenario.evidence || [];



  function handleSubmit() {

    if (!selectedOption) return;

    onAnswer(selectedOption);

    setSelectedOption(null);

  }



  return (

    <div className="scenario-app">

      <aside className="scenario-sidebar">

        <div className="scenario-brand">

          <div className="scenario-brand-icon">⬡</div>

          <div>

            <strong>SHIELD<span>.</span></strong>

            <small>CYBER DEFENCE LAB</small>

          </div>

        </div>



        <div className="sidebar-label">WORKSPACE</div>



        <div
          className="sidebar-item"
          role="button"
          tabIndex={0}
          onClick={() => onNavigate?.("home")}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onNavigate?.("home");
            }
          }}
        >
          <span>◫</span> Overview
        </div>

        <div className="sidebar-item sidebar-active" aria-current="page">
          <span>⌘</span> Scenario Lab
          <span className="sidebar-indicator" />
        </div>

        <div
          className="sidebar-item"
          role="button"
          tabIndex={0}
          onClick={() => onNavigate?.("analyzer")}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onNavigate?.("analyzer");
            }
          }}
        >
          <span>◎</span> Threat Analyzer
        </div>

        <div
          className="sidebar-item"
          role="button"
          tabIndex={0}
          onClick={() => onNavigate?.("library")}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onNavigate?.("library");
            }
          }}
        >
          <span>▤</span> Learning Library
        </div>

        <div
          className="sidebar-item"
          role="button"
          tabIndex={0}
          onClick={() => onNavigate?.("progress")}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onNavigate?.("progress");
            }
          }}
        >
          <span>◷</span> My Progress
        </div>

        <div className="sidebar-bottom">

          <div className="sidebar-shield">✓</div>

          <strong>Stay cyber-aware.</strong>

          <p>Think critically. Verify independently. Stay protected.</p>

          <div className="sidebar-version">SHIELD TRAINING SYSTEM · v2.0</div>

        </div>

      </aside>



      <main className="scenario-main">

        <header className="scenario-topbar">

          <div>

            <div className="breadcrumb">

              Workspace <span>/</span> Scenario Lab <span>/</span>{" "}

              <strong>Investigation</strong>

            </div>

            <div className="topbar-subtitle">

              CYBERSECURITY AWARENESS TRAINING

            </div>

          </div>



          <div className="simulation-status">

            <span className="live-dot" />

            SIMULATION ACTIVE

          </div>

        </header>



        <section className="scenario-content">

          <div className="scenario-heading-row">

            <div>

              <div className="scenario-eyebrow">

                <span className="eyebrow-line" />

                FIELD INVESTIGATION

              </div>



              <h1>{scenario.title}</h1>



              <p className="scenario-subtitle">

                Investigate the message. Identify the warning signs.

                Choose the safest response.

              </p>

            </div>



            <div className="scenario-number">

              <span>SCENARIO</span>

              <strong>

                {String(questionNumber).padStart(2, "0")}

                <span> / {String(totalQuestions).padStart(2, "0")}</span>

              </strong>

            </div>

          </div>



          <div className="progress-panel">

            <div className="progress-info">

              <span>TRAINING PROGRESS</span>

              <strong>{Math.round(progress)}%</strong>

            </div>



            <div className="progress-track">

              <div

                className="progress-fill"

                style={{ width: `${progress}%` }}

              />

            </div>



            <div className="progress-footer">

              <span>

                Mission {questionNumber} of {totalQuestions}

              </span>

              <span>Every decision builds awareness.</span>

            </div>

          </div>



          <div className="scenario-layout">

            <div className="scenario-left-column">

              <section className="investigation-card message-card">

                <div className="card-heading">

                  <div className="card-heading-icon">✉</div>

                  <div>

                    <span className="card-kicker">01 / INCOMING MESSAGE</span>

                    <h2>The situation</h2>

                  </div>

                  <span className="unverified-badge">

                    <span /> UNVERIFIED

                  </span>

                </div>



                <div className="message-preview">

                  <div className="message-toolbar">

                    <div className="message-avatar">?</div>

                    <div className="message-sender">

                      <strong>Unknown sender</strong>

                      <span>Identity not independently verified</span>

                    </div>

                    <span className="message-menu">•••</span>

                  </div>



                  <div className="message-body">

                    {scenario.message}

                  </div>



                  <div className="message-warning">

                    <span>!</span>

                    Treat unexpected requests with caution.

                  </div>

                </div>



                <div className="message-meta">

                  <span>◷ SIMULATED MESSAGE</span>

                  <span>NO EXTERNAL LINKS OPENED</span>

                </div>

              </section>



              <section className="investigation-card evidence-card">

                <div className="card-heading">

                  <div className="card-heading-icon evidence-icon">⌕</div>

                  <div>

                    <span className="card-kicker">02 / ANALYSIS</span>

                    <h2>Investigate the evidence</h2>

                  </div>

                  <span className="evidence-count">

                    {String(evidence.length || 0).padStart(2, "0")} SIGNALS

                  </span>

                </div>



                {evidence.length > 0 ? (

                  <div className="evidence-list">

                    {evidence.map((item, index) => (

                      <div className="evidence-item" key={index}>

                        <div className="evidence-number">

                          {String(index + 1).padStart(2, "0")}

                        </div>

                        <div className="evidence-marker" />

                        <p>{item}</p>

                      </div>

                    ))}

                  </div>

                ) : (

                  <p className="empty-evidence">

                    Review the message carefully for suspicious patterns.

                  </p>

                )}



                <div className="analyst-tip">

                  <span>✦</span>

                  <p>

                    <strong>Analyst tip</strong>

                    <br />

                    Examine the sender, the request, and any pressure to

                    act quickly before making a decision.

                  </p>

                </div>

              </section>

            </div>



            <aside className="decision-column">

              <section className="decision-card">

                <div className="decision-top">

                  <span className="card-kicker">03 / YOUR DECISION</span>

                  <div className="decision-icon">⌁</div>

                </div>



                <h2>What's the safest action?</h2>



                <p className="decision-description">

                  Select the response that best protects you and your

                  information.

                </p>



                <div className="answer-list">

                  {options.map((option, index) => {

                    const isSelected = selectedOption === option.id;



                    return (

                      <button

                        className={`answer-option ${

                          isSelected ? "answer-selected" : ""

                        }`}

                        key={option.id}

                        type="button"

                        onClick={() => setSelectedOption(option.id)}

                        aria-pressed={isSelected}

                      >

                        <span className="answer-letter">

                          {String.fromCharCode(65 + index)}

                        </span>



                        <span className="answer-text">

                          {option.text}

                        </span>



                        <span className="answer-radio">

                          {isSelected ? "✓" : ""}

                        </span>

                      </button>

                    );

                  })}

                </div>



                <button

                  className="submit-decision"

                  type="button"

                  disabled={!selectedOption}

                  onClick={handleSubmit}

                >

                  Confirm decision

                  <span>→</span>

                </button>



                <p className="decision-footnote">

                  Select your answer to continue the simulation.

                </p>

              </section>



              <section className="safety-reminder">

                <div className="reminder-icon">◇</div>

                <div>

                  <strong>Remember the SHIELD principle</strong>

                  <p>

                    Pause. Observe. Verify. Then act.

                  </p>

                </div>

              </section>



              <div className="privacy-note">

                <span>▣</span>

                TRAINING ENVIRONMENT

                <span className="privacy-separator">•</span>

                SIMULATED CONTENT

              </div>

            </aside>

          </div>



          <footer className="scenario-footer">

            <span>SHIELD <span className="footer-dot">/</span> CYBER AWARENESS</span>

            <span>Built to help you make safer digital decisions.</span>

          </footer>

        </section>

      </main>

    </div>

  );

}
