import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import '../css/BlogPost.css';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.response?.status === 404 ? 'Blog not found' : 'Error loading blog');
                if (error.response?.status === 404) {
                    setTimeout(() => navigate('/'), 2000);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, navigate]);

    if (loading) return <div className="blog-post">Loading...</div>;
    if (error) return <div className="blog-post error">{error}</div>;
    if (!blog) return null;

    return (
        <div className="blog-post">
            <h1 className="blog-title">{blog.title}</h1>
            {blog.publishedAt && (
                <p className="blog-date">Published on: {blog.publishedAt}</p>
            )}
            <div className="blog-content">
                <ReactMarkdown>{blog.article}</ReactMarkdown>
            </div>
        </div>
    );
};

export default BlogPost;