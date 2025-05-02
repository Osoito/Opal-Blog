import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import axios from 'axios';
import '../css/BlogsSection.css'; // Ensure you have the correct path to your CSS file


const BlogsSection = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/blogs')
            .then(response => setBlogs(response.data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    return (
        <section className="blogs-section">
            {blogs.map(blog => (
                <BlogCard
                    key={blog.id}
                    title={blog.title.substring(0, 100) + '...'}
                    overview={blog.article.substring(0, 200) + '...'}
                    id={blog.id}
                />
            ))}
        </section>
    );
};

export default BlogsSection;