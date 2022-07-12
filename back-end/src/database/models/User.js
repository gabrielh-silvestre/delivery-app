module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM,
        values: ["administrator", "seller", "customer"],
      },
    },
    {
      timestamps: false,
      tableName: "users",
      underscored: true,
    }
  );

  User.associate = ({ Sale }) => {
    User.hasMany(Sale, {
      foreignKey: "id",
      otherKey: "userId",
      as: "shoppings",
    });

    User.hasMany(Sale, {
      foreignKey: "id",
      otherKey: "sellerId",
      as: "sales",
    });
  };

  return User;
};
