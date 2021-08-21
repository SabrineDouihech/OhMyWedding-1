const { Sequelize } = require('sequelize');

const db = new Sequelize ('weddingPlanner','Majdi_10','Majdi_joiblia_10',{
    host: 'localhost',
    dialect:'mysql',

 

})


module.exports = db;