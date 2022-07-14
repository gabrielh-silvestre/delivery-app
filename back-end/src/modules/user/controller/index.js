const CustomerService = require('../service');

const login = async (req, res) => {
  const { statusCode, payload } = await CustomerService.login(req.body);

  return res.status(statusCode).json(payload);
};

const register = async (req, res) => {
  const { statusCode, payload } = await CustomerService.register(req.body);

  return res.status(statusCode).json(payload);
};

module.exports = {
  login,
  register,
};
