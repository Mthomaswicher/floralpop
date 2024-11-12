import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar, Button } from 'react-bootstrap';
import logo from '../assets/floralpoplogo.png';
import { useState } from 'react';

const Navigation = () => {
  const navbarItems = [
    {
      link: 'About Us',
      addy: '#Aboutus',
    },
    {
      link: 'Our Services',
      addy: '#OurServices',
    },
    {
      link: 'Contact Us',
      addy: '#Contact',
    },
  ];

  return (
    <Navbar bg="#FFFFFF" expand="sm" className="bg-body-tertiary">
      <NavbarBrand href="#home">
        <img
          alt="logo"
          src={logo}
          width="64"
          height="64"
          className="d-inline-block align-top"
        />
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {navbarItems.map((link) => {
            return <Nav.Link href={link.addy}>{link.link}</Nav.Link>;
          })}
          <Button>Book now</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
