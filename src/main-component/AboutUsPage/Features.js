import React from 'react';
import sIcon1 from '../../images/icon/ab-page-icon01.svg'
import sIcon2 from '../../images/icon/ab-page-icon02.svg'
import sIcon3 from '../../images/icon/ab-page-icon03.svg'
import sIcon4 from '../../images/icon/ab-page-icon04.svg'


const FeaturesSection = (props) => {

    return (
        <section className="fanfact pt-125 pb-125">
            <div className="container">
                <div className="ap-feature_wrap">
                    <div className="row mt-none-30">
                        <div className="col-lg-3 col-md-6 mt-30">
                            <div className="ap-feature-item wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">
                                <div className="xb-item--icon"><img src={sIcon1} alt=""/></div>
                                <h4 className="xb-item--title">Deliver results</h4>
                                <p className="xb-item--content">At Innomax, delivering results means achieving success.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-30">
                            <div className="ap-feature-item wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
                                <div className="xb-item--icon"><img src={sIcon2} alt=""/></div>
                                <h4 className="xb-item--title">Being proactive</h4>
                                <p className="xb-item--content">At Innomax, being proactive means anticipating challenges. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-30">
                            <div className="ap-feature-item wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                                <div className="xb-item--icon"><img src={sIcon3} alt=""/></div>
                                <h4 className="xb-item--title">Sustainable Growth</h4>
                                <p className="xb-item--content">Sustainable growth means achieving long-term success.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-30">
                            <div className="ap-feature-item wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                                <div className="xb-item--icon"><img src={sIcon4} alt=""/></div>
                                <h4 className="xb-item--title">Maximize Speed</h4>
                                <p className="xb-item--content">we focus on delivering quick and efficient solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;