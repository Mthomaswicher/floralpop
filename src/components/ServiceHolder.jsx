import { Row, Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import flowerwall from '../assets/flowerwall.jpg';

const ServiceHolder = () => {
  const cardData = [
    {
      title: 'Rentals',
      price: 'Starting at $625',
      description: 'Choose from our available rentals to complete your party decor.',
      services: ['Flower Bar', 'Dessert Cart', 'Flower Wall Backdrops'],
      image: { flowerwall },
    },
    {
      title: 'Balloons',
      price: 'Starting at $75',
      description: 'Choose from a variety of balloon designs for your upcoming event.',
      services: ['Helium Balloons', 'Balloon Garlands & Arches', '& More'],
      image: { flowerwall },
    },
    {
      title: 'Delivery',
      price: 'Starting at $75',
      description: 'We offer delivery and provide a selection of flowers for all occasions.',
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
                  <p className='description'>{card.description}</p>
                  <Card.Subtitle className="service-card-subtitle align-self-center">
                    {card.price}
                  </Card.Subtitle>
                  <ul className="service-card-list">
                    {card.services.map((service, serviceIdx) => (
                      <li key={serviceIdx}>{service}</li>
                    ))}
                  </ul>
                <Link to ='/services'>  <Button className="fullwidth">View More</Button></Link>
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
