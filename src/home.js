import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/Dropdown'
class home extends Component {
  render() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand href="#home">Home Page</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      
    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">My Courses</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Signout</NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>

        </div>
        );
    }
  }
  
  export default home