import React from "react";
import { DiFirebase, DiReact, DiIllustrator } from "react-icons/di";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id='technologies'>
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I have work with range of technologies and here are a few to showcase about,
		</SectionText>
		<List>
			<ListItem>
				<DiFirebase size='3rem' />
				<ListContainer>
					<ListTitle>Front-end</ListTitle>
					<ListParagraph>
						Experience with <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size='3rem' />
				<ListContainer>
					<ListTitle>Back-end</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node.js and Databases
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiIllustrator size='3rem' />
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Experience with <br />
						Tools Like Figma and Illustrator
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
