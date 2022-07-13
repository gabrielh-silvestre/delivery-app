const ProductsService = require('../service/index.js');

const ProductsGetAllC = async (req, res) => {
    const productsAll = await ProductsService.ProductsGetAllS();
    const { message } = productsAll;
      if(productsAll.status) { return res.status(productsAll.status).json({message}) }  
        return res.status(200).json(productsAll);
};

module.exports = { ProductsGetAllC };