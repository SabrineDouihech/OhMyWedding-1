var { DataTypes } = require('sequelize');
const db = require('../db/index');
const Packages = require('./Packages')

const Food = db.define('Food', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    image:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.INTEGER
    },
    foodtype:{
        type: DataTypes.STRING
    },
    state:{
        type: DataTypes.STRING
    },
},{ // options
    timestamps: false

})

Food.hasMany(Packages);
Packages.belongsTo(Food);

module.exports = Food;