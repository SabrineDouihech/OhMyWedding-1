var mysql = require('mysql2');
const { Sequelize } = require('sequelize');

<<<<<<< HEAD

const db = new Sequelize ('weddingPlanner','root','root',{
    host: 'localhost',
    dialect:'mysql'

=======
const db = new Sequelize ('weddingplanner','Majdi_10','Majdi_joiblia_10',{
    host: 'localhost',
    dialect:'mysql'
>>>>>>> 1d4a8672c13cb8376141dd70a32f07811fb7d59e
})


module.exports = db; 
