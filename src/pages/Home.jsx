import '../App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Services from '../components/Services';
import Feed from '../components/Feed';

function Home() {
  return (
    <>
      <Container>
        <Hero />
      <Companies />
        <Services />
        <Feed />
      </Container>
    </>
  );
}

export default Home;
