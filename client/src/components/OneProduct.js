import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container } from "react-bootstrap";

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
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res => {
            if(res.data.message === "success")
            {
                setProduct(res.data.results);
            }
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <Container>
            <h1 className="text-center">One Product for { product.title }</h1>
            <ul>
                <li>Title: { product.title }</li>
                <li>Price: { product.price }</li>
                <li>Description: { product.description }</li>
                <li>Id: { product._id } </li>
                <li>Added: { product.createdAt }</li>
            </ul>
        </Container>
    )
}

export default OneProduct
