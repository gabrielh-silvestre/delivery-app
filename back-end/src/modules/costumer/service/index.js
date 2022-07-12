const { NotFoundError, ConflictError } = require('restify-errors');

const CostumerModel = require('../model');

const { validate, encrypt } = require('../../../shared/utils/encrypt');
const { generateToken } = require('../../../shared/utils/auth');

const INVALID_EMAIL_OR_PASSWORD = 'Invalid email or password';

const signIn = async ({ email, password }) => {
  const foundCostumer = await CostumerModel.findByEmail(email);

  if (!foundCostumer) {
    throw new NotFoundError(INVALID_EMAIL_OR_PASSWORD);
  }

  if (!validate(password, foundCostumer.password)) {
    throw new NotFoundError(INVALID_EMAIL_OR_PASSWORD);
  }

  const { id, name, role } = foundCostumer;
  const token = generateToken({ id, role });

  return {
    statusCode: 200,
    payload: { name, role, email, token },
  };
};

const signUp = async ({ name, email, password }) => {
  const foundCostumer = await CostumerModel.findByEmail(email);

  if (foundCostumer) {
    throw new ConflictError('Email already exists');
  }

  const newCostumer = await CostumerModel.create({
    name,
    email,
    password: encrypt(password),
  });

  const { id, role } = newCostumer;
  const token = generateToken({ id, role });

  return {
    statusCode: 200,
    payload: { name, role, email, token },
  };
};

module.exports = {
  signIn,
  signUp,
};
