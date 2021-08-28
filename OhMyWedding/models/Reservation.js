var { DataTypes } = require('sequelize');
const db = require('../db/index');




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




module.exports = Reservation;
