import {Row} from "react-bootstrap";
import ServiceHolder from "./ServiceHolder";



const Services = () => {

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