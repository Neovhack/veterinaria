import React from 'react';
import image from '../../assets/carrito.png';
import { NavLink } from "react-router-dom"

function CartWidget() {
    return (
        //Carrito
        <NavLink exact to={"/Products/CartDetail"}>
        <img src={image} alt="Carrito" />
        </NavLink>
    )
}


export default CartWidget;





