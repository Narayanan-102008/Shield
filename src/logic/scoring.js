
export function calculateScore(scenarios, answers) {
  let correctCount = 0;

  const categoryScores = {};
  const missedRedFlags = [];
  const recommendations = [];

  // Handle missing or invalid inputs safely
  if (!Array.isArray(scenarios) || scenarios.length === 0) {
    return {
      score: 0,
      total: 0,
      percentage: 0,
      correctCount: 0,
      categoryScores: {},
      missedRedFlags: [],
      recommendations: [
        "Complete the training scenarios to receive personalised feedback.",
      ],
    };
  }

  const userAnswers = answers || {};

  // Evaluate every scenario
  scenarios.forEach((scenario) => {
    const category = scenario.category || "General";

    if (!categoryScores[category]) {
      categoryScores[category] = {
        correct: 0,
        total: 0,
        percentage: 0,
      };
    }

    categoryScores[category].total += 1;

    const selectedOptionId = userAnswers[scenario.id];
    const isCorrect =
      selectedOptionId === scenario.correctOptionId;

    if (isCorrect) {
      correctCount += 1;
      categoryScores[category].correct += 1;
    } else {
      // Record warning signs missed in incorrect answers
      if (Array.isArray(scenario.redFlags)) {
        scenario.redFlags.forEach((flag) => {
          if (!missedRedFlags.includes(flag)) {
            missedRedFlags.push(flag);
          }
        });
      }
    }
  });

  const total = scenarios.length;

  const percentage = Math.round(
    (correctCount / total) * 100
  );

  // Calculate performance for each category
  Object.values(categoryScores).forEach((category) => {
    category.percentage = Math.round(
      (category.correct / category.total) * 100
    );
  });

  // Generate personalised recommendations
  if (percentage < 50) {
    recommendations.push(
      "Review common scam warning signs, including urgency, suspicious links, and requests for sensitive information."
    );
  } else if (percentage < 80) {
    recommendations.push(
      "Good progress! Practise verifying senders and checking unexpected requests before taking action."
    );
  } else {
    recommendations.push(
      "Excellent work! Continue verifying messages through official channels and protecting your personal information."
    );
  }

  // Recommend practice for weaker categories
  Object.entries(categoryScores).forEach(
    ([category, result]) => {
      if (result.percentage < 60) {
        recommendations.push(
          `Practise more scenarios about ${category} to improve your awareness.`
        );
      }
    }
  );

  // Include an additional recommendation when warning signs were missed
  if (missedRedFlags.length > 0) {
    recommendations.push(
      "Pay extra attention to the warning signs highlighted in your results before responding to suspicious messages."
    );
  }

  return {
    score: correctCount,
    total,
    percentage,
    correctCount,
    categoryScores,
    missedRedFlags,
    recommendations,
  };
}
