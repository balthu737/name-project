require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbFile = process.env.DB_FILE;
const db = new sqlite3.Database(path.resolve(__dirname, dbFile), err => {
    if (err) console.error('Error SQLite:', err);
    else console.log('✅ SQLite conectado en', dbFile);
});

module.exports = db;
