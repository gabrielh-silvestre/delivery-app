const sellerSaleFormat = (sale) => ({
  id: sale.id,
  totalPrice: sale.totalPrice,
  address: sale.address,
  saleDate: sale.saleDate,
  status: sale.status,
});

const detailedSaleFormatter = ({ dataValues }) => {
  const products = dataValues.products.map(
    ({ id, name, price, saleProduct }) => ({
      id,
      name,
      price,
      quantity: saleProduct.quantity,
    }),
  );

  return {
    ...dataValues,
    products,
  };
};

const sellerSaleReturnNormalizer = (sales) =>
  sales.map(({ dataValues }) => {
    const address = {
      street: dataValues.deliveryAddress,
      number: dataValues.deliveryNumber,
    };

    return sellerSaleFormat({ ...dataValues, address });
  });

module.exports = {
  sellerSaleReturnNormalizer,
  detailedSaleFormatter,
};
