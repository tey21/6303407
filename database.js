const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost', // MYSQL HOST NAME
    user     : 'p1234', // MYSQL USERNAME
    password : 'p1234', // MYSQL PASSWORD
    database : 'nodejs_login' // MYSQL DB NAME
}).promise();
module.exports = dbConnection;