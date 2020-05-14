import React from 'react';
import { Row, Nav, FormControl, Button, Form, Container, Col, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg" style={{ backgroundColor: "rgb(191, 2, 65)" }}>
      <Container>
        <Navbar.Brand href="#home">Sarthak Samwad</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Blog</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Form inline>
            {/* <FormControl type="text" placeholder="Search" className=" mr-sm-2" /> */}
            <Button className="btn btn-danger" type="submit">Join Classes</Button>
          </Form>
        </Navbar.Collapse>
      </Container>

    </Navbar>

  );
}

export default Header;
