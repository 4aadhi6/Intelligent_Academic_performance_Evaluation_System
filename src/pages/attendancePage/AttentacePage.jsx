import React, { useState } from "react";
import AddStudent from "../../components/AddStudent";
import StudentList from "../../components/StudentList";
import AttendanceLog from "../../components/AttendanceLog";
import img1 from "../../assets/img1.png";

const AttentacePage = () => {
  const [students, setStudents] = useState([]); // List of students
  const [attendanceLog, setAttendanceLog] = useState({}); // Attendance by date
  // Add a new student (only once)
  const addStudent = (rollNo, name, section) => {
    if (students.some((student) => student.rollNo === rollNo)) {
      alert("Student with this Roll No already exists!");
      return;
    }
    const newStudent = { rollNo, name, section };
    setStudents([...students, newStudent]);
  };

  // Mark attendance for a specific student
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
    <>
      <div style={{ padding: "20px" }}>
        <img src={img1} style={{ display: "block", margin: "0 auto" }} alt="" />
        <h1>Student Attendance System</h1>

        <AddStudent addStudent={addStudent} />
        <StudentList students={students} markAttendance={markAttendance} />
        <AttendanceLog students={students} attendanceLog={attendanceLog} />
      </div>
    </>
  );
};

export default AttentacePage;
