import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import servicesimg1 from './image/service-1.jpg'
import servicesimg2 from './image/service-2.jpg'
import servicesimg3 from './image/service-3.jpg'
import servicesimg4 from './image/service-4.jpg'
import './Services.scss'



function Services() {
    return (
        <Container  style={{ maxWidth: '1550px' }} className="Services-container">
            <div className="heading">
                <p className="line text-center ">|</p>
                <h3 className=" ">O U R &nbsp; S E R V I C E S</h3>
                <h1 className="">Fresh & Organic Beans</h1>
            </div>

            <Row>
                <Col sm={12} md={6} lg={6}>
                    <div className="card mb-3 mx-4" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={servicesimg1} className="img-fluid rounded" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                        fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                                        <path
                                            d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                    </svg>Fastest Door Delivery</h5>
                                    <p className="card-text">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed
                                        est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 mx-4" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={servicesimg2} className="img-fluid rounded" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                        fill="currentColor" className="bi bi-cup-hot" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5M2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175" />
                                        <path
                                            d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8" />
                                    </svg>Best Quality Coffee</h5>
                                    <p className="card-text">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed
                                        est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col sm={12} md={6} lg={6}>
                    <div className="card mb-3 mx-4" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={servicesimg3} className="img-fluid rounded" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                        fill="currentColor" className="bi bi-award" viewBox="0 0 16 16">
                                        <path
                                            d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                                    </svg>Fresh Coffee Beans</h5>
                                    <p className="card-text">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed
                                        est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 mx-4" >
                        <div className="row g-0">
                            <div className="col-md-4 ">
                                <img src={servicesimg4} className="img-fluid rounded" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                        fill="currentColor" className="bi bi-table" viewBox="0 0 16 16">
                                        <path
                                            d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z" />
                                    </svg>Online Table Booking</h5>
                                    <p className="card-text">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed
                                        est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}
export default Services;