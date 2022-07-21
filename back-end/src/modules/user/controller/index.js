const CustomerService = require('../service');

const findAll = async (req, res) => {
  const { id } = req.user;
  const { statusCode, payload } = await CustomerService.findAll(
    id,
    req.query.r || null,
  );

  return res.status(statusCode).json(payload);
};

const login = async (req, res) => {
  const { statusCode, payload } = await CustomerService.login(req.body);

  return res.status(statusCode).json(payload);
};

const register = async (req, res) => {
  const { statusCode, payload } = await CustomerService.register(req.body);

  return res.status(statusCode).json(payload);
};

const destroy = async (req, res) => {
  const { role } = req.user;
  const { statusCode } = await CustomerService.destroy(role, req.params.id);

  return res.status(statusCode).end();
};

module.exports = {
  findAll,
  login,
  register,
  destroy,
};
