import React, { Fragment, useState } from 'react';
import Services from '../../api/service'
import { useParams } from 'react-router-dom'
import ModalVideo from 'react-modal-video'
import Header from '../../components/header/Header';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import Bg from '../../images/bg/page_bg01.jpg'
import icon from '../../images/icon/ser-01.svg'
import srImg from '../../images/shape/brd_shape.png'
import srImg2 from '../../images/hero/sd-img.png'
import vImg from '../../images/video/img03.jpg'
import vImg2 from '../../images/video/polygon02.png'
import sImg1 from '../../images/icon/sd-icon01.svg'
import sImg2 from '../../images/icon/sd-icon02.svg'
import sImg3 from '../../images/icon/sd-icon03.svg'
import sImg4 from '../../images/icon/sd-icon04.svg'
import shape from '../../images/shape/sd-shape.png'
import sicon from '../../images/icon/check-icon.svg'


const ServiceSinglePage = (props) => {

    const { slug } = useParams()

    const ServiceDetails = Services.find(item => item.slug === slug)

    const [isOpen, setOpen] = useState(false)

    return (
        <Fragment>
            <div className="sco_agency">
                <Header />
                <main className="page_content service-single-page">
                    <section className="page-title  pt-200 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                        <div className="container">
                            <div className="page-title-wrap sd-title-wrap">
                                <div className="row mt-none-30 align-items-end">
                                    <div className="col-lg-9 mt-30">
                                        <div className="page-title-box">
                                            <span className="sub-title"><img src={icon} alt="" /> {ServiceDetails.title} Services</span>
                                            <h2 className="title">Discover our comprehensive <br /> SEO services to boost your <br /> online presence</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-30">
                                        <div className="sd-right-img pos-rel">
                                            <img src={srImg2} alt="" />
                                            <div className="sd-arrow-shape">
                                                <img className="xbzoominzoomup" src={srImg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="video pt-70 pb-65">
                        <div className="container">
                            <div className="xb-video sd-video pos-rel">
                                <img src={vImg} alt="" />
                                <button className="popup-video btn-video" onClick={() => setOpen(true)}><img src={vImg2} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="sd-ser-content_wrap pb-110">
                        <div className="container">
                            <div className="sd-ser-content">
                                <h2 className="sd-title">Boost your authority with link building</h2>
                                <p className="sd-content">
                                    In today’s competitive digital landscape, link building is essential for enhancing your website's authority and visibility. By acquiring high-quality backlinks from reputable sources, you not only improve your search engine rankings but also establish credibility within your industry. This strategic approach involves identifying relevant opportunities, fostering relationships with influential websites, and creating valuable content that encourages organic links. As your backlink profile grows, so does your domain authority, leading to increased organic traffic and greater trust from both users and search engines
                                </p>
                                <br />
                                <p className="sd-content">
                                    Finally, consistently monitor your progress through analytics, adjusting your tactics as needed to maximize results. By focusing on quality over quantity, you can cultivate a robust network of backlinks that significantly boosts your site's authority and enhances its overall performance in search engine results.Implement a targeted outreach campaign to connect with relevant websites and industry influencers, emphasizing the value your content brings.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sd-process_warp">
                        <div className="container">
                            <div className="sd-heading">
                                <h2 className="sd-title">Service process</h2>
                                <p className="sd-content">Our service process begins with a thorough consultation and website audit, followed by competitor analysis to inform a tailored marketing campaign. We maintain regular communication and provide comprehensive reporting to ensure optimal results and continuous improvement.</p>
                            </div>
                            <div className="sd-process_inner ul_li">
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg1} alt="" /></div>
                                    <h3 className="xb-item--title">Initial website audit</h3>
                                    <p className="xb-item--contact">Assess your website's SEO performance and backlink.</p>
                                    <span className="xb-item--number">01</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg2} alt="" /></div>
                                    <h3 className="xb-item--title">Competitor analysis</h3>
                                    <p className="xb-item--contact">Analyze link strategies to find valuable opportunities.</p>
                                    <span className="xb-item--number">02</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg3} alt="" /></div>
                                    <h3 className="xb-item--title">Targeted campaign</h3>
                                    <p className="xb-item--contact">Connect with relevant sites to secure quality backlinks.</p>
                                    <span className="xb-item--number">03</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg4} alt="" /></div>
                                    <h3 className="xb-item--title">Reporting</h3>
                                    <p className="xb-item--contact">Track performance and provide regular progress updates.</p>
                                    <span className="xb-item--number">04</span>
                                </div>
                                <div className="sd-shape"><img src={shape} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="sd-service_wrap pt-115 pb-130">
                        <div className="container">
                            <div className="sd-ser-outcome">
                                <div className="sd-heading">
                                    <h2 className="sd-title">Services outcome</h2>
                                    <p className="sd-content">Here are six key points related to "Boost Your Authority with Link Building" in the context of digital transformation and risk management <br /> solutions for Fortune 500 companies, with a bit more detail:</p>
                                </div>
                                <div className="sd-list-item ul_li">
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Enhance Credibility and Trust.</li>
                                        <li><img src={sicon} alt="" />Improve Search Engine Rankings.</li>
                                        <li><img src={sicon} alt="" />Foster Strategic Partnerships.</li>
                                    </ul>
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Showcase Thought Leadership.</li>
                                        <li><img src={sicon} alt="" />Drive Targeted Traffic.</li>
                                        <li><img src={sicon} alt="" />Support Long-Term Growth.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <CtaSection />
            </div>
            <Footer />
            <Scrollbar />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </Fragment>
    )
};
export default ServiceSinglePage;