import React, { useContext, useState, useEffect, createContext } from 'react'
import { Card, Container, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import { dataContext } from './ItemListContainer';


function CardList() {
    const data = useContext(dataContext);
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
                                          <NavLink exact to={"/Products/ProductsDetail/" + dato.id}>
                                            <Button variant="primary" disabled={disabler}>
                                              Comprar
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

