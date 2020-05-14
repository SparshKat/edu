import React from 'react';
import { Row, Nav, Button, Container, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/custom.scss"

import HeaderPage from "./builtComponents/HeaderPage"
import CarouselPage2 from './builtComponents/CarouselPage2';
import WindowSlider from './builtComponents/WindowSlider';
function App() {
  return (
    <>
      <HeaderPage />
      <Container>
        <WindowSlider />
       <CarouselPage2 />
      </Container>

      
    </>
  );
}

export default App;
