import React from 'react'
import CountUp, { useCountUp } from 'react-countup';
import sIcon1 from '../../../images/icon/chart-icon02.png'
import sIcon2 from '../../../images/icon/receipt-icon.png'
import sIcon3 from '../../../images/icon/wallet.png';



const FunFactSection = (props) => {

    useCountUp({
        end: '56656',
        ref: 'counter',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });


    return (

        <section className="fanfact pb-130">
            <div className="container">
                <div className="fanfact-wrap ul_li_between mt-none-30">
                    <div className="xb-fanfact-item wow fadeInLeft" data-wow-delay="000ms" data-wow-duration="600ms">
                        <div className="xb-item--holder mb-25 ul_li_between">
                            <h2 className="xb-item--number"><CountUp end={286} enableScrollSpy />%</h2>
                            <span><img src={sIcon1} alt="" /></span>
                        </div>
                        <p className="xb-item--content">Average ROI customers have achieved <br /> over a three-year period.</p>
                    </div>
                    <div className="xb-fanfact-item xb-fanfact-item--two wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="600ms">
                        <div className="xb-item--holder mb-25 ul_li_between">
                            <h2 className="xb-item--number"><CountUp end={10} enableScrollSpy /> Months</h2>
                            <span><img src={sIcon2} alt="" /></span>
                        </div>
                        <p className="xb-item--content">Time it took for customers to achieve <br /> full payback on their investment.</p>
                    </div>
                    <div className="xb-fanfact-item xb-fanfact-item--three wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="600ms">
                        <div className="xb-item--holder mb-25 ul_li_between">
                            <h2 className="xb-item--number">$<CountUp end={20} enableScrollSpy />M</h2>
                            <span><img src={sIcon3} alt="" /></span>
                        </div>
                        <p className="xb-item--content">Customer Net Present Value Over <br /> a Three-Year Timespan</p>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default FunFactSection;