import React from "react"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css"

function NavBar() {


    return (
        <Navbar className="navbar_styling" expand="sm" sticky="top">

            <Container>
                <Navbar.Brand className="item_styling" href="#intro">HOUSSEMEDDINE SALEM</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container >
                        <Nav className="spacing_navbar_items">

                            <Nav.Link className="item_styling" href="#about">ABOUT</Nav.Link>
                            <Nav.Link className="item_styling" href="#projects">PROJECT</Nav.Link>
                            <Nav.Link className="item_styling" href="#contact">CONTACT</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Container>


        </Navbar >
    )
}



export default NavBar





