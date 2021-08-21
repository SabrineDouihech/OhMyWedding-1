var mysql = require('mysql2');


var connection = mysql.createConnection({
    host: 'localhost',
    user : 'Majdi_10',
    password : 'Majdi_joiblia_10',
    database : 'weddingPlanner'
});


module.exports = connection;