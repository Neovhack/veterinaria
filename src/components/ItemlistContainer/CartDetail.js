import React from 'react'
import { UseCart } from "../../Provider/CartContext"
import { NavLink } from "react-router-dom"
import { Card, Container, Row, Col, ListGroupItem, ListGroup, Button } from 'react-bootstrap';

export default function CartDetail() {

  const { cart } = UseCart();
  const { removeItem } = UseCart();

  return (
    <Container>

      {
        cart.length !== 0 ?
          cart.map((product, index) => {
            return (
              <Row>
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
              </Row>
            )
          }) :
          <>
            <Row>
              <h5 className="p-4 m-auto"> No hay Productos seleccionados, Vuelva a la tienda!</h5>
            </Row>
            <Row >
              <NavLink className="m-auto" exact to={"/Products"}>
                <Button>
                  Volver
                </Button>
              </NavLink>
            </Row>
          </>
      }
    </Container>
  )
}
