import {Row, Col} from "react-bootstrap";
import cart from "../assets/cart.png";
import ServiceHolder from "./ServiceHolder";
import * as animationData from '../assets/flowerfalling.json';
import Lottie from 'react-lottie';
import ServiceHolder2 from "./ServiceHolder2";
import abstract from "../assets/abstract.png";


const Services = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };



    return (
        <><Row className="rowPushDown justify">
          
          <h1 className="textmarker-effect header">What we offer</h1> 
       
        </Row>
        <Row className="rowPushDownLg">

<ServiceHolder/>
            </Row></>


    )
}


export default Services;