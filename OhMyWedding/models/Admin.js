var { DataTypes } = require('sequelize');
const db = require('../db/index');

module.exports = db.define('Admin', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    adminname: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
}, { // options
    timestamps: false

});



