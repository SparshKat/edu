import React from 'react';
import { Row, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <Nav fill variant="tabs" defaultActiveKey="/home" style={{ backgroundColor: "rgb(191, 2, 65)" }}>
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
    </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Footer;
