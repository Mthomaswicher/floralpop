import floralpop from '../assets/floralpoplogo.png';
import { Row, Col, Nav } from 'react-bootstrap';
import ig from '../assets/ig.png';
import ScrollButton from './ScrollButton';

const PageFooter = ({ navItems }) => {
  return (
    <Row className="footer">
      <Col lg={2}>
        <img width="64" height="64" src={floralpop} alt="floralpop" />
      </Col>
        
          {/* <Nav defaultActiveKey="/">
            {navItems.map((nav, idx) => {
              return (
                <Nav.Link href={nav.path} key={idx}>
                  {nav.label}
                </Nav.Link>
              );
            })}
          </Nav> */}
          {/* <a
            href="https://www.instagram.com/floralpopco/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="social" src={ig} alt="instagram" />
          </a> */}
      <Col className="centerfooter" lg={8}>
        <Row>
          <span className="email">
            <a className="email" href="mailto:floralpopco@gmail.com">
              Email: <span className='email-text'>floralpopco@gmail.com</span>
            </a>
          </span>
        </Row>

        <Row>
          <span className="copyright">© 2024 Floral Pop Co. </span>
        </Row>
       
      </Col>
      <ScrollButton/>
    </Row>
  );
};

export default PageFooter;
