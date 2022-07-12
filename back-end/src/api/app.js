const express = require('express');
const cors = require('cors');

const { costumerRouter, sellerRouter } = require('../shared/http/routes');

const app = express();

// app.get('/coffee', (_req, res) => res.status(418).end());
app.use(express.json());
app.use(cors());

app.use('/costumers', costumerRouter);
app.use('/sellers', sellerRouter);

module.exports = app;
