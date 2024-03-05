import React, { useEffect } from "react";
import "./Footer.css";
import FooterVector from "../../assets/FooterVector.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import gsap from 'gsap';
import ScrollToTopButton from "../ScrollToTop/ScrollToTopButton";
const Footer = () => {

  useEffect(() => {
    const blobContainer = document.getElementById("blob-container");

    // Default background position
    let xPercent = 50;
    let yPercent = 50;

    // Default animation for the gradient blob using GSAP
    const tl = gsap.timeline({ repeat: -1, yoyo: true, paused: true });
    tl.to(blobContainer, {
      duration: 2,
      ease: "power1.inOut",
      background: `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(245,183,66,1) 9%, rgba(254,248,122,1) 91%)`
    });

    // Function to update the gradient position on mouse move
    function moveGradient(event) {
      // Calculate the mouse position from 0 to 100 within the container
      xPercent = (event.clientX / window.innerWidth) * 100;
      yPercent = (event.clientY / window.innerHeight) * 100;

      // Update the gradient position
      updateGradient(xPercent, yPercent);

      // Pause the default animation
      tl.pause();
    }

    // Function to update the gradient background
    function updateGradient(x, y) {
      // Use GSAP to animate the background change
      gsap.to(blobContainer, {
        background: `radial-gradient(circle at ${x}% ${y}%, rgba(245,183,66,1) 9%, rgba(254,248,122,1) 91%)`,
        duration: 0.5,
        ease: "none"
      });
    }

    // Add mouse move event listener
    document.addEventListener("mousemove", moveGradient);

    // Optional: Restart the default animation when mouse leaves the container
    blobContainer.addEventListener("mouseleave", () => {
      tl.restart();
    });

    // Optional: Restart the default animation after a period of inactivity
    let inactivityTimeout;

    document.addEventListener("mousemove", () => {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(() => {
        tl.restart();
      }, 200000);
    });

  }, [])

  return (
    <div className="foot__Sec" id="blob-container">
      <div className="Footer-container">
        <div className="ft_fst-Sec">
          <h2>
            We Are Ossem
          </h2>
          <div className="ft_arw-img">
            <img src={FooterVector} alt="Footervector" />
          </div>

        </div>
        <div className="Footer-second-section">
          <div className="ft_sc-Row1">
            <button>Let's Connect <span><i className="fa-solid fa-arrow-right"></i></span></button>
          </div>
          <div className="ft_sc-Row2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempo
            </p>
          </div>
        </div>
        <div className="Footer-third-section">
          <div className="Footer-third-first-section">
            <h4>Ed tech solutions for all educational organizations .</h4>
            <h5>
              We’ll listen to your needs, identify the best approach, and then create a bespoke
              smart ERP solution that’s right for you.
            </h5>
          </div>
          <div className="Footer-social-networks">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="ft_frth-sec">
          <div className="copyright">
            Copyright@ossem2024
          </div>
          <div className="btm_lnks">
            <a href="">
              Privacy Policy
            </a>
          </div>
          <div className="pwr_by">
            Powered by :
            <a href="">Lexodd Hypernova Pvt. Ltd</a>
          </div>
        </div>
        <div className="sc__Top-sec">
          <ScrollToTopButton></ScrollToTopButton>
        </div>
      </div>
    </div>

  );
};

export default Footer;
