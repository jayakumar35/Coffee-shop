import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutimg from './image/about.png'
import './About.scss'

function About() {
    return (
        <Container  style={{ maxWidth: '1550px' }} className="About-container">
            <p className="line text-center ">|</p>
            <h3   className="text-center">A B O U T &nbsp; U S </h3>

            <h1 className="text-center"> Services Since 1950</h1>

            <Row> 
                <Col sm={6} md={5} lg={4}>
                    <div className="About-content mx-3">
                        <h2 className="px-3">Our Story</h2>
                        <p>Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</p>
                        <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem
                            eirmod. Amet sit amet amet no. Est nonumy sed so mesin of the coffe inth shop leason in coffe shop poning
                            time morning yearly </p>
                        <button>Learn More</button>
                    </div>



                </Col>
                <Col sm={6} md={2} lg={4}>
                    <div className="About-content ">
                        <img src={aboutimg} alt="#"/>
                    </div>


                </Col>
                <Col sm={6} md={5} lg={4}>
                    <div className="About-content mx-3">
                        <h2 className="px-3">Our Vision</h2>
                        <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et
                            dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit amet</p>

                        <button>Learn More</button>
                    </div>



                </Col>

            </Row>
        </Container>
    )
}
export default About;