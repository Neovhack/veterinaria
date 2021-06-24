import React, { useState, useEffect } from 'react'
import { Card, Container, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom"

function Counter(props) {
    const [counter, setCounter] = useState(0);
    const [disabler, setDisabler] = useState(true)

    function handleClickSuma() {
        setCounter(prevCounter => prevCounter + 1);
    }
    function handleClickResta() {
        if (counter > 0) {
            setCounter(prevCounter => prevCounter - 1)
        }
    }

    useEffect(() => {
        counter > 0 ? setDisabler(false) : setDisabler(true)
    }, [counter])

    return (
        <ListGroupItem>
            <Button onClick={handleClickSuma} variant="light">
                {" "}
                +{" "}
            </Button>{" "}
            {counter}{" "}
            <Button onClick={handleClickResta} variant="light">
                {" "}
                -{" "}
            </Button>
            <NavLink exact to={"/Products/ProductsDetail/" + props.dato.id}>
                <Button variant="primary" disabled={disabler}>
                    Comprar
                </Button>
            </NavLink>
        </ListGroupItem>
    )
}


export default Counter