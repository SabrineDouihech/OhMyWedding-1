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


// INSERT INTO LuxuryCars(name,image,description,price,brand,state) VALUES ("RS","https://i.ytimg.com/vi/PJFEz6qw0sM/maxresdefault.jpg","WOW",1200,"Audi","2020-09-13");
// INSERT INTO LuxuryCars(name,image,description,price,brand,state) VALUES ("RS","http://www.automobilsport.com/uploads/_neustart39/cars/A214848_small.jpg","WOW",1200,"Audi","2020-09-13");
// INSERT INTO LuxuryCars(name,image,description,price,brand,state) VALUES ("RS","https://www.edmunds.com/audi/rs-7/","WOW",1200,"Audi","2020-09-13");
