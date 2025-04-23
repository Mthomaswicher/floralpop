import { Row, Card, Col, Button } from 'react-bootstrap';

import flowerwall from '../assets/flowerwall.jpg';

const ServiceHolder = () => {
  const cardData = [
    {
      title: 'Rentals',
      price: 'Starting at $625',
      description: '',
      services: ['Flower Bar', 'Dessert Cart', 'Flower Wall Backdrops'],
      image: { flowerwall },
    },
    {
      title: 'Balloons',
      price: 'Starting at $75',
      description: '',
      services: ['Helium Balloons', 'Balloon Garlands & Arches', '& More'],
      image: { flowerwall },
    },
    {
      title: 'Delivery',
      price: 'Starting at $75',
      description: '',
      services: [
        'Rose Bouquets',
        'Sympathy Arrangements',
        'Seasonal Arrangements',
      ],
      image: { flowerwall },
    },
  ];

  return (
    <>
      <Col lg={12} className="service-image-row">
        <div className="jerodimage"></div>
      </Col>
      <Row className="service-cards align-items-center">
        {cardData.map((card, idx) => {
          return (
            <Col key={idx} md={4} sm={12}>
              <Card className="last card">
                <Card.Img
                  className="card-image rounded-circle ratio ratio-1x1 overflow-hidden align-self-center"
                  variant="top"
                  src={flowerwall}
                />
                <Card.Body>
                  <Card.Title className="service-card-title">
                    {card.title}
                  </Card.Title>
                  <Card.Subtitle className="service-card-subtitle align-self-center">
                    {card.price}
                  </Card.Subtitle>
                  <ul className="service-card-list">
                    {card.services.map((service, serviceIdx) => (
                      <li key={serviceIdx}>{service}</li>
                    ))}
                  </ul>
                  <Button href='/services' className="fullwidth">View More</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        <Col></Col>
      </Row>
    </>
  );
};

export default ServiceHolder;
