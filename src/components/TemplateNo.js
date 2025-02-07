import React,{useState} from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import profile from './profile.jpeg';
import { useNavigate } from "react-router-dom";
import TemplateCard from "./TemplateCard";

function TemplateNo() {
 
//  const [images, setImages] = useState([template1])
 const handleBackClick = () => {
    window.history.back();
  };

  const steps = ["Step 1", "Step 2", "Step 3"];
  const activeStep = 1;

  const navigate = useNavigate();
  const handleButton=()=>{
     navigate('/login');
 }

  return (
    <>
    <div style={styles.container}>
      <div style={styles.backButtonContainer}>
        <button style={styles.backButton} onClick={handleBackClick}>
          <span>&#8249;</span>
        </button>
      </div>
      {/* <button style={styles.loginButton} onClick={handleButton}>Login</button> */}
      <div style={styles.header}>
        <Stepper activeStep={activeStep} alternativeLabel style={styles.stepper}>
          {steps.map((label, index) => (
            <Step key={index} style={styles.step}>
              <StepLabel
                sx={{
                  "& .MuiStepIcon-root": {
                    color: index <= activeStep ? "#4CAF50" : "#ccc",
                    fontSize: "30px",
                    "&.Mui-active": { color: "#4CAF50" },
                    "&.Mui-completed": { color: "#4CAF50" },
                  },
                }}
              >
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div style={styles.content}>
        <div style={styles.avatarContainer}>
          <img
            src={profile}
            alt="User Avatar"
            style={styles.avatar}
          />
        </div>
        <div style={styles.up}>
          <h2 style={styles.heading}>Please select a template for your resume.</h2>
        </div>
      </div>
    </div>
    <TemplateCard/>
    </>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    padding: "20px",
    backgroundColor: "#ffffff",
    overflow: "hidden",
    position: "absolute",
    top: "0",
    left: "0",
  },
  backButtonContainer: {
    position: "absolute",
    top: "20px",
    left: "20px",
  },
  backButton: {
    background: "none",
    border: "none",
    color: "#333",
    fontSize: "30px",
    cursor: "pointer",
  },
  loginButton: {
    position: "absolute",
    top: "20px",
    right: "50px",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  header: {
    width: "100%",
    marginBottom: "30px",
    textAlign: "center",
  },
  stepper: {
    backgroundColor: "transparent",
    padding: "10px 0",
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    position: "relative",
  },
  step: {
    flex: 1,
    position: "relative",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "400px",
  },
  avatarContainer: {
    marginTop: "30px",
    marginBottom: "10px",
    width: "200px",
    height: "200px",
    backgroundImage:
      'url("/images/bg2.png"), url("/images/bg1.png"), url("/images/bg3.png")',
    backgroundPosition: "top left, top right, bottom",
    backgroundSize: "100px 100px, 150px 115px, 125px 200px",
    backgroundRepeat: "no-repeat",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  up: {
    width: "60vw",
    maxWidth: "700px",
    margin: "4vh",
  },
  heading: {
    fontSize: "30px",
    color: "#333",
  },
};

export default TemplateNo;

