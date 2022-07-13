const { Router } = require('express');

const productsRouter = Router();

productsRouter.get('/', (req, res) => {
  res.send('This is router: /productsRouter');
});

module.exports = { productsRouter };