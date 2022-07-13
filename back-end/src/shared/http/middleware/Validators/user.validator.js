const { celebrate, Joi, Segments } = require('celebrate');

const validateUserLogin = celebrate({
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
});

const validateUserRegister = celebrate({
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
});

module.exports = {
  validateUserLogin,
  validateUserRegister,
};
