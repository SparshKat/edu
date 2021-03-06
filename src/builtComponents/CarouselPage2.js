import React from 'react';
import { Row, Carousel, Button, Container, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player"
// import HeaderPage from "./builtComponents/HeaderPage"
import "../assets/custom.scss"

function CarouselPage2() {
  return (
    <>

      <Container >
        <Carousel indicators={true} controls={true} showArrows={true}>
          <Carousel.Item>
            <Row>
              <Col md="1">

              </Col>
              <Col md="5" sm="5">
                <h2>Sudama Prasad Singh , BDO</h2>
                <h3 className="Subtitle"><strong>BPSC 63 Interview Class</strong></h3>
                <p>
                  Sudama Prasad Singh sir's lecture on BDO for BPSC 63 Interview
            </p>
                <Button>JOIN CLASSES</Button>
              </Col>
              {/* <Col md="1" sm="1">
              </Col> */}
              <Col md="5" sm="5">
                <div className='player-wrapper'>
                  <   ReactPlayer
                    className='react-player'
                    width='100%'
                    height='100%'
                    url="https://www.youtube.com/watch?v=ZIXD8GW4Tns"
                  />
                </div>

              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
          <Row>
              <Col md="1">

              </Col>
              <Col md="5" sm="5">
                <h2>हिंदी साहित्य (Optional)</h2>
                <h3 className="Subtitle"> <strong>BPSC 65 Mains</strong></h3>
                <p>
                Kumar Sarvesh sir's lecture on Ram Ki Shakti Pooja, हिंदी साहित्य (Optional) for BPSC 65 Mains
            </p>
                <Button>JOIN CLASSES</Button>
              </Col>
              {/* <Col md="1" sm="1">
              </Col> */}
              <Col md="5" sm="5">
                <div className='player-wrapper'>
                  <   ReactPlayer
                    className='react-player'
                    width='100%'
                    height='100%'
                    url="https://www.youtube.com/watch?v=OrYsn4WuyZ4&feature=emb_title"
                  />
                </div>

              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
          <Row>
              <Col md="1">

              </Col>
              <Col md="5" sm="5">
                <h2>Polity</h2>
                <h3 className="Subtitle"><strong>BPSC 65 Mains</strong></h3>
                <p>
                Kumar Sarvesh sir's lecture on Polity for BPSC 65 Mains
            </p>
                <Button>JOIN CLASSES</Button>
              </Col>
              {/* <Col md="1" sm="1">
              </Col> */}
              <Col md="5" sm="5">
                <div className='player-wrapper'>
                  <   ReactPlayer
                    className='react-player'
                    width='100%'
                    height='100%'
                    url="https://www.youtube.com/watch?v=QzBGv0PVEq4"
                  />
                </div>

              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
        {/* <Row>
          <Col md="5" sm="5">
            <h2>Sudama Prasad Singh , BDO</h2>
            <h3 className="Subtitle">BPSC 63 Interview Class</h3>
            <p>
              Sudama Prasad Singh sir's lecture on BDO for BPSC 63 Interview
            </p>
            <Button>JOIN CLASSES</Button>
          </Col>
          <Col md="1" sm="1">
          </Col>
          <Col md="5" sm="5">
            <div className='player-wrapper'>
              <   ReactPlayer
                className='react-player'
                width='100%'
                height='100%'
                url="https://www.youtube.com/watch?v=OrYsn4WuyZ4"
              />
            </div>

          </Col>
        </Row> */}
      </Container>
      <br />
    </>
  );
}

export default CarouselPage2;
