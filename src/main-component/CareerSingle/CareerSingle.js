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


const CareerSingle = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
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
                <div className="cp-det-bg">
                    <section className="career-details">
                        <div className="container">
                            <div className="cp-details-wrap">
                                <div className="cp-manager_info">
                                    <h2 className="xb-item--title">Technical project manager - (Full-time)</h2>
                                    <ul className="xb-details-content list-unstyled">
                                        <li><span>Department :</span> Technical Project Manager</li>
                                        <li><span>No. of Openings :</span> (3)</li>
                                        <li><span>FullJob Type :</span> -Time</li>
                                        <li><span>Location :</span> Warsaw, Poland</li>
                                        <li><span>Working days </span>: $80k to $100k (Based on your experience).</li>
                                        <li> <span>Deadline :</span> December 10, 2024</li>
                                        <li><span>Experience Required :</span> 5+ Years</li>
                                    </ul>
                                    <p className="xb-item--content">
                                        We’re looking for a Technical Project Manager and knowledgeable Product Designer to join our technical team in Warsaw, Poland. You’ll be expected to utilize bleeding-edge technology and robust techniques. You should be an excellent communicator and comfortable managing multiple tasks. you also need to be a team player and have a problem-solving aptitude.
                                        <br />
                                        <br />
                                        Working quickly and creatively should come naturally to you, as well as being an innovative problem-solver who takes pride in producing logical, simple, and effective solutions to what are often very new and complex issues.
                                    </p>
                                </div>
                                <div className="xb-details-item">
                                    <h3 className="xb-item--title">What you'll get to do...</h3>
                                    <ul className="xb-details-content">
                                        <li><span>Department :</span> Technical Project Manager</li>
                                        <li><span>No. of Openings :</span> (3)</li>
                                        <li><span>FullJob Type :</span> -Time</li>
                                        <li><span>Location :</span> Warsaw, Poland</li>
                                        <li><span>Working days :</span> $80k to $100k (Based on your experience).</li>
                                        <li> <span>Deadline :</span> December 10, 2024</li>
                                        <li><span>Experience Required :</span> 5+ Years</li>
                                    </ul>
                                </div>
                                <div className="xb-details-item">
                                    <h3 className="xb-item--title">What you'll get to do...</h3>
                                    <ul className="xb-details-content">
                                        <li>6+ years of previous professional Proficient Project Management experience.</li>
                                        <li><span>Technical Expertise:</span> Solid understanding for effective communication.</li>
                                        <li><span>Stakeholder Management:</span> Track record of ensuring alignment and success.</li>
                                        <li><span>Agile Methodologies:</span> Hands-on experience in Agile frameworks.</li>
                                        <li><span>Risk Management:</span> Skill in identifying and mitigating project risks.</li>
                                        <li> <span>Team Leadership:</span> Ability to motivate diverse teams.</li>
                                        <li><span>Communication Skills:</span> Strong ability to convey technical concepts.</li>
                                        <li><span>Problem-Solving:</span> Proactive approach to implement solutions.</li>
                                        <li><span>Quality Assurance:</span> Experience in ensuring deliverable standards.</li>
                                    </ul>
                                </div>
                                <div className="xb-details-item">
                                    <h3 className="xb-item--title">You might also have...</h3>
                                    <ul className="xb-details-content">
                                        <li>Experience with AWS.</li>
                                        <li>Experience building CI/CD and server/deployment automation solutions</li>
                                        <li>Experience with open-source puppet, infrastructure-as-code.</li>
                                        <li>Passion for technology.</li>
                                        <li>You have high standards and want to make a difference with your work.</li>
                                        <li>You are always trying to improve.</li>
                                    </ul>
                                </div>
                                <div className="xb-details-item">
                                    <h3 className="xb-item--title">Great benefits...</h3>
                                    <ul className="xb-details-content">
                                        <li>Company-wide 401(k) plan.</li>
                                        <li>Life & disability insurance offered.</li>
                                        <li>Competitive compensation—salary, bonus, equity</li>
                                        <li>Medical, dental, and vision; flex spending account.</li>
                                        <li>Flexible paid time off & sick leave.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="cp-contact-wrap pt-130 pb-130">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cs-contact-wrap cs-contact-form cd-contact-form">
                                        <h2 className="xb-title">Apply for this job</h2>
                                        <p className="xb-content">innomax doesn’t accept unsolicited resumes from recruiters or employment agencies.</p>
                                        <form onSubmit={SubmitHandler} className="contact-form">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="input-field">
                                                        <label htmlFor="text1">Name*</label>
                                                        <div className="input-box">
                                                            <input type="text" name="text" id="text1" required/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-field">
                                                        <label htmlFor="text2">Email*</label>
                                                        <div className="input-box">
                                                            <input type="email" name="gmail" id="text2" required/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-field">
                                                        <label htmlFor="text3">Phone*</label>
                                                        <div className="input-box">
                                                            <input type="tel" name="number" id="text3" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-field">
                                                        <label htmlFor="text4">Address*</label>
                                                        <div className="input-box">
                                                            <input type="text" name="text" id="text4" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input-field text-field">
                                                        <label htmlFor="text5">Cover Letter</label>
                                                        <div className="input-box">
                                                            <textarea name="massage" id="text5"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cp-contact-bottom ul_li_between mt-20">
                                                <div className="xb-item--left mt-20">
                                                    <label htmlFor="file">Upload your resume / CV</label>
                                                    <input id="file" type="file" required/>
                                                    <p className="xb-item--content"><span>Accepted file types :</span> pdf, doc, jpg, Max. file size: 15 MB.</p>
                                                </div>
                                                <div className="cp-det-btn mt-20">
                                                    <button className="cp-btn">Submit now <i className="fal fa-arrow-right"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
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
export default CareerSingle;
