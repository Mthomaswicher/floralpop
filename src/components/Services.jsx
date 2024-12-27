import { Row } from 'react-bootstrap';
import ServiceHolder from './ServiceHolder';

const Services = () => {
  return (
    <>
      <Row className="rowPushDown justify">
        <p className="h1 textmarker-effect header">What we offer</p>
      </Row>
      <Row className="rowPushDownLg">
        <ServiceHolder />
      </Row>
    </>
  );
};

export default Services;
