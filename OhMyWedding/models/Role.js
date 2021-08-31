module.exports = (sequelize, Sequelize) =>
  sequelize.define(
    "roles",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );
