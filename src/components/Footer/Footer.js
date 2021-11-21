import React from 'react'
import {
  AiFillGithub,
  AiFillMediumCircle,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai'
import { FooterContent } from '../../constants/constants'

import { SocialIcons } from '../Header/HeaderStyles'
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
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href={`tel:` + FooterContent.phoneNumber}>
            {FooterContent.phoneNumber}
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={`mailto:` + FooterContent.emailAddress}>
            {FooterContent.emailAddress}
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>{FooterContent.footerText}</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Neupanedev1999" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://medium.com/#" target="_blank">
            <AiFillMediumCircle size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://linkedin.com/in/neupanedev"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://twitter.com/devrajneupane4"
            target="_blank"
          >
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
