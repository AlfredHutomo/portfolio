import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

function Logo() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='80'
      height='35'
      fill='none'
      viewBox='0 0 220 160'
    >
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M76.88 16.05L0 149.97 17.407 160 84.132 43.636l22.786 42.598-30.039 24.612 2.418 17.555 67.208 26.583 13.055-13.04-26.573-50.875 20.288-15.834 43.516 82.759 16.44-10.533-43.517-85.267L220 22.57 207.429 6.52 159.56 43.636 137.319 0l-16.44 10.031 22.725 46.145-20.198 16.55L93.802 16.05H76.88zm50.768 109.342l-11.604-21.066-13.539 10.533 25.143 10.533z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
}

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
          }}
        >
          <Logo />
          <Span>Alfred Hutomo</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://www.github.com/AlfredHutomo'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/alfred-hutomo'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/alfredhutomo'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
