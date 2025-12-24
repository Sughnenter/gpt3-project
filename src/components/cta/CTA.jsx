import React from "react";
import "./CTA.css";

function CTA() {
  return (
    <div className="gpt3__cta reveal">
      <div className="gpt3__cta-content reveal" data-animation="fade-right">
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className="gpt3__cta-btn reveal" data-animation="fade-left">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
}

export default CTA;
