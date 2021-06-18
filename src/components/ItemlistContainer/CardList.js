import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink, useParams } from "react-router-dom"

function CardList(props) {
    const data = props.data;
    const {itemId} = useParams();
    return (
        <>
            <Container>
                <Row>
                    {
                        data !== null ?
                            data.map((data, index) => {
                                return (
                                    <Col key={index}>
                                        <Card id={data.id} style={{ width: '18rem' }}>
                                       <NavLink to="/Products/1" > <Card.Img variant="top" src={data.pictureURL}/> </NavLink>
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
    )
}



export default CardList