import React, { useEffect, useState, useRef } from 'react';
import "./hero.css";
import gsap from 'gsap';

const Hero = () => {

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(".abt_Hero-txt span", 1.8, {
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
        <div className='abt__Hero-wrap'>
            <div className='abt_Hero-sec'>
                <div className='abt_Hero-txt'>
                    <div className='abt_ttl-txt'>
                        <span>
                            A digital
                        </span>
                    </div>
                    <div className='abt_ttl-txt'>
                        <span>
                            platform
                        </span>
                    </div>
                    <div className='abt_ttl-txt'>
                        <span>
                            crafted to
                        </span>
                    </div>
                    <div className='abt_ttl-txt'>
                        <span>
                            empower our
                        </span>
                    </div>
                    <div className='abt_ttl-txt'>
                        <span>
                            educational
                        </span>
                    </div>
                    <div className='abt_ttl-txt'>
                        <span>
                            organizations
                        </span>
                    </div>

                </div>
                <div className='abt__Hero-img'>
                    <img src="assets/img/about.png" alt="about" />
                </div>
            </div>
        </div>
    )
}

export default Hero