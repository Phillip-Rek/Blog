const mysql = require("mysql");

const pool = mysql.createConnection({
    host: "ec2-54-144-45-5.compute-1.amazonaws.com",
    database: "dc3g6b2jpvldfk",
    user: "oxxezrmpkxzyus",
    port: 5432,
    password: "63787b3172ce6501ddb4a91f564dff4702565d53649e2b933f5c396077b910f6",
    uri: "    postgres://oxxezrmpkxzyus:63787b3172ce6501ddb4a91f564dff4702565d53649e2b933f5c396077b910f6@ec2-54-144-45-5.compute-1.amazonaws.com:5432/dc3g6b2jpvldfk"
})

pool.connect((e) => {
    return e ? console.log("cannot connect to the database " + e) :
        console.log("connected to the database")
});

module.exports = {};
module.exports.pool = pool;