const { Router } = require('express');

const SaleController = require('../../../modules/sale/controller');

const { authHandler, validateSaleCreate } = require('../middleware/Validators');

const saleRouter = Router();

saleRouter.get('/', authHandler, SaleController.findAll);
saleRouter.get('/:id', authHandler, SaleController.findById);

saleRouter.post('/', authHandler, validateSaleCreate, SaleController.create);

module.exports = { saleRouter };
