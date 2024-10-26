import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Menu.scss'

// import menu image
import Espresso from './image/Espresso.png'
import Americano from './image/americano.png'
import Cappuccino from './image/cappucino.png'
import cafelatte from './image/cafe latte.png'
import cafemocha from './image/cafe mocha.png'
import hotchoclolate from './image/hot-chocolate.png'
import Icedamericano from './image/iced americano.png'
import Icedcappuccino from './image/iced_cappuccino.png'
import Icedlatte from './image/iced latte.png'
import Icedcarmmello from './image/iced_caramello.png'
import chocomint from './image/choco-mint.png'
import chocofrappe from './image/choco frappe.png'





function Menu() {
    return (
        <Container style={{ maxWidth: '1550px' }} className="Menu-container">
            <div className="heading">
                <p className="line text-center">|</p>
                <h2 className="">M E N U &nbsp;& &nbsp;P R I C I N G </h2>
                <h1 className="">Competitive Pricing</h1>

            </div>

            <Row className="d-flex p-2 mx-4 " >
                <Col className="menu-item d-flex " sm={4} md={3} lg={2} >
                    <Card className=" Menu-card m-2 " style={{ width: '15rem' }}>
                        <Card.Img className="menu-box" variant="top" src={Espresso} />
                        <Card.Body>
                            <Card.Title className="title">Espresso</Card.Title>
                            <Card.Text className="text">
                                Some quick example text to build on the card title and make up the
                            </Card.Text>
                            <Button variant="primary">Rs- 45/ </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="menu-item d-flex" sm={4} md={3} lg={2} >

                    <Card className=" Menu-card m-2" style={{ width: '15rem' }}>
                        <Card.Img className="menu-box" variant="top" src={Americano} />
                        <Card.Body>
                            <Card.Title className="title">Americano</Card.Title>
                            <Card.Text className="text" >
                                Some quick example text to build on the card title and make up the

                            </Card.Text>
                            <Button variant="primary">Rs- 55/</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="menu-item d-flex" sm={4} md={3} lg={2} >

                    <Card className=" Menu-card m-2" style={{ width: '15rem' }}>
                        <Card.Img className="menu-box py-4 " variant="top" src={Cappuccino} />
                        <Card.Body>
                            <Card.Title className="title">Cappuccino</Card.Title>
                            <Card.Text className="text">
                                Some quick example text to build on the card title and make up the
                                and coffee shop

                            </Card.Text>
                            <Button variant="primary">Rs- 65/</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="menu-item  d-flex" sm={4} md={3} lg={2} >

                    <Card className=" Menu-card m-2" style={{ width: '15rem' }}>
                        <Card.Img className="menu-box" variant="top" src={cafelatte} />
                        <Card.Body>
                            <Card.Title className="title">Cafe Latte</Card.Title>
                            <Card.Text className="text">
                                Some quick example text to build on the card title and make up the

                            </Card.Text>
                            <Button variant="primary">Rs- 75/</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="menu-item d-flex" sm={4} md={3} lg={2} >

                    <Card className=" Menu-card m-2" style={{ width: '15rem' }}>
                        <Card.Img className="menu-box" variant="top" src={cafemocha} />
                        <Card.Body>
                            <Card.Title className="title">Cafe Mocha</Card.Title>
                            <Card.Text className="text">
                                Some quick example text to build on the card title and make up the

                            </Card.Text>
                            <Button variant="primary">Rs- 85/</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="menu-item d-flex" sm={4} md={3} lg={2} >

                    <Card className=" Menu-card m-2" style={{ width: '15rem' }}>
                        <Card.Img className="menu-box" variant="top" src={hotchoclolate} />
                        <Card.Body>
                            <Card.Title className="title">Hot Choclolate</Card.Title>
                            <Card.Text className="text">
                                Some quick example text to build on the card title and make up the

                            </Card.Text>
                            <Button variant="primary">Rs- 85/</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col className="d-flex" sm={3} lg={2} md={3}>
                    <Card className=" Menu-card m-2" style={{ width: '15rem' }}>
                        <Card.Img className="menu-box1 " variant="top" src={Icedamericano} />
                        <Card.Body>
                            <Card.Title className="title">Iced Americano</Card.Title>
                            <Card.Text className="text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Rs- 55/</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex" sm={3} lg={2} md={3}>

                    <Card className=" Menu-card m-2" style={{ width: '15rem' }}>
                        <Card.Img className="menu-box1" variant="top" src={Icedcappuccino} />
                        <Card.Body>
                            <Card.Title className="title">Iced Cappuccino</Card.Title>
                            <Card.Text className="text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Rs- 65/</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex" sm={3} lg={2} md={3}>

                    <Card className=" Menu-card m-2" style={{ width: '15rem' }}>
                        <Card.Img className="menu-box1" variant="top" src={Icedlatte} />
                        <Card.Body>
                            <Card.Title className="title">Iced Latte</Card.Title>
                            <Card.Text className="text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Rs- 80/</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex" sm={3} lg={2} md={3}>

                    <Card className=" Menu-card m-2 " style={{ width: '15rem' }}>
                        <Card.Img className="menu-box1  " variant="top" src={Icedcarmmello} />
                        <Card.Body>
                            <Card.Title className="title">Iced Caramello</Card.Title>
                            <Card.Text className="text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text >
                            <Button variant="primary">Rs- 75/</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex" sm={3} lg={2} md={3}>

                    <Card className=" Menu-card m-2" style={{ width: '15rem' }}>
                        <Card.Img className="menu-box1 " variant="top" src={chocofrappe} />
                        <Card.Body>
                            <Card.Title className="title">Choco Frappe</Card.Title>
                            <Card.Text className="text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Rs- 85/</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex" sm={3} lg={2} md={3}>

                    <Card className=" Menu-card m-2" style={{ width: '15rem' }}>
                        <Card.Img className="menu-box1" variant="top" src={chocomint} />
                        <Card.Body>
                            <Card.Title className="title">Choco Mint Frappe</Card.Title>
                            <Card.Text className="text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Rs- 95/</Button>
                        </Card.Body>
                    </Card>



                </Col>
                </Row>
                
        </Container >

    )
}
export default Menu;