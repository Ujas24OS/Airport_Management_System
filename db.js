const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ujas@123",
    database: "airportdb"
});

connection.connect((err) => {
    if (err) {
        console.log("Connection Failed!");
        console.log(err);
        return;
    }

    console.log("Connected to MySQL Successfully!");
});

module.exports = connection;
