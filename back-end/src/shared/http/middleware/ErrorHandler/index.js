const { isCelebrateError } = require('celebrate');
const {
  BadRequestError,
  UnprocessableEntityError,
  InternalServerError,
} = require('restify-errors');

const normalizeJoiError = (errMessage) =>
  (errMessage.includes('required')
    ? new BadRequestError(errMessage)
    : new UnprocessableEntityError(errMessage));

const normalizeCelebrateError = (err) => {
  let error;

  err.details.forEach((detail) => {
    error = normalizeJoiError(detail.message);
  });

  return error;
};

const normalizeError = (err) => {
  if (err.statusCode) {
    return err;
  }

  console.error(err);
  return new InternalServerError('Internal error');
};

const errorHandler = (err, _req, res, _next) => {
  if (isCelebrateError(err)) {
    const { statusCode, message } = normalizeCelebrateError(err);

    return res.status(statusCode).json({ message });
  }

  const { statusCode, message } = normalizeError(err);

  return res.status(statusCode).json({ message });
};

module.exports = { errorHandler };
