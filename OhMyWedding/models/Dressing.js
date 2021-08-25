var { DataTypes } = require('sequelize');
const Packages = require('./Packages')
const db = require('../db/index');

const Dressing = db.define('Dressing', {
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
    genre:{
        type: DataTypes.STRING
    },
    state:{
        type: DataTypes.STRING
    },
},{ // options
    timestamps: false
})

Dressing.hasMany(Packages);
Packages.belongsTo(Dressing);

module.exports = Dressing;