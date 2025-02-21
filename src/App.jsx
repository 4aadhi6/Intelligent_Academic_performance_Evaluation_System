import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Performance from "./pages/performance page/Performance";

import AttentacePage from "./pages/attendancePage/AttentacePage";
import NavBar from "./components/NavBar";
import Login from "./pages/Lohin/Login";
import HomePage from "./pages/Homepage/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import TotalPerformance from "./components/TotalPerformance.jsx";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [students, setStudents] = useState([]); // State to store student data

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  // Function to add student data (from Performance page)
  const addStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <Router>
      <NavBar isAdmin={isAdmin} logOut={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/attendance"
          element={
            isAdmin ? <AttentacePage /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/student-performance"
          element={<Performance addStudent={addStudent} students={students} />} // Pass state to Performance
        />
        <Route
          path="/total-performance"
          element={<TotalPerformance students={students} />} // Pass state to TotalPerformance
        />
        <Route
          path="/admin"
          element={
            isAdmin ? <AttentacePage /> : <Navigate to="/admin-login" replace />
          }
        />
        <Route
          path="/admin-login"
          element={
            isAdmin ? (
              <Navigate to="/admin" replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
// contact on Instagram _4aadhi_6 developer 
