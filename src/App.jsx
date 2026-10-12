
import { useEffect, useState } from "react";
import Home from "./components/Home";
import ScenarioCard from "./components/ScenarioCard";
import ResultsDashboard from "./components/ResultsDashboard";
import ThreatAnalyzer from "./components/ThreatAnalyzer";
import LearningLibrary from "./components/LearningLibrary";
import MyProgress from "./components/MyProgress";
import { scenarios } from "./data/scenarios";
import { calculateScore } from "./logic/scoring";
import "./App.css";

const VALID_SCREENS = [
  "home",
  "quiz",
  "analyzer",
  "results",
  "library",
  "progress",
];

export default function App() {
  const [screen, setScreen] = useState("home");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    if (!window.history.state?.shield) {
      window.history.replaceState(
        { shield: true, screen: "home" },
        "",
        window.location.href
      );
    }

    function handlePopState(event) {
      const previousScreen = event.state?.screen;

      if (
        event.state?.shield &&
        VALID_SCREENS.includes(previousScreen)
      ) {
        setScreen(previousScreen);
      } else {
        setScreen("home");
      }

      setError("");
    }

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  function navigateTo(nextScreen) {
    if (!VALID_SCREENS.includes(nextScreen)) return;

    window.history.pushState(
      { shield: true, screen: nextScreen },
      "",
      window.location.href
    );

    setScreen(nextScreen);
    setError("");
  }

  function startTraining() {
    if (scenarios.length === 0) {
      setError("Training scenarios are not available yet.");
      return;
    }

    setAnswers({});
    setCurrentIndex(0);
    navigateTo("quiz");
  }

  function handleAnswer(optionId) {
    const scenario = scenarios[currentIndex];

    if (!scenario || !optionId) return;

    const updatedAnswers = {
      ...answers,
      [scenario.id]: optionId,
    };

    setAnswers(updatedAnswers);

    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex((index) => index + 1);
    } else {
      navigateTo("results");
    }
  }

  function restartTraining() {
    setAnswers({});
    setCurrentIndex(0);
    navigateTo("home");
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
        <Home
          onStart={startTraining}
          onOpenAnalyzer={() => navigateTo("analyzer")}
        />
      )}

      {screen === "analyzer" && (
        <ThreatAnalyzer
          onBack={() => navigateTo("home")}
        />
      )}

      {screen === "quiz" && scenarios[currentIndex] && (
        <ScenarioCard
          scenario={scenarios[currentIndex]}
          questionNumber={currentIndex + 1}
          totalQuestions={scenarios.length}
          onAnswer={handleAnswer}
          onNavigate={navigateTo}
          onOpenLibrary={() => navigateTo("library")}
          onOpenProgress={() => navigateTo("progress")}
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

      {screen === "library" && (
        <LearningLibrary
          onBack={() => navigateTo("home")}
        />
      )}

      {screen === "progress" && (
        <MyProgress
          answers={answers}
          scenarios={scenarios}
          onBack={() => navigateTo("home")}
        />
      )}
    </div>
  );
}
