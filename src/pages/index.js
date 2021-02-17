import React from 'react';
import About from '../components/about/index';
import AboutBanner from '../components/about/AboutBanner';
import { Router } from 'react-router-dom';

function Home() {
  return (
    <>

      <AboutBanner />
      <About />
    </>
  );
}

export default Home;
