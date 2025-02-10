import React, { useState } from "react";
import '../styles/EnquirySty.css';

function Enquiry() {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);  // To manage submitting state
  const [errorMessage, setErrorMessage] = useState(''); // To show error message if any

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      setErrorMessage('Please enter an email address');
      return;
    }

    setIsSubmitting(true); 

    try {
      const response = await fetch('https://payskul-api.up.railway.app/core/newsletter/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        setEmail(''); 
        setIsModalOpen(true); 
        setErrorMessage(''); 

        setTimeout(() => {
          setIsModalOpen(false); // Close success modal after 5 seconds
        }, 5000);
      } else {
        setErrorMessage('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error("Error during subscription:", error);
      setErrorMessage('There was an error. Please try again later.');
    } finally {
      setIsSubmitting(false); // End submitting
    }
  };

  return (
    <div className="enquire-form">
      <h4>Don't be left out, Get exclusive updates from us</h4>

      {/* Subscription Form */}
      <form onSubmit={handleSubmit}>
        <input
          className="user-input"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="enquire-btn"
          type="submit"
          value={isSubmitting ? 'Submitting...' : 'Subscribe now'}
          disabled={isSubmitting}  
        />
      </form>

      {/* Show error message if there is one */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Modal to show success message */}
      {isModalOpen && (
        <div className="success-modal" style={{ width: '350px' }}>
          <div className="modal-content">
            <h4>Thank you for subscribing!</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default Enquiry;
