import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import CartWidget from './CartWidget'

export default function NavBar() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Pagina Principal</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Tienda</Nav.Link>
          <Nav.Link href="#features">Informacion</Nav.Link>
          <Nav.Link href="#pricing">Contactenos</Nav.Link>
        </Nav>
          <Button variant="outline-light"> <CartWidget/></Button>
      </Navbar>
    )
}