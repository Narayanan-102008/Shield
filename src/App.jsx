
import { useState } from "react";
import Home from "./components/Home";
import ScenarioCard from "./components/ScenarioCard";
import ResultsDashboard from "./components/ResultsDashboard";
import { scenarios } from "./data/scenarios";
import { calculateScore } from "./logic/scoring";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState("");

  const totalQuestions = scenarios.length;
  const currentScenario = scenarios[currentIndex];

  function startTraining() {
    if (totalQuestions === 0) {
      setError("Training scenarios are not available yet.");
      return;
    }

    setAnswers({});
    setCurrentIndex(0);
    setError("");
    setScreen("quiz");
  }

  function handleAnswer(optionId) {
    if (!currentScenario || !optionId) return;

    const updatedAnswers = {
      ...answers,
      [currentScenario.id]: optionId,
    };

    setAnswers(updatedAnswers);

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((index) => index + 1);
    } else {
      setScreen("results");
    }
  }

  function restartTraining() {
    setAnswers({});
    setCurrentIndex(0);
    setError("");
    setScreen("home");
  }

  const results =
    screen === "results"
      ? calculateScore(scenarios, answers)
      : null;

  return (
    <div className="app">
      {error && (
        <div className="app-error" role="alert">
          {error}
        </div>
      )}

      {screen === "home" && (
        <Home onStart={startTraining} />
      )}

      {screen === "quiz" && currentScenario && (
        <ScenarioCard
          scenario={currentScenario}
          questionNumber={currentIndex + 1}
          totalQuestions={totalQuestions}
          onAnswer={handleAnswer}
        />
      )}

      {screen === "results" && results && (
        <ResultsDashboard
          score={results.score}
          total={results.total}
          percentage={results.percentage}
          answers={answers}
          scenarios={scenarios}
          onRestart={restartTraining}
        />
      )}
    </div>
  );
}
