import { Row, Card, Col, Button } from 'react-bootstrap';

import flowerwall from '../assets/flowerwall.jpg';

const ServiceHolder = () => {
  const cardData = [
    {
      title: 'Rentals',
      price: 'Starting at $625',
      description: '',
      services: ['Flower Bar', 'Dessert Cart', 'Flower Wall Backdrops'],
      image: {flowerwall}
    },
    {
      title: 'Balloons',
      price: 'Starting at $75',
      description: '',
      services: [
        'Helium Balloons',
        'Balloon Garlands',
        'Balloon Arch',
        'Balloon Towers',
        'Balloon Marquee',
        'Jumbo Helium Balloons',
        'Free-Standing Balloons',
        '& More',
      ],
      image: {flowerwall}
    },
    {
      title: 'Flower Delivery',
      price: 'Starting at $75',
      description: '',
      services: ['Rose Bouquets', 'Sympathy Arrangements', 'Seasonal Arrangements'],
      image: {flowerwall}
    },
  ];

  return (
    <>
      <Col lg={12}>
        <div className="jerodimage"></div>
      </Col>
      <Row className="align-items-center">
      {cardData.map(card => {
        return (
          <Col>
            <Card>
              <Card.Img variant="top" src={flowerwall} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Subtitle>{card.price}</Card.Subtitle>
                  <ul>
                    {card.services.map(service => <li>{service}</li>)}
                  </ul>
                <Button className="fullwidth">View Now</Button>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
      </Row>
    </>
  );
};

export default ServiceHolder;
