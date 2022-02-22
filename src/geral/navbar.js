import { Container, Navbar } from "react-bootstrap";
import logo from "../lollogo.png";
import React from "react";

export default function Navegador (){
    return(
        <Navbar bg="dark">
            <Container>
                <Navbar.Brand href="/">
                <img
                src={logo}
                width="300"
                height="100"
                className="d-inline-block align-top"
                alt="Lol logo"
                />
                </Navbar.Brand>
            </Container>
      </Navbar>
    )
}