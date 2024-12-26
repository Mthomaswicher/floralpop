import '../App.css';
import Navigation from '../components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';
import ServiceHolder from '../components/ServiceHolder';

import PageFooter from '../components/PageFooter';

function OurServices() {
  return (
    <>
      <Navigation></Navigation>
        <ServiceHolder />
      <PageFooter />
    </>
  );
}

export default OurServices;
