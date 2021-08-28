var { DataTypes } = require('sequelize');
const db = require('../db/index');

const Packages = require('./Packages')

const Hosts = db.define('Hosts', {
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
    state: {
        type: DataTypes.STRING
    },
}, { // options
    timestamps: false
})

// INSERT INTO Hosts(name, image ,state) VALUES("outdoor-wedding", "https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/outdoor-wedding_SOPL19008_2157128_ST_1560x880.jpg","2020-09-13");
// INSERT INTO Hosts(name, image ,state) VALUES("outdoor-wedding", "https://images.squaremeal.co.uk/cloud/wedding-venue/232/images/creeksea-place-wedding-venue_28022020111137.jpg?w=928&h=522&fit=crop" ,"2020-09-13");

Hosts.hasOne(Packages);
Packages.belongsTo(Packages);

module.exports = Hosts