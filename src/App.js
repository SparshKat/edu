import React from 'react';
// import { Row, Nav, Button, Container, Card } from 'react-bootstrap'
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
      <div className="greyIt">
        <WindowSlider />
      </div>
      <br />
      <br />
      <CarouselPage2 />

      <br />
      <br />
      <div className="greyIt">
        <NotifPage />
      </div>
      <br />
      <br />
      <BlogPage />
      <br />
      <br />
      <div className="greyIt">
        <CoursePages />
      </div>
      <br />
      <br />
      <PhonePage />
      <div className="greyIt">
        <MapPage />
      </div>
      <div className="backgroundBlood">
        <FooterPage />Î
      </div>
    </>
  );
}

export default App;
