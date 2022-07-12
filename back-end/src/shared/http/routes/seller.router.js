const { Router } = require('express');

const sellerRouter = Router();

sellerRouter.get('/', (req, res) => {
  res.send('This is router: /sellers');
});

module.exports = { sellerRouter };
