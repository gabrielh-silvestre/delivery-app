const { Product } = require('../../../database/models');

async function ProductsGetAllM() {
  const productsAll = await Product.findAll({
    attributes:['id', 'name', 'url_image', 'price']
  });
  return productsAll;
};

module.exports = {
  ProductsGetAllM,
};
