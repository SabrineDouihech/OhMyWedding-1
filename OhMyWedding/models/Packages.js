const { DataTypes } = require("sequelize");
const db = require("../db/index");

module.exports = db.define(
  "Packages",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    persons: {
      type: DataTypes.STRING,
    },
  },
  {
    // options
    timestamps: false,

    // car_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     autoIncrement: true
    // },
    // band_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     autoIncrement: true
    // },
    // place_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     autoIncrement: true
    // },
    // dressing_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     autoIncrement: true
    // },
    // food_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     autoIncrement: true
    // },
    // card_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     autoIncrement: true
    // }
  }
);
