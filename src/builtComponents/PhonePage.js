import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/custom.scss"
import imgPhone from "../assets/images/iPhone.png"
import appleImg from '../assets/images/appleStore.png'
import playImg from '../assets/images/playStore.png'

function PhonePage() {
    return (
        <Container>
            <Row>
                <Col md="6">
                    <Row>
                        <Col md="6" sm="6">
                            <h2>Join Classes</h2>
                            <h3 className="Subtitle"><strong>Download <span style={{ color: "rgb(191, 2, 65)" }}>Mobishaala</span> App</strong></h3>
                            <p>
                                <strong>Use Institue code<span style={{ color: "rgb(191, 2, 65)" }}> SASA9090</span></strong>
                            </p>
                            {/* <Button>JOIN CLASSES</Button> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <Image
                                src={appleImg}
                                fluid='true'
                                style={{ position: 'relative' }}
                                rounded />
                        </Col>
                        <Col md="3">
                            <Image
                                src={playImg}
                                fluid='true'
                                style={{ position: 'relative' }}
                                rounded />
                        </Col>

                    </Row>

                </Col>
                <Col md="6">
                    <Image
                        src={imgPhone}
                        fluid='true'
                        style={{ position: 'relative' }}
                        rounded />
                </Col>
            </Row>

            <br />
        </Container>
    );
}

export default PhonePage;