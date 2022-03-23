import React, {Component} from 'react';
import { Navbar, Container, Nav, NavDropdown, NavItem} from 'react-bootstrap';






class RenderNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
      <Container>
      <image><img src="gdt-logo.svg" alt="Logga Göteborgs Dramatiska teater" width="75" height="" /></image>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Hem</Nav.Link>
            <Nav.Link href="#link">Biljetter</Nav.Link>
            <NavDropdown title="Mera" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Vårens nyheter</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Om oss</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">För pedagoger</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Om tillgänglighet på teatern </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
}

export default RenderNavbar