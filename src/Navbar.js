import React, {Component} from 'react';
import { Navbar, Container, Nav, NavDropdown, NavItem} from 'react-bootstrap';
import { FaTheaterMasks } from 'react-icons/fa';
import { GiShinyApple } from "react-icons/gi";
import { FaWheelchair, FaDeaf, FaBlind } from 'react-icons/fa';
import { AiFillCamera } from "react-icons/ai";





class RenderNavbar extends Component {
  render() {
    return (
      <Navbar id="hem" bg="" expand="lg">
      <Container>
      <image><img src="gdt-logo.svg" alt="Logga Göteborgs Dramatiska teater" width="75" height="" /></image>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#hem">Hem</Nav.Link>
            <Nav.Link href="https://kulturpunkten.nu/arrangorer/goteborgs-dramatiska-teater/">Våra föreställningar</Nav.Link>
            <NavDropdown title="Mera" id="basic-nav-dropdown">
              <NavDropdown.Item href="#om"><FaTheaterMasks /> Om oss</NavDropdown.Item>
              <NavDropdown.Item href="#tillganglighet">
               
                <FaDeaf /> Om tillgänglighet</NavDropdown.Item>
              <NavDropdown.Item href="#infopedagoger"><GiShinyApple /> För pedagoger</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#"><AiFillCamera /> Press</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
}

export default RenderNavbar