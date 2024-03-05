import React, { useEffect } from "react";
import "./Hero.css";
import ArrowHead from "../../../assets/arrowhead.svg";
import SubHero from "./SubHero";
import { Fade } from "react-awesome-reveal";

import { Link } from "react-router-dom";

import gsap from 'gsap';

const Hero = () => {

  // title text reveal
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".hr_ttl-txt span", 1.8, {
      y: 0,
      ease: "power4.out",
      delay: 0.5,
      skewY: 0,
      stagger: {
        amount: 0.3
      }
    })

  }, []);

  return (
    <>
      <div className="Hero-container">
        <div className="hero__Ttl">

          <div className="hr_ttl-txt">
            <span>CRAFTED AND</span>
          </div>
          <div className="hr_ttl-txt">
            <span>EMPOWERED,</span>
          </div>
          <div className="hr_ttl-txt">
            <span>DIGITALLY.</span>
          </div>

          {/* <Fade direction="up" triggerOnce>
            <h1>CRAFTED AND<br></br>EMPOWERED,<br></br>DIGITALLY.</h1>
          </Fade> */}
        </div>
        <div className="hero__Cta">
          <div id="btn_container">
            <Link to="/about" className="learn-more-btn">
              <span className="circle-btn" aria-hidden="true">
                <span className="icon-btn arrow-btn"></span>
              </span>
              <span class="button-text">Know more</span>
            </Link>
          </div>
        </div>
      </div>
      <SubHero />
    </>
  );
};

export default Hero;
