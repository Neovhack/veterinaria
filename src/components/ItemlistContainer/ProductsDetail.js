import React from 'react'
import { NavLink, useParams } from "react-router-dom"
import { Card, Container, Row, Col, Button, ListGroupItem, ListGroup } from 'react-bootstrap';
import { UseData } from "../../Provider/DataContext"
import Counter from "./Counter"

function ProductsDetail() {
    //Traigo datos del producto seleccionado
    const { itemId } = useParams();
    const { data } = UseData();
    const datosItem = data.find(elemento => elemento.id == itemId)

    return (
        //HTML del producto seleccionado
        <Container>
            <Row>
                <Col key={datosItem.id}>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={datosItem.pictureURL} />
                        <Card.Body className="mx-auto">
                            <Card.Title>{datosItem.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="mx-auto">
                                Precio: {"$" + datosItem.price}
                            </ListGroupItem>
                         
                                <Counter dato={datosItem} />
                       
                            <ListGroupItem className="mx-auto">
                                <NavLink exact to={"/Products"}>
                                    <Button variant="primary">
                                        Volver
                                    </Button>
                                </NavLink>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductsDetail

