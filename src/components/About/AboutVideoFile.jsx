import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import "./aboutVideo.css";

const AboutVideoFile = () => {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const Horizontalref = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let element = ref.current;

            let scrollingElement = Horizontalref.current;

            let pinWrapWidth = scrollingElement.offsetWidth;
            let t1 = gsap.timeline();


            t1.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top top",
                    end: `${pinWrapWidth} bottom`,
                    // scroller: ".App", //locomotive-scroll
                    scrub: 1,
                    pin: true,
                    // markers: true,
                    // anticipatePin: 1,
                },
                height: `${scrollingElement.scrollWidth}px`,
                ease: "none",
            });

            t1.to(scrollingElement, {
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: "center center",
                    end: `${pinWrapWidth} bottom`,
                    // scroller: ".App", //locomotive-scroll
                    scrub: 1,
                    // markers: true,
                },
                scale: 1,

                ease: "none",
            });



        });
        return () => ctx.revert();
    }, []);


    return (
        <div className="abt__Vd-sec">

            <div className="abt__os-ttl">
                <h2>
                    Loreum Ipsum
                </h2>
            </div>
            <div ref={ref}>

                <div data-scroll className="saloon-video-container">
                    <video
                        id="insider-video"
                        ref={Horizontalref}
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="assets/videos/OSSEM.mp4" type="video/mp4" />
                    </video>
                </div>

            </div>

            <div className="abt__os-para">
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et incididunt ut labore
                </p>
            </div>

        </div>
    );
};
export default AboutVideoFile;