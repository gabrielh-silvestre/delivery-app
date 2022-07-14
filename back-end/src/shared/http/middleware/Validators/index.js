const { validateSaleCreate } = require('./sale.validator');
const { authHandler } = require('./token.validator');
const { validateUserLogin, validateUserRegister } = require('./user.validator');

module.exports = {
  validateSaleCreate,
  authHandler,
  validateUserLogin,
  validateUserRegister,
};
