import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  /* .logo {
    font-family: "Bebas Neue", cursive;
  } */

  .link {
    font-family: "Montserrat", sans-serif;
    padding: 5px;
  }

  .link:after {
    display: block;
    content: "";
    border-bottom: solid 3px #fefefe;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  .link:hover:after {
    transform: scaleX(1);
  }
`;

const Header = ({ active }) => {
  return (
    <StyledHeader>
      <Navbar>
        <Nav className="ml-auto">
          <Link to="/">
            <Navbar.Brand className="link text-white">Home</Navbar.Brand>
          </Link>
          <Link to="/rankings">
            <Navbar.Brand className="link text-white">Rankings</Navbar.Brand>
          </Link>
          <Link to="/aboutme">
            <Navbar.Brand className="link text-white">About</Navbar.Brand>
          </Link>
        </Nav>
      </Navbar>
    </StyledHeader>
  );
};

export default Header;
