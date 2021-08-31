var { DataTypes } = require("sequelize");
const db = require("../db/index");

const Reservation = require("./Reservation");
const Favourite = require("./Favourite");

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    username: {
      type: DataTypes.STRING,
    },

    eMail: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    identityCard: {
      type: DataTypes.INTEGER,
    },

    phoneNumber: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // options
    timestamps: false,
  }
);

User.hasMany(Reservation);
Reservation.belongsTo(User);

User.hasMany(Favourite);
Favourite.belongsTo(User);

module.exports = User;
