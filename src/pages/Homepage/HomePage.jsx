import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Students from "../../assets/students.svg";
import { Button } from "@mui/material";

const Homepage = () => {
  return (
    <StyledContainer>
      <GridContainer>
        <GridItem>
          <StyledImage src={Students} alt="students" />
        </GridItem>
        <GridItem>
          <StyledPaper>
            <StyledTitle>
              Welcome to
              <br />
              Student Management
              <br />
              System
            </StyledTitle>
            <StyledText>
              Effortlessly manage classes, organize students and faculty, track
              attendance, assess performance, and provide feedback—all in one
              unified platform. Easily access records, view marks, and
              communicate with ease.
            </StyledText>
            <StyledBox>
              <StyledLink to="/choose">
                {/* Add Button or other content */}
              </StyledLink>
              <StyledLink to="/admin-login">
                <Button variant="contained" color="primary">
                  Login As Admin
                </Button>
              </StyledLink>
              <StyledText>
                Calculate Academic{" "}
                <Link to="/student-performance" style={{ color: "#550080" }}>
                  Performance
                </Link>
              </StyledText>
            </StyledBox>
          </StyledPaper>
        </GridItem>
      </GridContainer>
    </StyledContainer>
  );
};

export default Homepage;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f4f4f4; /* Optional background color */
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const GridItem = styled.div`
  flex: 1;
  padding: 10px;
  min-width: 300px; /* This ensures the layout is responsive */
  padding-top: 60px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const StyledPaper = styled.div`
  padding: 24px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: auto;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: normal;
  line-height: normal;
  color: #333;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

// const Button = styled.button`
//   background-color: transparent;
//   color: #7f56da;
//   border: 2px solid #7f56da;
//   padding: 10px 20px;
//   border-radius: 4px;
//   cursor: pointer;
//   width: 100%;
//   font-size: 1rem;
//   transition: background-color 0.3s, color 0.3s;

//   &:hover {
//     background-color: #7f56da;
//     color: white;
//   }
// `;
