const mysql = require('mysql')
const connection = mysql.createConnection({
    connectionLimit: 10,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
})

connection.connect(err => {
    if (err) throw err;
    console.log("Connected to the database.");
});

module.exports = connection;
