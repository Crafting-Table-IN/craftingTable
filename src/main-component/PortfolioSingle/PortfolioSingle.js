import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import caseStudies from '../../api/case';
import Project from '../../api/project'
import { Link, useParams } from 'react-router-dom';
import Scrollbar from '../../components/scrollbar/scrollbar'
import CtaSection from '../../components/CtaSection/CtaSection';
import Footer from '../../components/footer/Footer';
import Bg from '../../images/bg/page_bg01.jpg'
import icon from '../../images/icon/eye-icon.svg'
import caseImg from '../../images/service/cd-image.jpg'
import cIcon1 from '../../images/icon/csd-icon01.svg'
import cIcon2 from '../../images/icon/csd-icon02.svg'
import cIcon3 from '../../images/icon/csd-icon03.svg'
import cIcon4 from '../../images/icon/csd-icon04.svg'
import cIcon from '../../images/icon/check-icon.svg'


const PortfolioSingle = (props) => {
    const { slug } = useParams()

    const portfolioDetails = Project.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <Header />
                <section className="page-title pt-200 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap">
                            <div className="row mt-none-30 align-items-end">
                                <div className="col-lg-9 mt-30">
                                    <div className="page-title-box">
                                        <span className="sub-title"><img src={icon} alt="" /> {portfolioDetails.title}</span>
                                        <h2 className="title">Discover our case studies <br /> highlighting transformative <br /> SEO and IT solutions</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 mt-30">
                                    <div className="count-box">
                                        <h2 className="number">10<span className="suffix">+</span></h2>
                                        <span className="text">our most popular <br /> casestudy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="csd-img pt-70 pb-65">
                    <div className="container">
                        <div className="item-details_image pos-rel">
                            <img src={caseImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="sd-ser-content_wrap pb-90">
                    <div className="container">
                        <div className="sd-ser-content">
                            <h2 className="sd-title">Online media management boost your presence</h2>
                            <p className="sd-content">
                                Effective online media management is essential for businesses looking to strengthen their digital footprint and engage with a wider audience. By strategically managing content across social media platforms, blogs, and websites, businesses can ensure consistent messaging, improve brand visibility, and build stronger connections with customers. This process includes optimizing posts,monitoring analytics, and adjusting strategies based on performance.
                            </p>
                            <br />
                            <p className="sd-content">
                                Effective online media management not only enhances visibility but also fosters meaningful interactions with customers, driving brand loyalty and improving customer retention. Additionally, by actively monitoring trends and audience behaviors, businesses can stay ahead of competitors, position themselves.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="csd-ser_warp">
                    <div className="container">
                        <div className="csd-ser_inner ul_li_between">
                            <div className="csd-item ul_li">
                                <div className="xb-icon"><img src={cIcon1} alt="" /></div>
                                <h6 className="xb-text">client : <span> innomax</span></h6>
                            </div>
                            <div className="csd-item ul_li">
                                <div className="xb-icon"><img src={cIcon2} alt="" /></div>
                                <h6 className="xb-text">services : <span> Marketing</span></h6>
                            </div>
                            <div className="csd-item ul_li">
                                <div className="xb-icon"><img src={cIcon3} alt="" /></div>
                                <h6 className="xb-text">completed date : <span> 20-11-2024</span></h6>
                            </div>
                            <div className="csd-item ul_li">
                                <div className="xb-icon"><img src={cIcon4} alt="" /></div>
                                <h6 className="xb-text">location : <span> New York,NY,USA</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sd-service_wrap pt-90 pb-130">
                    <div className="container">
                        <div className="sd-ser-outcome">
                            <div className="sd-heading">
                                <h2 className="sd-title">Project requirement</h2>
                                <p className="sd-content">Our client seeks optimize presence across platforms, connecting you with your audience and driving engagement. We help you build a strong online <br /> identity that boosts profitability and supports business growth.</p>
                            </div>
                            <div className="sd-list-item ul_li">
                                <ul className="sd-ser-list list-unstyled">
                                    <li><img src={cIcon} alt="" />Platform Audit & Strategy Development.</li>
                                    <li><img src={cIcon} alt="" />Content Creation & Curation.</li>
                                    <li><img src={cIcon} alt="" />SEO Optimization Search Engines.</li>
                                    <li><img src={cIcon} alt="" />Scheduling & Consistency.</li>
                                </ul>
                                <ul className="sd-ser-list list-unstyled">
                                    <li><img src={cIcon} alt="" />Analytics & Performance Monitoring.</li>
                                    <li><img src={cIcon} alt="" />Community Management.</li>
                                    <li><img src={cIcon} alt="" />Ongoing Adjustments & Reporting.</li>
                                    <li><img src={cIcon} alt="" />Ad Campaign Integration.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="sd-heading csd-heading pt-90">
                            <h2 className="sd-title">Solution & result</h2>
                            <p className="sd-content"><span>Solution:</span> Our online media management services streamline your brand's digital presence by developing tailored strategies for content creation, social media engagement, and audience targeting. We utilize data-driven insights to enhance your online visibility across multiple platforms.
                            </p>
                            <br />
                            <p className="sd-content"><span>Result:</span> By implementing these solutions, businesses experience increased brand awareness, higher engagement rates, and improved customer loyalty. Our clients have seen significant growth in website traffic and profitability, solidifying their position in the competitive digital landscape.
                            </p>
                        </div>

                        <div className="similar-casestudy pt-80">
                            <h2 className="similar-casestudy-title">Our similar casestudy</h2>
                            <div className="row mt-none-30">
                                {caseStudies.slice(3, 6).map((cases, citem) => (
                                    <div className="col-lg-4 col-md-6 mt-30" key={citem}>
                                        <div className="casestudy-item">
                                            <div className="casestudy-img">
                                                <Link onClick={ClickHandler} to={`/casestudy-details/${cases.slug}`}>
                                                    <img src={cases.img} alt="" />
                                                </Link>
                                                <div className="content_wrap">
                                                    <h3 className="item_title">{cases.title}</h3>
                                                    <span className="item_tag">{cases.slug}</span>
                                                </div>
                                            </div>
                                            <Link onClick={ClickHandler} to={`/casestudy-details/${cases.slug}`} className="xb-overlay"></Link>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
                <CtaSection />
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PortfolioSingle;
