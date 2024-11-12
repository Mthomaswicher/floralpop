import floralpop from "../assets/floralpoplogo.png";
import { Row, Col, Nav } from "react-bootstrap"

const PageFooter = () => {

    const navbarItems = [
        {
          link: 'About Us',
          addy: '#Aboutus',
        },
        {
          link: 'Our Services',
          addy: '#OurServices',
        },
        {
          link: 'Contact Us',
          addy: '#Contact',
        },
      ];
    

    return (
        <Row className="footer">
            <Col lg={2}>
            <img width="64"
          height="64" src={floralpop}/>
            </Col>
            <Col lg={2}>
            <Nav defaultActiveKey="/home" className="flex-column">

        {navbarItems.map((nav) => {
            return (
                <Nav.Link href={nav.addy}>
                    {nav.link}
                    </Nav.Link>
            )
        })}
      </Nav>
            </Col>
        </Row>


    )
}



export default PageFooter;