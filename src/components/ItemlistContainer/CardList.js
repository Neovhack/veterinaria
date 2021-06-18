import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink, useParams } from "react-router-dom"

class CardList extends Component {
    render() {
        const data = this.props.data;
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
                                            <Card id={data.id} style={{ width: '18rem' }}> 
                                                <NavLink exact to={{ pathname: "/Products/ProductsDetail/" + data.id, state: { datos: data } }}>
                                                    <Card.Img variant="top" src={data.pictureURL} />
                                                </NavLink>
                                                <Card.Body>
                                                    <Card.Title>{data.name}</Card.Title>
                                                    <Card.Text>
                                                        {data.price}
                                                    </Card.Text>
                                                </Card.Body>
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

export default CardList;