import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const DeleteButton = props => {
  const { productId, successCallback } = props;

  const deleteProduct = e => {
    axios
      .delete('http://localhost:8000/api/products/' + productId)
      .then(res => {
        successCallback();
      });
  };

  return (
    <Button className='mx-2 btn-sm btn-danger' onClick={deleteProduct}>
      Delete
    </Button>
  );
};

export default DeleteButton;
