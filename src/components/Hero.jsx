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
      <Row className='rowPushDownLg'>
        <Col md={6} className="">
          <Row>
            <Col md={8}>
              <h1 className="heroHeader">Floral Pop Party Shop</h1>
            </Col>
          </Row>
          <Row>
            <p className="h3 subtext textDown">
              Where the parties pop and the fun never stops
            </p>
          </Row>
          <Row>
            <Col md={10}>
              <p className="subtextParagraph">
                We’re your one-stop shop for party decor and rentals, bringing
                the wow to every occasion. From birthdays and bridal showers to
                corporate events and heartfelt farewells, we specialize in
                creating unforgettable moments. With custom flower walls,
                balloon garlands, and unique rentals, fun’s our middle name—let
                us bring the party to you!
              </p>
              <div className="hero-btn">
                <Button target="_blank"href="https://www.honeybook.com/widget/floral_pop_co_203712/cf_id/61783908e47c1c07fd82b023">Book Now</Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6} className="position-relative hero-svg">
          <Lottie className="lottie" options={defaultOptions} isClickToPauseDisabled={true} />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
