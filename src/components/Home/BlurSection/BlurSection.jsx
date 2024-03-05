// BlurSection.js
import React from "react";
import Box from "./Box";
import "./BlurSection.css";
import icon1 from "../../../assets/icon1.svg";
import icon2 from "../../../assets/icon2.svg";
import icon3 from "../../../assets/icon3.svg";
const BlurSection = () => {
  return (
    <div className="blur-section-container">
      <div className="Boxes">
        <div className="first-box-section">
          <Box title1="Ipsum" title2="Ipsum" number="01" icon={icon1}></Box>
          <h1>
            About PordServ <span className="span-tech">Technologies</span>
          </h1>
        </div>
        <div className="second-box-section">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. U
          </p>
          <Box title1="Ipsum" title2="Ipsum" number="02" icon={icon2}></Box>
        </div>
        <div className="third-box-section">
          <Box title1="Ipsum" title2="Ipsum" number="03" icon={icon3}></Box>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. U
          </p>
        </div>
      </div>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </h3>
    </div>
  );
};

export default BlurSection;
