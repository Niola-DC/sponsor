import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { HiXMark } from 'react-icons/hi2';

const SchoolForm = ({ onSubmit, onClose }) => {
  const [schoolDetails, setSchoolDetails] = useState({
    school_name: '',
    email: '',
    phone_no: '',
    address: '',
  });

  const [submitted, setSubmitted] = useState(false); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSchoolDetails({
      ...schoolDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { school_name, email, phone_no, address } = schoolDetails;

    if (!school_name || !email || !phone_no || !address) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      const response = await fetch('https://payskul-api.up.railway.app/core/schools/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          school_name,
          email,
          phone_no,
          address,
        }),
      });

      if (response.ok) {
        setSubmitted(true);  
        setTimeout(onClose, 10000); 
      } else {
        alert('Failed to submit school details. Please try again.');
      }
    } catch (error) {
      console.error("Error:", error);
      alert('There was an error submitting the form.');
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        onClose();
      }, 12000);
      return () => clearTimeout(timer); 
    }
  }, [submitted, onClose]);

  return (
    <Box
      className="popup-box"
      style={{
        position: 'fixed', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: '320px',
        height: '450px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
        zIndex: 1000, 
      }}
    >
      <HiXMark
        size={30}
        style={{ position: 'absolute', top: '15px', right: '15px', cursor: 'pointer' }}
        onClick={onClose} 
      />
      
      {submitted ? (
        <Box
        style={{
            padding: '1rem',
            width: '500px'
        }}>
          <Typography variant="h6" gutterBottom
          style={{
            width: '300px'
          }}>
            Thank you! Your details have been received. Our team will contact you shortly to guide you through the next steps.
          </Typography>
        </Box>
      ) : (
        <Box>
          <h2>Enter School Details</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              className='modal-input'
              label="School Name"
              name="school_name"
              value={schoolDetails.school_name}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
              sx={{
                marginBottom: '15px',
                width: '320px',
                '& .MuiInputBase-root': {
                  height: '50px' // Adjusts the height of the input field
                },
                
              }}
            
            />
            <TextField
              className='modal-input'
              label="Email Address"
              name="email"
              value={schoolDetails.email}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
              sx={{
                marginBottom: '15px',
                width: '320px',
                '& .MuiInputBase-root': {
                  height: '50px' // Adjusts the height of the input field
                },
                
              }}
            
            />
            <TextField
              className='modal-input'
              label="Phone Number"
              name="phone_no"
              value={schoolDetails.phone_no}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
              sx={{
                marginBottom: '15px',
                width: '320px',
                '& .MuiInputBase-root': {
                  // padding: '12px 14px', // Increases the internal padding of the input field
                  height: '50px' // Adjusts the height of the input field
                },
               
              }}
            
            />
            <TextField
              className='modal-input'
              label="Address"
              name="address"
              value={schoolDetails.address}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
              sx={{
                marginBottom: '15px',
                width: '320px',
                textAlign: 'center',
                '& .MuiInputBase-root': {
                  // padding: '12px 14px', // Increases the internal padding of the input field
                  height: '50px' // Adjusts the height of the input field
                },
                
              }}
            
            />
            <Button
              type="submit"
              style={{
                backgroundColor: 'black',
                color: 'white',
                width: '100%',
                borderRadius: '0.6rem',
                marginTop: '10px',
              }}
              variant="contained"
            //   onSubmit={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default SchoolForm;
