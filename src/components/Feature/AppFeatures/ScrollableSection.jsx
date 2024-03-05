import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
// import Component1 from "./Component1";
// import Component2 from "./Component2";
// import Component3 from "./Component3";
// import Component4 from "./Component4";

import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/css/bundle';

// import "./appFeatures.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const ScrollableSection = () => {


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
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          // scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        // scale: 1,

        ease: "none",
      });



    });
    return () => ctx.revert();
  }, []);



  const sliderImagesRef = useRef(null);
  useEffect(() => {

    // Initialize the thumbnail slider
    const sliderThumbs = new Swiper(".slider__thumbs .swiper-container", {
      direction: "vertical",
      slidesPerView: 4,
      spaceBetween: 0,
      // breakpoints: {
      //   0: {
      //     direction: "horizontal"
      //   },
      //   768: {
      //     direction: "vertical"
      //   }
      // }
    });

    // Initialize the main image slider
    sliderImagesRef.current = new Swiper(".about-slider.swiper-container", {
      direction: "vertical",
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      grabCursor: true,
      thumbs: {
        swiper: sliderThumbs
      },
      // breakpoints: {
      //   0: {
      //     direction: "horizontal"
      //   },
      //   768: {
      //     direction: "vertical"
      //   }
      // },
      on: {
        init: () => {
          // The initial progress is set to 25%
          updateProgressBarWidth(10);
        },
        slideChangeTransitionEnd: () => {
          // Calculate progress based on the active slide
          const progress = calculateProgress(sliderImagesRef.current);

          // Update the progress bar width
          updateProgressBarWidth(progress);
        },
      },
    });

    // Add click event listeners to thumbnail images
    const thumbnailImages = document.querySelectorAll('.thumb_txt');
    thumbnailImages.forEach((img, index) => {
      img.addEventListener('click', () => {
        // Update the active slide of the main image slider
        sliderImagesRef.current.slideTo(index);

        // Calculate progress based on the active slide
        const progress = calculateProgress(sliderImagesRef.current);

        // Update the progress bar width
        updateProgressBarWidth(progress);
      });
    });
  }, []);

  // Helper function to calculate progress
  const calculateProgress = (swiper) => {
    if (swiper) {
      const activeSlide = swiper.activeIndex;
      const totalSlides = swiper.slides.length - 1; // Subtract 1 for 0-based index
      return ((activeSlide / totalSlides) * 100) + 3; // Add 25 to start at 25%
    }
    return 0;
  };

  // Helper function to update progress bar width
  const updateProgressBarWidth = (width) => {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
      progressBar.style.height = `${width}%`;
    }
  };

  const data = [
    {
      id: 1,
      imgSrc: 'assets/img/org.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. '
    },
    {
      id: 2,
      imgSrc: 'assets/img/org.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. '
    },
    {
      id: 3,
      imgSrc: 'assets/img/org.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. '
    },
    {
      id: 4,
      imgSrc: 'assets/img/org.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. '
    },
    {
      id: 5,
      imgSrc: 'assets/img/org.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. '
    },
    {
      id: 6,
      imgSrc: 'assets/img/org.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. '
    },
    {
      id: 7,
      imgSrc: 'assets/img/org.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. '
    },
    {
      id: 8,
      imgSrc: 'assets/img/org.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. '
    },
    {
      id: 9,
      imgSrc: 'assets/img/org.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. '
    },

    // Add more objects as needed
  ];


  return (
    <div ref={ref}>
      <div data-scroll className="feat__Scroll-con">
        <div className="slider__Wrap" id="products" ref={Horizontalref}>
          <div className="slider">
            <div className="slider__flex">

              {/* Progress bar */}
              <div className="progress_Bar_cont"><div className="progress-bar" style={{ height: '0%' }}></div></div>
              {/* <VerticalProgressBar progress={progress} /> */}
              <div className="slider__col">

                <div className="slider__thumbs">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <span className="thumb_txt">Organization</span>
                      </div>
                      <div className="swiper-slide">
                        <span className="thumb_txt">Employee Management</span>
                      </div>
                      <div className="swiper-slide">
                        <span className="thumb_txt">Admissions</span>
                      </div>
                      <div className="swiper-slide">
                        <span className="thumb_txt">Faculty Management</span>
                      </div>
                      <div className="swiper-slide">
                        <span className="thumb_txt">Accounts</span>
                      </div>
                      <div className="swiper-slide">
                        <span className="thumb_txt">Hostel</span>
                      </div>
                      <div className="swiper-slide">
                        <span className="thumb_txt">Amenities</span>
                      </div>
                      <div className="swiper-slide">
                        <span className="thumb_txt">360* Student Portal</span>
                      </div>
                      <div className="swiper-slide">
                        <span className="thumb_txt">LMS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="slider__images">
                <div className="about-slider swiper-container">
                  <div className="swiper-wrapper">
                    {data.map((item, index) => (
                      <div key={index} className="swiper-slide">
                        <div className="component">
                          <div className='prod__Comp_wrap'>
                            <div className='prod-comp-img'>
                              <img src={item.imgSrc} alt="" />
                            </div>
                            <div className='prod-comp-txt'>
                              <p>
                                {item.text}
                              </p>
                            </div>
                            <div className="sub_Modules">
                              <div className="sb__Md-ttl">
                                <h4>
                                  Sub Modules
                                </h4>
                              </div>
                              <div className="sb__List">
                                <ul>
                                  <li>
                                    <span>Home</span>
                                    <span>Branch</span>
                                    <span>Organization</span>
                                  </li>
                                  <li>
                                    <span>Home</span>
                                    <span>Branch</span>
                                    <span>Organization</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ScrollableSection;