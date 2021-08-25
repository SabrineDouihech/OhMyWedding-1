var { DataTypes } = require('sequelize');
const db = require('../db/index');
const Packages = require('./Packages')



const Reservation = db.define('Reservation', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    total:{
        type: DataTypes.INTEGER
    },
    rest:{
        type: DataTypes.INTEGER
    },
    reserveDate:{
        type: DataTypes.DATE
    },
    item_id:{
        type: DataTypes.STRING
    },
    type:{
        type: DataTypes.STRING
    },
},{ // options
    timestamps: false
    
})


Reservation.hasOne(Packages);
Packages.belongsTo(Reservation);

module.exports = Reservation;