var { DataTypes } = require('sequelize');
const db = require('../db/index');
const Packages = require('./Packages')

const InvitationCard = db.define('InvitationCard', {
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
    state:{
        type: DataTypes.STRING
    },
},{ // options
    timestamps: false
})

InvitationCard.hasMany(Packages);
Packages.belongsTo(InvitationCard);
module.exports = InvitationCard