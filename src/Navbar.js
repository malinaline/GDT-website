import React, {Component} from 'react';
import { Navbar, Container, Nav, NavDropdown, NavItem} from 'react-bootstrap';






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
            <Nav.Link href="https://kulturpunkten.nu/arrangorer/goteborgs-dramatiska-teater/">Biljetter</Nav.Link>
            <NavDropdown title="Mera" id="basic-nav-dropdown">
              <NavDropdown.Item href="#nyheter">Vårens nyheter</NavDropdown.Item>
              <NavDropdown.Item href="#om">Om oss</NavDropdown.Item>
              <NavDropdown.Item href="#infopedagoger">För pedagoger</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#tillganglighet">Om tillgänglighet på teatern </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
}

export default RenderNavbar