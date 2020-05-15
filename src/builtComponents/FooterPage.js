import React from 'react';
import { Row, Nav, Container, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <Container>
            <Row>
                
                <Col md="5" sm="5">
                <br />
                
                    <h4>Saarthak Samwad</h4>
                    <p>
                    Dedicated To Civil Services Exam (UPSC/BPSC/UPPCS)
                            </p>
                    {/* <br /> */}
                    
                </Col>
            </Row>
            <Row>
                <Col md="4"></Col>
                <Col md="5" sm="5">
                <br />
                <p>
                    © 2019 Saarthak Samwad powered by Mobishaala</p>
                    
                </Col>
                <Col md="3"></Col>
            </Row>
            {/* </Container> */}

            {/* <Nav fill variant="tabs" defaultActiveKey="/home" className="backgroundBlood" >
                <Nav.Item>
                    <p>
                    © 2019 Saarthak Samwad powered by Mobishaala</p>
                   
                </Nav.Item>
            </Nav> */}
        </Container>
    );
}

export default Footer;
