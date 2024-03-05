import React from 'react';
import "./business.css";

const Business = () => {
    return (
        <div className='bnss__Wrap'>
            <div className='bnss__Sec'>
                <div className='bnss__Ttl'>
                    <h2>
                        <span className='bn_Ttl1'>Loreum</span><br></br>
                        Loreum <span className='bn_Ttl2'>Ispum</span>
                    </h2>
                </div>
                <div className='bnss__Card-wrap'>
                    <div className='bnss-card-sec'>
                        <div className='bnss_card-row bnss_card-row1'>
                            <div className='bnss_col'>
                                <div className='bnss_img'>
                                    <img src="assets/img/bns1.png" alt="" />
                                </div>
                            </div>
                            <div className='bnss_col'>
                                <div className='bnss__crd-cnt'>
                                    <h3>
                                        B2B
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                                <div className='bnss__Btn'>
                                    <button className="cta">
                                        <span className="hover-underline-animation">Know more</span>
                                        <svg
                                            id="arrow-horizontal"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="20"
                                            viewBox="0 0 46 16"
                                        >
                                            <path
                                                id="Path_10"
                                                data-name="Path 10"
                                                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                                transform="translate(30)"
                                            ></path>
                                        </svg>
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className='bnss_card-row bnss_card-row2'>
                            <div className='bnss_col'>
                                <div className='bnss__crd-cnt'>
                                    <h3>
                                        B2C
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                                <div className='bnss__Btn'>
                                    <button className="cta">
                                        <span className="hover-underline-animation">Know more</span>
                                        <svg
                                            id="arrow-horizontal"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="20"
                                            viewBox="0 0 46 16"
                                        >
                                            <path
                                                id="Path_10"
                                                data-name="Path 10"
                                                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                                transform="translate(30)"
                                            ></path>
                                        </svg>
                                    </button>

                                </div>
                            </div>
                            <div className='bnss_col'>
                                <div className='bnss_img'>
                                    <img src="assets/img/bns1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business