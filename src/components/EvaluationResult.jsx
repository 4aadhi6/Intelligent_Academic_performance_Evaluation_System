import React from "react";

function EvaluationResult({ studentData }) {
  const totalScore =
    studentData.subjectMarks +
    studentData.assignmentMarks +
    studentData.finalExamMarks;

  let performance = "";
  let performanceColor = "";

  // Evaluate performance based on total score
  if (totalScore >= 240) {
    performance = "Good";
    performanceColor = "#4CAF50"; // Green
  } else if (totalScore >= 150) {
    performance = "Needs Improvement";
    performanceColor = "#FF9800"; // Orange
  } else {
    performance = "Bad";
    performanceColor = "#F44336"; // Red
  }

  return (
    <div>
      <h2>Performance Evaluation</h2>
      <p>Total Score: {totalScore}</p>
      <p style={{ color: performanceColor }}>Evaluation: {performance}</p>
    </div>
  );
}

export default EvaluationResult;
