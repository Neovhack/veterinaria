import React, { useState } from 'react'
import { ListGroupItem, Button } from 'react-bootstrap';
import { UseCart } from "./CartContext"

function Counter(props) {
    const { cart } = UseCart();
    var [counter, setCounter] = useState(0);
    const handleQuantity = cart.find(element => element.id == props.dato.id)
  
    function handleClickSuma() {
       setCounter(counter + 1)
    }
    function handleClickResta() {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

 
 
    return (
        <ListGroupItem className="mx-auto">
            <Button onClick={() => props.handleCounter(counter), handleClickSuma} variant="light">
                {" "}
                +{" "}
            </Button>{" "}
            {counter}{" "}
            <Button onClick={() => props.handleCounter(counter), handleClickResta} variant="light">
                {" "}
                -{" "}
            </Button>
        </ListGroupItem>
    )
}


export default Counter