import React from 'react';
import { Navbar, Nav, Button, } from 'react-bootstrap';
import CartWidget from './CartWidget'
import { Link, NavLink } from "react-router-dom"

export default function NavBar() {
  return (
    <Navbar bg="primary" variant="dark">
     <NavLink className="prueba" exact to="/">Home</NavLink>
      <Nav className="mr-auto">
        <NavLink  className="prueba" to="/Products">Products</NavLink>
      </Nav>
      <Button variant="outline-light"> <CartWidget /></Button>
    </Navbar>
  )
}