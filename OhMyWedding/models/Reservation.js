module.exports = (sequelize, Sequelize) => {
  const Reservation = sequelize.define(
    "Reservation",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      total: {
        type: Sequelize.INTEGER,
      },
      rest: {
        type: Sequelize.INTEGER,
      },
      reserveDate: {
        type: Sequelize.DATE,
      },
      item_id: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
    },
    {
      // options
      timestamps: false,
    }
  );

  return Reservation;
};
