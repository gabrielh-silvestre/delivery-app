const { Sale, Product, User } = require('../../../database/models');

const {
  sellerSaleReturnNormalizer,
  detailedSaleFormatter,
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

const findByIdByCostumer = async (costumerId, saleId) => {
  const sale = await Sale.findOne({
    where: { id: saleId, userId: costumerId },
    include: [
      {
        model: User,
        as: 'seller',
        attributes: ['id', 'name'],
      },
      {
        model: Product,
        as: 'products',
        through: { attributes: ['quantity'], as: 'saleProduct' },
        attributes: { exclude: ['urlImage'] },
      },
    ],
    attributes: ['id', 'totalPrice', 'saleDate', 'status'],
  });

  return sale ? detailedSaleFormatter(sale) : null;
};

const findByIdBySeller = async (sellerId, saleId) => {
  const sale = await Sale.findOne({
    where: { id: saleId, sellerId },
    include: [
      {
        model: Product,
        as: 'products',
        through: { attributes: ['quantity'], as: 'saleProduct' },
        attributes: { exclude: ['urlImage'] },
      },
    ],
    attributes: ['id', 'totalPrice', 'saleDate', 'status'],
  });

  return sale ? detailedSaleFormatter(sale) : null;
};

const findByIdByPending = async (id) => {
  const sale = await Sale.findOne({ where: { id } });

  if (!sale) return null;

  await Sale.update({ status: 'PENDENTE' }, { where: { id } });
  return true;
};

module.exports = {
  findAllByCostumer,
  findAllBySeller,
  findByIdByCostumer,
  findByIdBySeller,
  findByIdByPending,
};
