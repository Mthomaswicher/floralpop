import { Row } from 'react-bootstrap';
import ServiceHolder from './ServiceHolder';

const Services = () => {
  return (
    <>
      <Row className="justify">
        <p className="h2 textmarker-effect header header-margin">
          What we offer
        </p>
      </Row>
      <Row className="rowPushDownLg">
        <ServiceHolder />
      </Row>
    </>
  );
};

export default Services;
