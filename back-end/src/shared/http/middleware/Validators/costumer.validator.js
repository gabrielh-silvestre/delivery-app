const { celebrate, Joi, Segments } = require('celebrate');

const validateSignInCostumer = celebrate({
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
});

const validateSignUpCostumer = celebrate({
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
});

module.exports = {
  validateSignInCostumer,
  validateSignUpCostumer,
};
