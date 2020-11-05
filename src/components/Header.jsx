import React from "react";
import Scroll from "react-scroll";

import { Container } from "@material-ui/core";
import { Navbar, Nav } from "react-bootstrap";

function Header(props) {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant={props.variant}>
        <Navbar.Brand href="/">
          <img className="logo" src="logo.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">

            <Nav.Link onClick={() => {

                if(window.location.pathname !== "/") {window.location = "/";}
              Scroll.scroller.scrollTo("aboutUsElement", {
                smooth: true,
                duration: 500,
              });
            }}>Hakkında</Nav.Link>
            <Nav.Link onClick={() => {
                if(window.location.pathname !== "/") {window.location = "/";}
              Scroll.scroller.scrollTo("ekipElement", {
                smooth: true,
                duration: 500,
              });
            }}>Ekip</Nav.Link>
            <Nav.Link onClick={() => {
                if(window.location.pathname !== "/") {window.location = "/";}
              Scroll.scroller.scrollTo("contactElement", {
                smooth: true,
                duration: 500,
              });
            }}>İletişim</Nav.Link>
            <Nav.Link href="/Projeler">Projeler</Nav.Link>
<Nav.Link href="/Referanslar">Referanslar</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;
