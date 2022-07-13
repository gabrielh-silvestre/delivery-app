const SaleService = require('../service');

const findAll = async (req, res) => {
  const { id, role } = req.user;

  const { statusCode, payload } = await SaleService.findAll(role, id);

  return res.status(statusCode).json(payload);
};

module.exports = {
  findAll,
};
