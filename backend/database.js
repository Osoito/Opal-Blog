// filepath: d:\Schoolwork\Advanced Web Development\opal-blog\backend\database.js
const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('./opal_blog.sqlite', (err) => {
    if (err) {
        console.error('Error connecting to SQLite database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

// Create blogs table if it doesn't exist
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS blogs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            article TEXT NOT NULL,
            publishedAt TEXT NOT NULL
        )
    `);
});

module.exports = db;