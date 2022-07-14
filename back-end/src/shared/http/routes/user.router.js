const { Router } = require('express');

const CostumerController = require('../../../modules/user/controller');

const {
  validateUserLogin,
  validateUserRegister,
} = require('../middleware/Validators/user.validator');

const userRouter = Router();

userRouter.get('/', (_req, res) => {
  res.send('This is router: /user');
});

userRouter.post('/login', validateUserLogin, CostumerController.login);
userRouter.post('/register', validateUserRegister, CostumerController.register);

module.exports = { userRouter };
