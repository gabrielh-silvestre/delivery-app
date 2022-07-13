const { Sale } = require('../../../database/models');

const {
  sellerSaleReturnNormalizer,
} = require('../../../shared/utils/normalizer');

const findAllByCostumer = async (costumerId) => {
  const sales = await Sale.findAll({
    where: { userId: costumerId },
    attributes: {
      exclude: ['userId', 'sellerId', 'deliveryAddress', 'deliveryNumber'],
    },
  });

  return sales;
};

const findAllBySeller = async (sellerId) => {
  const sales = await Sale.findAll({
    where: { sellerId },
    attributes: { exclude: ['userId', 'sellerId'] },
  });

  return sellerSaleReturnNormalizer(sales);
};

module.exports = {
  findAllByCostumer,
  findAllBySeller,
};
