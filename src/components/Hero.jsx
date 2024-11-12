import { Row, Col, Button } from 'react-bootstrap';
import floral from '../assets/flowers.png';
import flowers from '../assets/floralpattern.png';
import Lottie from 'react-lottie';
import * as animationData from '../assets/flowerfalling.json';
import cart from "../assets/cart.png";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Row className="heroRow">
      <Col lg={7}>
        <Row>
          <h1 className="heroHeader">Welcome to Floral Pop Co.</h1>
        </Row>
        <Row>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Row>
        <Row><Button>Book Now</Button></Row>
      </Col>

      <Col className="floralcol" lg={5}>
        <Lottie options={defaultOptions} />
      </Col>
    </Row>
  );
};

export default Hero;
