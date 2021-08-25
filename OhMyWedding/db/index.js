const { Sequelize } = require('sequelize');

const db = new Sequelize('weddingPlanner', 'student', 'student', {
    host: 'localhost',
    dialect: 'mysql',
})


module.exports = db;