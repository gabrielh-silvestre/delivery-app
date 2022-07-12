const md5 = require('md5');

const encrypt = (text) => md5(text);

const validate = (password, dbPassword) => encrypt(password) === dbPassword;

module.exports = {
  encrypt,
  validate,
};
