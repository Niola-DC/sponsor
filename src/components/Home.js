import React, { useState } from 'react';
import payskul from '../assets/LogoTopTab.jpg';
import '../App.css';
import { HiLockClosed, HiOutlineBars3, HiXMark } from 'react-icons/hi2';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  Button
} from '@mui/material';
import SchoolForm from './SchoolForm';  // Import the new component
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import ContactUs from '../pages/ConatctUs';
import Logo from './Logo';

function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [openSchoolFormPopup, setOpenSchoolFormPopup] = useState(false);
  const [isSchool, setIsSchool] = useState(null);

  const [hasDownloaded, setHasDownloaded] = useState(false);
  
  const [isDownloadCountSubmitted, setIsDownloadCountSubmitted] = useState(false);
  

  const menuOptions = [
    { text: 'Products', href: '#features' },
    { text: 'Why PaySkul', href: '#priority' },
    { text: 'About Us', href: '#learnmore' },
    { text: 'Contact', href: '/contact' },
  ];

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

  const handleDownload = () => {
    // const apkPath = "/assets/payskul.apk"; // Path relative to the public folder

    // if (!isSchool) {
    //   const link = document.createElement('a');
    //   link.href = apkPath;
    //   link.download = "payskul.apk"; // The name of the downloaded file
    //   link.click();
    // } else {
    //   alert("For schools, please go to the enquiry section.");
    //   window.location.href = "#enquiry";  // Adjust the section as needed
    // }

    const apkUrl = "https://payskul-apk.s3.eu-west-1.amazonaws.com/production/payskul.apk"; 
    
    // Create a temporary download link for APK file
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
    <section className='app-top'>
      <div className='header-container'>
        <header className="header">
        {/* <Link to="/">
          <img src={payskul} alt="Payskul Logo" className="logo" />
        </Link> */}
        <Logo />
          <nav className="nav">
           <ul>
              <li>
              <Link
                to="features"
                className='a'
                smooth={true}
                duration={500}
                offset={-70}>
                Products
              </Link>
            </li>
            <li>
              <Link
                to="priority"
                className='a'

                smooth={true}
                duration={500}
                offset={-70}>
                Why PaySkul
              </Link>
            </li>
            <li>
              <Link
                className='a'
                to="learnmore"
                smooth={true}
                duration={500}
                offset={-70}>
                About Us
              </Link>
            </li>
            <li>
           
                <RouterLink className='a' to="/contact" >Contact</RouterLink>
            
            </li>
          </ul>
            {/* <a href="#products">Products</a>
            <a href="#why-payskul">Why PaySkul</a>
            <a href="#about">About Us</a>
            <Link to="/contact">Contact</Link> */}
          </nav>
          <div className='download-button'>
          <button className='partner-btn'>
            <RouterLink className='link' to="/contact" >Become a Partner</RouterLink></button>
          <button className='app-button'  onClick={handleDownload}>Download Now</button>
          </div>
          

          <div className="navbar-menu-container">
            <HiOutlineBars3 size={30} className='drawer-right' onClick={() => setOpenMenu(true)} />
          </div>
          <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
            <Box sx={{ width: 250 }} role='presentation' onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
              <List>
                <HiXMark color='#000' size={30} className='drawer-right cancel' onClick={() => setOpenMenu(false)} />
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                      {/* <Link to={item.href} className='custom-link'><ListItemText primary={item.text} /></Link> */}
                        {/* Conditional rendering of Link or RouterLink */}
                  {item.href.startsWith('#') ? (
                    // Smooth scroll for sections
                    <Link to={item.href.slice(1)} className="custom-link" smooth={true} duration={500} offset={-70}  onClick={() => setOpenMenu(false)}>
                      <ListItemText primary={item.text} />
                    </Link>
                  ) : (
                    // Normal routing for Contact page
                    <RouterLink to={item.href} className="custom-link"  onClick={() => setOpenMenu(false)}>
                      <ListItemText primary={item.text} />
                    </RouterLink>
                  )}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <button className="in-box-btn" onClick={handleDownload}>Download Now</button>
              <button className='in-box-btn partner-btn'>
              <RouterLink className='link' to="/contact" >Become a Partner</RouterLink></button>

            </Box>
          </Drawer>
        </header>
      </div>

      {/* <main className="main">
        <div className="box content">
          <h1>Get easy access to very flexible education loans</h1>
          <p>PaySkul provides affordable education loans with flexible repayment plans, tailored to empower students to achieve their dreams without financial stress.</p>
          <button className="get-started-button" onClick={handleGetStarted}>Get started now</button>
        </div>
        <div className="box image-container">
          <img src={main} alt="Mockup of PaySkul app" />
        </div>
      </main> */}

      {/* Popup for school or individual selection */}
      {/* <Modal
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        aria-labelledby="school-individual-popup"
        aria-describedby="popup-for-choosing-school-or-individual"
      >
        <Box className="popup-box" style={{ width: '300px', height: '350px', padding: '20px' }}>
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
                width: '7rem',
                borderRadius: '0.6rem'
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
                width: '7rem',
                borderRadius: '0.6rem'
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
      {/* <Modal
        open={openSchoolFormPopup}
        onClose={() => setOpenSchoolFormPopup(false)}
        aria-labelledby="school-form-popup"
        aria-describedby="popup-for-entering-school-details"
      >
        <SchoolForm
          onSubmit={() => setOpenSchoolFormPopup(false)} // Close the form after submission
          onClose={() => setOpenSchoolFormPopup(false)} // Close the form without submitting
        />
      </Modal> */} 
    </section>
  );
}

export default Home;
