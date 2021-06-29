import React from 'react'
import { UseCart } from "./CartContext"
import { Card, Container, Row, Col, ListGroupItem, ListGroup, Button } from 'react-bootstrap';
import Counter from "./Counter"

export default function CartDetail() {

  const { cart } = UseCart();
  const { removeItem } = UseCart();

  return (
    <Container>
      <Row>
        {
          cart !== null ?
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
                        Cantidad:    {product.quantity}                 
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
            console.log("cargando")
        }
      </Row>
    </Container>
  )
}
