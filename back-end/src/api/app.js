const express = require('express');
const cors = require('cors');
require('express-async-errors');

const { costumerRouter, sellerRouter } = require('../shared/http/routes');
const { errorHandler } = require('../shared/http/middleware/ErrorHandler');

const app = express();

// app.get('/coffee', (_req, res) => res.status(418).end());
app.use(express.json());
app.use(cors());

app.use('/costumers', costumerRouter);
app.use('/sellers', sellerRouter);

app.use(errorHandler);

module.exports = app;