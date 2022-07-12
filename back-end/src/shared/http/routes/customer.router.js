const { Router } = require('express');

const CostumerController = require('../../../modules/customer/controller');

const {
  validateSignInCostumer,
  validateSignUpCostumer,
} = require('../middleware/Validators/costumer.validator');

const costumerRouter = Router();

costumerRouter.get('/', (req, res) => {
  res.send('This is router: /costumers');
});

costumerRouter.post(
  '/signIn',
  validateSignInCostumer,
  CostumerController.signIn,
);
costumerRouter.post(
  '/signUp',
  validateSignUpCostumer,
  CostumerController.signUp,
);

module.exports = { costumerRouter };
