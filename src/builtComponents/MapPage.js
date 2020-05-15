import React from 'react';
import { Row,  Container, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Map, GoogleApiWrapper } from 'google-maps-react'
// import HeaderPage from "./builtComponents/HeaderPage"
import "../assets/custom.scss"

class MapPage extends React.Component {
    render() {
        const style = {
            position : 'relative',
            width: '100%', 
            height: '250px'
        }
        return (
            <>
                <Container>
                    <br />
                    <Row>
                        <Col md="5" sm="5">
                            <h2>Contact</h2>
                            <h3 className="Subtitle">Delhi Office</h3>
                            <p>    
                            Call : +91 9818073460

                            Email: born2lead.rahul@gmail.com
                            </p>
                            {/* <br /> */}
                            <p></p>
                            <p>B-4, 37-39
                            <br />
                            Ansal Building,
                                <br />
                                Comm. Complex,
                                <br />
                                Dr. Mukherjee Nagar,
                                <br />
                                Delhi - 110009
                            </p>
                        </Col>
                        <Col md="1" sm="1">
                        </Col>
                        <Col md="5" sm="5">
                            <Map
                                google={this.props.google}
                                zoom={10}
                                initialCenter={{
                                    lat: 35.5496939,
                                    lng: -120.7060049
                                }}
                                className= "blog"
                                style={style}
                            />
                        </Col>
                    </Row>
                </Container>
                <br />
            </>
        );
    }
    
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAnC9NU8hdWo-3_eRYFWshaVTEMvzUMK8g")
   })(MapPage);
