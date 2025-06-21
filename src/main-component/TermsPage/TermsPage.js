import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
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

const TermsPage = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
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
                                        <span className="sub-title"><img src={icon} alt="" />Terms & Conditions</span>
                                        <h2 className="title">Innomax website terms & <br /> conditions your access and <br /> usage rights</h2>
                                        <span className="page-update_time">Updated on : December 10th, 2024</span>
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
                <section className="terms&conditions-section cp-det-bg">
                    <div className="container">
                        <div className="terms-section_inner pt-120 pb-75">
                            <div className="row">
                                <div className="col-lg-11">
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Copyright and intellectual property usage</h2>
                                        <p>All content on this website, including text, graphics, logos, and trademarks, is the intellectual property of Innomax and is protected by copyright, trademark, and other relevant laws. Unauthorized use, reproduction, or distribution of this material may violate these laws, leading to potential legal consequences. Innomax is not responsible for any third-party logos present on the site; their copyright remains with their respective owners. Users agree not to copy, republish, download, transmit, modify, rent, loan, sell, distribute, license, or create derivative works from any content or services offered through this site without explicit permission.</p>
                                        <p>Images on this website may include licensed stock photos, to which Innomax does not claim copyright ownership. All other trademarks and trade names are the properties of their respective owners.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Website usage terms</h2>
                                        <p>By accessing this website, you agree to comply with the following terms. You must not reproduce, modify, or distribute any content—including text, images, graphics, videos, and audio—for public or commercial use without authorization. Unauthorized use of website material may result in civil or criminal penalties. Innomax reserves all rights not expressly granted herein.</p>
                                        <p>Additionally, users must not submit or transmit any unlawful, abusive, defamatory, or otherwise offensive material via this website. Contact information, including email addresses found here, must not be used for unsolicited or promotional communications.</p>
                                        <p>This website may contain links to external sites. Innomax disclaims any responsibility for the content or privacy practices of third-party sites accessed through such links. Visiting these sites is solely at the user’s own risk.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Software and services</h2>
                                        <p>Our services, provided on an "as-is" and "as-available" basis, are governed by legally binding agreements that outline specific terms of service. You must give express consent to these terms to initiate service, making the agreement binding on both parties.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Personal information policy</h2>
                                        <p>Innomax adheres to ethical business practices and safeguards your personal information according to our Privacy Policy, which you should review for detailed information.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Disclaimer</h2>
                                        <p>Information on this website is provided in good faith and sourced from reliable providers. However, it may contain inaccuracies or typographical errors. Innomax makes no express or implied warranties regarding the information, products, or services available on this site, and it should not be considered as professional advice.</p>
                                        <p>Innomax disclaims all warranties, including those related to fitness for a particular purpose. Usage of any services or material through this site is at the user’s own discretion and risk. Innomax shall not be held liable for any direct, incidental, or consequential damages resulting from your use or inability to use this site or its content. Users agree to indemnify Innomax from any losses, damages, or expenses, including attorney fees, related to misuse of the site’s content or services.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Limitation of liability</h2>
                                        <p>Innomax disclaims liability for any damages, including lost data or profits, regardless of foreseeability or prior notification. This limitation may not apply in jurisdictions that prohibit exclusion of liability.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Contact</h2>
                                        <p><Link onClick={ClickHandler} to="/contact" className="details-link">Click here</Link> to contact us regarding this Terms & Conditions or other related issues. You can also send us an e-mail <br/> on: <a href="mailto:contact@innomax.com">contact@innomax.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <CtaSection cClass={'bg'}/>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TermsPage;
