import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import { Container, Table, Button } from 'react-bootstrap';
import DeleteButton from './DeleteButton';

const AllProducts = props => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products').then(res => {
      setAllProducts(res.data.results);
    });
  }, []);
  const removeFromDom = productId => {
    setAllProducts(allProducts.filter(product => product._id !== productId));
  };

  return (
    <Container>
      <h1 className='text-center'>All Products</h1>
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
          {allProducts.map((product, i) => (
            <tr key={i}>
              <td>
                <Link to={`/products/${product._id}`}>{product.title}</Link>
              </td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <Link to={`/products/${product._id}/edit`}>
                  <Button className='mx-2 btn-primary btn-sm'>Edit</Button>
                </Link>
                <DeleteButton
                  productId={product._id}
                  successCallback={() => removeFromDom(product._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AllProducts;
