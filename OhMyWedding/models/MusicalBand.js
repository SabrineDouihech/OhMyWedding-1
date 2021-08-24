var { DataTypes } = require('sequelize');
const db = require('../db/index');
const Packages = require('./Packages')

const MusicalBand = db.define('MusicalBand', {
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
    description:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.INTEGER
    },
    bandtype:{
        type: DataTypes.STRING
    },
    state:{
        type: DataTypes.STRING
    },
},{ // options
    timestamps: false
})

MusicalBand.hasMany(Packages);
Packages.belongsTo(MusicalBand);

module.exports = MusicalBand;