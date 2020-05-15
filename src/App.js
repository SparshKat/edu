import React from 'react';
import { Row, Nav, Button, Container, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/custom.scss"

import HeaderPage from "./builtComponents/HeaderPage"
import CarouselPage2 from './builtComponents/CarouselPage2';
import WindowSlider from './builtComponents/WindowSlider';
import NotifPage from "./builtComponents/NotifPage"
import BlogPage from './builtComponents/BlogPage'
import CoursePages from './builtComponents/CoursePages'
import PhonePage from './builtComponents/PhonePage'
import FooterPage from './builtComponents/FooterPage'
import MapPage from './builtComponents/MapPage'

function App() {
  return (
    <>
      <HeaderPage />
      <br />
      <Container>
        <WindowSlider />
        <div className="greyIt">
        <CarouselPage2 />
        </div>
        <NotifPage />
        <BlogPage />
        <CoursePages />
        <br />
        <br />
        <PhonePage />
        <div className="greyIt">
          <MapPage />
        </div>
        
      </Container>
      <FooterPage />
     

    </>
  );
}

export default App;
