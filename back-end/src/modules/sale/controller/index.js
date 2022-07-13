const SaleService = require('../service');

const findAll = async (req, res) => {
  const { id, role } = req.user;

  if (role === 'customer') {
    const { statusCode, payload } = await SaleService.findAllByCostumer(id);

    return res.status(statusCode).json(payload);
  }

  res.json({ message: 'Not implemented yet' });
};

module.exports = {
  findAll,
};
