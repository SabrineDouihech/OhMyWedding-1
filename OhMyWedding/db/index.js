var mysql = require('mysql2');
const { Sequelize } = require('sequelize');

const db = new Sequelize ('weddingPlanner','root','root',{
    dialect:'mysql',

})


module.exports = db; 
