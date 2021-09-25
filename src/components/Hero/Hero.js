import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Hi, Welcome to <br />
				Dev Neupane's Portfolio
			</SectionTitle>
			<SectionText>
				I am an aspiring Security Researcher and undergrad currently studying ??? at ??? School, with main focus on Information Security.
			</SectionText>
			<Button onClick={() => (window.location = "#about")}>Know More</Button>
		</LeftSection>
	</Section>
);

export default Hero;
