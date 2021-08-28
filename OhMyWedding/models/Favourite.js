var { DataTypes } = require('sequelize');
const db = require('../db/index');

const Packages = require('./Packages');
const Food = require('./Food');
const InvitationCard = require('./InvitationCard');
const LuxuryCars = require('./LuxuryCars');
const Dressing = require('./Dressing');
const MusicalBand = require('./MusicalBand');
const Hosts = require('./Hosts');


const Favourite = db.define('Favourite', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    type:{
        type: DataTypes.STRING
    },
   
},{ // options
    timestamps: false
})

Favourite.hasMany(Packages); 
Packages.belongsTo(Favourite);

Favourite.hasMany(Food);
Food.belongsTo(Favourite);

Favourite.hasMany(InvitationCard);
InvitationCard.belongsTo(Favourite);

Favourite.hasMany(LuxuryCars);
LuxuryCars.belongsTo(Favourite);

Favourite.hasMany(MusicalBand);
MusicalBand.belongsTo(Favourite);

Favourite.hasMany(Dressing);
Dressing.belongsTo(Favourite);

Favourite.hasMany(Hosts);
Hosts.belongsTo(Favourite);

module.exports = Favourite;