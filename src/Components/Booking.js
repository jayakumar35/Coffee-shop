import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import './Booking.scss'

function Booking() {
    return (
        <Container style={{ maxWidth: '1550px' }} className="Booking-container">

            <Row>
                <Col sm={12} md={6} lg={6}>
                    <div class="page-item1">
                        <h1 class="">30% OFF</h1>
                        <h3 class="">For online reservation</h3>
                        <p>Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea
                            justo. Erat justo sed sed diam. Ea et erat ut sed diam sea</p>

                    </div>


                </Col>
                <Col sm={12} md={6} lg={6}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Control type="text" placeholder="Enter Your Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>


                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Booking;