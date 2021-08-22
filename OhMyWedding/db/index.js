var mysql = require('mysql2');


var connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'root',
    database : 'weddingPlanner'
});


// module.exports = connection;

// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('database', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql'
//   });


//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }