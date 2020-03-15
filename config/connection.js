// Set up MySQL connection.
const mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sqlLicker@31',
    database: 'burgers_db',
});

// Make connection
con.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + con.threadId);
});

module.exports = con;
