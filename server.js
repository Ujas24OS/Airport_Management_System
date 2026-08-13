const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());


// Home route
app.get("/", (req, res) => {
    res.send("Airport Entry System API is Running!");
});


// Get visitors
app.get("/Visitors", (req, res) => {

    const sql = "SELECT * FROM Visitors";

    db.query(sql, (err, result) => {

        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }

    });
});


// Add new visitor
app.post("/Visitors", (req, res) => {

    const { name, phone, id_type, id_number } = req.body;

    const sql = `
        INSERT INTO Visitors (name, phone, id_type, id_number)
        VALUES (?, ?, ?, ?)
    `;

    const values = [name, phone, id_type, id_number];

    db.query(sql, values, (err, result) => {

        if (err) {
            console.error("Error adding visitor:", err);
            return res.status(500).send(err);
        }

        res.json({
            message: "Visitor added successfully",
            visitor_id: result.insertId
        });
    });
});


// Flights route
app.get("/Flights", (req, res) => {

    const sql = "SELECT * FROM Flights";

    db.query(sql, (err, result) => {

        if (err) {
            console.error("Error fetching flights:", err);
            return res.status(500).send(err);
        }

        res.json(result);

    });

});


// Gates route
app.get("/Gates", (req, res) => {

    const sql = "SELECT * FROM Gates";

    db.query(sql, (err, result) => {

        if (err) {
            console.error("Error fetching gates:", err);
            return res.status(500).send(err);
        }

        res.json(result);

    });

});

// Entry Logs route
app.get("/EntryLog", (req, res) => {

    const sql = "SELECT * FROM EntryLog";

    db.query(sql, (err, result) => {

        if (err) {
            console.error("Error fetching entry logs:", err);
            return res.status(500).send(err);
        }

        res.json(result);

    });

});


// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

