import React, { useEffect } from 'react';
import "./Testimonial.css";

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const Testimonial = () => {

  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container.testimonial_sw', {
      slidesPerView: 1,
      speed: 500,
      grabCursor: true,
      freeMode: false,
      loop: true,
      mousewheel: false,
      keyboard: {
        enabled: true,
      },
      // effect: 'fade',
      // fadeEffect: {
      //     crossFade: true
      // },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination.test_pg",
        dynamicBullets: false,
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
    return () => {
      mySwiper.destroy();
    };
  }, []);

  return (
    <>
      <div className='testimonial__Sec'>
        <div className='tst_Swp-cnt'>
          <div className='tst__Ttl-txt'>
            <h3>
              Testimonials
            </h3>
          </div>
          <div className="swiper-container testimonial_sw">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className='tst__Sl'>
                  <div className='tst_Txt'>
                    {/* <h3>Testimonial1</h3> */}
                    <div className='test__Para'>
                      <p>
                        Lorem ipsum dolor sit  amet, consectetur adipiscing elit,
                        sed do Lorem ipsum dolor sit  amet, consectetur
                      </p>
                      <p>
                        Lorem ipsum dolor sit  amet, consectetur adipiscing elit,
                        sed do Lorem ipsum dolor sit  amet, consectetur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className='tst__Sl'>
                  <div className='tst_Txt'>
                    {/* <h3>Testimonial2</h3> */}
                    <div className='test__Para'>
                      <p>
                        Lorem ipsum dolor sit  amet, consectetur adipiscing elit,
                        sed do Lorem ipsum dolor sit  amet, consectetur
                      </p>
                      <p>
                        Lorem ipsum dolor sit  amet, consectetur adipiscing elit,
                        sed do Lorem ipsum dolor sit  amet, consectetur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className='tst__Sl'>
                  <div className='tst_Txt'>
                    {/* <h3>Testimonial3</h3> */}
                    <div className='test__Para'>
                      <p>
                        Lorem ipsum dolor sit  amet, consectetur adipiscing elit,
                        sed do Lorem ipsum dolor sit  amet, consectetur
                      </p>
                      <p>
                        Lorem ipsum dolor sit  amet, consectetur adipiscing elit,
                        sed do Lorem ipsum dolor sit  amet, consectetur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more slides as needed */}
            </div>

            {/* <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-scrollbar"></div> */}
          </div>
        </div>
        <div className="swiper-pagination test_pg"></div>
      </div>
    </>
  );
}

export default Testimonial;
