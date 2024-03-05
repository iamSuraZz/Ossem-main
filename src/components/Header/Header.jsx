import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import "./Header.css";

// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MobileModal from "../menu/MobileModal";

const Navbar = () => {
  const [isMobModalOpen, setIsMobModalOpen] = useState(false);

  const openMobModal = () => {
    setIsMobModalOpen(true);
    // setModalContent(content);
    // document.body.style.overflow = 'hidden';
  };

  const closeMobModal = () => {
    setIsMobModalOpen(false);
    // if (!isModalOpen) {
    //     document.body.style.overflow = 'auto';
    // }
    // else if (isMobileMenuOpen && isModalOpen) {
    //     document.body.style.overflow = 'hidden';
    // }
    // else {
    //     document.body.style.overflow = 'auto';
    // }
    // setModalContent(null);
  };

  return (
    <>
      <nav className="top__Nav">
        <div className="nav-container">
          <div className="first-nav-section">
            <div className="first-logo-nav">
              <img src="assets/img/logo.png" alt="logo" />
            </div>
            <div className="nav-first-links">
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/features">Features</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="second-nav-section">
            <a href="">Contact</a>
            <button className="button-Login">Login</button>
          </div>
        </div>
      </nav>
      <div className="mob_Navbar">
        <div className="mob_Logo-con">
          <div className="mob-logo">
            <img src="assets/img/logo.png"></img>
          </div>
        </div>
        <div className="mob_ham-con">
          <div className="mob_ham" onClick={openMobModal}>
            <img src="assets/img/ham.png" alt="Menu" className="menu-image" />
          </div>
        </div>
      </div>
      <MobileModal isOpen={isMobModalOpen} onClose={closeMobModal}></MobileModal>
    </>
  );
};

export default Navbar;
