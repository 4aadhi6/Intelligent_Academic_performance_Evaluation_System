import React from "react";
import { Bar } from "react-chartjs-2";

const TotalPerformance = ({ students }) => {
  const totalSubjectMarks = students.reduce(
    (acc, student) => acc + student.subjectMarks,
    0
  );
  const totalAssignmentMarks = students.reduce(
    (acc, student) => acc + student.assignmentMarks,
    0
  );
  const totalFinalExamMarks = students.reduce(
    (acc, student) => acc + student.finalExamMarks,
    0
  );

  const totalScore =
    totalSubjectMarks + totalAssignmentMarks + totalFinalExamMarks;

  const barChartData = {
    labels: [
      "Total Subject Marks",
      "Total Assignment Marks",
      "Total Final Exam Marks",
    ],
    datasets: [
      {
        label: "Total Performance",
        data: [totalSubjectMarks, totalAssignmentMarks, totalFinalExamMarks],
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3"],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Total Performance Evaluation</h2>
      <p>Total Score: {totalScore}</p>
      <Bar data={barChartData} />
    </div>
  );
};

export default TotalPerformance;
