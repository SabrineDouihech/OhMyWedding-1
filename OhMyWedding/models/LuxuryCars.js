var { DataTypes } = require('sequelize');
const db = require('../db/index');


const Packages = require('./Packages');

const LuxuryCars = db.define('LuxuryCars', {
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
    brand: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    },
}, { // options
    timestamps: false
})

LuxuryCars.hasMany(Packages);
Packages.belongsTo(LuxuryCars);

module.exports = LuxuryCars;