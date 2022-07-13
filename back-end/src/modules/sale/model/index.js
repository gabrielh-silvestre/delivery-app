const { Sale, Product } = require('../../../database/models');

const {
  customerSaleReturnNormalizer,
} = require('../../../shared/utils/normalizer');

const findAllByCostumer = async (costumerId) => {
  const sales = await Sale.findAll({
    where: { userId: costumerId },
    include: [
      {
        model: Product,
        as: 'products',
        through: { attributes: ['quantity'], as: 'saleProducts' },
        attributes: ['id'],
      },
    ],
    attributes: { exclude: ['userId', 'sellerId'] },
  });

  return customerSaleReturnNormalizer(sales);
};

module.exports = {
  findAllByCostumer,
};
