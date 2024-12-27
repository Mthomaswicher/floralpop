import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/Navbar';
import { Navbar, Button } from 'react-bootstrap';
import logo from '../assets/floralpoplogo.png';
import ig from '../assets/ig.png';

const Navigation = () => {
  const navbarItems = [
    {
      link: 'About Us',
      path: '/about-us',
    },
    {
      link: 'Our Services',
      path: '/services',
    },
    {
      link: 'Contact Us',
      path: '/contact',
    },
  ];

  return (
    <Navbar bg="#FFFFFF" expand="sm" className="bg-body-tertiary">
      <NavbarBrand href="#home">
        <Nav.Link href="/">
          <img
            alt="logo"
            src={logo}
            width="64"
            height="64"
            className="d-inline-block align-top"
          />
        </Nav.Link>
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {navbarItems.map((link) => {
            return <Nav.Link href={link.path}>{link.link}</Nav.Link>;
          })}
          <Button href="/book-now">Book now</Button>
          <div className="vr" />
          <a href="https://www.instagram.com/floralpopco/" target="_blank" rel="noreferrer">
            <img className="social" src={ig} alt="instagram" />
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
