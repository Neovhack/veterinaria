import React, { useContext, useState, useEffect, createContext } from 'react'
import { Card, Container, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import { dataContext } from './ItemListContainer';
import ProductsDetail from "./ProductsDetail"
export const dataSelected = createContext();

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
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={dato.pictureURL} />
                                            <Card.Body>
                                                <Card.Title>{dato.name}</Card.Title>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroupItem>{dato.price}</ListGroupItem>
                                                <ListGroupItem>
                                                    <Button onClick={handleClickSuma} variant="light"> + </Button> {counter} <Button onClick={handleClickResta} variant="light"> - </Button>
                                                    <NavLink exact to={"/Products/ProductsDetail/" + dato.id}>
                                                        <Button variant="primary" disabled={disabler} >Comprar</Button>
                                                    </NavLink>
                                                    <dataSelected.Provider value={dato}>
                                                        <ProductsDetail/>
                                                    </dataSelected.Provider>
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












/*import React, { Component } from 'react';
import { Card, Container, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom"

class CardList extends Component {
    render() {
        const data = this.props.data;
        var counter = 0;

        function handleClickSuma() {
            counter = counter + 1
        }
        function handleClickResta() {
            if (counter > 0) {
                counter = - 1
            }
        }

        return (
            //map que muestra todos los datos traidos de la API
            <>
                <Container>
                    <Row>
                        {
                            data !== null ?
                                data.map((data, index) => {
                                    return (
                                        <Col key={index}>
                                            <Card style={{ width: '18rem' }}>
                                                <NavLink exact to={{ pathname: "/Products/ProductsDetail/" + data.id, state: { datos: data } }}>
                                                    <Card.Img variant="top" src={data.pictureURL} />
                                                </NavLink>
                                                <Card.Body>
                                                    <Card.Title>{data.name}</Card.Title>
                                                </Card.Body>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroupItem>{data.price}</ListGroupItem>
                                                    <ListGroupItem><Button onClick={handleClickSuma} variant="light"> + </Button> {counter} <Button onClick={handleClickResta} variant="light"> - </Button>
                                                    <Button variant="primary" >Comprar</Button></ListGroupItem>

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
        );
    }
}

export default CardList;*/