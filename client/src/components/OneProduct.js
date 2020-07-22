import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";

const OneProduct = props => {

    const [ product, setProduct ] = useState({
        _id: "",
        title: "",
        price: "",
        description: "",
        createdAt: "",
        updatedAt: ""
    });

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/" + props.id)
        .then(res => {
            if(res.data.message === "Success")
            {
                setProduct(res.data.results);
            }
        }).catch(err => {
            console.log(err);
        })
    }, []);
    console.log(product);

    return (
        <Container>
            <h1 className="text-center">One Product for { product.title }</h1>
            <Row>
                <Col className="offset-sm-4">
                    <p>Title: { product.title }</p>
                    <p>Price: { product.price }</p>
                    <p>Description: { product.description }</p>
                    <p>Id: { product._id } </p>
                    <p>Added: { product.createdAt }</p>
                </Col>
            </Row>
        </Container>
    )
}

export default OneProduct
