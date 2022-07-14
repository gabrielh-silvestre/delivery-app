const { Router } = require('express');

const SaleController = require('../../../modules/sale/controller');

const { authHandler, validateSaleCreate } = require('../middleware/Validators');

const saleRouter = Router();

saleRouter.get('/', authHandler, SaleController.findAll);
saleRouter.get('/:id', authHandler, SaleController.findById);
saleRouter.patch('/pending/:id', authHandler, SaleController.updatePending);
saleRouter.patch('/preparing/:id', authHandler, SaleController.updatePreparing);
saleRouter.patch('/delivering/:id', authHandler, SaleController.updateDelivering);
saleRouter.patch('/delivered/:id', authHandler, SaleController.updateDelivered);

saleRouter.post('/', authHandler, validateSaleCreate, SaleController.create);

module.exports = { saleRouter };
