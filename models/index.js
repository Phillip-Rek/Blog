const mysql = require("mysql");

const pool = mysql.createConnection({
    host: "localhost",
    database: "test",
    user: "root",
})

pool.connect((e) => {
    return e ? console.log("cannot connect to the database " + e) :
        console.log("connected to the database")
});

module.exports = {};
module.exports.pool = pool;