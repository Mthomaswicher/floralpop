import { Row, Col, Button, Container } from 'react-bootstrap';
import Lottie from 'react-lottie';
import * as animationData from '../assets/flowerfalling.json';

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
    <Container fluid>
      <Row>
        <Col md={6} className="">
          <Row>
            <Col md={8}>
              <p className="h1">Floral Pop Party Shop</p>
            </Col>
          </Row>
          <Row>
            <p className="h3 hero-subheader">
              Where the parties pop and the fun never stops
            </p>
          </Row>
          <Row>
            <Col md={10}>
              <p className="hero-text">
                We’re your one-stop shop for party decor and rentals, bringing
                the wow to every occasion. From birthdays and bridal showers to
                corporate events and heartfelt farewells, we specialize in
                creating unforgettable moments. With custom flower walls,
                balloon garlands, and unique rentals, fun’s our middle name—let
                us bring the party to you!
              </p>
              <div className="hero-btn">
                <Button href="/book-now">Book Now</Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6} className="position-relative hero-svg">
          <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
