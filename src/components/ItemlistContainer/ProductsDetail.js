import React, { useContext } from 'react'
import { Link, NavLink, useParams } from "react-router-dom"
import { Card, Container, Row, Col } from 'react-bootstrap';
import dataProductos from "../../datosProductos.json"


function ProductsDetail() {
    //Traigo datos del producto seleccionado
   const {itemId} = useParams();
   const datosItem = dataProductos.find(elemento => elemento.id == itemId )
    return (
        //HTML del producto seleccionado
        <Container>
            <Row>
                <Col>
                    <Card id={datosItem.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={datosItem.pictureURL} />
                        <Card.Body>
                            <Card.Title>{datosItem.name}</Card.Title>
                            <Card.Text>
                                {datosItem.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductsDetail






/*import React, {useContext} from 'react'
import { Link, NavLink, useParams } from "react-router-dom"
import { Card, Container, Row, Col } from 'react-bootstrap';
import dataDetails from "../components/ItemlistContainer/CardList"

function ProductsDetail(props) {
    const { itemId } = useParams();
    //Traigo datos del producto seleccionado
    const datosItem = useContext(dataDetails);
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

export default ProductsDetail*/