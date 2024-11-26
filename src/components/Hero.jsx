import { Row, Col, Button } from 'react-bootstrap';
import floral from '../assets/flowers.png';
import flowers from '../assets/floralpattern.png';
import Lottie from 'react-lottie';
import * as animationData from '../assets/flowerfalling.json';
import cart from '../assets/cart.png';

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
          <h1 className="heroHeader">Floral Pop Party Shop</h1>
          <h3>Where the parties pop and the fun never stops</h3>
        </Row>
        <Row>
          <p>
            We’re your one-stop shop for party decor and rentals, bringing the
            wow to every occasion. From birthdays and bridal showers to
            corporate events and heartfelt farewells, we specialize in creating
            unforgettable moments. With custom flower walls, balloon garlands,
            and unique rentals, fun’s our middle name—let us bring the party to
            you!
          </p>
        </Row>
        <Row>
          <Button
            target="_blank"
            href="https://www.honeybook.com/widget/floral_pop_co_203712/cf_id/61783908e47c1c07fd82b023">
            Book Now
          </Button>
        </Row>
      </Col>

      <Col className="floralcol" lg={5}>
        <Lottie options={defaultOptions} />
      </Col>
    </Row>
  );
};

export default Hero;
