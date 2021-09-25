import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumCircle, AiFillTwitterCircle } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from "./HeaderStyles";

const Header = () => (
	<Container>
		<Div1>
			<Link href='/'>
				<a
					style={{
						display: "flex",
						alignItems: "center",
						color: "white",
						marginBottom: "20px",
					}}>
					<DiCssdeck size='3rem' />
					<Span>Dev Neupane :)</Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href='#projects'>
					<NavLink>About</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#tech'>
					<NavLink>Experties</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#about'>
					<NavLink>Showcase</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
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
		</Div3>
	</Container>
);

export default Header;
