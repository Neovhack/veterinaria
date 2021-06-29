import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { Card, Container, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { dataContext } from './ItemListContainer';
import Counter from "./Counter"
import { UseCart } from "./CartContext"

function CardList() {
  const data = useContext(dataContext);
  const {addToCart} = UseCart();
  
  return (
    //map que muestra todos los datos traidos de la API
    <>
      <Container>
        <Row>
          {
            data !== null ?
              data.map((dato, index) => {
                return (
                  <Col key={index}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={dato.pictureURL} />
                      <Card.Body className="mx-auto">
                        <Card.Title>{dato.name}</Card.Title>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem> Precio: {"$" + dato.price}
                          <NavLink exact to={"/Products/ProductsDetail/" + dato.id}>
                            <Button className="ml-3" variant="primary">
                              Ver Detalles
                            </Button>
                          </NavLink>
                        </ListGroupItem>
                        <ListGroupItem className="mx-auto">
                          <NavLink exact to={"/Products/CartDetail"}>
                            <Button onClick={() => addToCart(dato)} variant="primary">
                             Agregar al Carrito
                            </Button>
                          </NavLink>
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
    </>
  )
}


export default CardList
