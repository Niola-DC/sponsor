import React from 'react';
import './App.css';
import Features from './components/Features';
import Finance from './components/Finance';
import Priority from './components/Priority';
import Home  from './components/Home';
import LearnMore from './components/LearnMore'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Enquiry from './components/Enquiry';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ContactUs from './pages/ConatctUs';
import TermsPage from './pages/TermsPage';


function App() {
  return (
    <Router>
    <div>
      {/* Navbar component */}
      <Home />

      {/* Main content area */}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/priority" element={<Priority />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        
        </Routes>
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  </Router>
    // <div className="app">
    //   <Home />


    //   <Footer />
    //   {/* <Router>
    //     <Home />
    //   <Routes>
    //     <Route path="/" element={<LandingPage />} />
    //     <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
    //   </Routes>
    // </Router> */}
    // <ContactUs />

    //  {/* <Home />
    //   <Features />
    //   <Priority />
    //   <Finance />
    //   <LearnMore />
    //   {/* <Contact /> */}
    //   {/* <Enquiry /> */}
    //   {/* <Footer /> */} 

    // </div>
  );
}

export default App;