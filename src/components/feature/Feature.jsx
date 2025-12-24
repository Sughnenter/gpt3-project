import React from "react";
import "./Feature.css";

function Feature({ title, text }) {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title reveal">
        <div />
        <h1 className="reveal" data-animation="fade-right">
          {title}
        </h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p className="reveal" data-animation="fade-right">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Feature;
