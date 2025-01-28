import '../App.css';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Services from '../components/Services';
import Feed from '../components/Feed';

function Home() {
  return (
    <>
      <Container fluid className="root-container">
        <Row>
          <Hero />
        </Row>
        <Row>
          <Companies />
        </Row>
        <Row>
          <Services />
        </Row>
        <Row className='bottomContainer'>
          <Feed />
        </Row>
      </Container>
    </>
  );
}

export default Home;
