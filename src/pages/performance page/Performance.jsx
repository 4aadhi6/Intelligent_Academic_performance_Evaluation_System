import React, { useState } from "react";
import AddStudentForm from "../../components/AddStudentFrm";
import StudentTable from "../../components/StudentTable";
import PerformanceCharts from "../../components/PerformanceChart";
import img3 from "../../assets/img3.png";

const Performance = ({ addStudent, students }) => {
  return (
    <div className="container">
      <img src={img3} style={{ display: "block", margin: "0 auto" }} alt="" />
      <h1>Student Academic Performance Evaluation</h1>
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} />
      <PerformanceCharts students={students} />
    </div>
  );
};

export default Performance;
