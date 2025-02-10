import React from "react";
import '../App.css';
import Features from "../components/Features";
import Priority from "../components/Priority";
import Finance from "../components/Finance";
import LearnMore from "../components/LearnMore";
import Enquiry from "../components/Enquiry";
import Hero from "../components/Hero";

const LandingPage = () => {
    return(
        <div className="body">
            <Hero />
            <div id="features">
                <Features />
            </div>
            <div id="priority">
                <Priority />
            </div>
            <div id="finance">
                <Finance />
            </div>
            <div id="learnmore">
                <LearnMore />
            </div>
            {/* <Contact /> */}
            <div id="enquiry">
                <Enquiry />
            </div>
        </div>
    );
}

export default LandingPage;





{/* <div className="body">
        //     <Hero />
        //     <Features />
        //     <Priority />
        //     <Finance />
        //     <LearnMore />
        //     {/* <Contact /> */}
        //     <Enquiry />
        // </div> */}