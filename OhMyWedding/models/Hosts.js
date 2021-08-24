var { DataTypes } = require('sequelize');
const db = require('../db/index');

const Packages = require('./Packages')

const Hosts = db.define('Hosts', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING
    },
    image:{
        type: DataTypes.STRING
    },
    state:{
        type: DataTypes.STRING
    },
},{ // options
    timestamps: false
})

Hosts.hasOne(Packages);
Packages.belongsTo(Packages);

module.exports = Hosts