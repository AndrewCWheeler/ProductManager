import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import { Container, Table, Button } from 'react-bootstrap';

const AllProducts = () => {

    const [ allProducts, setAllProducts ] = useState([]);

    const getAll = () => {
        axios.get("http://localhost:8000/api/products")
        .then(res => {
            console.log(res);
            setAllProducts(res.data.results);
        })
    }

    useEffect(() => {
        getAll();
    }, []);

    const deleteHandler = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            getAll();
        })
    }

    return (
        <Container>
            <h1 className="text-center">All Products</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProducts.map((product, i) =>
                        <tr key={i}>
                            <td><Link to={`/products/${product._id}`}>{ product.title }</Link></td>
                            <td>{ product.price }</td>
                            <td>{ product.description }</td>
                            <td>
                                <Link to={ `/products/${product._id}/edit`}>
                                    <Button className="mx-2 btn-primary btn-sm">Edit</Button>
                                </Link>
                                <Button 
                                className="mx-2 btn-sm btn-danger" 
                                onClick={ () => deleteHandler(product._id)}>Delete</Button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default AllProducts
