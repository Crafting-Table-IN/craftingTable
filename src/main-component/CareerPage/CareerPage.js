import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Bg from '../../images/bg/page_bg01.jpg'
import CtaSection from '../../components/CtaSection/CtaSection';
import icon from '../../images/icon/magic.svg'
import gImg1 from '../../images/gallery/cp-img01.jpg'
import gImg2 from '../../images/gallery/cp-img02.jpg'
import gImg3 from '../../images/gallery/cp-img03.jpg'
import gImg4 from '../../images/gallery/cp-img04.jpg'
import gImg5 from '../../images/gallery/cp-img05.jpg'
import gImg6 from '../../images/gallery/cp-img06.jpg'
import Video from '../../images/video.mp4'
import Process from './Process';
import CareerTeam from './CareerTeam';
import WorkSection from '../TeamPage/work';
import GallerySection from './Gallery';

const CareerPage = (props) => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <Header />
                <section className="page-title cp-page-title pt-200 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap">
                            <div className="row mt-none-30 align-items-center">
                                <div className="col-lg-8 mt-30">
                                    <div className="page-title-box">
                                        <span className="sub-title"><img src={icon} alt="" />Careers</span>
                                        <h2 className="title">Be a part of shaping the <br /> future & career opportunities <br /> at Innomax today.</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-30">
                                    <div className="cp-img-slide">
                                        <div className="cp-img-inner ul_li">
                                            <div className="cp-item marquee-first">
                                                <div className="xb-img"><img src={gImg1} alt="" /></div>
                                                <div className="xb-img"><img src={gImg2} alt="" /></div>
                                                <div className="xb-img"><img src={gImg3} alt="" /></div>
                                                <div className="xb-img"><img src={gImg1} alt="" /></div>
                                                <div className="xb-img"><img src={gImg2} alt="" /></div>
                                                <div className="xb-img"><img src={gImg3} alt="" /></div>
                                            </div>
                                            <div className="cp-item marquee-2">
                                                <div className="xb-img"><img src={gImg4} alt="" /></div>
                                                <div className="xb-img"><img src={gImg5} alt="" /></div>
                                                <div className="xb-img"><img src={gImg6} alt="" /></div>
                                                <div className="xb-img"><img src={gImg4} alt="" /></div>
                                                <div className="xb-img"><img src={gImg5} alt="" /></div>
                                                <div className="xb-img"><img src={gImg6} alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Process />
                <CareerTeam />
                <WorkSection bg={'sbg pt-130'} />
                <div className="cp-video pb-130">
                    <div className="container">
                        <div className="xb-img pos-rel d-block">
                            <div className="career_video">
                                <video
                                    className="responsive-video"
                                    loop
                                    muted
                                    playsInline
                                    autoPlay
                                >
                                    <source src={Video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <h2 className="title">innomax</h2>
                        </div>
                    </div>
                </div>
                <GallerySection />
                <CtaSection />
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CareerPage;
