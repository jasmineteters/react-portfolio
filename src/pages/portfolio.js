import React from 'react';
import PortfolioBanner from '../components/portfolio/portfolioBanner';
import PortfolioContent from '../components/portfolio/portfolioContent';
import Skills from '../components/portfolio/skills';

const Portfolio = () => {
  return (
    <>
      <PortfolioBanner />
      <Skills />
      <PortfolioContent />
    </>
  );
};

export default Portfolio;
