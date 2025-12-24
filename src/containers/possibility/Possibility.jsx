import React from "react";
import "./Possibility.css";
import possibilityImage from "../../assets/possibility.png";

function Possibility() {
  return (
    <div className="gpt3__possibility section__padding reveal" id="possibility">
      <div
        className="gpt3__possibility-image reveal"
        data-animation="fade-left"
      >
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4 className="reveal" data-animation="fade-right">
          Request Early Access to Get Started
        </h4>
        <h1 className="gradient__text reveal" data-animation="fade-right">
          The possibilities are <br /> beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}
export default Possibility;
