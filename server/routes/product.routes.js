const ProductController = require('../controllers/product.controller');
module.exports = function (app) {
  app.get('/api', ProductController.index);
  app.get('/api/products', ProductController.findAllProducts);
  app.get('/api/products/:id', ProductController.findSingleProduct);
  app.post('/api/products/new', ProductController.createProduct);
  app.put('/api/products/:id', ProductController.updateProduct);
  app.delete('/api/products/:id', ProductController.deleteProduct);
};
