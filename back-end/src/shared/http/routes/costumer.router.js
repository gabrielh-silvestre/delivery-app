const { Router } = require('express');

const costumerRouter = Router();

costumerRouter.get('/', (req, res) => {
  res.send('This is router: /costumers');
});

module.exports = { costumerRouter };
