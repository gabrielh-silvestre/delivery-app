const CustomerService = require('../service');

const signIn = async (req, res) => {
  const { statusCode, payload } = await CustomerService.signIn(req.body);

  return res.status(statusCode).json(payload);
};

const signUp = async (req, res) => {
  const { statusCode, payload } = await CustomerService.signUp(req.body);

  return res.status(statusCode).json(payload);
};

module.exports = {
  signIn,
  signUp,
};
