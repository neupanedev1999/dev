// src/components/Header/Header.js

import React from 'react';
import { Container, Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './HeaderStyles';

const Header = () => (
  <Container>
    <Nav>
      <NavLink to='/'>
        <h1>Dev Neupane</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to='/about' activeStyle>
          About
        </NavLink>
        <NavLink to='/education' activeStyle>
          Education
        </NavLink>
        <NavLink to='/projects' activeStyle>
          Projects
        </NavLink>
        <NavLink to='/skills' activeStyle>
          Skills
        </NavLink>
        <NavLink to='/contact' activeStyle>
          Contact
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/contact'>Contact Me</NavBtnLink>
      </NavBtn>
    </Nav>
  </Container>
);

export default Header;


