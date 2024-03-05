import React, { useEffect } from 'react';
import "./benefits.css";

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

import Tab1 from "../../../assets/Tab-1.webp";
import Tab2 from "../../../assets/Tab-2.webp";
import Tab3 from "../../../assets/Tab-3.webp";

const ListArray = ["Vision", "Mission", "Value"];

import { Fade } from "react-awesome-reveal";

const Benefits = () => {

    useEffect(() => {
        const mySwiper = new Swiper('.swiper-container.benefit_sw', {
            loop: true,
            autoplayDisableOnInteraction: false,
            slidesPerView: 1,
            autoHeight: true,
            autoplay: {
                delay: 5000,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.swiper-pagination.bnft_swp-pgn',
                clickable: true,
                type: 'bullets',
                renderBullet: (index, className) => {
                    return `<span class="${className}"><em>${ListArray[index]}</em><i></i><b></b></span>`;
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        return () => {
            mySwiper.destroy();
        };
    }, []);

    return (
        <>
            <div className='benefits__Sec'>
                <div className='bnft__Ttl-txt'>
                    <h4>Curious about the benefits of OSSEM?</h4>
                </div>
                <div className="swiper-container benefit_sw">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className='bn__Sl'>
                                <div className='bn__Img-con'>
                                    <div className='bn-img'>
                                        <img src={Tab1} alt="" />
                                    </div>
                                </div>
                                <div className='bn_Txt'>

                                    <h3>
                                        <Fade direction="up">
                                            Heading1
                                        </Fade>
                                    </h3>
                                    <p>
                                        <Fade direction="up">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </Fade>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide con2">
                            <div className='bn__Sl'>
                                <div className='bn__Img-con'>
                                    <div className='bn-img'>
                                        <img src={Tab2} alt="" />
                                    </div>
                                </div>
                                <div className='bn_Txt'>
                                    <h3>Heading2</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide con3">
                            <div className='bn__Sl'>
                                <div className='bn__Img-con'>
                                    <div className='bn-img'>
                                        <img src={Tab3} alt="" />
                                    </div>
                                </div>
                                <div className='bn_Txt'>
                                    <h3>Heading3</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Add more slides as needed */}
                    </div>

                    {/* <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-scrollbar"></div> */}
                </div>
                <div className="swiper-pagination bnft_swp-pgn"></div>
            </div>
        </>
    )
}

export default Benefits