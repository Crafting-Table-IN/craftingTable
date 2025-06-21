import React from 'react';
import sIcon1 from '../../images/icon/eye-icon.svg'
import sIcon2 from '../../images/feature/ap-feature01.jpg'
import sIcon3 from '../../images/feature/ap-feature02.jpg'
import sIcon4 from '../../images/feature/ap-feature03.jpg'


const WhyChoose = (props) => {

    return (
        <section className="feature pt-130">
                <div className="container">
                    <div className="sec-title--two text-center mb-60">
                        <div className="sub-title"><img src={sIcon1} alt=""/> Why choose us</div>
                        <h2 className="title">Customer-Centric Approach</h2>
                    </div>
                    <div className="row mt-none-30">
                        <div className="col-lg-4 col-md-6 mt-30">
                            <div className="ap-fea-item pos-rel">
                                <div className="xb-item--img"><img src={sIcon2} alt=""/></div>
                                <h3 className="xb-item--content">We don’t make empty promises</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-30">
                            <div className="ap-fea-item pos-rel">
                                <div className="xb-item--img"><img src={sIcon3} alt=""/></div>
                                <h3 className="xb-item--content">If something goes wrong, we’ll quickly fix it.</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-30">
                            <div className="ap-fea-item pos-rel">
                                <div className="xb-item--img"><img src={sIcon4} alt=""/></div>
                                <h3 className="xb-item--content">We created our own SEO tools to fill in the gaps</h3>
                            </div>
                        </div>
                    </div>
                </div>
             </section>
    );
}

export default WhyChoose;