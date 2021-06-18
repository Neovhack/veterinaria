import React from 'react'
import { Link, NavLink, useParams } from "react-router-dom"
import { Card, Container, Row, Col } from 'react-bootstrap';

function ProductsDetail(props) {
    const { itemId } = useParams();
    //Traigo datos del producto seleccionado
    const { datos } = props.location.state
    return (
        //HTML del producto seleccionado
        <Container>
            <Row>
                <Col>
                    <Card id={datos.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={datos.pictureURL} />
                        <Card.Body>
                            <Card.Title>{datos.name}</Card.Title>
                            <Card.Text>
                                {datos.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductsDetail
