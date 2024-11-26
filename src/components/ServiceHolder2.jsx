import { Row, Card, Col } from 'react-bootstrap';
import cart from '../assets/cart.png';
import jerod from '../assets/jerod.jpg';
import flowerwall from '../assets/flowerwall.jpg';

const ServiceHolder = () => {
  return (
    <>

<Row lg={12}>
<Col lg={4}>
<Card className="card card_red text-center">
            <div className="title">
              <img src={flowerwall}className="fa fa-paper-plane" aria-hidden="true"></img>
              <h2>Basic</h2>
            </div>
            <div className="price">
              <h4><sup>$</sup>25</h4>
            </div>
            <div className="option">
              <ul>
                <li><i className="fa fa-check" aria-hidden="true"></i>10 GB Space</li>
                <li><i className="fa fa-check" aria-hidden="true"></i>3 Domain Names</li>
                <li><i className="fa fa-check" aria-hidden="true"></i>20 Emails Addresse</li>
                <li><i className="fa fa-times" aria-hidden="true"></i>Live Support</li>
                </ul>
            </div>
            <a href="#">Order Now</a>
        </Card>
</Col>
<Col lg={4}>
<Card className="card card_red text-center">
            <div className="title">
              <img src={flowerwall}className="fa fa-paper-plane" aria-hidden="true"></img>
              <h2>Basic</h2>
            </div>
            <div className="price">
              <h4><sup>$</sup>25</h4>
            </div>
            <div className="option">
              <ul>
                <li><i className="fa fa-check" aria-hidden="true"></i>10 GB Space</li>
                <li><i className="fa fa-check" aria-hidden="true"></i>3 Domain Names</li>
                <li><i className="fa fa-check" aria-hidden="true"></i>20 Emails Addresse</li>
                <li><i className="fa fa-times" aria-hidden="true"></i>Live Support</li>
                </ul>
            </div>
            <a href="#">Order Now</a>
        </Card>
</Col>
<Col lg={4}>
<Card className="card card_red text-center">
            <div className="title">
              <img src={flowerwall}className="fa fa-paper-plane" aria-hidden="true"></img>
              <h2>Basic</h2>
            </div>
            <div className="price">
              <h4><sup>$</sup>25</h4>
            </div>
            <div className="option">
              <ul>
                <li><i className="fa fa-check" aria-hidden="true"></i>10 GB Space</li>
                <li><i className="fa fa-check" aria-hidden="true"></i>3 Domain Names</li>
                <li><i className="fa fa-check" aria-hidden="true"></i>20 Emails Addresse</li>
                <li><i className="fa fa-times" aria-hidden="true"></i>Live Support</li>
                </ul>
            </div>
            <a href="#">Order Now</a>
        </Card>
</Col>

</Row>



        



    <Col lg={12}>
    <div className="jerodimage"></div>

    </Col>

      <Col>
       

        <Card className="card_red text-center">
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
