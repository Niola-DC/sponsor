import { Box, Button, Modal } from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import SchoolForm from "./SchoolForm";
import main from '../assets/heroimage.png';
import '../App.css';

const Hero = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openSchoolFormPopup, setOpenSchoolFormPopup] = useState(false);
  const [isSchool, setIsSchool] = useState(null);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [isDownloadCountSubmitted, setIsDownloadCountSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // To show error message
  const [isSubmitting, setIsSubmitting] = useState(false); // To track the download process

  const handleGetStarted = () => {
    setOpenPopup(true);
  };

  const handleSchoolClick = () => {
    setIsSchool(true);
    setOpenPopup(false);
    setOpenSchoolFormPopup(true); // Open the second form popup
  };

  const handleIndividualClick = () => {
    setIsSchool(false);
    setOpenPopup(false);
    alert("Your download will start now.");
    handleDownload(); // Start the download for individual
  };

  const handleDownload = async () => {
    setIsSubmitting(true); // Mark the start of submission

    const apkUrl = "https://payskul-apk.s3.eu-west-1.amazonaws.com/production/payskul.apk";

    // Create a temporary download link for APK file
    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = 'payskul.apk'; // Proper download name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Mark app as downloaded in local storage to prevent multiple downloads
    localStorage.setItem('hasDownloadedApp', 'true');
    setHasDownloaded(true);

    try {
      await trackDownloadCount();
    } catch (error) {
      console.error('Error tracking download count:', error);
      setErrorMessage('Failed to track download count. Please try again later.');
    }

    setIsSubmitting(false); // Mark the end of submission
  };

  // Function to track download count
  const trackDownloadCount = async () => {
    if (!isDownloadCountSubmitted) {
      try {
        const response = await fetch('https://payskul-api.up.railway.app/core/download-count/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ download: 1 }),
        });

        if (response.ok) {
          console.log('Download count tracked successfully.');
          setIsDownloadCountSubmitted(true);
        } else {
          console.error('Failed to track download count');
          setErrorMessage('Failed to track download count. Please try again later.');
        }
      } catch (error) {
        console.error('Error tracking download count:', error);
        setErrorMessage('There was an error. Please try again later.');
      }
    }
  };

  return (
    <section className="hero-section">
      <main className="main">
        <div className="box content">
          <h1>Get easy access to very flexible education loans</h1>
          <p>PaySkul provides affordable education loans with flexible repayment plans, tailored to empower students to achieve their dreams without financial stress.</p>
          <button className="get-started-button" onClick={handleGetStarted}>Get started now</button>
          <button className='partner-btn hero-btn'>
            <RouterLink className='link' to="/contact" >Become a Partner</RouterLink></button>
        </div>
        <div className="box image-container">
          <img src={main} alt="Mockup of PaySkul app" />
        </div>
      </main>

      {/* Popup for school or individual selection */}
      <Modal
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        aria-labelledby="school-individual-popup"
        aria-describedby="popup-for-choosing-school-or-individual"
      >
        <Box className="popup-box" style={{ width: '300px', height: '375px', padding: '20px' }}>
          <h2>Are you a School or Individual?</h2>
          <h4>School</h4>
          <p>School Admin or School Rep</p>
          <h4>Individual</h4>
          <p>Parent or Student</p>
          <div className="popup-buttons">
            <Button
              style={{
                backgroundColor: 'black',
                color: 'white',
                width: '130px',
                borderRadius: '0.6rem',
              }}
              onClick={handleSchoolClick}
              variant="contained"
            >
              School
            </Button>
            <Button
              style={{
                backgroundColor: 'black',
                color: 'white',
                width: '130px',
                borderRadius: '0.6rem',
              }}
              className="pop-btn"
              onClick={handleIndividualClick}
              variant="contained"
            >
              Individual
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Popup for School Form */}
      <Modal
        open={openSchoolFormPopup}
        onClose={() => setOpenSchoolFormPopup(false)}
        aria-labelledby="school-form-popup"
        aria-describedby="popup-for-entering-school-details"
      >
        <SchoolForm
          onSubmit={() => setOpenSchoolFormPopup(false)} // Close the form after submission
          onClose={() => setOpenSchoolFormPopup(false)} // Close the form without submitting
        />
      </Modal>

      {/* Error message display */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {/* Disable download button while submitting */}
      {isSubmitting && <div className="loading-message">Processing your request...</div>}
    </section>
  );
};

export default Hero;
