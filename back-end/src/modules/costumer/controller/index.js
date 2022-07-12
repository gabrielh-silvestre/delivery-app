const CostumerService = require('../service');

const signIn = async (req, res) => {
  const { statusCode, payload } = await CostumerService.signIn(req.body);

  return res.status(statusCode).json(payload);
};

const signUp = async (req, res) => {
  const { statusCode, payload } = await CostumerService.signUp(req.body);

  return res.status(statusCode).json(payload);
};

module.exports = {
  signIn,
  signUp,
};
