import React from 'react';
import { Row, Col ,Image} from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/custom.scss"
import imgPhone from "../assets/images/iPhone.png"
import appleImg from '../assets/images/appleStore.png'

function PhonePage() {
    return (
        <>
            <Row>
                <Col md="6">
                    <Row>
                    <Col md="6" sm="6">
            <h2>Sudama Prasad Singh , BDO</h2>
            <h3 className="Subtitle">BPSC 63 Interview Class</h3>
            <p>
            Sudama Prasad Singh sir's lecture on BDO for BPSC 63 Interview
            </p>
            {/* <Button>JOIN CLASSES</Button> */}
          </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                        <Image 
                        src={appleImg} 
                        fluid='true'
                        style={{position : 'relative'}}
                        rounded />  
                        </Col>
                        <Col md="3">
                        <Image 
                        src={appleImg} 
                        fluid='true'
                        style={{position : 'relative'}}
                        rounded />  
                        </Col>
                        
                    </Row>

                </Col>
                <Col md="6">
                    <Image 
                    src={imgPhone} 
                    fluid='true'
                    style={{position : 'relative'}}
                    rounded />
                </Col>
            </Row>

            <br />
        </>
    );
}

export default PhonePage;