import React from "react";
import { AiFillGithub, AiFillMediumCircle, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href='tel:123-456-7890'>+123-456-7890</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href='mailto:hari@hari.com'>hari@hari.com</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Building Projects Day by Day...</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href='https://github.com/#' target='_blank'>
						<AiFillGithub size='3rem' />
					</SocialIcons>
					<SocialIcons href='https://medium.com/#' target='_blank'>
						<AiFillMediumCircle size='3rem' />
					</SocialIcons>
					<SocialIcons href='https://linkedin.com/in/#' target='_blank'>
						<AiFillLinkedin size='3rem' />
					</SocialIcons>
					<SocialIcons href='https://twitter.com/#' target='_blank'>
						<AiFillTwitterCircle size='3rem' />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
