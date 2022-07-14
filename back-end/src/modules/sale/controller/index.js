const SaleService = require('../service');

const findAll = async (req, res) => {
  const { id, role } = req.user;

  const { statusCode, payload } = await SaleService.findAll(role, id);

  return res.status(statusCode).json(payload);
};

const findById = async (req, res) => {
  const { id, role } = req.user;
  const { id: saleId } = req.params;

  const { statusCode, payload } = await SaleService.findById(role, id, saleId);

  return res.status(statusCode).json(payload);
};

const create = async (req, res) => {
  const { id, role } = req.user;

  const { statusCode } = await SaleService.create(role, id, req.body);

  return res.status(statusCode).end();
};

module.exports = {
  findAll,
  findById,
  create,
};
