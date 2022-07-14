const { UnauthorizedError, NotFoundError } = require('restify-errors');

const SaleModel = require('../model');

const NOT_AUTHORIZED = 'You are not authorized to access this resource';

const findAll = async (role, costumerId) => {
  const finds = {
    customer: SaleModel.findAllByCostumer,
    seller: SaleModel.findAllBySeller,
  };

  if (role === 'customer' || role === 'seller') {
    const foundSales = await finds[role](costumerId);

    return { statusCode: 200, payload: foundSales };
  }

  throw new UnauthorizedError(NOT_AUTHORIZED);
};

const findById = async (role, userId, saleId) => {
  const finds = {
    customer: SaleModel.findByIdByCostumer,
    seller: SaleModel.findByIdBySeller,
  };

  if (role === 'customer' || role === 'seller') {
    const foundSale = await finds[role](userId, saleId);

    if (foundSale === null) throw new NotFoundError('Sale not found');

    return { statusCode: 200, payload: foundSale };
  }

  throw new UnauthorizedError(NOT_AUTHORIZED);
};

const create = async (role, userId, sale) => {
  if (role !== 'customer') throw new UnauthorizedError(NOT_AUTHORIZED);

  const { sellerId, totalPrice, address, orders } = sale;
  const createdSale = await SaleModel.createNewSale({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress: address.street,
    deliveryNumber: address.number,
  });

  await Promise.all(
    orders.map(async ({ id, quantity }) => {
      const { id: saleId } = createdSale;
      await SaleModel.addProductToSale({ productId: id, saleId, quantity });
    }),
  );

  return { statusCode: 201, payload: null };
};

module.exports = {
  findAll,
  findById,
  create,
};
