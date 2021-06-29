import React, { useState, useEffect } from 'react'
import { ListGroupItem, Button } from 'react-bootstrap';
import { UseCart } from "./CartContext"

function Counter(props) {
    const { cart } = UseCart();
    const handleQuantity = cart.find(element => element.id == props.dato.id)
  
    function handleClickSuma() {
        handleQuantity.quantity = handleQuantity.quantity + 1
    }
    function handleClickResta() {
        if (handleQuantity.quantity > 0) {
            handleQuantity.quantity = handleQuantity.quantity - 1
        }
    }
    
 
    return (
        <ListGroupItem className="mx-auto">
            <Button onClick={handleClickSuma} variant="light">
                {" "}
                +{" "}
            </Button>{" "}
            {handleQuantity.quantity}{" "}
            <Button onClick={handleClickResta} variant="light">
                {" "}
                -{" "}
            </Button>
        </ListGroupItem>
    )
}


export default Counter