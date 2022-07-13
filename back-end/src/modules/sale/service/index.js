const SaleModel = require('../model');

const findAllByCostumer = async (costumerId) => {
  const foundSales = await SaleModel.findAllByCostumer(costumerId);

  return {
    statusCode: 200,
    payload: foundSales,
  };
};

module.exports = {
  findAllByCostumer,
};
