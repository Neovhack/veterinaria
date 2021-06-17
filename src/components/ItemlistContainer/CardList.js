import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';

function CardList(props) {
    const data = props.data;
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
                                            <Card.Img variant="top" src={data.pictureURL} />
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