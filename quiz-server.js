const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection Pool Config (handles idle timeouts and reconnects automatically)
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 27820,
    ssl: { rejectUnauthorized: false },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Auto-Create Table in Aiven on startup
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS results (
        id INT AUTO_INCREMENT PRIMARY KEY,
        fullname VARCHAR(255) NOT NULL,
        regno VARCHAR(100) NOT NULL,
        dob DATE NOT NULL,
        dept VARCHAR(100) NOT NULL,
        level VARCHAR(50) NOT NULL,
        score INT NOT NULL,
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`;

db.query(createTableQuery, (err, result) => {
    if (err) {
        console.error('Error verifying/creating table:', err);
    } else {
        console.log('Connected to Cloud MySQL Pool successfully!');
        console.log('Results table is ready in Aiven database!');
    }
});

// 1. Endpoint to Save Quiz Submission
app.post('/api/quiz/save', (req, res) => {
    const { fullname, regno, dob, dept, level, score } = req.body;

    const sql = `INSERT INTO results (fullname, regno, dob, dept, level, score) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [fullname, regno, dob, dept, level, score];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Insert error:', err);
            return res.status(500).json({ status: 'error', message: err.message });
        }
        res.json({ status: 'success', message: 'Score saved successfully!' });
    });
});

// 2. Endpoint to View Submitted Results
app.get('/api/quiz/results', (req, res) => {
    const sql = `SELECT * FROM results ORDER BY submitted_at DESC`;

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Fetch error:', err);
            return res.status(500).json({ status: 'error', message: err.message });
        }
        res.json({ status: 'success', data: results });
    });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
