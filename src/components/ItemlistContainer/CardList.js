import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { Card, Container, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { dataContext } from './ItemListContainer';

function CardList() {
  const data = useContext(dataContext);
  
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
                        <ListGroupItem className="mx-auto"> Precio: {"$" + dato.price}
                        </ListGroupItem>
                        <ListGroupItem className="mx-auto">
                        <NavLink exact to={"/Products/ProductsDetail/" + dato.id}>
                            <Button className="ml-3" variant="primary">
                              Ver Detalles
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
