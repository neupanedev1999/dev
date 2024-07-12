// src/components/Hero/Hero.js

import React from 'react';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroStyles';

const Hero = () => (
  <HeroContainer>
    <HeroContent>
      <HeroItems>
        <HeroH1>Dev Neupane</HeroH1>
        <HeroP>Ulster University BSc graduate in Computing Systems, aspiring to kickstart a career in Information Security and IT. Eager for hands-on experience, I've actively pursued extra certifications and training during my academic journey.</HeroP>
        <HeroBtn href="/path/to/resume.pdf" download>Download Resume</HeroBtn>
      </HeroItems>
    </HeroContent>
  </HeroContainer>
);

export default Hero;


