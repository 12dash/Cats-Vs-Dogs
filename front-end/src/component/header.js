import React, { Component } from 'react';
import {Navbar, Nav} from "react-bootstrap";

class Header extends Component {
 
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Cat vs Dogs</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/model">Model</Nav.Link>
                        <Nav.Link href="/sample">Sample</Nav.Link>
                        <Nav.Link href="/prediction">Predict</Nav.Link>
                    </Nav>
                </Navbar>
            </>

        );
    }
}
export default Header;