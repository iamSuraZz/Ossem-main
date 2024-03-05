import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

const Component1 = () => {
    return (
        <div
            className={`component`}
            id='component4'
        >
            {/* Your Component 1 content */}
            <div className='prod__Comp_wrap'>
                <div className='prod-comp-img'>
                    <img src="assets/img/org.png" alt="org" />
                </div>
                <div className='prod-comp-txt'>
                    <p>
                        Synthesizing and combining business needs from legacy code,
                        to-be business process diagrams, requirements documentation,
                        user stories, and more within the rhino.ai platform helps customers
                        determine what the keep from their legacy portfolio versus what needs
                        to be transformed with the benefit of new platform technology
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Component1;