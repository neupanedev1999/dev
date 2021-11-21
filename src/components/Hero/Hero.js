import React from "react";
import { Resume } from "../../constants/constants";
import {
	ButtonContainer,
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = props => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, Welcome to <br />
        Dev Neupane's Portfolio
      </SectionTitle>
      <SectionText>
        I am an aspiring Security Researcher and undergrad currently studying
        ??? at ??? School, with main focus on Information Security.
      </SectionText>
	  <ButtonContainer>

      <Button onClick={() => (window.location = '#about')}>Know More</Button>
      <Button onClick={() => (window.location = `${Resume}`)}>Download Resume</Button>
	  </ButtonContainer>
    </LeftSection>
  </Section>
)

export default Hero;
