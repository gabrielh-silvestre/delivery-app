const { UnauthorizedError } = require('restify-errors');
const SaleModel = require('../model');

const findAll = async (role, costumerId) => {
  if (role === 'customer') {
    const foundSales = await SaleModel.findAllByCostumer(costumerId);

    return {
      statusCode: 200,
      payload: foundSales,
    };
  }

  if (role === 'seller') {
    const foundSales = await SaleModel.findAllBySeller(costumerId);

    return {
      statusCode: 200,
      payload: foundSales,
    };
  }

  throw new UnauthorizedError('You are not authorized to access this resource');
};

module.exports = {
  findAll,
};
