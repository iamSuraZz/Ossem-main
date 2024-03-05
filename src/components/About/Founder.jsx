import React from 'react';
import "./founder.css";




const Founder = () => {
    return (
        <>
            <div className="d__Og-s">
                <h3 className="d_mn-ttl">
                    Loreum Ipsum
                </h3>
                <div className="d_Card-wrap">
                    <div className="d_card d_card-1">
                        <img src="assets/img/fnd.png" alt='founder' />
                        <div className="d_crd-cnt">
                            <h3 className="">Karteek Routh</h3>
                            <p className="">Co Founder</p>
                            <div className="">Marketing & Sales</div>
                        </div>
                    </div>
                    <div className="d_card d_card-2">
                        <img src="assets/img/fnd.png" alt='founder' />
                        <div className="d_crd-cnt">
                            <h3 className="">Karteek Routh</h3>
                            <p className="">Co Founder</p>
                            <div className="">Digital Marketing</div>
                        </div>
                    </div>
                    <div className="d_card d_card-3">
                        <img src="assets/img/fnd.png" alt='founder' />
                        <div className="d_crd-cnt">
                            <h3 className="">Karteek Routh</h3>
                            <p className="">Co Founder</p>
                            <div className="">Digital Marketing</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fnd__ext-para'>
                <h3>
                    Easily customizable<br></br>extension templates
                </h3>
                <p>
                    Quickly set up your first Private Extension and speed up common workflows that best suit your team’s needs.
                </p>
            </div>
        </>
    );
}

export default Founder;
