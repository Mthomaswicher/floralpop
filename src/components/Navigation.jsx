import Nav from 'react-bootstrap/Nav';
import { Navbar, Button } from 'react-bootstrap';
import logo from '../assets/floralpoplogo.png';
import ig from '../assets/ig.png';
import 'animate.css';
import { Link } from 'react-router-dom'; // ✅ Correct import
import { useState } from 'react';

const Navigation = ({ navItems }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar expand={false} className="bg-body-tertiary">
      <Nav.Link as={Link} to="/">
        <img
          alt="logo"
          src={logo}
          width="64"
          height="64"
          className="d-inline-block align-top navLogo"
        />
      </Nav.Link>
      <Navbar.Toggle onClick={handleShow} aria-controls="basic-navbar-nav" />
      <Navbar.Offcanvas show={show} onHide={handleClose}  placement="end">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {navItems.map((nav, idx) => (
              <Nav.Link onClick={() => {
                setShow(false);
              }} as={Link} to={nav.path} key={idx}>
                {nav.label}
              </Nav.Link>
            ))}
            <div className="vr" />
            <Button
              className="fullwidth"
              target="_blank"
              href="https://www.honeybook.com/widget/floral_pop_co_203712/cf_id/61783908e47c1c07fd82b023"
            >
              Book Now
            </Button>
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
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default Navigation;
