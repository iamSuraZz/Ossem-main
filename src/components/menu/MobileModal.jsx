import React, { useEffect } from "react";
import "./mobileModal.css";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";



const MobileModal = ({ isOpen, onClose }) => {
    return (
        <>
            <div className={`mob-modal ${isOpen ? "open" : ""}`}>
                <div className="mob-modal-content">

                    <div className="mob-menu_Md-wrap">
                        <div className="mob-mn_Cnt-bx">
                            <div className="mob-mn_Main-cnt">
                                <div className="mob-mn_Col1">
                                    <div className="mob-mn_Ttl-icn">

                                        {/* <Link href="/" onClick={onClose}><Image src="/assets/images/menu-logo.svg" alt='project-d' width={400} height={56}></Image></Link> */}
                                        <Link to="/" className="mob-menu_Modal-logo" onClick={onClose}>
                                            <img src="assets/img/logo.png" alt="logo"></img>
                                        </Link>

                                    </div>
                                    {/* <div className="mn_Cnt-us">
                                        <a href="" onClick={onClose}>Contact BE <i className="fa-solid fa-arrow-right"></i></a>
                                    </div> */}
                                </div>
                                <div className="mob-mn_Col2">
                                    <ul>
                                        <li><NavLink to="/" onClick={onClose}>Home</NavLink ></li>
                                        <li><NavLink to="/about" onClick={onClose}>About</NavLink></li>
                                        <li><NavLink to="/features" onClick={onClose}>Features</NavLink></li>
                                        <li>
                                            <a onClick={onClose}>
                                                Contact
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={onClose}>
                                                Login
                                            </a>
                                        </li>
                                    </ul>
                                    {/* <div className="mn_Icn-bx">
                                        <a href="#" target="_blank" rel="noopener">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="#" target="_blank" rel="noopener">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                        <a href="#" target="_blank" rel="noopener">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </a>
                                        <a href="#" target="_blank" rel="noopener">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </div> */}

                                </div>
                            </div>
                            <button className="mob-mn_Cl-icn" onClick={onClose}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`overlay ${isOpen ? "active" : ""}`} onClick={onClose}></div>
        </>
    );
};

export default MobileModal;
