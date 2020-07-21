import React, { useState, useEffect } from "react";
import axios from "axios";

import { Router, Link } from '@reach/router';
import CreateProduct from '../components/CreateProduct';
import AllProducts from '../components/AllProducts';
import OneProduct from '../components/OneProduct';
import EditProduct from '../components/EditProduct';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Main = () => {

    const [ message, setMessage ] = useState("Loading...")
    useEffect(() => {
        axios.get("http://localhost:8000/api").then(res => setMessage(res.data.message))
    }, []);

    return (
        <Container>
            <p className="mb-2">Message from the backend: {message}</p>
            <Navbar bg="light" expand="lg">
                <Nav className="mr-auto">
                    <Link className="mr-5" to="/">All Products</Link>
                    <Link to="/create"> Create Product</Link>
                </Nav>
            </Navbar>
            
            <Router>
                <AllProducts path="/" />
                <CreateProduct path="/create" />
                <EditProduct path="/products/:id/edit" />
                <OneProduct path="/products/:id" />
            </Router>
        </Container>
    )
}

export default Main


