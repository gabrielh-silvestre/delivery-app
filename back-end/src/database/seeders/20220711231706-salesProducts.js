"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("salesProducts", [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 10,
      },
      {
        sale_id: 1,
        product_id: 2,
        quantity: 5,
      },
      {
        sale_id: 2,
        product_id: 3,
        quantity: 1,
      },
      {
        sale_id: 2,
        product_id: 4,
        quantity: 15,
      },
      {
        sale_id: 3,
        product_id: 5,
        quantity: 28,
      },
      {
        sale_id: 3,
        product_id: 6,
        quantity: 14,
      },
      {
        sale_id: 3,
        product_id: 7,
        quantity: 4,
      },
      {
        sale_id: 3,
        product_id: 8,
        quantity: 27,
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("salesProducts", null, {}),
};
