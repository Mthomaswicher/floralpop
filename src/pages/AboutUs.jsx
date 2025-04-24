import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Container } from 'react-bootstrap';
import aboutus from "../assets/aboutus.png";

function AboutUs() {
  return (
    
    <Row className='givespace2'>
        <Col xs={12} lg={6}>
        <img className="aboutImage imageFill" src={aboutus}></img>
        </Col>
        <Col className='flex' xs={12} lg={6}>
        <div className='aboutUs'>
        <h1 className='heroHeader2'>
        About Floral Pop
        </h1>
        <p className='aboutustext'>We started our business in 2020 with a simple focus on florals , but over the years, we’ve grown into something more—an event decor business that brings people together. We’ve always wanted our business to be about more than just pretty decor; it’s about creating a space where communities can connect and moments of joy can be shared. From birthdays to bridal showers and heartfelt farewells, we’re here to add that special touch that makes every celebration feel personal and meaningful. It’s all about capturing the joy in the little things and making memories that last.</p>
        </div>
       
        </Col>
      </Row>
     
    
  );
}

export default AboutUs;
