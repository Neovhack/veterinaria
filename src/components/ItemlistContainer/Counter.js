import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { ListGroupItem, Button } from 'react-bootstrap';
import { UseCart } from "../../Provider/CartContext"

function Counter(props) {
    const { cart } = UseCart();
    const {addToCart} = UseCart();
    const [counter, setCounter] = useState(0);

    function handleClickSuma() {
        setCounter(counter + 1)
    }
    function handleClickResta() {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }



    return (
        <>
            <ListGroupItem className="mx-auto"> Cantidad:
                <Button onClick={handleClickSuma} variant="light">
                    {" "}
                    +{" "}
                </Button>{" "}
                {counter}{" "}
                <Button onClick={handleClickResta} variant="light">
                    {" "}
                    -{" "}
                </Button>
            </ListGroupItem>
            <ListGroupItem className="mx-auto">
                <NavLink exact to={"/Products/CartDetail"}>
                    <Button onClick={() => addToCart(props.dato,counter)} variant="primary" disabled={counter > 0 ? false : true}>
                        Agregar al Carrito
                    </Button>
                </NavLink>
            </ListGroupItem>
        </>
    )
}

export default Counter