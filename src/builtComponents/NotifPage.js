import React from 'react';
import { Button, Card ,Row,Col,Container } from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/custom.scss"
import img2 from "../assets/images/notif3.jpeg"
import img1  from "../assets/images/notif1.jpeg"

function NotifPage() {
  return (
    <Container>
      <br />
    <Row>
      <Col md="5"><h2>Notifications</h2></Col>
      
    </Row>
    <Row>
      <Col md="3" sm="12"  xs="12">
      <Card className="shadowIt" style={{ width: '100%' }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          {/* <Card.Title>Notification 1</Card.Title> */}
          <Card.Text>
          Free Special Classes
          </Card.Text>
                <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Col>
      <Col md="3"  sm="12"  xs="12">
      <Card className="shadowIt" style={{ width: '100%' }}>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          {/* <Card.Title>Notification 2</Card.Title> */}
          <Card.Text>
          Free workshop with Topper's Meet
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
     
      </Col>
    </Row>
    <br />
    </Container>
  );
}

export default NotifPage;
