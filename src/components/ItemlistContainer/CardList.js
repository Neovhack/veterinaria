import React, { useContext, useState, useEffect, createContext } from 'react'
import { Card, Container, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import { dataContext } from './ItemListContainer';
import Counter from "./Counter"

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
                                      <Card.Body>
                                        <Card.Title>{dato.name}</Card.Title>
                                      </Card.Body>
                                      <ListGroup className="list-group-flush">
                                        <ListGroupItem>{dato.price}</ListGroupItem>
                                        <Counter dato={dato}/>
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
