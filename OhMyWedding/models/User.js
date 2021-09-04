module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "Users",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
      },

      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      identityCard: {
        type: Sequelize.INTEGER,
      },

      phoneNumber: {
        type: Sequelize.INTEGER,
      },
    },
    {
      // options
      timestamps: false,
    }
  );

  return User;
};
