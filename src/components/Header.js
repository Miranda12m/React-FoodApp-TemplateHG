import React from "react";

// react-bootstrap Navbar
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// bootswatch
import "../bootstrap.min.css"

// Navbar CSS
import "../index.css"

// Navbar Router
import { LinkContainer } from 'react-router-bootstrap'

// LogoImage
import hapagLogo from "../hapaglogo.png";

// ----------------------------------------------------

// Replace the:  "<Navbar.Brand href="/">Hapag-Lloyd</Navbar.Brand>" Hapag Logo! ||| LOGO MISSING!!!!!!!!!!

function Header() {
  return (
    <header>
      <Navbar bg="primary" variant="primary" expand="lg" collapseOnSelect>
        <Container>

          <LinkContainer to='/home'>
            <Navbar.Brand>
              <img src={hapagLogo} alt="Hapag-Lloyd Logo" style={{ width: '290px' }} />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

              <LinkContainer to='/home'>
                <Nav.Link>MENU</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/reviews'>
                <Nav.Link>REVIEWS</Nav.Link>
              </LinkContainer>

            </Nav>
            <Nav>

              <LinkContainer to='/orders'>
                <Nav.Link><i className="fas fa-shopping-cart"></i>ORDERS</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/login'>
                <Nav.Link><i className="fas fa-user"></i>LOGIN</Nav.Link>
              </LinkContainer>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
