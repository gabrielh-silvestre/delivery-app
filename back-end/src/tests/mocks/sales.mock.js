const newSale = {
  sellerId: 2,
  totalPrice: 100,
  address: {
    street: "Rua trem da silva",
    number: 1,
  },
  orders: [
    {
      id: 1,
      quantity: 5,
    },
    {
      id: 2,
      quantity: 15,
    },
    {
      id: 3,
      quantity: 50,
    },
  ],
};

const returnAllByCustomer = [
  {
    id: 1,
    totalPrice: "100.00",
    saleDate: "2022-07-15T17:52:58.000Z",
    status: "PEDENTE",
  },
  {
    id: 2,
    totalPrice: "200.00",
    saleDate: "2022-07-15T17:52:58.000Z",
    status: "PEDENTE",
  },
  {
    id: 3,
    totalPrice: "300.00",
    saleDate: "2022-07-15T17:52:58.000Z",
    status: "EM TRANSITO",
  },
];

const returnAllBySeller = [
  {
    dataValues: {
      id: 1,
      totalPrice: "100.00",
      saleDate: "2022-07-15T17:52:58.000Z",
      status: "PEDENTE",
      deliveryAddress: "Rua trem da silva",
      deliveryNumber: 10,
    },
  },
  {
    dataValues: {
      id: 2,
      totalPrice: "200.00",
      saleDate: "2022-07-15T17:52:58.000Z",
      status: "PEDENTE",
      deliveryAddress: "Rua trem da silva",
      deliveryNumber: 10,
    },
  },
  {
    dataValues: {
      id: 3,
      totalPrice: "300.00",
      saleDate: "2022-07-15T17:52:58.000Z",
      status: "EM TRANSITO",
      deliveryAddress: "Rua trem da silva",
      deliveryNumber: 10,
    },
  },
];

module.exports = {
  newSale,
  returnAllByCustomer,
  returnAllBySeller,
};
