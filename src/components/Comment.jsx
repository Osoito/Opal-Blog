import React from 'react';

const Comment = ({ text, date }) => {
    return (
        <div className="comment">
            <p className="comment-text">{text}</p>
            <span className="comment-date">{date}</span>
        </div>
    );
};

export default Comment;