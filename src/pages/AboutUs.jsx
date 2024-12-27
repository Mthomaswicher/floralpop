import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';

function AboutUs() {
  return (
    <>
      <Row className="heroRow">
        <Col lg={2}></Col>
        <Col lg={5}>
          <Row>
            <h1 className="heroHeader">About Us</h1>
          </Row>
          <Row>
            <p>
              We started our business in 2020 with a simple focus on florals ,
              but over the years, we’ve grown into something more—an event decor
              business that brings people together. We’ve always wanted our
              business to be about more than just pretty decor; it’s about
              creating a space where communities can connect and moments of joy
              can be shared. From birthdays to bridal showers and heartfelt
              farewells, we’re here to add that special touch that makes every
              celebration feel personal and meaningful. It’s all about capturing
              the joy in the little things and making memories that last.
            </p>
          </Row>
          <Row>
            <Button href="/book-now">Book Now</Button>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default AboutUs;
