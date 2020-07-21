import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import { navigate } from '@reach/router';
import { Container } from "react-bootstrap";

const EditProduct = props => {
    const [ product, setProduct ] = useState({
        title: "",
        price: "",
        description: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res => {
            setProduct(res.data.results);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const submitData = () => {
        axios.put(`http://localhost:8000/api/products/${props.id}`, product)
            .then(res => {
                console.log(res);
                setProduct({
                title: "",
                price: "",
                description: ""
            })
            navigate("/")
            .catch(err => console.log(err));
        })
    }
    

    return (
        <Container>
            <h1 className="text-center">Edit Product</h1>
            <ProductForm data={ product } setData={ setProduct } submitData={ submitData }/>
        </Container>
    )
}

export default EditProduct
