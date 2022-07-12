module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define(
    "SaleProduct",
    {
      saleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        onDelete: "CASCADE",
        references: {
          model: "Sale",
          key: "id",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        onDelete: "CASCADE",
        references: {
          model: "Product",
          key: "id",
        },
      },
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: "salesProducts",
      underscored: true,
    }
  );

  SaleProduct.associate = ({ Product, Sale }) => {
    Sale.belongsToMany(Product, {
      foreignKey: "saleId",
      otherKey: "productId",
      as: "products",
      through: SaleProduct,
    });

    Product.belongsToMany(Sale, {
      foreignKey: "productId",
      otherKey: "saleId",
      as: "sales",
      through: SaleProduct,
    });
  };

  return SaleProduct;
};
