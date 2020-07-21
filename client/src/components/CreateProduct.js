import React from 'react';
import ProductForm from './ProductForm';
import { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import { Container } from 'react-bootstrap';


const CreateProduct = () => {
    
    const [ product, setProduct ] = useState({
        title: "",
        price: "",
        description: ""
    });

    const submitData = () => {
        axios.post("http://localhost:8000/api/products/new", product)
        .then(res => {
            setProduct({
                title: "",
                price: "",
                description: ""
            })
            navigate("/")
        })
        .catch(err => {
        console.log(err);
        })
    }

    return (
        <Container>
            <h1 className="text-center">Create New Product</h1>
            <ProductForm data={ product } setData={ setProduct } submitData = { submitData }/>
        </Container>
    )
}

export default CreateProduct;
