const { Router } = require('express');

const SaleController = require('../../../modules/sale/controller');

const { authHandler } = require('../middleware/Validators/token.validator');

const saleRouter = Router();

saleRouter.get('/', authHandler, SaleController.findAll);
saleRouter.get('/:id', authHandler, SaleController.findById);

module.exports = { saleRouter };
