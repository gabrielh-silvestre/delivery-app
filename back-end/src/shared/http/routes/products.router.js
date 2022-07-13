const { Router } = require('express');
const ProductsController = require('../../../modules/products/controller');

const productsRouter = Router();

// productsRouter.get('/', (req, res) => {
//   res.send('This is router: /productsRouter');
// });

productsRouter.get('/', ProductsController.ProductsGetAllC);

module.exports = { productsRouter };