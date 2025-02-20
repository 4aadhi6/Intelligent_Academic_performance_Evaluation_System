import React, { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [studentName, setStudentName] = useState("");
  const [subjectMarks, setSubjectMarks] = useState("");
  const [assignmentMarks, setAssignmentMarks] = useState("");
  const [finalExamMarks, setFinalExamMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentName && subjectMarks && assignmentMarks && finalExamMarks) {
      addStudent({
        studentName,
        subjectMarks: parseFloat(subjectMarks),
        assignmentMarks: parseFloat(assignmentMarks),
        finalExamMarks: parseFloat(finalExamMarks),
      });
      // Clear input fields
      setStudentName("");
      setSubjectMarks("");
      setAssignmentMarks("");
      setFinalExamMarks("");
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Student Performance Data</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Total Marks (All Subjects)"
        value={subjectMarks}
        onChange={(e) => setSubjectMarks(e.target.value)}
      />
      <input
        type="number"
        placeholder="Assignment Marks"
        value={assignmentMarks}
        onChange={(e) => setAssignmentMarks(e.target.value)}
      />
      <input
        type="number"
        placeholder="Final Exam Marks"
        value={finalExamMarks}
        onChange={(e) => setFinalExamMarks(e.target.value)}
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;
