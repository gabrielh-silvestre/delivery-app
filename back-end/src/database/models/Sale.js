module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      sellerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      status: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "sales",
      underscored: true,
    }
  );

  Sale.associate = ({ User }) => {
    Sale.belongsTo(User, {
      foreignKey: "userId",
      otherKey: "id",
      as: "costumer",
    });

    Sale.belongsTo(User, {
      foreignKey: "sellerId",
      otherKey: "id",
      as: "seller",
    });
  };

  return Sale;
};
