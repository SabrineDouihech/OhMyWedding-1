module.exports = (sequelize, Sequelize) => {
  const Hosts = sequelize.define(
    "Hosts",
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
      persons: {
        type: Sequelize.INTEGER,
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

  return Hosts;
};
