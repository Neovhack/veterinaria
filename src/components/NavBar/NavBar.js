import React from 'react';
import { Navbar, Nav, Button, } from 'react-bootstrap';
import CartWidget from './CartWidget'
import { NavLink } from "react-router-dom"

export default function NavBar() {
  return (
    //NavBar con rutas
    <Navbar bg="primary" variant="dark">
      <NavLink className="navBar" exact to="/">Home</NavLink>
      <Nav className="mr-auto">
        <NavLink className="navBar" to="/Products">Products</NavLink>
      </Nav>
      <Button variant="outline-light"> <CartWidget /></Button>
    </Navbar>
  )
}