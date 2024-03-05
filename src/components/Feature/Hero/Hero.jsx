import React, { useEffect } from 'react';
import "./hero.css";
import gsap from 'gsap';

const Hero = () => {
    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(".ft_ttl-txt span", 1.8, {
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
        <div className='ft_Hero-wrap'>
            <div className='ft_Hero-sec'>
                <div className='ft_Hr-ttl'>
                    <div className='ft_ttl-txt'>
                        <span>
                            A digital
                        </span>
                    </div>
                    <div className='ft_ttl-txt'>
                        <span>
                            platform
                        </span>
                    </div>
                    <div className='ft_ttl-txt'>
                        <span>
                            crafted to
                        </span>
                    </div>
                    <div className='ft_ttl-txt'>
                        <span>
                            empower our
                        </span>
                    </div>
                    <div className='ft_ttl-txt'>
                        <span>
                            educational
                        </span>
                    </div>
                    <div className='ft_ttl-txt'>
                        <span>
                            organizations
                        </span>
                    </div>
                </div>
                <div className='ft_Hr-img'>
                    <img src="assets/img/hr-img.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero