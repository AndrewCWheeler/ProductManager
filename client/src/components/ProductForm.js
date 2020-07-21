import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const ProductForm = props => {
    const { data, setData, submitData } = props;

    const changeHandler = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = e => {
        e.preventDefault();
        submitData();
    }
    
    return (
        <Container>
            <Form 
            className="my-4 offset-sm-4 justify-content-center"
            onSubmit={ submitHandler }
            >
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                    className="col-sm-6 form-control-lg"
                    type="text" 
                    name="title" 
                    onChange={ e => changeHandler(e)} 
                    value={ data.title } 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                    className="col-sm-6 form-control-lg"
                    type="number"
                    name="price"
                    min="1"
                    step="any"
                    onChange={ e => changeHandler(e)}
                    value={ data.price } 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                    className="col-sm-6 form-control-lg"
                    type="text"
                    name="description"
                    onChange={ e => changeHandler(e)}
                    value={ data.description }
                    />
                </Form.Group>
                <Button
                className="col-sm-6 my-4 btn-primary btn-block btn-lg"
                type="submit"
                >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default ProductForm;