import React from 'react';
import "./appFeatures.css";

import ScrollableSection from './ScrollableSection';

const AppFeatures = () => {
    return (
        <div className='appFeatures__Wrap'>
            <div className='app__Ft-ttl'>
                <h2>
                    Ossem Application<br></br><span>Features</span>
                </h2>
            </div>
            <div className='app_Ft-sl'>
                <ScrollableSection></ScrollableSection>
            </div>
        </div>
    )
}

export default AppFeatures