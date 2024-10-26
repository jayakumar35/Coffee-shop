import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import clientimg1 from './image/client-1.png'
import clientimg2 from './image/client-2.png'
import clientimg3 from './image/client-3.png'
import './Client.scss'


function Client() {
    return (
        <Container style={{ maxWidth: '1550px' }} className="Client-container">
            <div className="heading">
                <p className="line text-center d-none d-lg-block">|</p>
                <h2 className="">T E S T I M O I A L </h2>
                <h1 className="">Our Clients Say
                </h1>
            </div>

            <Row className="">
                <Col className="d-flex "  sm={12} md={4} lg={4}>
                    <Card style={{ width: '18rem' }} className="Client">
                        <Card.Img variant="top" src={clientimg1} />
                        <Card.Body>
                            <Card.Title className="title">profession</Card.Title>
                            <Card.Text  className="text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                </Card>
                    </Col>
                    <Col className="d-flex "  sm={12} md={4} lg={4}>

                    <Card style={{ width: '18rem' }} className="Client">
                        <Card.Img variant="top" src={clientimg2} />
                        <Card.Body>
                            <Card.Title className="title">profession</Card.Title>
                            <Card.Text  className="text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col className="d-flex "  sm={12} md={4} lg={4}>

                    <Card style={{ width: '18rem' }} className="Client">
                        <Card.Img variant="top" src={clientimg3} />
                        <Card.Body>
                            <Card.Title className="title">profession</Card.Title>
                            <Card.Text className="text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
            </Row>
        </Container>
    )
}
export default Client;