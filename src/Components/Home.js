import React from "react";
import './Home.scss'
import NavScrollExample from "./NavScrollExample";
import { Container, Row, Col } from 'react-bootstrap'
import homeimg from './image/homebg.png'
// import homeleaf from './image/homeleaf.png'

 
function Home() {
    return (
        <Container style={{ maxWidth: '1550px' }} className="home-container">
            <Row>
                <NavScrollExample />

                <Col sm={12} md={6} lg={8}>

                    <div className="home-content">
                        <h1>Coffee </h1>
                        <span>T I M E</span>
                        <h3>Day Start Coffee</h3>
                        <p>Coffee offers several benefits, including improved mental alertness and concentration due to its caffeine content, which stimulates the central nervous system. It may enhance physical performance by increasing adrenaline levels and breaking down body fat for use as energy. Regular coffee consumption has also been associated with a reduced risk of certain diseases, such as Parkinson's and type.</p>
                    </div>



                </Col>
                <Col sm={12} md={6} lg={4} className="homeimg">
                    <img src={homeimg} alt="#" />

                </Col>
            </Row>
        </Container>


    )
}
export default Home;