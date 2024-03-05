import React, { useEffect } from 'react';
import Overview from '../components/Feature/Overview/Overview';
import Hero from "../components/Feature/Hero/Hero";
import AppFeatures from '../components/Feature/AppFeatures/AppFeatures';
import Business from '../components/Feature/Business/Business';

import ScrollToTop from "../components/ScrollToTop";
import Lenis from '@studio-freight/lenis';

// import ScrollableSection from '../components/Feature/AppFeatures/ScrollableSection';

const Features = () => {

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
            <Hero></Hero>
            <Overview></Overview>
            <AppFeatures></AppFeatures>
            {/* <ScrollableSection></ScrollableSection> */}
            <Business></Business>
            <ScrollToTop></ScrollToTop>
        </>
    )
}

export default Features