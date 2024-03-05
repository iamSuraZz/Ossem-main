import React, { useRef, useEffect } from "react";

import logo1 from "../../../assets/sreenidhi-logo 1.svg";
import logo2 from "../../../assets/Logo_Anurag_University 1.svg";
import logo3 from "../../../assets/sponser3.svg";
import "./Sponser.css";



import { motion, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";

import { useScroll } from "framer-motion";

const Sponser = ({ children, baseVelocity = 100 }) => {

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });


  return (
    <>
      <div className="parallax">
        <motion.div className="scroller" style={{ x }}>
          <span>
            <img src={logo1} alt='' width={278} height={115} />
          </span>
          <span>
            <img src={logo2} alt='' width={313} height={65} />
          </span>
          <span>
            <img src={logo3} alt='' width={288} height={110} />
          </span>
          <span>
            <img src={logo1} alt='' width={278} height={115} />
          </span>
          <span>
            <img src={logo2} alt='' width={313} height={65} />
          </span>
          <span>
            <img src={logo3} alt='' width={288} height={110} />
          </span>
          <span>
            <img src={logo1} alt='' width={278} height={115} />
          </span>
          <span>
            <img src={logo2} alt='' width={313} height={65} />
          </span>
          <span>
            <img src={logo3} alt='' width={288} height={110} />
          </span>
          <span>
            <img src={logo1} alt='' width={278} height={115} />
          </span>
          <span>
            <img src={logo2} alt='' width={313} height={65} />
          </span>
          <span>
            <img src={logo3} alt='' width={288} height={110} />
          </span>
          <span>
            <img src={logo1} alt='' width={278} height={115} />
          </span>
          <span>
            <img src={logo2} alt='' width={313} height={65} />
          </span>
          <span>
            <img src={logo3} alt='' width={288} height={110} />
          </span>
          <span>
            <img src={logo1} alt='' width={278} height={115} />
          </span>
          <span>
            <img src={logo2} alt='' width={313} height={65} />
          </span>
          <span>
            <img src={logo3} alt='' width={288} height={110} />
          </span>
          <span>
            <img src={logo1} alt='' width={278} height={115} />
          </span>
          <span>
            <img src={logo2} alt='' width={313} height={65} />
          </span>
          <span>
            <img src={logo3} alt='' width={288} height={110} />
          </span>
          <span>
            <img src={logo1} alt='' width={278} height={115} />
          </span>
          <span>
            <img src={logo2} alt='' width={313} height={65} />
          </span>
          <span>
            <img src={logo3} alt='' width={288} height={110} />
          </span>
          <span>
            <img src={logo1} alt='' width={278} height={115} />
          </span>
          <span>
            <img src={logo2} alt='' width={313} height={65} />
          </span>
          <span>
            <img src={logo3} alt='' width={288} height={110} />
          </span>
        </motion.div>
      </div>
    </>
  )
}

export default Sponser;
