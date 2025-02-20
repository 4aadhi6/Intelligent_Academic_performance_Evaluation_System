import React from "react";
import { Bar, Pie, Doughnut, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale, // For Radar chart
  BarElement,
  PointElement, // For Radar and Line charts
  LineElement, // Register LineElement
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register all necessary components, including LineElement
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale, // For Radar chart
  BarElement,
  PointElement, // For Radar and Line charts
  LineElement, // Register LineElement
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function PerformanceCharts({ students }) {
  if (students.length === 0) {
    return <p>No student data available</p>;
  }

  return (
    <div>
      {students.map((student, index) => {
        const totalScore =
          student.subjectMarks +
          student.assignmentMarks +
          student.finalExamMarks;
        const performance =
          totalScore >= 240
            ? "Good"
            : totalScore >= 150
            ? "Needs Improvement"
            : "Bad";

        // Bar chart data
        const barChartData = {
          labels: ["Subject Marks", "Assignment Marks", "Final Exam Marks"],
          datasets: [
            {
              label: `${student.studentName}'s Performance`,
              data: [
                student.subjectMarks,
                student.assignmentMarks,
                student.finalExamMarks,
              ],
              backgroundColor: ["#4CAF50", "#FF9800", "#2196F3"],
              borderColor: "#fff",
              borderWidth: 1,
            },
          ],
        };

        // Pie chart data
        const pieChartData = {
          labels: ["Good", "Needs Improvement", "Bad"],
          datasets: [
            {
              data: [
                performance === "Good" ? 1 : 0,
                performance === "Needs Improvement" ? 1 : 0,
                performance === "Bad" ? 1 : 0,
              ],
              backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
            },
          ],
        };

        // Doughnut chart data
        const doughnutChartData = {
          labels: ["Good", "Needs Improvement", "Bad"],
          datasets: [
            {
              data: [
                performance === "Good" ? 1 : 0,
                performance === "Needs Improvement" ? 1 : 0,
                performance === "Bad" ? 1 : 0,
              ],
              backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
              borderWidth: 1,
            },
          ],
        };

        // Radar chart data
        const radarChartData = {
          labels: ["Subject Marks", "Assignment Marks", "Final Exam Marks"],
          datasets: [
            {
              label: `${student.studentName}'s Performance`,
              data: [
                student.subjectMarks,
                student.assignmentMarks,
                student.finalExamMarks,
              ],
              backgroundColor: "rgba(76, 175, 80, 0.2)", // Light green for the fill
              borderColor: "#4CAF50", // Green for the border
              borderWidth: 1,
            },
          ],
        };

        return (
          <div key={index} style={{ marginBottom: "30px" }}>
            <h3>{student.studentName}'s Performance</h3>
            {/* Grid Container for 4 Charts */}
            <div className="chart-grid">
              {/* Bar Chart */}
              <div className="chart-item">
                <Bar data={barChartData} />
              </div>
              {/* Pie Chart */}
              <div className="chart-item">
                <Pie data={pieChartData} />
              </div>
              {/* Doughnut Chart */}
              <div className="chart-item">
                <Doughnut data={doughnutChartData} />
              </div>
              {/* Radar Chart */}
              <div className="chart-item">
                <Radar data={radarChartData} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PerformanceCharts;
