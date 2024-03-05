import React from 'react';
import "./aboutUs.css";

import TextReveal from '../../TextReveal';
import { Link } from 'react-router-dom';

const textReveal = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et incididunt ut labore et"

const AboutUs = () => {
    return (
        <div className='aboutUs__Wrap'>
            <div className='abt_Us-sec'>
                <div className='abt_Us-ttl'>
                    <h2>
                        About Us
                    </h2>
                </div>
                <div className='abt_Us-box'>
                    <div className='abt_us-img'>
                        <img src="assets/img/abt.png" alt="about" />
                    </div>
                    <div className='abt_us-cnt'>
                        <div className='abt_us-para'>
                            <h3>
                                Prodserv Technologies
                            </h3>
                            <TextReveal text={textReveal}></TextReveal>
                            {/* <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et incididunt ut labore et
                            </p> */}
                        </div>
                        <div className='abt_us-cta'>
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
                </div>
            </div>
        </div>
    )
}

export default AboutUs