const { sign, verify } = require('jsonwebtoken');
const { UnauthorizedError } = require('restify-errors');

const { jwtConfig, secret } = require('../../../config/jwtConfig');

const generateToken = ({ id, role }) => {
  const token = sign({ id, role }, secret, jwtConfig);

  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = verify(token, secret, jwtConfig);

    return decoded;
  } catch (err) {
    throw new UnauthorizedError('Invalid token');
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
