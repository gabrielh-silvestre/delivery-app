const costumerSaleFormat = (sale) => ({
  id: sale.id,
  totalPrice: sale.totalPrice,
  address: sale.address,
  saleDate: sale.saleDate,
  status: sale.status,
  productQuantities: sale.quantities,
});

const customerSaleReturnNormalizer = (sales) =>
  sales.map(({ dataValues }) => {
    const address = {
      street: dataValues.deliveryAddress,
      number: dataValues.deliveryNumber,
    };

    const quantities = dataValues.products.map(({ id, saleProducts }) => ({
      id,
      quantity: saleProducts.quantity,
    }));

    return costumerSaleFormat({ ...dataValues, address, quantities });
  });

module.exports = {
  customerSaleReturnNormalizer,
};
