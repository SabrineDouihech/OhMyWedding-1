module.exports = (sequelize, Sequelize) => {
  const Dressing = sequelize.define(
    "Dressing",
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
      image: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      genre: {
        type: Sequelize.STRING,
      },
      availabledate: {
        type: Sequelize.DATE,
      },
      state: {
        type: Sequelize.STRING,
      },
    },
    {
      // options
      timestamps: false,
    }
  );
  return Dressing;
};
