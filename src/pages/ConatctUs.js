import React, { useState } from "react";
import '../styles/ContactUs.css';
import twitter from '../assets/x_ct.png';
import ig from '../assets/ig_ct.png';
import facebook from '../assets/fb_ct.png';
import linkedin from '../assets/link_ct.png';

const ContactUs = () => {
  const socialImages = [twitter, ig, facebook, linkedin]; 
  const socialLinks = [
    'https://x.com/PayskulApp', 
    'https://www.instagram.com/payskulapp/', 
    'https://web.facebook.com/payskul', 
    'https://www.linkedin.com/company/payskulapp/' 
  ];

  const contactDetails = [
    { label: "+234 916 070 8325", onClick: () => handlePhoneClick("+234 916 070 8325") },
    { label: "+234 706 751 4560", onClick: () => handlePhoneClick("+234 706 751 4560") }
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);  // To manage submitting state
  const [errorMessage, setErrorMessage] = useState(''); // To show error message if any

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    // Prepare the form data to be sent to the backend API
    const requestData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    const payskul_base_url = 'https://payskul-api.up.railway.app';

    try {
      const response = await fetch(`${payskul_base_url}/klump/contact_us/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        setIsSubmitted(true);  // Set form as submitted
        setErrorMessage('');    // Clear any previous error message
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);  // Set submitting state to false after the request
    }
  };

  const handlePhoneClick = (phoneNumber) => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="contact-page">
      <div className="contact-us-container">
        <div className="contact-left">
          <h1>GET IN TOUCH WITH <span>US</span></h1>
          <p>We are always available to answer all your inquiries or any challenges you might have with our platform. Be rest assured you will get a response within 24 hours</p>
          
          <div className="contact-info">
            <div className="phone">
              <h3>Or call our customer support lines</h3>
              <p>+234 916 070 8325, +234 706 751 4560</p>
            </div>

            <div className="social-media">
              <ul>
                <li>
                  {socialImages.map((image, index) => (
                    <button
                      className="link-tap"
                      key={index} 
                      onClick={() => handleSocialClick(socialLinks[index])}
                    >
                      <img className="social-links" src={image} alt={`social-icon-${index}`} />
                    </button>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="contact-right">
          {isSubmitted ? (
            <div className="thank-you-message">
              <h2>Thank you for contacting us!</h2>
              <p>Our team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group user-names">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  className="email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

              {errorMessage && <p className="error-message">{errorMessage}</p>}  {/* Show error message if any */}
            </form>
          )}
        </div>
      </div>
      <div className="contact-info-sub">
        <div className="phone">
          <h3>Or call our customer support lines</h3>
          <p>+234 916 070 8325, +234 706 751 4560</p>
        </div>
        <div className="social-media">
          <ul>
            <li>
              {socialImages.map((image, index) => (
                <button
                  className="link-tap"
                  key={index} 
                  onClick={() => handleSocialClick(socialLinks[index])}
                >
                  <img className="social-links" src={image} alt={`social-icon-${index}`} />
                </button>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
