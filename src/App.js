import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Services from './components/Services';
import Feed from './components/Feed';
import PageFooter from './components/PageFooter';

function App() {
  return (
    <>
      <Navigation></Navigation>

      <Container>
        <Hero />
      </Container>
      <Companies />
      <Container>
        <Services />
        <Feed />
      </Container>
      <PageFooter />
    </>
  );
}

export default App;
