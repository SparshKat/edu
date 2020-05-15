import React from 'react';
import { Button, Row, Col, Card ,Container} from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/custom.scss"

import img1 from '../assets/images/c1.jpg'
import img2 from '../assets/images/c2.jpg'
import img3 from '../assets/images/c3.jpg'
import img4 from '../assets/images/c4.jpg'
import img5 from '../assets/images/c5.jpg'
import img6 from '../assets/images/c6.jpg'


function CoursePage() {
    return (
        <Container>
            <br />
            <Row>
                <Col md="5"><h2>Our Courses</h2></Col>

            </Row>
            <Row>
                <Col md="3">
                    <Card className="shadowIt" style={{ width: '100%' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>हिंदी साहित्य | UPSC</Card.Title>
                            <Card.Text>
                                {/* Some quick example text to build on the card title and make up the bulk of
                        the card's content. */}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card className="shadowIt" style={{ width: '100%' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>हिंदी साहित्य | BPSC</Card.Title>
                            <Card.Text>
                                {/* Some quick example text to build on the card title and make up the bulk of
                            the card's content. */}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card className="shadowIt" style={{ width: '100%' }}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>हिंदी साहित्य | UPPCS</Card.Title>
                            <Card.Text>
                                {/* Some quick example text to build on the card title and make up the bulk of
                        the card's content. */}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card className="shadowIt" style={{ width: '100%' }}>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>GS | BPSC</Card.Title>
                            <Card.Text>
                                {/* Some quick example text to build on the card title and make up the bulk of
                        the card's content. */}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <br />

            <Row>
                <Col md="2">
                </Col>
                <Col md="3">
                    <Card className="shadowIt" style={{ width: '100%' }}>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>GS | UPPCS</Card.Title>
                            <Card.Text>
                                {/* Some quick example text to build on the card title and make up the bulk of
                        the card's content. */}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="2">
                </Col>
                <Col md="3">
                    <Card className="shadowIt" style={{ width: '100%' }}>
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                            <Card.Title>MOCK INTERVIEW | BPSC</Card.Title>
                            <Card.Text>
                                {/* Some quick example text to build on the card title and make up the bulk of
                        the card's content. */}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="2">
                </Col>
            </Row>
            <br />
        </Container>
    );
}

export default CoursePage;