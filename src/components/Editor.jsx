import React, { useState } from 'react';
import axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
import '../css/editor.css';

const Editor = () => {
    const [title, setTitle] = useState('');
    const [article, setArticle] = useState('');

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const handlePublish = async () => {
        if (title.trim() && article.trim()) {
            // Generate a unique ID
            const letters = 'abcdefghijklmnopqrstuvwxyz';
            const blogTitle = title.split(' ').join('-');
            let id = '';
            for (let i = 0; i < 4; i++) {
                id += letters[Math.floor(Math.random() * letters.length)];
            }

            const docName = `${blogTitle}-${id}`;
            const date = new Date();
            const publishedAt = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

            // Send data to the backend
            try {
                await axios.post('http://localhost:5000/api/blogs', {
                    title,
                    article,
                    publishedAt,
                });
                alert('Blog published successfully!');
                setTitle('');
                setArticle('');
            } catch (error) {
                console.error('Error publishing blog:', error);
                alert('Failed to publish blog.');
            }
        } else {
            alert('Please fill in both the title and the article.');
        }
    };

    return (
        <div className="blog">
            <textarea
                className="title"
                placeholder="Blog title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <div className="article-container">
                <MDEditor
                    value={article}
                    onChange={setArticle}
                    preview="edit"
                    height={500}
                    className="md-editor"
                />
            </div>
            <div className="blog-options">
                <button className="btn dark publish-btn" onClick={handlePublish}>
                    Publish
                </button>
            </div>
        </div>
    );
};

export default Editor;