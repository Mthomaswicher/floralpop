import {Row, Col} from "react-bootstrap";
import cart from "../assets/cart.png";
import ServiceHolder from "./ServiceHolder";
import * as animationData from '../assets/flowerfalling.json';
import Lottie from 'react-lottie';


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
        <><Row className="rowPushDown">
            <h1 className="servicesHeader">A few of the services we offer</h1>
            <p className="centerText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Row>
        <Row className="rowPushDownLg">

<ServiceHolder/>
            </Row></>


    )
}


export default Services;