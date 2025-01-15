import React from "react";

function AttendanceLog({ students, attendanceLog }) {
  return (
    <div>
      <h2>Attendance Log</h2>
      {Object.keys(attendanceLog).length === 0 ? (
        <p>No attendance records yet.</p>
      ) : (
        Object.entries(attendanceLog).map(([date, log]) => (
          <div key={date}>
            <h3>Date: {date}</h3>
            <table border="1" style={{ width: "100%", textAlign: "left" }}>
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Section</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.rollNo}>
                    <td>{student.rollNo}</td>
                    <td>{student.name}</td>
                    <td>{student.section}</td>
                    <td>
                      {log[student.rollNo] ? "Present" : "Absent"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}

export default AttendanceLog;
