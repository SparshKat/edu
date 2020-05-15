import React from 'react';
import { Popover, Button, Row, Col, Card, Container, OverlayTrigger } from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/custom.scss"

import img1 from '../assets/images/c1.jpg'
import img2 from '../assets/images/c2.jpg'
import img3 from '../assets/images/c3.jpg'
import img4 from '../assets/images/c4.jpg'
import img5 from '../assets/images/c5.jpg'
import img6 from '../assets/images/c6.jpg'


class CoursePage extends React.Component {
    render() {
        const popover1 = (
            <Popover id="popover-positioned-top" placement='top'>
                <Popover.Title as="h3">हिंदी साहित्य | UPSC</Popover.Title>
                <Popover.Content>
                We provide online and offline courses for हिंदी साहित्य optional subject, UPSC, in the form of Classroom Lecture, Study material and Test Series.
                right?
              </Popover.Content>
            </Popover>
        );
        const popover2 = (
            <Popover id="popover-positioned-top" placement='top'>
                <Popover.Title as="h3">हिंदी साहित्य | BPSC</Popover.Title>
                <Popover.Content>
                We provide online and offline courses for हिंदी साहित्य optional subject, BPSC, in the form of Classroom Lecture, Study material and Test Series.
              </Popover.Content>
            </Popover>
        );
        const popover3 = (
            <Popover id="popover-positioned-top" placement='top'>
                <Popover.Title as="h3">हिंदी साहित्य | UPPCS</Popover.Title>
                <Popover.Content>
                We provide online and offline courses for हिंदी साहित्य optional subject, UPPCS, in the form of Classroom Lecture, Study material and Test Series.
              </Popover.Content>
            </Popover>
        );
        const popover4 = (
            <Popover id="popover-positioned-top" placement='top'>
                <Popover.Title as="h3">GS | BPSC</Popover.Title>
                <Popover.Content>
                We provide online and offline courses for General Studies, BPSC, in the form of Classroom Lecture, Study material and Test Series.
              </Popover.Content>
            </Popover>
        );
        const popover5 = (
            <Popover id="popover-positioned-top" placement='top'>
                <Popover.Title as="h3">GS | UPPCS</Popover.Title>
                <Popover.Content>
                We provide online and offline courses for General Studies, UPPCS, in the form of Classroom Lecture, Study material and Test Series.
              </Popover.Content>
            </Popover>
        );
        const popover6 = (
            <Popover id="popover-positioned-top" placement='top'>
                <Popover.Title as="h3">MOCK INTERVIEW | BPSC</Popover.Title>
                <Popover.Content>
                We provide personal guidance for Mock Interview from experts, BPSC, in the form of Classroom Lecture, Study material and Test Series.
              </Popover.Content>
            </Popover>
        );

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
                                <OverlayTrigger trigger="click" placement="top" overlay={popover1}>
                                    <Button variant="primary">Read More</Button>
                                </OverlayTrigger>

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
                                <OverlayTrigger trigger="click" placement="top" overlay={popover2}>
                                    <Button variant="primary">Read More</Button>
                                </OverlayTrigger>
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
                                <OverlayTrigger trigger="click" placement="top" overlay={popover3}>
                                    <Button variant="primary">Read More</Button>
                                </OverlayTrigger>
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
                                <OverlayTrigger trigger="click" placement="top" overlay={popover4}>
                                    <Button variant="primary">Read More</Button>
                                </OverlayTrigger>
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
                                <OverlayTrigger trigger="click" placement="top" overlay={popover5}>
                                    <Button variant="primary">Go somewhere</Button>
                                </OverlayTrigger>
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
                                <OverlayTrigger trigger="click" placement="top" overlay={popover6}>
                                    <Button variant="primary">Read More</Button>
                                </OverlayTrigger>
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

}

export default CoursePage;