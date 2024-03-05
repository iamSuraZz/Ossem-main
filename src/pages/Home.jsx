import React, { useEffect } from "react";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
import ResizableImages from "../components/Home/ResizerSection/ResizeabeImage";
// import BlurSection from "../components/Home/BlurSection/BlurSection";
// import TabSection from "../components/Home/TabSection/TabSection";
import Hero from "../components/Home/Hero/Hero";
import Cliente from "../components/Home/Cliente/Cliente";
import Features from "../components/Home/Features/Features";
import Benefits from "../components/Home/Benefits/Benefits";
// import About from "../components/Home/About/About";

import AboutUs from "../components/Home/About/AboutUs";

import Lenis from '@studio-freight/lenis';

import ScrollToTop from "../components/ScrollToTop";

const Home = () => {

  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      // console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>

      {/* <Header /> */}
      <Hero />
      <Benefits></Benefits>
      <AboutUs></AboutUs>
      {/* <About></About> */}
      {/* <TabSection /> */}
      {/* <BlurSection /> */}
      <ResizableImages />
      <Features />
      <Cliente />
      {/* <Footer /> */}

      <ScrollToTop></ScrollToTop>

    </>
  );
};

export default Home;
