const { User } = require('../../../database/models');

const findAll = async () => {
  const users = await User.findAll({
    attributes: ['id', 'name', 'role'],
    where: { role: 'customer' },
  });

  return users;
};

const findById = async (id) => {
  const user = await User.findByPk({
    attributes: ['id', 'name', 'role'],
    where: { id, role: 'customer' },
  });

  return user;
};

const findByEmail = async (email) => {
  const user = await User.findOne({
    where: { email, role: 'customer' },
  });

  return user;
};

const create = async ({ name, email, password }) => {
  const data = { name, email, password, role: 'customer' };
  const user = await User.create(data, {
    attributes: ['id', 'name', 'role'],
  });

  return user;
};

const update = async (id, { name, email, password, role }) => {
  const data = { name, email, password, role };
  await User.update(data, {
    where: { id },
  });

  return {
    id,
    name,
    role,
  };
};

const remove = async (id) => {
  await User.destroy({
    where: { id },
  });
};

module.exports = {
  findAll,
  findById,
  findByEmail,
  create,
  update,
  remove,
};
