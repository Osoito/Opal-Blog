import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, article, id }) => {
    // Add safety checks for undefined values
    const truncatedTitle = title ? title.substring(0, 100) + '...' : 'Untitled';
    const truncatedArticle = article ? article.substring(0, 200) + '...' : 'No content';

    return (
        <div className="blog-card">
            <h2 className="blog-title">{truncatedTitle}</h2>
            <div className="blog-overview">
                <ReactMarkdown>{truncatedArticle}</ReactMarkdown>
            </div>
            <Link to={`/blog/${id}`} className="btn dark">Read More</Link>
        </div>
    );
};

export default BlogCard;