import React from 'react'
import shape from '../../../images/shape/about-glassisom.png'

const About = (props) => {

    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="da-about-left">
                            <h2 className="title">Well-harnessed data <br /> is the catalyst to <br /> business success.</h2>
                            <div className="img"><img src={shape} alt="" /></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="da-about-right">
                            <p className="content">In an increasingly data-driven world, you need to make the most of your data to achieve success. Our AI and Data Analytics solutions bring together all your data sources.</p>
                            <p className="content">Empowering you with powerful insights that can revolutionise your business.</p>
                            <p className="content">Let us help you embrace the power of AI to drive operational efficiencies and innovation in your organisation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;