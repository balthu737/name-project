const express = require('express');
const router = express.Router();
const db = require('../db/database');

// ejemplo: GET /api/swimmers
router.get('/swimmers', (req, res) => {
    db.all('SELECT * FROM Swimmer', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
});
});

module.exports = router;
