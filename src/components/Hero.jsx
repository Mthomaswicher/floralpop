import { Row, Col, Button } from 'react-bootstrap';
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
    <Row className="heroRow">
      <Col>
        <Row xs={1}>
          <h1 className="heroHeader">Floral Pop Party Shop</h1>
        </Row>

        <Row>
          <p className="subtext">Where the parties pop and the fun never stops</p>
        </Row>
        <Row>
          <p className="subtextParagraph">
            We’re your one-stop shop for party decor and rentals, bringing the
            wow to every occasion. From birthdays and bridal showers to
            corporate events and heartfelt farewells, we specialize in creating
            unforgettable moments. With custom flower walls, balloon garlands,
            and unique rentals, fun’s our middle name—let us bring the party to
            you!
          </p>
        </Row>
        <Row>
          <Button href="/book-now">Book Now</Button>
        </Row>
      </Col>

      <Col className="d-none d-md-block d-lg-block">
        <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
      </Col>
    </Row>
  );
};

export default Hero;
