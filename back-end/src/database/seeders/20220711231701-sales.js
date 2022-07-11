"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("sales", [
      {
        user_id: 3,
        seller_id: 2,
        total_price: 100.0,
        delivery_address: "Rua dos Bobos",
        delivery_number: "678",
        sale_date: Sequelize.literal("CURRENT_TIMESTAMP"),
        status: "PEDENTE",
      },
      {
        user_id: 3,
        seller_id: 2,
        total_price: 200.0,
        delivery_address: "Rua dos Bobos",
        delivery_number: "678",
        sale_date: Sequelize.literal("CURRENT_TIMESTAMP"),
        status: "PEDENTE",
      },
      {
        user_id: 3,
        seller_id: 2,
        total_price: 300.0,
        delivery_address: "Rua dos Bobos",
        delivery_number: "678",
        sale_date: Sequelize.literal("CURRENT_TIMESTAMP"),
        status: "EM TRANSITO",
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("sales", null, {}),
};
