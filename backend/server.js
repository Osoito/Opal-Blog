const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database'); // Import SQLite database

const app = express();
app.use(cors());
app.use(bodyParser.json());

// API to fetch all blogs
app.get('/api/blogs', (req, res) => {
    const query = 'SELECT * FROM blogs ORDER BY id DESC';
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Error fetching blogs:', err.message);
            res.status(500).json({ error: 'Failed to fetch blogs' });
        } else {
            res.status(200).json(rows);
        }
    });
});

// Add this new endpoint for fetching a single blog
app.get('/api/blogs/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM blogs WHERE id = ?';
    
    db.get(query, [id], (err, row) => {
        if (err) {
            console.error('Error fetching blog:', err.message);
            res.status(500).json({ error: 'Failed to fetch blog' });
        } else if (!row) {
            res.status(404).json({ error: 'Blog not found' });
        } else {
            res.status(200).json(row);
        }
    });
});

// API to create a new blog
app.post('/api/blogs', (req, res) => {
    const { title, article } = req.body;
    const query = 'INSERT INTO blogs (title, article, publishedAt) VALUES (?, ?, ?)';
    const publishedAt = new Date().toISOString();

    db.run(query, [title, article, publishedAt], function (err) {
        if (err) {
            console.error('Error creating blog:', err.message);
            res.status(500).json({ error: 'Failed to create blog' });
        } else {
            res.status(201).json({ id: this.lastID, title, article, publishedAt });
        }
    });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});