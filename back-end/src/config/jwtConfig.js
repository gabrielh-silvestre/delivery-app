const { readFileSync } = require('fs');

const jwtConfig = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const secret = readFileSync('jwt.evaluation.key', 'utf8');

module.exports = { jwtConfig, secret };
