const { User } = require('../../../database/models');

const findById = async (id) => {
  const user = await User.findByPk({
    attributes: ['id', 'name', 'role'],
    where: { id },
  });

  return user;
};

const findByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
  });

  return user;
};

const create = async ({ name, email, password, role = 'customer' }) => {
  const data = { name, email, password, role };
  const user = await User.create(data, {
    attributes: ['id', 'name', 'role'],
  });

  return user;
};

module.exports = {
  findById,
  findByEmail,
  create,
};
