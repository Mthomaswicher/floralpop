import floralpop from '../assets/floralpoplogo.png';
import { Row, Col } from 'react-bootstrap';
import ScrollButton from './ScrollButton';
import { Link } from 'react-router-dom';

const PageFooter = ({ navItems }) => {
  return (
    <Row className="footer">
      <Col lg={2}>
      <Link to = "/">
        <img width="100" height="100" src={floralpop} alt="floralpop" />
        </Link>
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
              Email us at 👇🏾 <br></br> <span className='email-text'>floralpopco@gmail.com</span>
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
