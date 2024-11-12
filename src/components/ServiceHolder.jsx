import { Row, Card, Col } from 'react-bootstrap';
import cart from '../assets/cart.png';
import jerod from '../assets/jerod.jpg';
import flowerwall from '../assets/flowerwall.jpg';

const ServiceHolder = () => {
  return (
    <>
    <Col lg={12}>
    <div className="jerodimage"></div>

    </Col>

      <Col>
       

        <Card>
          <Card.Img variant="top" src={flowerwall} />
          <Card.Body>
            <Card.Title>Flower Bar Experience</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={flowerwall} />
          <Card.Body>
            <Card.Title>Flower Wall Rentals</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={flowerwall} />
          <Card.Body>
            <Card.Title>Balloons</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ServiceHolder;
