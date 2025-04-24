import { Row } from 'react-bootstrap';
import Offerings from './Offerings';
import ServiceHolder from './ServiceHolder';

const Services = () => {
  return (
    <>
      <Row className="justify move">
        <h1 className="textmarker-effect header header-margin">
          What we offer
        </h1>
      </Row>
      <Row>
        <ServiceHolder />
      </Row>
    </>
  );
};

export default Services;
