import React from "react";
import "../styles/LearnMoreSty.css";
import Contact from "./Contact";
import faqs from "../data/faqData"; 


function LearnMore() {
  return (
    <section className="learn-more-section">
      <h2>Learn about PaySkul</h2>
      <p className="p-heading">
        Need quick answers to questions you have? Here are frequently asked
        questions to give you information about our product and services.
      </p>
      <div className="learn-more-items">
        {faqs.map((faq, index) => (
          <div key={index} className="learn-more-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
      <Contact />
      <div className="text-ending"></div>
    </section>
  );
}

export default LearnMore;
