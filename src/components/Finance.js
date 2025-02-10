import React, { useState } from 'react';
import '../styles/FinanceSty.css';
import image from '../assets/phone1.jpg';

function Finance() {
    const [hasDownloaded, setHasDownloaded] = useState(false);
    const [isDownloadCountSubmitted, setIsDownloadCountSubmitted] = useState(false);
  
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
          }
        } catch (error) {
          console.error('Error tracking download count:', error);
        }
      }
    };
  
    const handleDownloadClick = () => {
      const apkUrl = "https://payskul-apk.s3.eu-west-1.amazonaws.com/production/payskul.apk"; 
  
      const link = document.createElement('a');
      link.href = apkUrl;
      // link.download = 'payskul.apk';  
      link.download = 's3://payskul-apk/production/payskul.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
      // Mark app as downloaded in local storage to prevent multiple downloads
      localStorage.setItem('hasDownloadedApp', 'true');
      setHasDownloaded(true);
      trackDownloadCount();
    };
  


  return (
    <section className="finance">
      <div className="finance-content">
        <h2>Finance your future today</h2>
        <p>You are just a tap away from enjoying our services, download our app on Playstore or via the website to have full access to our services.</p>
        <button className="download-btn-fin" onClick={handleDownloadClick}>Download Now</button>
      </div>
      <img src={image} alt="Phone with Payskul App" className="finance-image" />
    </section>
  );
}

export default Finance;