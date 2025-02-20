import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img2 from "../../assets/img2.png";
import backg from "../../assets/backg.jpg";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin(username, password)) {
      navigate("/admin");
    } else {
      alert("Addmin Access Rejected ");
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${backg})`, // Using imported background image
        backgroundSize: "cover", // Optional: make sure the background covers the whole container
        backgroundPosition: "center", // Optional: center the background
        height: "100vh", // Optional: ensure the container takes up the full height
      }}
    >
      <form onSubmit={handleSubmit} action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2 style={{ color: "white" }}>Admin Login</h2>
          <img
            src={img2}
            alt="loading"
            style={{ display: "block", margin: "0 auto" }}
            onClick={() => {
              setShowLogin(false);
            }}
          />
        </div>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your Name "
          required
          style={{ border: "1px sold black" }}
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name=""
          id=""
          placeholder="password"
          required
        />

        <button type="submit">Login</button>
      </form>
      <h1 style={{ color: "white" }}>
        Only Admins Can Access the Attendance Page . <br /> Please LogIn{" "}
      </h1>
    </div>
  );
};

export default Login;
