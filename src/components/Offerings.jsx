import { Row, Card, Col, Button } from 'react-bootstrap';

import flowerwall from '../assets/flowerwall.jpg';

const Offerings = () => {
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
      description: 'We provide a wide-selection of flowers for all occasions.',
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
      {/* <Col lg={12} className="service-image-row">
        <div className="jerodimage"></div>
      </Col> */}
      <Row className="givespace">
        <Col xs={12} lg={4}>
        <h1 className='center'>Party Packages</h1>

        </Col>
        <Col xs={12} lg={8}>
        <p>Our <strong>PARTY PACKAGES</strong> are designed to make decor for your event easy! We offer balloon garlands, backdrops, marquee numbers, crazy towers and more! Check out our most popular options below. You even get to keep the backdrops in the first 3 packages after your event so can reuse later!</p>
        <Button target="_blank"href="https://www.honeybook.com/widget/floral_pop_co_203712/cf_id/61783908e47c1c07fd82b023">Book Now</Button>
        
        </Col>
        
      </Row>
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
                  <Button target="_blank"href="https://www.honeybook.com/widget/floral_pop_co_203712/cf_id/61783908e47c1c07fd82b023" className="fullwidth">Book Now</Button>
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

export default Offerings;
