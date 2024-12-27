import { HorizontalTicker } from 'react-infinite-ticker';
import f45 from '../assets/f45.png';
import aerie from '../assets/aerie.png';
import lulu from '../assets/lulu.png';
import nike from '../assets/nike.png';
import kendra from '../assets/kendra.png';
import kors from '../assets/kors.png';
import { Row } from 'react-bootstrap';

const Companies = () => {
  return (
    <Row className="rowPushDownLg justify">
      <h1 className="textmarker-effect header">We've partied with the best</h1>
      <HorizontalTicker className="ticker" duration={30000}>
        <img className="companyImage" src={f45} alt="f45" />
        <img className="companyImage" src={aerie} alt="aerie" />
        <img className="companyImage" src={lulu} alt="lulu" />
        <img className="companyImage" src={nike} alt="nike" />
        <img className="companyImage" src={kendra} alt="kendra" />
        <img className="companyImage" src={kors} alt="kors" />
      </HorizontalTicker>
    </Row>
  );
};

export default Companies;
