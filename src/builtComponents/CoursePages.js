import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/custom.scss"

import img1 from '../assets/images/c1.jpg'


function CoursePage() {
    return (
        <>
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

            </Row>
            <br />

            <Row>
                <Col md="2">
                </Col>
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
                <Col md="2">
                </Col>
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
                <Col md="2">
                </Col>
            </Row>
            <br />
        </>
    );
}

export default CoursePage;