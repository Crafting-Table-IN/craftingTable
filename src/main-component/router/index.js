import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage2 from '../HomePage2/HomePage2';
import ServicePage from '../ServicePage/ServicePage';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import PricingPage from '../PricingPage/PricingPage';
import CaseStudyPage from '../CaseStudyPage/CaseStudyPage';
import CaseStudySingle from '../CaseStudySingle/CaseStudySingle';
import PortfolioSingle from '../PortfolioSingle/PortfolioSingle';
import CareerPage from '../CareerPage/CareerPage';
import CareerSingle from '../CareerSingle/CareerSingle';
import TeamPage from '../TeamPage/TeamPage';
import TermsPage from '../TermsPage/TermsPage';
import PrivacyPage from '../PrivacyPage/PrivacyPage';
import BlogPage from '../BlogPage/BlogPage';
import BlogDetails from '../BlogDetails/BlogDetails';
import ContactPage from '../ContactPage/ContactPage';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage2 />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="casestudy" element={<CaseStudyPage />} />
          <Route path="casestudy-details/:slug" element={<CaseStudySingle />} />
          <Route path="portfolio_details/:slug" element={<PortfolioSingle />} />
          <Route path="career" element={<CareerPage />} />
          <Route path="career-details" element={<CareerSingle />} />
          <Route path="terms-conditions" element={<TermsPage />} />
          <Route path="privacy-policy" element={<PrivacyPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-single/:slug" element={<BlogDetails />} />
          <Route path="contact" element={<ContactPage />} />  
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
