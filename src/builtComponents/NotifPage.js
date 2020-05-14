import React from 'react';
import { Button, Card ,Row,Col} from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/custom.scss"
import img2 from "../assets/images/notif3.jpeg"
import img1  from "../assets/images/notif1.jpeg"

function NotifPage() {
  return (
    <>
    <Row>
    <Col md="5"><h2>Notifications</h2></Col>
      
    </Row>
    <Row>
      <Col md="5">
      <Card style={{ width: '15em' }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Notification 1</Card.Title>
          <Card.Text>
          Free Special Classes
          </Card.Text>
                <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Col>
      <Col md="2">

      </Col>
      <Col md="5">
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>Notification 2</Card.Title>
          <Card.Text>
          Free workshop with Topper's Meet
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
     
      </Col>
    </Row>
    <br />
    </>
  );
}

export default NotifPage;
