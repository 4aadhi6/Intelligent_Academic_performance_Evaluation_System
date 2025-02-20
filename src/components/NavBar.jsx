import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const NavBar = ({ logOut }) => {
  return (
    <nav style={style.navbar}>
      <Link to="/" style={style.link}>
        Home
      </Link>
      <Link to="/attendance" style={style.link}>
        Attendance
      </Link>
      <Link to="/student-performance" style={style.link}>
        Performance
      </Link>
      <Link to="/total-performance" style={style.link}>
        {/* New link for Total Performance */}
        Total Performance
      </Link>
      {/* <button style={style.button} onClick={logOut}>
        Logout
      </button> */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFD700", // Gold color for the button
          color: "#FFFFFF", // White text for contrast
          "&:hover": { backgroundColor: "#FFBF00" }, // Slightly darker gold on hover
        }}
        onClick={ logOut}
      >
        Logout{" "}
      </Button>
    </nav>
  );
};
const style = {
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#550080",
    color: "white",
    marginTop: "1px",

    // Corrected property name
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
  // button: {
  //   backgroundColor: "#FFD700",
  //   color: "white",
  //   border: "none",
  //   padding: "5px 10px",
  //   cursor: "pointer",
  // },
};

export default NavBar;
