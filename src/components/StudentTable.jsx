import React from "react";

function StudentTable({ students }) {
  return (
    <div>
      <h2>All Students</h2>
      <table
        style={{
          width: "100%",
          marginBottom: "20px",
          textAlign: "left",
          border: "2px solid black", // Define both border width and color
        }}
      >
        <thead style={{ border: "2px solid black" }}>
          <tr style={{ border: "2px solid black" }}>
            <th style={{ border: "2px solid black" }}>Student Name</th>
            <th style={{ border: "2px solid black" }}>Total Marks</th>
            <th style={{ border: "2px solid black" }}>Assignment Marks</th>
            <th style={{ border: "2px solid black" }}>Final Exam Marks</th>
            <th style={{ border: "2px solid black" }}>Performance</th>
          </tr>
        </thead>
        <tbody style={{ border: "2px solid black" }}>
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
            return (
              <tr key={index} style={{ border: "2px solid black" }}>
                <td style={{ border: "2px solid black" }}>
                  {student.studentName}
                </td>
                <td style={{ border: "2px solid black" }}>
                  {student.subjectMarks}
                </td>
                <td style={{ border: "2px solid black" }}>
                  {student.assignmentMarks}
                </td>
                <td style={{ border: "2px solid black" }}>
                  {student.finalExamMarks}
                </td>
                <td style={{ border: "2px solid black" }}>{performance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
