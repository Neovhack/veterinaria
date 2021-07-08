import React, { useState } from 'react'
import { UseCart } from "../../Provider/CartContext"
import { NavLink } from "react-router-dom"
import { Card, Container, Row, Col, ListGroupItem, ListGroup, Button, Form } from 'react-bootstrap';
import { getFireStore } from "../../FireBase/api"

export default function Buy() {

    const { cart, setCart } = UseCart();
    const { removeItem } = UseCart();
    const { getTotal } = UseCart();

    const [id, setId] = useState()
    const db = getFireStore();

    const gorroCollection = db.collection("pedido");



    function sendInfo(e) {
        e.preventDefault()
        const newCompra = {
            cliente: {
                nombre: document.getElementById("NombreCompleto").value,
                direccion: document.getElementById("Direccion").value,
                email: document.getElementById("Email").value
            },
            precio: getTotal()
        }
        gorroCollection.add(newCompra).then(({ id }) => {
            setId(id)
        }).catch(err => console.log(err)).finally(console.log("Terminado"))
        setCart([])
    }

    return (
        <Container>
            <h6 className="m-3">Ingrese sus datos para finalizar la compra:</h6>
            <Row>
                <Form>
                    <Form.Group>
                        <Form.Label>Nombre Completo</Form.Label>
                        <Form.Control id="NombreCompleto" type="text" placeholder="Nicolas Boland" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control id="Direccion" type="text" placeholder="742 Evergreen Terrace" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control id="Email" type="email" placeholder="sss@hotmail.com" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => sendInfo(e)}>
                        Registrar Compra
                    </Button>
                </Form>
            </Row>
            <h4 className="m-3">Detalle de compra:</h4>
            <Row>
                {
                    cart.length !== 0 ?
                        cart.map((product, index) => {
                            return (
                                <Col key={index}>
                                    <Card style={{ width: "18rem" }}>
                                        <Card.Img variant="top" src={product.pictureURL} />
                                        <Card.Body className="mx-auto">
                                            <Card.Title>{product.name}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem className="mx-auto">
                                                Precio: {"$" + product.price}
                                            </ListGroupItem>
                                            <ListGroupItem className="mx-auto">
                                                Cantidad: {product.quantity}
                                            </ListGroupItem>
                                            <ListGroupItem className="mx-auto">
                                                <Button onClick={() => removeItem(product)} variant="primary">
                                                    Eliminar del Carrito
                                                </Button>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                </Col>

                            )
                        }) :
                        <>
                            <Row >
                                <p className="displat m-auto"> Su Compra fue registrada con el ID :{id}</p>
                            </Row>
                        </>
                }  </Row>
                  <h5 className="p-4 mx-auto">Total:{getTotal()}</h5>
        </Container>
    )
}
