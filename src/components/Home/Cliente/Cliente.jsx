import React from "react";
import "./Cliente.css";
import Testimonial from "./Testimonial/Testimonial";
import Sponser from "./Sponser";
const Cliente = () => {
  return (
    <div className="Cliente-container">
      <div className="cl__Ttl">
        <h2>Our Client</h2>
      </div>
      <Sponser baseVelocity={1} />
      <Testimonial />
    </div>
  );
};

export default Cliente;
