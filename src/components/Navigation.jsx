import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/Navbar';
import { Navbar, Button } from 'react-bootstrap';
import logo from '../assets/floralpoplogo.png';
import ig from '../assets/ig.png';
import 'animate.css';

const Navigation = ({ navItems }) => {
  return (
    <Navbar bg="#FFFFFF" expand="sm" className="bg-body-tertiary">
      <NavbarBrand href="#home">
        <Nav.Link href="/">
          <img
            alt="logo"
            src={logo}
            width="64"
            height="64"
            className="d-inline-block align-top navLogo"
          />
        </Nav.Link>
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {navItems.map((nav, idx) => {
            return (
              <Nav.Link href={nav.path} key={idx}>
                {nav.label}
              </Nav.Link>
            );
          })}
          <Button href="/book-now">Book now</Button>
          <div className="vr" />
          <a
          className="navLink"
            href="https://www.instagram.com/floralpopco/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="social" src={ig} alt="instagram" />
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
