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

const PrivacyPage = (props) => {

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
                                        <span className="sub-title"><img src={icon} alt="" />Privacy Policy</span>
                                        <h2 className="title">Innomax website privacy <br /> policy your access and <br /> usage rights</h2>
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
                                        <h2 className="item_details_info_title">Data controller and data collection</h2>
                                        <p>Innomax is committed to safeguarding your privacy. The types of Personal Data collected may vary depending on the services offered and may be voluntarily provided by users or automatically collected when using this site. This data may include but is not limited to user-provided information, cookies, and other tracking tools. Cookies are used solely to improve the user experience and personalize service offerings.</p>
                                        <p>Certain types of data may be necessary to access and utilize specific features or services on this website. For example, contact information, account details, or preferences may be required to personalize the experience or enable specific functionalities</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">User responsibilities</h2>
                                        <p>Users are responsible for any third-party data shared via the Innomax website and affirm their rights to communicate such data, thereby relieving Innomax of any associated liability.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Data processing and security</h2>
                                        <p>Data is processed using secure IT systems at Innomax’s operational offices and in other locations necessary to support our services. Innomax ensures strict security measures to prevent unauthorized access, modification, or destruction of personal data. In some cases, data may be accessed by select team members (e.g., sales, marketing, system administration) or external parties (e.g., service providers), as authorized by Innomax.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Data storage and retention</h2>
                                        <p>Personal data is retained only for as long as necessary to fulfill the intended purpose or as required by law. Users may request data deletion or suspension at any time by contacting Innomax.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Legal action</h2>
                                        <p>Innomax may disclose personal data to comply with legal obligations or respond to public authority requests. Personal data may also be used in legal proceedings arising from improper use of the website or services.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">User rights</h2>
                                        <p>Users have the right to access, update, or delete their personal data and may contact Innomax at any time for assistance. Users can also request data anonymization or oppose processing activities under applicable laws. Such requests should be directed to the Data Controller using the contact details provided on this page.</p>
                                        <ul className="privacy-details">
                                            <li>Users can request information about the personal data Innomax holds.</li>
                                            <li>Correct any inaccurate or incomplete data.</li>
                                            <li>Request the deletion of their data when it's no longer needed.</li>
                                            <li>Request their data in a transferable format.</li>
                                            <li>Limit the processing of their data in certain situations.</li>
                                            <li>Object to the processing of their data for direct marketing or legitimate interests.</li>
                                            <li>Withdraw consent for data processing at any time.</li>
                                            <li>File a complaint with a supervisory authority if they feel their rights are violated.</li>
                                        </ul>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">"Do not track" requests</h2>
                                        <p>Innomax does not currently support “Do Not Track” requests. For information on how third-party services handle such requests, please refer to their respective privacy policies.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Policy updates</h2>
                                        <p>Innomax may update this Privacy Policy periodically. Users are encouraged to review this page regularly. Continued use of the website constitutes acceptance of these terms.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Retargeting and ad cookies</h2>
                                        <p>Innomax uses cookies for advertising purposes through partners like AdRoll. While these partners do not collect sensitive personal information, cookies allow for tailored advertising based on user interests. Users can opt out of targeted advertising through the Network Advertising Initiative.</p>
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
                <CtaSection cClassNamclassName={'bg'} />
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PrivacyPage;
