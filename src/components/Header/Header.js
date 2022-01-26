import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Pad>
          <Logo />
        </Pad>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Pad />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  padding: 20px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  align-items: baseline;
  height: 72px;
`;

const Nav = styled.nav`
  margin: 0 3rem;
  display: flex;
`;

const Pad = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  margin-left: 3rem;

  &:first-of-type {
    color: ${COLORS.secondary};
    margin-left: 0;
  }
`;

export default Header;
