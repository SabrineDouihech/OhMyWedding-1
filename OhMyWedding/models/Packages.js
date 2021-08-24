var { DataTypes } = require('sequelize');
const db = require('../db/index');
const Reservation = require('./Reservation')


const Packages = db.define('Packages', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },

    price: {
        type: DataTypes.INTEGER
    },
},{ // options
    timestamps: false
})



module.exports = Packages

