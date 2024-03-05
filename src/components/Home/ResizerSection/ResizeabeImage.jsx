import React, { useState } from "react";
import "./ResizeableImage.css";

import image1 from "../../../assets/cards1.jpg";
import image2 from "../../../assets/Cards1.svg";
import image3 from "../../../assets/Card3.svg";
import image4 from "../../../assets/cards4.jpg";

import { Link } from "react-router-dom";

const ResizableImages = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: image1,
      title: "Management",
      subTitle: "Optimize resource utilization.",
    },
    {
      src: image2,
      title: "Faculty",
      subTitle: "Optimize resource utilization.",
    },
    {
      src: image3,
      title: "Parent's",
      subTitle: "Optimize resource utilization.",
    },
    {
      src: image4,
      title: "Student's",
      subTitle: "Optimize resource utilization.",
    },
  ];

  return (
    <div className="who__Sec">
      <div className="wrapper-resizer">
        <div className="wh__Ttl">
          <h2>Who Are You?</h2>
        </div>
        <div className="resize-container">
          {images.map((item, index) => (
            <div
              key={index}
              className={`resizeList ${index === activeIndex ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="rsz__Cnt">
                <div className="clr__Blt">
                  <span></span>
                </div>
                <h4>{`0${index + 1} `}</h4>
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
              </div>
              <div className="rsz__Img">
                <img src={item.src} alt={`Image ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="wh_kn">
        <div id="btn_container">
          <Link to="/features" className="learn-more-btn">
            <span className="circle-btn" aria-hidden="true">
              <span className="icon-btn arrow-btn"></span>
            </span>
            <span class="button-text">Know more</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResizableImages;
