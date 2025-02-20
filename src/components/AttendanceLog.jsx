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
                  <th style={{ border: "2px solid black" }}>Status</th>
                </tr>
              </thead>
              <tbody style={{ border: "2px solid black" }}>
                {students.map((student) => (
                  <tr
                    key={student.rollNo}
                    style={{ border: "2px solid black" }}
                  >
                    <td style={{ border: "2px solid black" }}>
                      {student.rollNo}
                    </td>
                    <td style={{ border: "2px solid black" }}>
                      {student.name}
                    </td>
                    <td style={{ border: "2px solid black" }}>
                      {student.section}
                    </td>
                    <td style={{ border: "2px solid black" }}>
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
