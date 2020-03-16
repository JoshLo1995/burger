// Import MySQL connection.
const con = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

const orm = {
    all: (tableInput, callback) => {
        var queryString = "SELECT * FROM " + tableInput + ";";
        con.query(queryString, (err, result) => {
            if (err) throw err;
        });
        callback(result);
    },
    create: (table, cols, vals, callback) => {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log (queryString);

        con.query(queryString, vals, (err, result) => {
            if (err) throw err;

            callback(result);
        });
    },
    update: (table, condition, callback) => {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        con.query(queryString, (err, result) => {
            if (err) throw err;

            calback(result);
        });
    }
};

module.exports = orm;