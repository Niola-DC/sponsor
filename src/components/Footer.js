import React, { useState, useEffect } from 'react';
import '../styles/Adjust.css';
import logo from '../assets/Logofooteer(1).png';
import download from '../assets/googlePlay.png';
import twitter from '../assets/prime_twitter.png';
import ig from '../assets/bi_instagram.png';
import facebook from '../assets/devicon_facebook.png';
import linkedin from '../assets/footer_linkedIn.png';

function Footer() {
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDownloadCountSubmitted, setIsDownloadCountSubmitted] = useState(false);

  useEffect(() => {
    const isDownloaded = localStorage.getItem('hasDownloadedApp');
    if (isDownloaded) {
      setHasDownloaded(true);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        }
      } catch (error) {
        console.error('Error tracking download count:', error);
      }
    }
  };

  const googleLink = () => {
    window.open('https://play.google.com/store/apps/details?id=ng.payskul.portal&hl=en-US', '_blank');
  };

  const handleDownloadClick = () => {
    const apkUrl = "https://payskul-apk.s3.eu-west-1.amazonaws.com/production/payskul.apk"; 

    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = 's3://payskul-apk/production/payskul.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    localStorage.setItem('hasDownloadedApp', 'true');
    setHasDownloaded(true);
    trackDownloadCount();
  };

  const exploreLinks = [
    { href: "#features", label: "Explore" },
    { href: "#news", label: "Communities" },
    { href: "#contact", label: "Resources" },
  ];

  const policyLinks = [
    { href: "/terms", label: "Terms" },
    { href: "/privacy-policy", label: "Privacy Policy" }
  ];

  const contactDetails = [
    { label: "Contact Us", href: "/contact" },
    { label: "Email: info@payskul.com", onClick: () => handleEmailClick() },
    { label: "Phone Numbers:" },
    { label: "+234 916 070 8325", onClick: () => handlePhoneClick("+234 916 070 8325") },
    { label: "+234 706 751 4560", onClick: () => handlePhoneClick("+234 706 751 4560") }
  ];

  const socialImages = [twitter, ig, facebook, linkedin]; 
  const socialLinks = [
    'https://x.com/PayskulApp', 
    'https://www.instagram.com/payskulapp/', 
    'https://web.facebook.com/payskul', 
    'https://www.linkedin.com/company/payskulapp/' 
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  // Handle Email Click
  const handleEmailClick = () => {
    const email = 'info@payskul.com';
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;  // This will open the default email client
  };

  // Handle Phone Click
  const handlePhoneClick = (phoneNumber) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(phoneNumber).then(() => {
        alert(`Phone number ${phoneNumber} copied to clipboard!`);
      }).catch((err) => {
        console.error("Failed to copy phone number:", err);
      });
    } else {
      // For mobile, use tel: to trigger the dialer
      const telLink = `tel:${phoneNumber}`;
      window.location.href = telLink;
    }
  };

  return (
    <footer>
      <div className="footer-content">
        <img src={logo} alt="Payskul Logo" className="footer-logo" />

        <div className="footers footer-links explore">
          <ul>
            {exploreLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footers footer-links policy">
          <ul>
            {policyLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footers footer-contact">
          <ul>
            {contactDetails.map((detail, index) => (
              <li key={index}>
                {detail.href ? <a href={detail.href}>{detail.label}</a> : 
                 detail.onClick ? <span onClick={detail.onClick}>{detail.label}</span> : detail.label}
              </li>
            ))}
            <li>
              {socialImages.map((image, index) => (
                <button 
                  key={index} 
                  className="social-button"
                  onClick={() => handleSocialClick(socialLinks[index])}
                >
                  <img src={image} alt={`social-icon-${index}`} />
                </button>
              ))}
            </li>
          </ul>
        </div>

        <div className='main-footer'>
          <ul>
            {policyLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <ul>
            {contactDetails.map((detail, index) => (
              <li key={index} style={{
                cursor: 'pointer',
              }}>
                {detail.href ? <a href={detail.href}>{detail.label}</a> : 
                 detail.onClick ? <span onClick={detail.onClick}>{detail.label}</span> : detail.label}
              </li>
            ))}
            <li>
              {socialImages.map((image, index) => (
                <button 
                  key={index} 
                  className="social-button"
                  onClick={() => handleSocialClick(socialLinks[index])}
                >
                  <img src={image} alt={`social-icon-${index}`} />
                </button>
              ))}
            </li>
          </ul>
        </div>

        <div className="footer-downloads">
          <ul>
            <li>
              <img 
                src={download} 
                alt="Download App" 
                style={{ cursor: 'pointer' }}
                onClick={googleLink} 
              />
            </li>
            <li>
              <button className="download-btn" onClick={handleDownloadClick}>Download App</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
