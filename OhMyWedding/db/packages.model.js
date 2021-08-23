const { Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Packages = sequelize.define('Packages', {

    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING
    },
    persons: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    }
});

console.log(Packages === sequelize.models.Packages); 