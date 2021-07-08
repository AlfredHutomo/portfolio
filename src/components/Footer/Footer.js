import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiReact } from "react-icons/di";
import { IoLogoVercel } from "react-icons/io5";

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
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:alfredhutomo@gmail.com'>
            alfredhutomo[at]gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Made with <DiReact /> & <IoLogoVercel /> by Alfred
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://www.github.com/AlfredHutomo'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/alfred-hutomo'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.instagram.com/alfredhutomo'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
