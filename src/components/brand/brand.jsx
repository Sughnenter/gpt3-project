import React from "react";
import "./Brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

function Brand() {
  return (
    <div className="gpt3__brand section__padding reveal">
      <div className="reveal" data-animation="fade-right">
        <img src={google} />
      </div>
      <div className="reveal" data-animation="fade-right">
        <img src={slack} />
      </div>
      <div className="reveal" data-animation="fade-right">
        <img src={atlassian} />
      </div>
      <div className="reveal" data-animation="fade-right">
        <img src={dropbox} />
      </div>
      <div className="reveal" data-animation="fade-right">
        <img src={shopify} />
      </div>
    </div>
  );
}
export default Brand;
