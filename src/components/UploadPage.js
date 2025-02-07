import React, { useState, useRef } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import profile from './profile.jpeg';
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };


  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Validate if the file is a PDF
    if (file && file.type !== 'application/pdf') {
      setError("Only PDF files are allowed.");
      setSelectedFile(null); // Reset selected file if it's not PDF
    } else {
      setError(null); // Reset error
      setSelectedFile(file); // Set the selected file
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const steps = ["Step 1", "Step 2", "Step 3"];
  const activeStep = 1;

  const handleButton=()=>{
     navigate('/login');
 }


 const handleUpload = async () => {
  if (!selectedFile) {
    setError("Please select a file before uploading.");
    return;
  }

  const formData = new FormData();
  formData.append("file", selectedFile);

  try {
    const response = await fetch("/your-backend-endpoint", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("File upload failed.");
    }

    const data = await response.json();
    console.log("File uploaded successfully:", data);

    // Handle response from the backend if needed, e.g., navigate or show success message
  } catch (error) {
    console.error("Error uploading file:", error);
    setError("Error uploading file. Please try again.");
  }
};


  return (
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
          <h2 style={styles.heading}>Great. Please upload your pdf for a quick start.</h2>
          <div style={styles.uploadBox}>
            <input
              type="file"
              id="fileUpload"
              style={styles.fileInput}
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <label htmlFor="fileUpload" style={styles.fileLabel}>
              {selectedFile ? selectedFile.name : "Click to select your resume"}
            </label>
            <button style={styles.button} onClick={handleButtonClick}>
              Choose file
            </button>
          </div>
         
          <button style={styles.button} onClick={handleUpload}>
              Upload
          </button>

        </div>
      </div>
    </div>
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
    position: "fixed",
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
  uploadBox: {
    backgroundColor: "#f5f6f7",
    borderRadius: "10px",
    padding: "20px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  fileInput: {
    display: "none",
  },
  fileLabel: {
    display: "block",
    fontSize: "18px",
    color: "gray",
    cursor: "pointer",
    marginBottom: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default UploadPage;
