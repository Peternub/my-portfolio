import React from 'react';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import PricingSection from './PricingSection';
import ReviewsSection from './ReviewsSection';
import ContactSection from './ContactSection';

const MainContent = () => {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <PricingSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
};

export default MainContent;