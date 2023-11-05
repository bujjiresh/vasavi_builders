import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Menu = () => {
  return (  
    <Navbar expand="lg"  fixed="top" className="p-0">
    <Container fluid>
      <Navbar.Brand href="/"><img alt="logo1" src="https://trilight-showcase-lite.azurewebsites.net/assets/images/group_logo.png" className='logo1'/>
        <img alt="logo2" src="https://trilight-showcase-lite.azurewebsites.net/assets/images/logo.png"  className='logo2'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/location">Location Map</Nav.Link>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/location">Specifications </Nav.Link>
          <Nav.Link href="/">Contact </Nav.Link>
          <NavDropdown title="Share " id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Share </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
  );
};

export default Menu;
