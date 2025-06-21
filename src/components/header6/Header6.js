import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import icon1 from '../../images/shape/trangle-shape04.png'
import logo from '../../images/logo/logo-black03.svg'
import icon from '../../images/icon/arrow-black.png'
import MobileMenu from '../MobileMenu/MobileMenu'

const Header = (props) => {

    const [mobailActive, setMobailState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (

        <div id="xb-header-area" className="header-area header-style-two header-style-four header-transparent">
            <div className="header-top">
                <span>Get 15% off on all annual plans until September 30! Join Texpo as we transform SEO 🚀</span>
                <span><NavLink onClick={ClickHandler} to="/">Learn more</NavLink><i className="far fa-angle-right"></i></span>
                <div className="header-shape">
                    <div className="shape shape--one"><img src={icon1} alt="" /></div>
                    <div className="shape shape--two"><img src={icon1} alt="" /></div>
                </div>
            </div>
            <div className={`xb-header stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container">
                    <div className="header__wrap ul_li_between">
                        <div className="header-logo">
                            <NavLink onClick={ClickHandler} to="/"><img src={logo} alt="" /></NavLink>
                        </div>
                        <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
                            <nav className="main-menu collapse navbar-collapse">
                                <ul>
                                    <li className="menu-item-has-children">
                                        <NavLink onClick={ClickHandler} to="/"><span>Home</span></NavLink>
                                        <ul className="submenu">
                                            <li><NavLink onClick={ClickHandler} to="/"><span>SEO Agency</span></NavLink></li>
                                            <li><NavLink onClick={ClickHandler} to="/home-2"><span>It Services</span></NavLink></li>
                                            <li><NavLink onClick={ClickHandler} to="/home-3"><span>AI & Data Solutions</span></NavLink></li>
                                            <li><NavLink onClick={ClickHandler} to="/home-4"><span>Cyber Security</span></NavLink></li>
                                            <li><NavLink onClick={ClickHandler} to="/home-5"><span>Cloud and Devops</span></NavLink></li>
                                            <li><NavLink onClick={ClickHandler} to="/home-6"><span>Help desk SaaS</span></NavLink></li>
                                        </ul>
                                    </li>
                                    <li><Link to="features" spy={true} smooth={true} duration={500} offset={-100} className="menu-item">Features</Link></li>
                                    <li><Link to="funfact" spy={true} smooth={true} duration={500} offset={-100} className="menu-item">Fanfact</Link></li>
                                    <li><Link to="integration" spy={true} smooth={true} duration={500} offset={-100} className="menu-item">Integration</Link></li>
                                    <li className="menu-item-has-children">
                                        <NavLink onClick={ClickHandler} to="/blog"><span>Blog</span></NavLink>
                                        <ul className="submenu">
                                            <li><NavLink onClick={ClickHandler} to="/blog"><span>Blog</span></NavLink></li>
                                            <li><NavLink onClick={ClickHandler} to="/blog-single/AI-in-Neuroimaging-IXICOs-Cloud-Transformation"><span>Blog Details</span></NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink onClick={ClickHandler} to="/contact"><span>Contact</span></NavLink></li>
                                </ul>
                            </nav>
                            <div className="xb-header-wrap">
                                <div className={`xb-header-menu ${mobailActive ? "active" : ""}`}>
                                    <div className="xb-header-menu-scroll lenis lenis-smooth">
                                        <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)}></div>
                                        <div className="xb-logo-mobile xb-hide-xl">
                                            <NavLink onClick={ClickHandler} to="/" rel="home"><img src={logo}
                                                alt="" /></NavLink>
                                        </div>
                                        <div className="xb-header-mobile-search xb-hide-xl">
                                            <form role="search" onSubmit={SubmitHandler}>
                                                <input type="text" placeholder="Search..." name="s"
                                                    className="search-field" />
                                                <button className="search-submit" type="submit"><i
                                                    className="far fa-search"></i></button>
                                            </form>
                                        </div>
                                        <nav className="xb-header-nav">
                                            <MobileMenu />
                                        </nav>
                                    </div>
                                </div>
                                <div className="xb-header-menu-backdrop"></div>
                            </div>
                        </div>
                        <div className="header-bar-mobile side-menu d-xl-none">
                            <button className="xb-nav-mobile" onClick={() => setMobailState(!mobailActive)}>
                                <i className="far fa-bars"></i>
                            </button>
                        </div>
                        <div className="xb-btn d-none d-md-block">
                            <NavLink onClick={ClickHandler} to="/pricing" className="thm-btn thm-btn--three thm-btn--black">Start your free trial
                                <span>
                                    <img className="img--one" src={icon} alt="" />
                                    <img className="img--two" src={icon} alt="" />
                                </span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;