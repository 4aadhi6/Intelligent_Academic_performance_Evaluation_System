import React from "react";
import AttendanceLog from "../../components/AttendanceLog";
const AttendanceLog1 = () => {
  const [attendanceLog, setAttendanceLog] = useState({}); // Attendance by date
  const markAttendance = (rollNo) => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date
    if (!attendanceLog[today]) {
      attendanceLog[today] = {}; // Initialize attendance for today
    }

    if (!attendanceLog[today][rollNo]) {
      attendanceLog[today][rollNo] = true; // Mark attendance
      setAttendanceLog({ ...attendanceLog });
    } else {
      alert("Attendance already marked for this student today!");
    }
  };

  return (
    // Add a new student (only once)

    // Mark attendance for a specific student

    <>
      <div style={{ padding: "20px" }}>
        <h1>Student Attendance System</h1>

        <AttendanceLog students={students1} attendanceLog={attendanceLog} />
      </div>
    </>
  );
};

export default AttendanceLog1;
