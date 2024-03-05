import React, { useRef } from 'react';
import "./overview.css";

import { useInView } from "framer-motion";

function Feature({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    return (
        <div ref={ref} className='overview'>
            <div
                className={`overview-item ${isInView ? "active" : ""}`}
            >
                {children}
            </div>
        </div>
    );
}


const Overview = () => {
    return (
        <div className='overview__Wrap'>
            <div className='overview__Sec'>
                <div className='ov__Ttl'>
                    <h2>
                        OSSEM Overview
                    </h2>
                </div>
                <div className='ov_Con'>

                    <Feature>
                        <div className='ov_Row-crd ov_Row-crd1'>
                            <div className='ov_crd-box'>

                                <div className='ov_Card ov_Card1'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>PROSPECTS</h3>
                                            <p>
                                                A future with endless growth possibilities
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                01
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/prospect.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='ov_Para ov_Para1'>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor
                                    incididunt ut labore et
                                </p>
                            </div>
                        </div>
                    </Feature>
                    <Feature>
                        <div className='ov_Row-crd ov_Row-crd2'>
                            <div className='ov_Para ov_Para2'>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor
                                    incididunt ut labore et
                                </p>
                            </div>
                            <div className='ov_crd-box'>
                                <div className='ov_Card ov_Card2'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>PROSPECTS</h3>
                                            <p>
                                                A future with endless growth possibilities
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                01
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/prospect.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className='ov_Card ov_Card3'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>PROSPECTS</h3>
                                            <p>
                                                A future with endless growth possibilities
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                01
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/prospect.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Feature>
                    <Feature>
                        <div className='ov_Row-crd ov_Row-crd3'>
                            <div className='ov_crd-box'>
                                <div className='ov_Card ov_Card4'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>PROSPECTS</h3>
                                            <p>
                                                A future with endless growth possibilities
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                01
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/prospect.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className='ov_Card ov_Card5'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>PROSPECTS</h3>
                                            <p>
                                                A future with endless growth possibilities
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                01
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/prospect.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ov_Para ov_Para3'>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor
                                    incididunt ut labore et
                                </p>
                            </div>
                        </div>
                    </Feature>
                    <Feature>
                        <div className='ov_Row-crd ov_Row-crd4'>
                            <div className='ov_Para ov_Para4'>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor
                                    incididunt ut labore et
                                </p>
                            </div>
                            <div className='ov_crd-box'>
                                <div className='ov_Card ov_Card6'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>PROSPECTS</h3>
                                            <p>
                                                A future with endless growth possibilities
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                01
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/prospect.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className='ov_Card ov_Card7'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>PROSPECTS</h3>
                                            <p>
                                                A future with endless growth possibilities
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                01
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/prospect.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Feature>
                    <Feature>
                        <div className='ov_Row-crd ov_Row-crd5'>
                            <div className='ov_crd-box'>
                                <div className='ov_Card ov_Card8'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>PROSPECTS</h3>
                                            <p>
                                                A future with endless growth possibilities
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                01
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/prospect.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className='ov_Card ov_Card9'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>PROSPECTS</h3>
                                            <p>
                                                A future with endless growth possibilities
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                01
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/prospect.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ov_Para ov_Para5'>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor
                                    incididunt ut labore et
                                </p>
                            </div>
                        </div>
                    </Feature>
                </div>
            </div>
        </div>
    )
}

export default Overview