import React from "react";

function StudentList({ students, markAttendance }) {
  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <table
          border="1"
          style={{
            width: "100%",
            textAlign: "left",
            border: "2px solid black",
          }}
        >
          <thead style={{ border: "2px solid black" }}>
            <tr style={{ border: "2px solid black" }}>
              <th style={{ border: "2px solid black" }}>Roll No</th>
              <th style={{ border: "2px solid black" }}>Name</th>
              <th style={{ border: "2px solid black" }}>Section</th>
              <th style={{ border: "2px solid black" }}>Actions</th>
            </tr>
          </thead>
          <tbody style={{ border: "2px solid black" }}>
            {students.map((student) => (
              <tr key={student.rollNo} style={{ border: "2px solid black" }}>
                <td style={{ border: "2px solid black" }}>{student.rollNo}</td>
                <td style={{ border: "2px solid black" }}>{student.name}</td>
                <td style={{ border: "2px solid black" }}>{student.section}</td>
                <td style={{ border: "2px solid black" }}>
                  <button onClick={() => markAttendance(student.rollNo)}>
                    Mark Attendance
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;
